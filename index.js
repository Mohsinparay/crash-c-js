// console.error("this is an error")
// console.warn("this is an warn");
//let and const -> block level scope 

// let age = 30;
// age = 10
// alert(age+20);
/*

// string null undefined Boolean Numbers
const name = "mohisn";
const age = 10;
const isCool = true;
const rating = 4.5;
// const x = null;
// const y = undefined;

// alert(typeof y )
// string concatination

// alert("my name is "+ name +" and my age is"+ age+"");
// alert(`my name is ${name} and i am ${age}`)
// const intro = `my name is ${name} and i am ${age}`;
// alert(intro)

// length prop

const s = "this is my name";
// alert(s.length)
// alert(s.toUpperCase());
// alert(s.substring(0,7).toUpperCase());
// alert(s.split(''))

//arrays

const fruits = ['apple', 'mango', 'banana', 'orange','prach']

// alert(fruits)
// fruits[5]= 'grapes';
// fruits.push('grapes')//adding ele at the last
fruits.unshift('grapes') //adding ele at the first
fruits.pop([])
// alert(fruits)

//check is this an array

// alert(Array.isArray(fruits))

// get the index of any element
// alert(fruits.indexOf('mango'))

// Object lit



const person = {
    firstname : 'mohsin',
    lastname : 'mairaj',
    age : 19,
    hobbies : ['video games' ,'music',' moovies'],
    address:{
        street:'sopore',
        city:'baramulla',
        state:'j&k'
    }

}
person.email='mohsin@email.com'
// console.log(person)
// console.log(person.firstname,person.hobbies);
// console.log(person.hobbies[1])
// console.log(person.address.street, person.address.city, person.address.state)
const{firstname,email,lastname,hobbies,address:{street,city,state}} = person;
// console.log(email)






const todos = [
    {
        id:1,
        text:'task name',
        isCompleted:true
    },
    {
        id:2,
        text:'task name',
        isCompleted:true
    },
    {
        id:3,
        text:'task name',
        isCompleted:false
    }
]
// console.log(todos)
const todoJSON = JSON.stringify(todos) //to convert the obj lit into json fomat
// console.log(todoJSON)



// loops

//for

for (let i = 0; i < todos.length; i++) {
    // console.log(i);
    // console.log(todos[i].text)
    
}
//while
// let i = 0;
// while (i<10) {
//     console.log(`while loop[ number: ${i}`)
//    i++

// }

//conditions
const x = 100;
const y = 20;
const z = 30;

if (x == y ) {
    // console.log("both numbers are equal");

}
else{
    // console.log('!=')
}
 
if(x > y && x>z){
    // console.log("x is greatest");
    
}
else if (y>x && y>z) {
    // console.log("y is greates");
}
else{
    // console.log("z is greatest")
}

// ternary operators

// const color = x>10 ?'red' :'blue';
const color = 'green';
// console.log(color)
switch(color){
    case 'red':
        // console.log("color is red");
        break;
    case 'blue':
        // color.log("color is blue");
        break;
    default:
        // console.log('color is not red or blue');
        break;






}

function addnums(num1, num2){
    return num1 + num2;
}
// console.log(addnums(5 , 25))

// constructor function





function person(firstname ,lastname, dob ){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    person.prototype.getBirthYear= function(){
        return this.dob.getFullYear();
    }
    person.prototype.getFullname = function(){
        return `${this.firstname}`
    }

}

//instantiate object
const person1 = new person('john', 'doe,', '4-03-2020');
const person2 = new person('marry', 'smith,', '4-03-2010');

// console.log(emp2)
// console.log(emp2.dob.getFullYear())
console.log(person1.getBirthYear)


// console.log(window)

// console.log(document.getElementById('my-form'))
const ul = document.querySelector('.items');
// items.forEach((item) => console.log(item));
// ul.remove();
// ul.lastElementChild.remove()
ul.firstElementChild.textContent = "changed text";
ul.children[1].innerText = "index based";
ul.lastElementChild.innerHTML = "<h1>hello</h1>"
const btn  = document.querySelector('.btn');
// btn.style.background = 'red'
btn.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    // console.log("button clicked");
    // console.log(e)
    // console.log(e.target);
    document.querySelector('#my-form').style.background='red'
    document.querySelector('body').classList.add('bg-dark')

})
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value)
    if (nameInput.value === '' || emailInput ==='') {
        msg.classList.add('error')
        msg.innerHTML= "<h3>please fill the fields</h3>"
        setTimeout(() => msg.remove(), 3000)
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`
        ))
        userList.appendChild(li)

        //clear it
nameInput.value = '';
emailInput.value = ''

    }
}





