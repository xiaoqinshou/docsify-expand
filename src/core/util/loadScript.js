export function loadScript(url, callback) {
  const script = document.createElement('script');
  // 处理IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // 处理其他浏览器的情况
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.body.append(script);
}

export function loadScripts(urls, callback) {
  let loaded = 0;
  for (let i = 0; i < urls.length; i++) {
    loadScript(urls[i], () => {
      loaded++;
      console.log(`${urls[i]} loaded`);
      if (loaded === urls.length) {
        callback();
      }
    });
  }
}

export function serialLoadScripts(urls, callback) {
  let loaded = 0;
  function loadNext() {
    if (loaded < urls.length) {
      loadScript(urls[loaded], () => {
        loaded++;
        console.log(`${urls[loaded]} loaded`);
        loadNext();
      });
    } else {
      callback();
    }
  }
  loadNext();
}
