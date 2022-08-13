export const taskListItemCompiler = ({ renderer }) =>
  (renderer.listitem = text => {
    const isTaskItem = /^(<input.*type="checkbox"[^>]*>)/.test(text);
    const html = isTaskItem
      ? `<li class="task-list-item"><label>${text}</label></li>`
      : `<li style="white-space:pre-line">${text}</li>`;

    return html;
  });
