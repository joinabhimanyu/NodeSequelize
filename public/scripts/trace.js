class Person {
	constructor(options) {
		this.name = options.name;
		this.title = options.title;
	}

	showName() {
		return "Name: " + this.name;
	}
	showTitle() {
		return "Title: " + this.title;
	}
}

class GoodPerson extends Person {
	constructor(options) {
		this.name = options.name;
		this.title = options.title;
		this.quality= options.quality;
	}

	showQuality() {
		return "Quality: " + this.quality;
	}
}

var good = new GoodPerson({
	name: 'abhi',
	title: 'chak',
	quality: 'very good'
});

console.log(good.showName());
console.log(good.showTitle());
console.log(good.showQuality());

// var person = new Person({
// 	name: 'abhi',
// 	title: 'chak'
// });

// console.log(person.showName());
// console.log(person.showTitle());