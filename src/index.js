module.exports = function toReadable (number) {
    const numberPrime = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const numberTeen = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    const numberHundred = 'hundred';
    let arrayLength = String(number).length;
    let textNumber = null;
    let textNumberTeenLeft = '';
    let textNumberTeenRight = '';
    let textTrigger = false;

    if(number <= 19){
        return numberPrime[number];
    }

    let arrayNumber = String(number).split("").map((number) => {
        return Number(number);
    });

    if (number >= 20 && arrayLength === 2){
        arrayNumber.forEach(function (element, index) {
            if (index === 0){
                textNumber = numberTeen[Number(element)];
            }

            if (index === 1 && element !== 0){
                textNumber += ' ' + numberPrime[Number(element)];
                return textNumber;
            }
        })
        return textNumber;
    }

    if (number >= 100 && arrayLength === 3){
        arrayNumber.forEach(function (element, index) {
            if (index === 0){
                textNumber = numberPrime[Number(element)] + ' ' + numberHundred;
            }

            if (index === 1 && element === 1){
                textNumberTeenLeft = String(element);
                textTrigger = true;
            }

            if (index === 1 && element !== 0 && !textTrigger){
                textNumber += ' ' + numberTeen[Number(element)];
            }

            if (index === 2 && textTrigger){
                textNumberTeenRight = String(element);
                textNumber += ' ' + numberPrime[Number(textNumberTeenLeft + textNumberTeenRight)];
                return textNumber;
            }

            if (index === 2 && element !== 0){
                textNumber += ' ' + numberPrime[Number(element)];
                return textNumber;
            }
        })
        return textNumber;
    }
}
