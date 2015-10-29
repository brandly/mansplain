/* global describe, it */
'use strict'

const mansplain = require('../');

describe('mansplain', function () {
  it('should convert an npm man link to an html anchor element', function () {
    const input = '<h1>npm-cmd(9)</h1><li>npm-cmd(9)</li>';
    const result = mansplain(input);
    result.should.equal('<h1>npm-cmd</h1><li><a href="cmd">npm-cmd</a></li>');
  });
});
