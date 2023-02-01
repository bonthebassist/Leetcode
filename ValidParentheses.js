let s = "()" // test 1
// let s = "()[]{}" // test 2
// let s = "(]" // test 3

var isValid = function(s) {
    let validityArray = []
    let sArray = s.split('')
    if (sArray.includes('(') && sArray.includes(')')){
        console.log('These are included ()')

        const firstBracket = (element) => element == '(';
        const position = sArray.findIndex(firstBracket)
        console.log(position)

        const secondBracket = (element) => element == ')';
        const position2 = sArray.findIndex(secondBracket)
        console.log(position2)

        if (position2 - position === 1){
            validityArray.push(true)
        } else {
            validityArray.push(false)
        }
    }
    else {
        return false
    }

    if (sArray.includes('{') && sArray.includes('}')){
        console.log('These are included {}')
                const firstBracket = (element) => element == '{';
        const position = sArray.findIndex(firstBracket)
        console.log(position)

        const secondBracket = (element) => element == '}';
        const position2 = sArray.findIndex(secondBracket)
        console.log(position2)

        if (position2 - position === 1){
            validityArray.push(true)
        } else {
            validityArray.push(false)
        }
    }
        else {
        return false
    }

    if (sArray.includes('[') && sArray.includes(']')){
        console.log('These are included []')
                const firstBracket = (element) => element == '[';
        const position = sArray.findIndex(firstBracket)
        console.log(position)

        const secondBracket = (element) => element == ']';
        const position2 = sArray.findIndex(secondBracket)
        console.log(position2)

        if (position2 - position === 1){
            validityArray.push(true)
        } else {
            validityArray.push(false)
        }
    }
        else {
        return false
    }

    let result = validityArray.includes(false)
    if (!result){
        return true
    } 
    else {
        return false
    }

};