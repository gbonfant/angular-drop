'use strict';

describe('farmdrop homepage', function() {
  it('should be up', function() {
    browser.get('/');

    expect(brower.getTitle()).toEqual('foo');
  });
});
