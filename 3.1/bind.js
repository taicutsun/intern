Function.prototype.bind = function (ctx) {
    var ret = function() {
      return ret._fn.call(ctx);
    };
    ret._fn = this._fn || this;
    return ret;
  };