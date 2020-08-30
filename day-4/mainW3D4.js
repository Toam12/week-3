const $button = $("#button");
const $input = $("#input");

const wisdom = []
const source = $("#inputValue-template").html()
const template = Handlebars.compile(source)



const getInputValue = function () {	

	let someHTML = template({input: $input.val(), delete: "X"})
	$("#list").append(someHTML)
	wisdom.push({ text: $input.val() })
	localStorage.setItem("wisdom", JSON.stringify(wisdom))
	JSON.parse(localStorage.wisdom)
	console.log(JSON.parse(localStorage.wisdom))
	
	// let data1 = JSON.parse("wisdom")
	$input.val(" ")
	
}
$button.on("click", getInputValue)

const removeWisdom = function (){
	localStorage.wisdom = []
	$("#container").empty()

}

$("#clear").on("click",removeWisdom)


const removeNots = function (){
	
}































































































// class Person {

// 	constructor(name, startYear) {
// 		this.name = name,
// 			this.startYear = startYear
// 		this.courses = []
// 	}

// 	addCourse(course) {
// 		this.courses.push(course)
// 	}
// }
















// class Student extends Person {

// 	constructor(name, startYear) {
// 		super(name, startYear)
// 		this.grade = []
// 	}
// 	receiveGrade(courseName, finleGrade) {
// 		this.grade.push({ name: courseName, grade: finleGrade })
// 	}
// }

// class Teacher extends Person {

// 	constructor(name, startYear, salary) {
// 		super(name, startYear)
// 		this.salary = salary
// 	}
// 	giveGrade(student, courseName, grade) {
// 		student.receiveGrade(courseName, grade)
// 	}
// }

// class Principal extends Person {

// 	constructor(name, startYear) {
// 		super(name, startYear)
// 		this.teachers = []
// 		this.students = []
// 		this.principal = []
	// }
	//- a method that receives a teacher and adds it to the teachers array
	//It should also console log "<principal name> just hired <teacher name>"
// 	hireTeacher(teacher) {
// 		this.teachers.push({ teacher })
// 	}
// 	//- a method that receives a student and adds it to the students array
// 	recruitStudent(student) {
// 		this.students.push(student)
// 	}
// 	//- a method that receives a student and removes it from the studentsarray (for now, you can just search by name)
// 	expelStudent(student) {
// 		for (let i in this.students) {
// 			this.students.splice(student[i], 1)

// 		}
// 	}
// 	transferStudent(student, principal) {
// 		for (let i in this.students) {
// 			this.students.splice(student[i], 1)
// 			this.principal.push(student)
// 			console.log(this.principal)
// 		}

// 	}
// }






// // =================================================
// // 					   	Tests
// // =================================================
// const p1 = new Principal("Martin", 1991)
// const p2 = new Principal("Martha", 1990)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// const t2 = new Teacher("Kevin", 2006, 30000)

// const s1 = new Student("Ronda", 2017)
// const s2 = new Student("Byron", 2016)




// //1 & 2
// p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
// console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

// p1.hireTeacher(t2) //should print "Martin just hired Kevin"
// console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

// //3 & 4
// p1.recruitStudent(s1)
// p1.recruitStudent(s2)
// console.log(p1.students) //should print Array(2) [Student, Student]

// //5
// p1.expelStudent(s1)
// console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

// //6
// p1.transferStudent(s2, p2)
// console.log(p1.students) //should print Array(0) []
// console.log(p2.students) //should print Array(1) [Student] - the student should be Byron





















// 	addCourse(course){
// 		if(this.courses[course]) {
// 			return this.courses[course]++

// 		}
// 		this.courses[course]=1
// 	}
// }

// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// const ta1 = new TeachingAssistant("Brandon", 2014, 20000)
// console.log(ta1.toString())







// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

// const s1 = new Student("toam", 2015)
// const t1 = new Teacher("varda", 2015, 40000)
// s1.receiveGrade("Alrebra", 100)
// t1.giveGrade(s1,"Meth",80)
// s1.addCourse("Algebra")
// s1.addCourse("Meth")
// console.log(t1)
// console.log(s1)

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// const p1 = new Person("Anon", 1999)

// console.log(s1 instanceof Person)// true
// console.log(t1 instanceof Teacher)// true
// console.log(t1 instanceof Person)// true
// console.log(s1 instanceof Teacher)// flase
// console.log(t1 instanceof Student)// flase
// console.log(p1 instanceof Person)// true
// console.log(p1 instanceof Student)// flase
// console.log(p1 instanceof Teacher)// false

// s1 instanceof p1//error
// good 



// localStorage.clear()

// localStorage.userItems = {
// 	name: "toam",
// 	lastName: "cohen",
// 	password: 12345,
// 	username:"toam12345",

// }

// let userStuff = JSON.parse(localStorage.userItems)


// localStorage.userItem =JSON.stringify({
// 	name:"toam",
// 	username: "toam1234",
// 	password:12345
// })




// let myStuff = JSON.parse(localStorage.userItem)
// console.log(myStuff) 




