let number3 = 3;
let number5 = 5;
let number15 = 15;
let div1 = document.getElementById('container');
let bordo = ''
let fizzbuzz = 'FizzBuzz'
let fizz = 'Fizz'
let buzz = 'Buzz'


for(let row = 1; row <= 1; row++){

bordo += "<div class='square-row'>"

        for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz')
            bordo += `<div class='square red'>${fizzbuzz}</div>`
        }else if(i % number5 === 0){
            console.log('Buzz')
            bordo += `<div class='square orange'>${buzz}</div>`
        }else if(i % number3 === 0){
            console.log('Fizz')
            bordo += `<div class='square blue'>${fizz}</div>`
        }else{
            console.log(i)
            bordo += `<div class='square green'>${i}</div>`
        }
        }
        
    
    bordo += "</div>"
}

console.log (bordo)
div1.innerHTML +=  bordo