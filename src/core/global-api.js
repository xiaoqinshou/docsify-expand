/* eslint camelcase: ["error", {properties: "never"}]*/
import prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';
import { marked } from 'marked';
import * as util from './util';
import * as dom from './util/dom';
import { Compiler } from './render/compiler';
import { slugify } from './render/slugify';
import { get } from './fetch/ajax';

// TODO This is deprecated, kept for backwards compatibility. Remove in next
// major release. We'll tell people to get everything from the DOCSIFY global
// when using the global build, but we'll highly recommend for them to import
// from the ESM build (f.e. lib/docsify.esm.js and lib/docsify.min.esm.js).
export default function () {
  prism.plugins.autoloader.languages_path =
    'https://cdn.jsdelivr.net/npm/prismjs/components/';
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
