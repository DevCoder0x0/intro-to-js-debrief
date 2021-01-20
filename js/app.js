let myNumber = 15;

function genBuzz(num) {    
    if(isNaN(num)) {
        console.log("This is not a number");
        return;
    }
    if(num % 3 === 0 && num % 5 === 0) {
        console.log("GenBuzz");
    }
    else if(num % 5 === 0) {
        console.log("Buzz");
    }
    else if(num % 3 === 0) {
        console.log("Gen");
    }
    else {
        console.log(num);
    }
}

function switchStatement(item) {
    let userInput = item.toLowerCase();
    switch(userInput) {
        case 'shoes':
            return console.log("$50");
            break;
            case 'jeans':
                return console.log("$25");
                break;
                case 'hat':
                    return console.log("$12");
                    break;
                    case 'socks':
                        return console.log("$2");
                        break;
                        default:
                            console.log("Invalid Item");
    }
}

function randomNumber(min, max) {
    return console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
genBuzz(15);
switchStatement("Shoes");
randomNumber(50,100)
