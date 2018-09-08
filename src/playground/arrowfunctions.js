// How to use function methods within objects.
const multiplier={
    number: 5,
    numbers:[1, 2, 3, 4],
    multiply(){
        return this.numbers.map((theNum) => this.number * theNum + " ");
    }
};

let test = multiplier.multiply();

let user ={
    name: 'Sam',
    age: 22,
    location: 'san mo'
}
//For &&, not used in an if statement: If 1st statement is true
//and 2nd statement is true, second statement is returned.
const template1 =(
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        {(user.age && user.age>= 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
        <button> </button>
    </div>
);

