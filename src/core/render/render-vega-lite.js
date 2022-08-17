// DESCRIPTION: Vega support
// Please include the following in your index.html file
//
//    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4/build/vega-lite.min.js"></script>
//    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js"></script>
import * as YAML from 'yamljs';

export function renderVegaLite() {
  const pDoms = document.getElementsByTagName('p');
  for (let i = 0; i < pDoms.length; i++) {
    const pDom = pDoms[i];
    const isFlow = pDom.hasAttribute('vega-lite-dependencies');
    if (isFlow) {
      pDom.removeAttribute('vega-lite-dependencies');
      pDom.setAttribute('vega-lite-dependencies-finish', '');
      const code = pDom.textContent;
      pDom.innerText = '';
      try {
        const id =
          '_vega_lite_id_' + Math.round(1e9 * Math.random()).toString(36);
        pDom.setAttribute('id', id);
        let spec = {};
        if (code.trim()[0] !== '{') {
          spec = YAML.parse(code);
        } else {
          spec = JSON.parse(code);
        }
        window.vegaEmbed('#' + id, spec);
      } catch (error) {
        pDom.innerHTML = `<pre class="language-text">${error.str.toString()}</pre>`;
      }
    }
  }
}
