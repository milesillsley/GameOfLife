(function() {
  var w = 1000;
  var h = 1000;
  var step = 50;
  var grid = new Grid(20);
  console.log(grid);
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
      function handleClick(e) {
        ctx.fillStyle = "black";

        ctx.fillRect(Math.floor(e.offsetX / step) * step,
          Math.floor(e.offsetY / step) * step,
          step, step);

        console.log(Math.floor(e.offsetX / step))
        console.log(Math.floor(e.offsetY / step))

      }

  drawGrid(ctx, w, h, step);
}());
