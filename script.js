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
const displayNum = (para) =>{
    const value = para
    displayInput.value = displayInput.value + value
}

// show character
const displayChar = (val) =>{
    const name = event.target.name
    const para = val
    if(isCapsLockOn){
        displayInput.value = displayInput.value + para.toUpperCase()
    } else {
        displayInput.value = displayInput.value + para
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
            } else {
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
        case '|' : {
            displayInput.value = displayInput.value + ','
            break
        }
        case '{' : {
            if(isShiftOn){
                displayInput.value = displayInput.value + "["
                break
            } else {
                displayInput.value = displayInput.value + '{'
                break
            }
        }
        case '}' : {
            if(isShiftOn){
                displayInput.value = displayInput.value + "]"
                break
            } else {
                displayInput.value = displayInput.value + '}'
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