var paint;

module.exports = {
  dragstart: function (data, context) {
    context.strokeStyle = '#000';
    context.lineJoin = 'round';
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(data.x, data.y);
    paint = true;
  },

  drag: function (data, context) {
    if (paint) {
      context.lineTo(data.x, data.y);
      context.stroke();
    }
  },

  dragend: function (data, context) {
    context.stroke();
    context.closePath();
    paint = false;
  }
};

