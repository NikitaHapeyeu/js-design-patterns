var CompositeForm = function(id, method, action) {
	this.formComponents = [];

	this.element = document.createElement('form');
	this.element.id = id;
	this.element.method = method || 'POST';
	this.element.action = action || '#';
};

CompositeForm.prototype.add = function(child) {
  this.formComponents.push(child);
  //this.element.appendChild(child.getElement());
};

CompositeForm.prototype.remove = function(child) {
  for (var i = 0; i < this.formComponents.length; i++) {
    if (this.formComponents[i] === child) {
      this.formComponents.splice(i,1);
       break;
    }
  }
};



var el = new CompositeForm(1);
el.add('foo');
el.add('bar');
el.remove('foo');
console.log(el);
