/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-01-20
 * @author Liang <liang@maichong.it>
 */

'use strict';

var assert = require('assert');

var random = require('../index').default;

function run(fn, times) {
  while (times > 0) {
    fn();
    times--;
  }
}

describe('integer', function () {

  describe('random(1, 2)', function () {
    it('should return 1 or 2', function () {
      var res = {};
      run(function () {
        var num = random(1, 2);
        res[num] = true;
        assert(num === 1 || num === 2);
      }, 100000);
      assert(res[1] && res[2]);
    });
  });

  describe('random(1)', function () {
    it('should return 0 or 1', function () {
      var res = {};
      run(function () {
        var num = random(0, 1);
        res[num] = true;
        assert(num === 0 || num === 1);
      }, 100000);
      assert(res[0] && res[1]);
    });
  });

  describe('random(-1)', function () {
    it('should return 0 or -1', function () {
      var res = {};
      run(function () {
        var num = random(-1);
        res[num] = true;
        assert(num === 0 || num === -1);
      }, 100000);
      assert(res[0] && res[-1]);
    });
  });

  describe('random(5)', function () {
    it('should return 0/1/2/3/4/5', function () {
      var res = {};
      run(function () {
        var num = random(5);
        res[num] = true;
        assert(num >= 0 && num <= 5);
      }, 100000);
      assert(res[0] && res[5]);
    });
  });

  describe('random(5,1)', function () {
    it('should return 1/2/3/4/5', function () {
      var res = {};
      run(function () {
        var num = random(5, 1);
        res[num] = true;
        assert(num >= 1 && num <= 5);
      }, 100000);
      assert(res[1] && res[5]);
    });
  });

  describe('random(100,999)', function () {
    it('should return 100~999', function () {
      run(function () {
        var num = random(100, 999);
        assert(num >= 100 && num <= 999);
      }, 100000);
    });
  });

});

describe('float', function () {

  describe('random()', function () {
    it('should return 0.0~1.0', function () {
      run(function () {
        var num = random();
        assert(num > 0 && num < 1);
      }, 100000);
    });
  });

  describe('random(100,999,true)', function () {
    it('should return 100.0~999.0', function () {
      run(function () {
        var num = random(100, 999, true);
        assert(num >= 100 && num <= 999 && parseInt(num) != num);
      }, 100000);
    });
  });

  describe('random(0,1,true)', function () {
    it('should return 0.0~1.0', function () {
      run(function () {
        var num = random(0, 1, true);
        assert(num > 0 && num < 1);
      }, 100000);
    });
  });

});
