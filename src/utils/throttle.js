// leading为控制首次触发时是否立即执行函数的配置项
function throttle(method, wait, leading = true) {
  let timeout;
  let previous = 0;
  return function(...args) {
    let context = this;
    let now = new Date().getTime();
    // !previous代表首次触发或定时器触发后的首次触发，若不需要立即执行则将previous更新为now
    // 这样remaining = wait > 0，则不会立即执行，而是设定定时器
    if (!previous && leading === false) previous = now;
    let remaining = wait - (now - previous);
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      method.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        // 如果leading为false，则将previous设为0，
        // 下次触发时会与下次触发时的now同步，达到首次触发（对于用户来说）不立即执行
        // 如果直接设为当前时间戳，若停止触发一段时间，下次触发时的remaining为负值，会立即执行
        previous = leading === false ? 0 : new Date().getTime();
        timeout = null;
        method.apply(context, args);
      }, remaining);
    }
  };
}

export default throttle;
