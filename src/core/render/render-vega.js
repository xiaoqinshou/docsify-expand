// DESCRIPTION: Vega support
// Please include the following in your index.html file
//
//      <script src="https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js"></script>
import * as YAML from 'yamljs';

export function renderVega() {
  const pDoms = document.getElementsByTagName('p');
  for (let i = 0; i < pDoms.length; i++) {
    const pDom = pDoms[i];
    const isFlow = pDom.hasAttribute('vega-dependencies');
    if (isFlow) {
      pDom.removeAttribute('vega-dependencies');
      pDom.setAttribute('vega-dependencies-finish', '');
      const code = pDom.textContent;
      pDom.innerText = '';
      try {
        const id = '_vega_id_' + Math.round(1e9 * Math.random()).toString(36);
        pDom.setAttribute('id', id);
        let spec = {};
        if (code.trim()[0] !== '{') {
          spec = YAML.parse(code);
        } else {
          spec = JSON.parse(code);
        }
        if (window.vega) {
          const vega = window.vega;
          const view = new vega.View(vega.parse(spec), {
            renderer: 'canvas',
            container: '#' + id,
          });
          view.runAsync();
        } else {
          pDom.innerHTML = `<pre class="language-text">vega not found</pre>`;
        }
      } catch (error) {
        pDom.innerHTML = `<pre class="language-text">${error.str.toString()}</pre>`;
      }
    }
  }
}
