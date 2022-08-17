// HyperMD, copyright (c) by laobubu
// Distributed under an MIT license: http://laobubu.net/HyperMD/LICENSE
//
// POWERPACK for "addon/fold-code"
//
// This module provides `MermaidRenderer` for FoldCode addon
// so that you can render flowchart / diagram with powerful [mermaid](https://mermaidjs.github.io/)
//
// By default the renderer is enabled. You may disable it by setting `hmdFoldCode.mermaid` to `false`
//
// **Example**: https://laobubu.net/HyperMD/docs/examples/mermaid.html
//
// :hint: to change mermaid configuration
//
// :warning: **Please include mermaid via HTML tag**
//
// mermaid's module declaration is buggy (v8.0.0). HyperMD gave up importing it.
//
// If using RequireJS or bundler (eg. webpack), include `<script src="path/to/mermaid.min.js"></script>` manually,
// before RequireJS or `dist/your_app.js`

export function renderMermaid() {
  const pDoms = document.getElementsByTagName('p');
  for (let i = 0; i < pDoms.length; i++) {
    const pDom = pDoms[i];
    const isFlow = pDom.hasAttribute('mermaid-dependencies');
    if (isFlow) {
      pDom.removeAttribute('mermaid-dependencies');
      pDom.setAttribute('mermaid-dependencies-finish', '');
      const code = pDom.textContent;
      pDom.innerText = '';
      try {
        const id =
          '_mermaid_id_' + Math.round(1e9 * Math.random()).toString(36);
        window.mermaid.parse(code);
        window.mermaid.render(id, code, (svgCode, bindFunctions) => {
          pDom.innerHTML = svgCode;
          if (bindFunctions) {
            bindFunctions(pDom);
          }
        });
      } catch (error) {
        pDom.innerHTML = `<pre class="language-text">${error.str.toString()}</pre>`;
      }
    }
  }
}
