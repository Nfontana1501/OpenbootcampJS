const numero = 15;
let result = 1;
let i= 1;

while(i < numero){
    if (i < 10){
    i++;
    result *= i;
    }
    else {
        break;
    }
}

console.log(result);
