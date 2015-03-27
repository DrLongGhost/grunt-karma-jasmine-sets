describe('widget1', function() {
  var failThis = true;
  
  it('should be defined', function() {
    if (-1 !== window.navigator.userAgent.indexOf('Phantom')) {
      if (failThis) {
        expect(widget1).not.toBeDefined();
      } else {
        expect(widget1).toBeDefined();
      }
    } else {
      expect(widget1).toBeDefined();
    }
  });
});