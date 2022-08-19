import { helper as helperTpl } from '../tpl';

export const paragraphCompiler = ({ renderer }) =>
  (renderer.paragraph = text => {
    let result;
    if (/^!&gt;/.test(text)) {
      result = helperTpl('tip', text);
    } else if (/^\?&gt;/.test(text)) {
      result = helperTpl('warn', text);
    } else {
      result = `<p style="white-space:pre-line">${text}</p>`;
    }

    return result;
  });
