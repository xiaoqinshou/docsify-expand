import { getAndRemoveConfig } from '../utils';
import { isAbsolutePath, getParentPath } from '../../router/util';

export const linkCompiler = ({
  renderer,
  router,
  linkTarget,
  linkRel,
  compilerClass,
}) =>
  (renderer.link = (href, title = '', text) => {
    let attrs = [];
    const { str, config } = getAndRemoveConfig(title);
    linkTarget = config.target || linkTarget;
    linkRel =
      linkTarget === '_blank'
        ? compilerClass.config.externalLinkRel || 'noopener'
        : '';
    title = str;

    if (
      !isAbsolutePath(href) &&
      !compilerClass._matchNotCompileLink(href) &&
      !config.ignore
    ) {
      if (href === compilerClass.config.homepage) {
        href = 'README';
      }

      // add relative path adaptation
      if (href.startsWith('./') || href.startsWith('../')) {
        const currentPaths = getParentPath(
          decodeURIComponent(router.getCurrentPath())
        )
          .split('/')
          .filter(item => item);
        let back = 0;
        const urls = href.split('/').filter(item => {
          if (item === '..') {
            back++;
            return false;
          }
          if (item === '.' || item === '') {
            return false;
          }
          return true;
        });
        const newPaths = currentPaths.slice(0, currentPaths.length - back);
        href = newPaths.concat(urls).join('/');
      }
      href = router.toURL(
        href,
        null,
        getParentPath(decodeURIComponent(router.getCurrentPath()))
      );
    } else {
      if (!isAbsolutePath(href) && href.slice(0, 2) === './') {
        href =
          document.URL.replace(/\/(?!.*\/).*/, '/').replace('#/./', '') + href;
      }
      attrs.push(href.indexOf('mailto:') === 0 ? '' : `target="${linkTarget}"`);
      attrs.push(
        href.indexOf('mailto:') === 0
          ? ''
          : linkRel !== ''
          ? ` rel="${linkRel}"`
          : ''
      );
    }

    // special case to check crossorigin urls
    if (
      config.crossorgin &&
      linkTarget === '_self' &&
      compilerClass.config.routerMode === 'history'
    ) {
      if (compilerClass.config.crossOriginLinks.indexOf(href) === -1) {
        compilerClass.config.crossOriginLinks.push(href);
      }
    }

    if (config.disabled) {
      attrs.push('disabled');
      href = 'javascript:void(0)';
    }

    if (config.class) {
      attrs.push(`class="${config.class}"`);
    }

    if (config.id) {
      attrs.push(`id="${config.id}"`);
    }

    if (title) {
      attrs.push(`title="${title}"`);
    }

    return `<a href="${href}" ${attrs.join(' ')}>${text}</a>`;
  });
