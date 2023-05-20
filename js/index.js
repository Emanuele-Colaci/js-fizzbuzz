let number3 = 3;
let number5 = 5;
let number15 = 15;
const size = 10;
let odd = '';
let even = '';
let board = '';

const scacchi = document.getElementById('conatiner')
const container = document.getElementById('list')
for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz')
        container.innerHTML += ` FizzBuzz `
    }else if(i % number5 === 0){
        console.log('Buzz')
        container.innerHTML += ` Buzz `;
    }else if(i % number3 === 0){
        console.log('Fizz')
        container.innerHTML += ` Fizz `;
    }else{
        console.log(i)
        container.innerHTML += ` ${i} `;
    }
    
}


