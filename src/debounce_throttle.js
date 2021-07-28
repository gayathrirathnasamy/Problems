const debounce = (fn, limit) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout); //every call cleartimout
    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, limit);
  };
};

const throttle = (fn, limit) => {
  let inThrottle = true;
  return function () {
    let context = this;
    let args = arguments;
    if (inThrottle) {
      fn.apply(context, args); //calls once for 1st time since inThrottle set to true & works only on continuous user interaction
      inThrottle = false;
      setTimeout(() => {
        inThrottle = true;
      }, limit);
    }
  };
};

document.getElementById("debounce-throttle-btn").addEventListener(
  "click",
  throttle(function () {
    console.log("Printing");
  }, 1000)
);
