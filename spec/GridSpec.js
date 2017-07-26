(function() {
  describe('Grid', function() {
    it("populates a 2 dimensional array with 0's", function() {
      grid = new Grid(1);
      expect(grid).toEqual([[0]]);
      grid2 = new Grid(2);
      expect(grid2).toEqual([[0,0],
                             [0,0]]);
      grid3 = new Grid(3);
      expect(grid3).toEqual([[0,0,0],
                             [0,0,0],
                             [0,0,0]]);
    });
  });
}());
