
class Person {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
	}
	speak() {
		console.log(`Hello, my name is ${this.name}, and I am from ${this.location}.`)
	}
}

class Instructor extends Person {
	constructor(props) {
		super(props);
		this.specialty = props.specialty;
		this.favLanguage = props.favLanguage;
		this.catchPhrase = props.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}.`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
	changeGrade(student) {
		let score = Math.floor(Math.random() * 5 + 5);
		if (Math.round(Math.random() + 0.2) === 1) {
			student.grade += score;
			console.log(`${student.name} earned ${score} points.`);
		} else {
			student.grade -= score;
			console.log(`${student.name} lost ${score} points.`);
		}
	}
}

class Student extends Person {
	constructor(props) {
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
		this.grade = Math.ceil(Math.random() * 100);
		this.graduated = false;
	}
	listsSubjects() {
		this.favSubjects.forEach(subject => console.log(subject));
	}
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}
	graduate() {
		if (this.grade >= 70) {
			this.graduated = true;
			console.log(`${this.name} has graduated! Congratulations!`);
		}
	}
}

class ProjectManager extends Instructor {
	constructor(props) {
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}
	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
	}
  debugsCode(student, subject) {
  	console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}


const instructor_1 = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Yabba Dabba Doo!`
});

const instructor_2 = new Instructor({
  name: 'Barney',
  location: 'Bedrock',
  age: 36,
  favLanguage: 'C++',
  specialty: 'Server',
  catchPhrase: `Don't forget the homies`
});

const instructor_3 = new Instructor({
  name: 'Wilma',
  location: 'Bedrock',
  age: 35,
  favLanguage: 'Python',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const student_1 = new Student({
	name: 'Pebbles',
	location: 'Bedrock',
	age: 15,
	previousBackground: "Toddler",
	className: "CS135",
	favSubjects: ["Python", "CSS", "Responsive Design"],
});

const student_2 = new Student({
	name: 'Bamm-Bamm',
	location: 'Bedrock',
	age: 16,
	previousBackground: "Toddler",
	className: "DS121",
	favSubjects: ["Python", "NodeJS"],
});

const pm_1 = new ProjectManager({
  name: 'Mr. Slate',
  location: 'Bedrock',
  age: 40,
  favLanguage: 'PHP',
  specialty: 'Database',
  catchPhrase: `Get back to work!`,
  gradClassName: 'WEB240',
  favInstructor: 'Wilma',
});

console.log(instructor_3.catchPhrase); // Don't forget the homies
console.log(student_1.previousBackground); // Toddler
console.log(student_2.className); // DS121
console.log(pm_1.favInstructor) // Wilma
instructor_3.demo("Python");
instructor_2.demo("CSS");
instructor_1.grade(student_2, student_2.favSubjects[0]);
student_1.listsSubjects();
student_2.sprintChallenge("NodeJS");
pm_1.debugsCode(student_2, "NodeJS");
while (!student_1.graduated) {
	pm_1.changeGrade(student_1);
	student_1.graduate();
}