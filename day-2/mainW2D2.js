class Person {

	constructor(name,lastName, isFriendly){
		this.name = name
		this.lastName = lastName
		this.isFriendly = isFriendly
		this.children = []
	}
	yellow(){
		this.children.push(this.name)
	}
}  


const toam = new Person("toam ", "cohen" ,"alot to me 	" )
toam.yellow()
console.log(toam)


class Vehicle {

	constructor(x, y, speed) {
		this.x = x,
		this.y = y,
		this.speed = speed
	}
	getInfo(){
		console.log(`Cars are great`)
	}
}


const vehicle = new Vehicle(20,50,250)
vehicle.getInfo()
console.log(vehicle)

`Given a boolean weArePoor, create an instance of Animal that receives either a LuxuryFeeder or a CheapFeeder depending on the boolean's value.

Test your code with both values to see DI in action ~`

const goodFeeder = new GoodFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = false
let releventFeeder

if (weArePoor) {
	releventFeeder = goodFeeder
} else {
	releventFeeder = cheapFeeder
}
const gazel = new Animel("GAZEL", "LION", releventFeeder)
gazel.eat()
class Vehicle {
		
	static calculateMoney() {
		Vehicle.carsSold++
		console.log("Made " + 30000 * Vehicle.carsSold + " dollars");
	}
}

Vehicle.carsSold = 0
Vehicle.calculateMoney()
Vehicle.calculateMoney()
Vehicle.calculateMoney()
