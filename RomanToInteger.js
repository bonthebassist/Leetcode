let s = "III" // test 1
// let s = "LVIII" // test 2
// let s = "MCMXCIV" // test 3

var romanToInt = function(s) {
    let splitNumerals = s.split('')
    let convertedNumerals = []
    for (let i = 0; i<splitNumerals.length; i++) {
        if (splitNumerals[i]==="I"){
            convertedNumerals.push(1)
        }
        if (splitNumerals[i]==="V"){
            convertedNumerals.push(5)
        }
        if (splitNumerals[i]==="X"){
            convertedNumerals.push(10)
        }
        if (splitNumerals[i]==="L"){
            convertedNumerals.push(50)
        }
        if (splitNumerals[i]==="C"){
            convertedNumerals.push(100)
        }
        if (splitNumerals[i]==="D"){
            convertedNumerals.push(500)
        }
        if (splitNumerals[i]==="M"){
            convertedNumerals.push(1000)
        }
    }

    let reduceByArr = []

    for (let j = 0; j < convertedNumerals.length; j++){
        if (convertedNumerals[j] < convertedNumerals[j+1]){
            console.log(convertedNumerals[j])
            reduceByArr.push(convertedNumerals[j])
        }
    }
    
    let initialValue = 0
    let reduceBy = reduceByArr.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue)
    let bigResult = convertedNumerals.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue)
    let result = bigResult - (reduceBy*2)

    console.log(result)

    return result
};