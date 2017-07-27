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
                      [0,0,0]]
        expect(life.progress()).toEqual(
               [[0,0,0],
                [0,0,0],
                [0,0,0]])
      });
    })

  });
}());
