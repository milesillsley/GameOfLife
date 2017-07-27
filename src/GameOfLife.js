'use strict';
var GameOfLife = function(grid) {
  this._grid = grid;
};

GameOfLife.prototype.progress = function() {
  console.log('here');
  for(var x=0;x<3;x++) {
    for(var y=0;y<3;y++) {
      console.log(this._grid[x][y]);
    }
  }
};
