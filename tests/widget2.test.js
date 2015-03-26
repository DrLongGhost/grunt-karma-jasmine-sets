describe('widget2', function() {
  var widget2Instance = new widget2(widget1);
  
  it('should be defined', function() {
    expect(widget2Instance).toBeDefined();
  });
  
  it('should contain a mocked widget1 object', function() {
    expect(widget2Instance.widget1.mocked).toBe(true);
  });
});