function debounce(callback, delay, immediate = false) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    const shouldCallImmediately = timerId == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timerId = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timerId = null;
    }, delay);
  };
}
