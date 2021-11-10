const first = ()=>{
    const greet = "Hi"
    const second = ()=>{
        const name = "body"
        alert(greet)
    }
    return second
}

const newFunc = first()

newFunc()
// Closures - a function ran. the function executed. It's never going to execute again
// But it's going to remember that there are references to those variables
//so the child scope always has access to the parent scope.

// Currying - We can separate function into 2 call times, to make somthing more convenient
const multiply = (a,b)=> a*b
const curriedMultiply = (a)=>(b)=>a*b
const multiplyBy5 = curriedMultiply(5)

// Compose
const compose = (a,b)=>(c)=>a(b(c))
const sum = (a)=>  1 + a

compose(sum, sum)(5)

// Avoiding Side Effects, function purity
var a = 1
function b(){
    a = 2
}

// Reference type
var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}

// context vs scope

const object4 = {
    a: function(){
        console.log(this)
    }
}

//Instantiation
class Player  {
    constructor(name, type){
        console.log('player', this)
        this.name = name
        this.type = type
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type, old){
    super(name, type)
    this.old = old
    console.log('wizard', this)
        
    }
    play() {
        console.log(`Weeeee I'm a ${this.type}`)
    }
}

const wizard3 = new Wizard('Shelly', `Healler`, 32)
const wizard4 = new Wizard('Shawn', 'Dark Magic', 27)

// Pass By Reference vs by value
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: {
            deeper: "Make somethings"
        }
    }
}

let clone = Object.assign({},obj)
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep.deeper = 'hahahaha'

console.log(obj)
console.log(clone)
console.log(clone2);
console.log(superClone);

// ES7
// 1.
const a = ['pet', 'dog', 'bird', 'chick']
a.includes('pet')
// 2.
const square = ()=> x ** 2

// ES8
const a = 'KKKKKKK'

a.padStart(10)
a.padEnd(10) 
//

const fun = (
    a,
    b,
    c,
    d,
    e,
) => {
    console.log(a);
}

fun(1,2,3,4,)

//
Object.values
Object.entries
Object.keys
let obj = {
    usename0: 'Santa',
    username1: 'Rudoft',
    username2: 'Mr.Grinch'
}

Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', '')
})

// ES10
// .flat()
const array = [1,[2,[3]],[[4],5]]
const b = array.reduce(
    (acc, element)=>{
        debugger
        acc.concat(element)
    }, []
)
array.flat(10)

const entries = ['bob', 'sally', ,,,, 'cindy']

entries.flat()

const entriesAdd = entries.flatMap(create=>create + 'tra')

const arrayAdds = array.flatMap(number=>number + 'tra')

const userEmail = '                   ngdytrae@gmail.com'
const userEmail2 = 'nnasjdnjnn@gmail.com                 '

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd())

userProfile = [['commanderTom', 23],['eeeddd', 2], [aaa, 44]]

const obj=  Object.fromEntries(userProfile)

//try catch
try{
    //do something
} catch{
    console.log('Loi');
}

// for of Loop: use for array and string
const basket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

const detailedBasket = ['tra', 'trr', 'll', 'kkk']

for (item of detailedBasket){
    console.log(item);
}

for(item in basket){
    console.log(item)
}


// ES2020
// BigInt
// Nullish coalescing operator ??

let tra = {
    pikachu :{
        spec: "Mouse Pokemon",
        height: 0.8,
        weight: 20,

        power: 0
    }
}

let power = tra?.pikachu?.power || 'no power'
console.log(power);
// Optional chaining operetor ?.

// call stack
console.log('1')
setTimeout(()=>{
    console.log('2')
}, 2000)
console.log('3')

// CALL BACK
// WEB API
// CALLBACK QUEUE
//EVENT LOOP

// ES9: Spread
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const array = [1,2,3,4,5]

function sum(a,b,c,d,e){
    return a +b + c+ d+e
}

function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

sum(...array)

const {tiger,lion,  ...rest} = animals

objectSpread(tiger, lion, rest)

// finally()
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>{
    return fetch(url).then(people=> people.json())
})).then(array =>{
    throw Error
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
}).catch(err=> console.log('Ughhh fix it!', err))
.finally(()=>console.log("extra"))

// for await of

const getData2 = async function(){
    const arrayOfPromises = urls.map(url=> fetch(url))
    for await (let request of arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }
}

// allSettle()

const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000)
})

const promiseTwo = new Promise((resolve, reject)=>setTimeout(reject, 3000))

// Promise.all([promiseOne, promiseTwo]).then(data=> console.log(data))
Promise.allSettled([promiseOne, promiseTwo]).then(data=> console.log(data))

