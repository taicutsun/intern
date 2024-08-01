var Queue = function() {
    this.items = [];
  };
  
  Queue.prototype.enqueue = function(item) {
    this.items.push(item);
  };
  
  Queue.prototype.dequeue = function() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  };
  
  Queue.prototype.size = function() {
    return this.items.length;
  };