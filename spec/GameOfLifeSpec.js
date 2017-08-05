(function() {
  describe("Game Of Life", function() {

    var life;

    beforeEach(function() {
        life = new GameOfLife([[0,0,0],
                               [0,0,0],
                               [0,0,0]]);
    });

    describe("a space that is 'populated'", function() {
      it("Each cell with one or no neighbors dies, as if by solitude.", function() {
        life._grid = [[0,0,0],
                      [0,1,0],
                      [0,0,0]];
        life.progress();
        expect(life._grid).toEqual(
               [[0,0,0],
                [0,0,0],
                [0,0,0]]);
      });
      it("Each cell with four or more neighbors dies, as if by overpopulation.", function() {
        life._grid = [[1,1,1],
                      [1,1,1],
                      [1,1,1]];
        life.progress();
        expect(life._grid).toEqual(
               [[1,0,1],
                [0,0,0],
                [1,0,1]]);
      });
      it("Each cell with two or three neighbors survives.", function() {
        life._grid = [[1,1,0],
                      [1,1,0],
                      [0,0,0]];
        life.progress();
        expect(life._grid).toEqual(
               [[1,1,0],
                [1,1,0],
                [0,0,0]]);
      });
    });
    describe("a space that is 'empty' or 'unpopulated'", function() {
      it("Each cell with three neighbors becomes populated.", function() {
        life._grid = [[1,1,0],
                      [1,0,0],
                      [0,0,0]];
        life.progress();
        expect(life._grid).toEqual(
               [[1,1,0],
                [1,1,0],
                [0,0,0]]);
      });
    });
  });
}());
