'use strict';
var GameOfLife = function(grid) {
  this._grid = grid;
  this._futureGrid = grid;

};

GameOfLife.prototype.progress = function() {
  for( var x=0; x<this._grid.length; x++ ) {
    for( var y=0; y<this._grid.length; y++ ) {
      this.checkCondition(x,y, this._grid);
    }
  }
};

GameOfLife.prototype.checkCondition = function(x,y, grid) {
  var company = 0;
  for( var a=-1; a<2; a++ ) {
    for( var b=-1; b<2; b++ ) {
      try {
        if (this._grid[x+a][y+b]) {
          if ( this._grid[x+a][y+b] === 1 ) { company++ };
        }
      } catch(error) { console.log(error); }
    }
  }
  if (this._grid[x][y] === 1) {company--};
  return company;
};
