module.exports = {
  show: function (req, res) {
    res.render('rooms/show.ejs', { roomId: req.params.id });
  }
};
