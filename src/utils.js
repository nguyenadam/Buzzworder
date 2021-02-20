export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// XSS Sanitization Function
export const sanitize = (input) => {

  return input.replace(/[&<>"'/]/ig, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
    }[m];
  });

}

// psudo-random number function generator
// @param {number} a seed
function mulberry32(a) {
  return function () {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export const randomFromArray = (arr, seed) => {
  const randomFunc = seed ? mulberry32(seed) : Math.random
  return arr[Math.floor(randomFunc() * arr.length)]
};