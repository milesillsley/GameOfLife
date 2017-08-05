(function() {
  var w = 1000;
  var h = 1000;
  var step = 50;
  var life = new GameOfLife(new Grid(20));
  var nextFrame = document.getElementById('nextFrame');
  nextFrame.addEventListener('click', progressLife);
  var canvas = document.getElementById('canvas');
  canvas.width  = w;
  canvas.height = h;
  var ctx = canvas.getContext('2d');
  canvas.addEventListener('click', handleClick);
  var drawGrid = function(ctx, w, h, step) {
      ctx.beginPath();
      for (var x=0;x<=w;x+=step) {
              ctx.moveTo(x, 0);
              ctx.lineTo(x, h);
      }
      ctx.strokeStyle = 'rgb(255,0,0)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      for (var y=0;y<=h;y+=step) {
              ctx.moveTo(0, y);
              ctx.lineTo(w, y);
      }
      ctx.strokeStyle = 'rgb(255,0,0)';
      ctx.lineWidth = 1;
      ctx.stroke();
  };

  var updateGrid = function(ctx, w, h, step) {
    for( var x=0; x<life._grid.length; x++ ) {
      for( var y=0; y<life._grid.length; y++ ) {
        if (life._grid[x][y] === 1) {
          ctx.fillStyle = "black";

          ctx.fillRect(y * step + 1,
            x * step + 1,
            step - 2, step - 2);

        } else {
          ctx.fillStyle = "white";

          ctx.fillRect(y * step + 1,
            x * step + 1,
            step - 2, step - 2);
        }
      }
    }
  };

  function progressLife() {
    life.progress();
    updateGrid(ctx, w, h, step);
  }

  function handleClick(e) {
    if (life._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] === 0) {
      ctx.fillStyle = "black";

      ctx.fillRect(Math.floor(e.offsetX / step) * step + 1,
        Math.floor(e.offsetY / step) * step + 1,
        step - 2, step - 2);

      life._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] = 1;
    } else {
      ctx.fillStyle = "white";

      ctx.fillRect(Math.floor(e.offsetX / step) * step + 1,
        Math.floor(e.offsetY / step) * step + 1,
        step - 2, step - 2);

      life._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] = 0;
    }
  }

  drawGrid(ctx, w, h, step);
}());
