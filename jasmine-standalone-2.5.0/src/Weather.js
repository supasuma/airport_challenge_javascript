function Weather() {
  this._CHANCE_OF_STORMY = 0.3;
}

Weather.prototype.isStormy = function () {
  return (Math.random() > this._CHANCE_OF_STORMY);
};
