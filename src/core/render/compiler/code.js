/* eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/
import Prism from 'prismjs';
// See https://github.com/PrismJS/prism/pull/1367
import 'prismjs/components/prism-markup-templating';

export const highlightCodeCompiler = ({ renderer }) =>
  (renderer.code = function (code, lang = 'markup') {
    let result = '';
    let language = lang;
    switch (lang) {
      case 'vega': {
        result = `<p vega-dependencies style="display: flex;justify-content: center;">${code}</p>`;
        break;
      }
      case 'vega-lite': {
        result = `<p vega-lite-dependencies style="display: flex;justify-content: center;">${code}</p>`;
        break;
      }
      case 'mermaid': {
        result = `<p mermaid-dependencies style="display: flex;justify-content: center;">${code}</p>`;
        break;
      }
      case 'flow':
      case 'flowchart':
      case 'flowcharts': {
        result = `<p flow-dependencies style="display: flex;justify-content: center;">${code}</p>`;
        break;
      }
      case 'plantuml':
      case 'puml': {
        const { encode } = window.plantumlEncoder;
        result =
          encode &&
          `<p style="display: flex;justify-content: center;"><img src="https://www.plantuml.com/plantuml/img/${encode(
            code
          )}" /></p>`;
        if (result) {
          break;
        }
        language = 'text';
        // caution: break is omitted intentionally
      }
      default: {
        const langOrMarkup =
          Prism.languages[language] || Prism.languages.markup;
        const text = Prism.highlight(
          code.replace(/@DOCSIFY_QM@/g, '`'),
          langOrMarkup,
          language
        );
        result = `<pre v-pre data-lang="${language}"><code data-dependencies="${language}" class="lang-${language}">${text}</code></pre>`;
      }
    }
    return result;
  });
