(function() {
	var Person = function(name, title) {
		this.name = name;
		this.title = title;
	}
	
	Person.prototype.showName = function() {
		return this.name;
	}
	
	Person.prototype.showTitle = function() {
		return this.title;
	}
	
	var person = new Person('abhi', 'chak');
	console.log(person.showName());
	console.log(person.showTitle());
	
})();