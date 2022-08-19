// DESCRIPTION: Vega support
// Please include the following in your index.html file
//
//    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4/build/vega-lite.min.js"></script>
//    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js"></script>
import * as YAML from 'yamljs';
import { serialLoadScripts } from '../util';

const vegaLitePath = [
  '//cdn.jsdelivr.net/npm/vega@5',
  '//cdn.jsdelivr.net/npm/vega-lite@5',
  '//cdn.jsdelivr.net/npm/vega-embed@6',
];
const renderer = pDom => {
  pDom.removeAttribute('vega-lite-dependencies');
  pDom.setAttribute('vega-lite-dependencies-finish', '');
  const code = pDom.textContent;
  pDom.innerText = '';
  try {
    const id = '_vega_lite_id_' + Math.round(1e9 * Math.random()).toString(36);
    pDom.setAttribute('id', id);
    let spec = {};
    if (code.trim()[0] !== '{') {
      spec = YAML.parse(code);
    } else {
      spec = JSON.parse(code);
    }
    window.vegaEmbed('#' + id, spec);
  } catch (error) {
    pDom.innerHTML = `<pre class="language-text">${error.toString()}</pre>`;
  }
};
export function renderVegaLite() {
  const pDoms = document.getElementsByTagName('p');
  const tasks = [];
  for (let i = 0; i < pDoms.length; i++) {
    const pDom = pDoms[i];
    const isFlow = pDom.hasAttribute('vega-lite-dependencies');
    if (isFlow) {
      tasks.push(pDom);
    }
  }
  if (tasks.length > 0) {
    if (!window.vegaEmbed) {
      if (window.vega) {
        vegaLitePath.shift();
      }
      serialLoadScripts(vegaLitePath, () => {
        tasks.forEach(renderer);
      });
    } else {
      tasks.forEach(renderer);
    }
  }
}
