'use strict';

var tinyUrlParams = require('./');

describe('has params', function() {
  it('url has two params', function() {
    var input = 'https://www.site.com/?customer=Maxim&goods=game';
    var output = {
      customer: 'Maxim',
      goods: 'game'
    };
    expect(tinyUrlParams(input)).toEqual(output);
  });
  it('url has one param', function() {
    var input = 'https://www.site.com/customer&goods=game';
    var output = {
      goods: 'game'
    };
    expect(tinyUrlParams(input)).toEqual(output);
  });
});


describe('without params', function() {
  it('just url', function() {
    var input = 'https://www.site.com/customer';
    var output = null;
    expect(tinyUrlParams(input)).toBe(output);
  });
  it('just url', function() {
    var input = 'https://www.site.com/customer=Maxim';
    var output = null;
    expect(tinyUrlParams(input)).toBe(output);
  });
});
