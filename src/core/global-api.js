/* eslint camelcase: ["error", {properties: "never"}]*/
import prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';
import { marked } from 'marked';
import * as util from './util';
import * as dom from './util/dom';
import { Compiler } from './render/compiler';
import { slugify } from './render/slugify';
import { get } from './fetch/ajax';

// function loadScript(url, callback) {
//   const script = document.createElement('script');
//   script.type = 'text/javascript';
//   // 处理IE
//   if (script.readyState) {
//     script.onreadystatechange = function () {
//       if (script.readyState === 'loaded' || script.readyState === 'complete') {
//         script.onreadystatechange = null;
//         callback();
//       }
//     }
//   } else {
//     // 处理其他浏览器的情况
//     script.onload = function () {
//       callback();
//     }
//   }
//   script.src = url;
//   document.body.append(script);
// }

// TODO This is deprecated, kept for backwards compatibility. Remove in next
// major release. We'll tell people to get everything from the DOCSIFY global
// when using the global build, but we'll highly recommend for them to import
// from the ESM build (f.e. lib/docsify.esm.js and lib/docsify.min.esm.js).
export default function () {
  prism.plugins.autoloader.languages_path =
    'https://cdn.jsdelivr.net/npm/prismjs/components/';
  // loadScript('//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js', function () {
  //   console.log('加载完成',window.mermaid);
  //   window.mermaid.initialize({startOnLoad:true})
  // })
  window.Docsify = {
    util,
    dom,
    get,
    slugify,
    version: '__VERSION__',
  };
  window.DocsifyCompiler = Compiler;
  window.marked = marked;
  window.Prism = prism;
}
