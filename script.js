const displayInput = document.getElementById('display')
let isCapsLockOn = false
let isShiftOn = false

// tab
const tab = () =>{
    displayInput.value = displayInput.value + '     '
}

// shift
const shift = () =>{
    isShiftOn = !isShiftOn
    console.log(isShiftOn)
    const shift = document.getElementById('charShift')
    if(isShiftOn === false){
        shift.innerHTML = 'Shift'
    } else if(isShiftOn === true){
        shift.innerHTML = 'SHIFT'
    }

}

//space
const space = () =>{
    displayInput.value = displayInput.value + ' '
}

// capslock
const capsLock = () =>{
    isCapsLockOn = !isCapsLockOn
    const caps = document.getElementById('charCaps')
    if(isCapsLockOn === false){
        caps.innerText = 'capsLock' 
    } else if(isCapsLockOn === true){
        caps.innerHTML = 'CAPSLOCK'
    }
}

// number display 
const displayNum = (event) =>{
    const name = event.target.name
    switch(name){
        case 'div' : {
            displayInput.value = displayInput.value + '/'
            break
        }
        case 'multy' : {
            displayInput.value = displayInput.value +'*'
            break
        }
        case 'sub' : {
            displayInput.value =  displayInput.value + '-'
            break
        }
        case 'sev' : {
            displayInput.value =  displayInput.value + '7'
            break
        }
        case 'eight' : {
            displayInput.value = displayInput.value + '8'
            break
        }
        case 'nine' : {
            displayInput.value = displayInput.value + '9'
            break
        }
        case 'four' : {
            displayInput.value = displayInput.value + '4'
            break
        }
        case 'five' : {
            displayInput.value = displayInput.value + '5'
            break
        }
        case 'six' : {
            displayInput.value = displayInput.value + '6'
            break
        }
        case 'one' : {
            displayInput.value = displayInput.value + '1'
            break
        }
        case 'two' : {
            displayInput.value = displayInput.value + '2'
            break
        }
        case 'three' : {
            displayInput.value = displayInput.value +'3'
            break
        }
        case 'zero' : {
            displayInput.value = displayInput.value +'0'
            break
        } 
        case 'plus' : {
            displayInput.value = displayInput.value + '+'
            break
        }
    }
    
}

// show character
const displayChar = (event) =>{
    const name = event.target.name
    if(isCapsLockOn){
        switch(name){
            case 'a' : {
                displayInput.value = displayInput.value + 'A'
                break
            }
            case 's' : {
                displayInput.value = displayInput.value + 'S'
                break
            }
            case 'd' : {
                displayInput.value = displayInput.value + 'D'
                break
            }
            case 'f' : {
                displayInput.value = displayInput.value + 'F'
                break
            }
            case 'g' : {
                displayInput.value = displayInput.value + 'G'
                break
            }
            case 'h' : {
                displayInput.value = displayInput.value + 'H'
                break
            }
            case 'j' : {
                displayInput.value = displayInput.value + 'J'
                break
            }
            case 'k' : {
                displayInput.value = displayInput.value + 'K'
                break
            } 
            case 'l' : {
                displayInput.value = displayInput.value + 'L'
                break
            }
            case ':' : {
                console.log('shift')
                if(isShiftOn){
                    console.log('inside the shift')
                    displayInput.value = displayInput.value + ';'
                    break
                } else {
                    displayInput.value = displayInput.value + ':'
                    break
                }
            }
            case '"' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + "'"
                    break
                }
                displayInput.value = displayInput.value + '"'
                break
            }
            case "|" : {
                displayInput.value = displayInput.value + '|'
                break
            }
        }
    } else {
        switch(name){
            case 'a' : {
                displayInput.value = displayInput.value + 'a'
                break
            }
            case 's' : {
                displayInput.value = displayInput.value + 's'
                break
            }
            case 'd' : {
                displayInput.value = displayInput.value + 'd'
                break
            }
            case 'f' : {
                displayInput.value = displayInput.value + 'f'
                break
            }
            case 'g' : {
                displayInput.value = displayInput.value + 'g'
                break
            }
            case 'h' : {
                displayInput.value = displayInput.value + 'h'
                break
            }
            case 'j' : {
                displayInput.value = displayInput.value + 'j'
                break
            }
            case 'k' : {
                displayInput.value = displayInput.value + 'k'
                break
            } 
            case 'l' : {
                displayInput.value = displayInput.value + 'l'
                break
            }
            case ':' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + ';'
                    break
                } else {
                    displayInput.value = displayInput.value + ':'
                    break

                }
            }
            case '"' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + "'"
                    break
                } else {
                    displayInput.value = displayInput.value + '"'
                    break
                }
            }
            case "|" : {
                displayInput.value = displayInput.value + '|'
                break
            }
        }
    }
}

//show characters in row 2
const displayChar2 = (event) =>{
    const name = event.target.name
    if(isCapsLockOn){
        switch(name){
            case 'q' : {
                displayInput.value = displayInput.value + 'Q'
                break
            }
            case 'w' : {
                displayInput.value = displayInput.value + 'W'
                break
            }
            case 'e' : {
                displayInput.value = displayInput.value + 'E'
                break
            }
            case 'r' : {
                displayInput.value = displayInput.value + 'R'
                break
            }
            case 't' : {
                displayInput.value = displayInput.value + 'T'
                break
            }
            case 'y' : {
                displayInput.value = displayInput.value + 'Y'
                break
            }
            case 'u' : {
                displayInput.value = displayInput.value + 'U'
                break
            }
            case 'i' : {
                displayInput.value = displayInput.value + 'I'
                break
            } 
            case 'o' : {
                displayInput.value = displayInput.value + 'O'
                break
            }
            case 'p' : {
                displayInput.value = displayInput.value + 'P'
                break
            }
            case '{' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '['
                    break
                } else {
                    displayInput.value = displayInput.value + '{'
                    break
                }
            }
            case "}" : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + ']'
                    break
                } else {
                    displayInput.value = displayInput.value + '}'
                    break
                }
            }
        }
    } else {
        switch(name){
            case 'q' : {
                displayInput.value = displayInput.value + 'q'
                break
            }
            case 'w' : {
                displayInput.value = displayInput.value + 'w'
                break
            }
            case 'e' : {
                displayInput.value = displayInput.value + 'e'
                break
            }
            case 'r' : {
                displayInput.value = displayInput.value + 'r'
                break
            }
            case 't' : {
                displayInput.value = displayInput.value + 't'
                break
            }
            case 'y' : {
                displayInput.value = displayInput.value + 'y'
                break
            }
            case 'u' : {
                displayInput.value = displayInput.value + 'u'
                break
            }
            case 'i' : {
                displayInput.value = displayInput.value + 'i'
                break
            } 
            case 'o' : {
                displayInput.value = displayInput.value + 'o'
                break
            }
            case 'p' : {
                displayInput.value = displayInput.value + 'p'
                break
            }
            case '{' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '['
                    break
                } else {
                    displayInput.value = displayInput.value + '{'
                    break
                }
            }
            case "}" : {
                if(isShiftOn) {
                    displayInput.value = displayInput.value + ']'
                    break
                }
                displayInput.value = displayInput.value + '}'
                break
            }
        }
    }
}

//show characters in row 3
const displayChar3 = (event) =>{
    const name = event.target.name
    if(isCapsLockOn){
        switch(name){
            case 'z' : {
                displayInput.value = displayInput.value + 'Z'
                break
            }
            case 'x' : {
                displayInput.value = displayInput.value + 'X'
                break
            }
            case 'c' : {
                displayInput.value = displayInput.value + 'C'
                break
            }
            case 'v' : {
                displayInput.value = displayInput.value + 'V'
                break
            }
            case 'b' : {
                displayInput.value = displayInput.value + 'B'
                break
            }
            case 'n' : {
                displayInput.value = displayInput.value + 'N'
                break
            }
            case 'm' : {
                displayInput.value = displayInput.value + 'M'
                break
            }
            case ',' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '<'
                    break
                } else {
                    displayInput.value = displayInput.value + ','
                    break
                }
            } 
            case '.' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '>'
                    break
                } else{
                    displayInput.value = displayInput.value + '.'
                    break

                }
            }
            case '?' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '/'
                    break
                } else {
                    displayInput.value = displayInput.value + '?'
                    break

                }
            }
        }
    } else {
        switch(name){
            case 'z' : {
                displayInput.value = displayInput.value + 'z'
                break
            }
            case 'x' : {
                displayInput.value = displayInput.value + 'x'
                break
            }
            case 'c' : {
                displayInput.value = displayInput.value + 'c'
                break
            }
            case 'v' : {
                displayInput.value = displayInput.value + 'v'
                break
            }
            case 'b' : {
                displayInput.value = displayInput.value + 'b'
                break
            }
            case 'n' : {
                displayInput.value = displayInput.value + 'n'
                break
            }
            case 'm' : {
                displayInput.value = displayInput.value + 'm'
                break
            }
            case ',' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '<'
                    break
                } else {
                    displayInput.value = displayInput.value + ','
                    break
                }
            } 
            case '.' : {
               if(isShiftOn){
                    displayInput.value = displayInput.value + '>'
                    break
               } else{
                   displayInput.value = displayInput.value + '.'
                   break
               }
            }
            case '?' : {
                if(isShiftOn){
                    displayInput.value = displayInput.value + '/'
                    break

                } else {
                    displayInput.value = displayInput.value + '?'
                    break

                }
            }
        }
    }
}

// show special characters
const specialChar = (event) => {
    const name = event.target.name
    switch(name){
        case '~' : {
            if(isShiftOn){
                displayInput.value = displayInput.value + '`'
                break
            } else {
                displayInput.value = displayInput.value + '~'
                break
            }
        }
        case '!' : {
            if(isShiftOn){
                displayInput.value = displayInput.value + '1'
                break
            } else {
                displayInput.value = displayInput.value + '!'
                break
            }
        }
        case '@' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '2'
                break
            } else {
                displayInput.value = displayInput.value + '@'
                break
            }
        }
        case '#' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '3'
                break
            } else {
                displayInput.value = displayInput.value + '#'
                break
            }
        }
        case '$' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '4'
                break
            } else {
                displayInput.value = displayInput.value + '$'
                break
            }
        }
        case '%' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '5'
                break
            } else {
                displayInput.value = displayInput.value + '%'
                break
            }
        }
        case '^' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '6'
                break
            } else {
                displayInput.value = displayInput.value + '^'
                break
            }
        }
        case '&' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '7'
                break
            } else {
                displayInput.value = displayInput.value + '&'
                break
            }
        }
        case '*' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '8'
                break
            } else {
                displayInput.value = displayInput.value + '*'
                break
            }
        }
        case '(' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '9'
                break
            } else {
                displayInput.value = displayInput.value + '('
                break
            }
        }
        case ')' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '0'
                break
            } else {
                displayInput.value = displayInput.value + ')'
                break
            }
        }
        case '_' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '-'
                break
            } else {
                displayInput.value = displayInput.value + '_'
                break
            }
        }
        case '=' : {
            if(isShiftOn) {
                displayInput.value = displayInput.value + '+'
                break
            } else {
                displayInput.value = displayInput.value + '='
                break
            }
        }
    }
}

//backspace
const backspace = () =>{
    const inputData = displayInput.value
    const index = inputData.length - 1
    displayInput.value = inputData.slice(0,index)
}