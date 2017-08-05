'use strict';
var GameOfLife = function(grid) {
  this._grid = grid;
};

GameOfLife.prototype.progress = function() {
  var futureGrid = new Grid(this._grid.length);
  for( var x=0; x<this._grid.length; x++ ) {
    for( var y=0; y<this._grid.length; y++ ) {
      if (this._grid[x][y] === 1) {
        if (this.checkCondition(x,y) < 2) {
            futureGrid[x][y] = 0; //solitude
          }
        else if (this.checkCondition(x,y) === 2 || this.checkCondition(x,y) === 3) {
            futureGrid[x][y] = 1; //survives
          }
        else if (this.checkCondition(x,y) > 3) {
            futureGrid[x][y] = 0; //overpopulation
          }
        }
      else if (this._grid[x][y] === 0) {
        if (this.checkCondition(x,y) === 3) {
          futureGrid[x][y] = 1; //born
        }
      }
    }
  }
  this._grid = futureGrid;
};

GameOfLife.prototype.checkCondition = function(x,y) {
  var company = 0;
  for( var a=-1; a<2; a++ ) {
    for( var b=-1; b<2; b++ ) {
      try {
        if (this._grid[x+a][y+b]) {
          if ( this._grid[x+a][y+b] === 1 ) { company++; }
        }
      } catch(error) { }
    }
  }
  if (this._grid[x][y] === 1) {company--;}
  return company;
};
