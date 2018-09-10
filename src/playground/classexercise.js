class Person {
    constructor(name = 'person name', age= 100){
        this.name =name;
        this.age =age;
    }
    getGretting(){
        return `Hi i am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{

    constructor(name, age, major='What is a major?'){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` This major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation='The world is my home.'){
        super(name, age);
        this.homeLocation= homeLocation;
    }
    getDescription(){
        let description = super.getDescription();
        return description += ` I live in ${this.homeLocation}`
    }
}
const me = new Traveler('Samantha Ciaramitaro', 22, 'San Marcos');
console.log(me.getGretting());
console.log(me.getDescription());

//const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);