let number3 = 3
let number5 = 5
let number15 = 15

for(let i = 1; i <= 100; i++){
    if(i % number3 === 0){
        console.log('Fizz')
    }else if(i % number5 === 0){
        console.log('Buzz')
    }else if(i % 15 === 0){
        console.log('FizzBuzz')
    }else{
        console.log(i)
    }
    
    
}
