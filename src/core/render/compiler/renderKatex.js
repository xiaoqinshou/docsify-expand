import katex from 'katex';

export const renderKatex = ({ renderer }) =>
  (renderer.katex = (text) => {
    try{
      return katex.renderToString(text)
    }catch(e){
      console.error(e)
      return text;
    }
  });
