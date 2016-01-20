/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-01-20
 * @author Liang <liang@maichong.it>
 */

'use strict';

/**
 * Generate random number in a range
 * @param {Number} min
 * @param {Number} max     [optional]
 * @param {Number} float   [optional] default false
 * @returns {Number}
 */
function random(min, max, float) {
  if (min == undefined) {
    return Math.random();
  }

  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (max < min) {
    let tmp = max;
    max = min;
    min = tmp;
  }

  if (float) {
    return Math.random() * (max - min) + min;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

module.exports = random.default = random;
