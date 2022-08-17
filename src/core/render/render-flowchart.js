import FlowChart from 'flowchart.js';

// :warning: **flowchart.js bug**
//
// If you are using RequireJS, add `"Raphael": "raphael"` to its `paths` option like this:
// npm i raphael

export function renderFlowchart() {
  const pDoms = document.getElementsByTagName('p');
  for (let i = 0; i < pDoms.length; i++) {
    const pDom = pDoms[i];
    const isFlow = pDom.hasAttribute('flow-dependencies');
    if (isFlow) {
      pDom.removeAttribute('flow-dependencies');
      pDom.setAttribute('flow-dependencies-finish', '');
      const code = pDom.textContent;
      pDom.innerText = '';
      const diagram = FlowChart.parse(code);
      diagram.drawSVG(pDom);
    }
  }
}
