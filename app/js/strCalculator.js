class StringCalculator {
    constructor() {
    }

    add(numbers) {
        let sum = 0;
        let numberNegative = "";
        let tabErr = [];
        for(let i = 0; i< numbers.length; i++) {  
            if(numbers.charAt(i) === '-' && !isNaN(parseInt(numbers.charAt(i+1)))) {
                let tabNum = [];
                let j = i+1;
                while(!isNaN(parseInt(numbers.charAt(j)))) {
                    tabNum.push(numbers.charAt(j));
                    j++;
                }
                tabErr.push(numbers.charAt(i) + tabNum.join(''));
            } else {
                let tab = [];
                while(!isNaN(parseInt(numbers.charAt(i)))) {
                    tab.push(numbers.charAt(i));
                    i++;
                }
                if(tab.length && parseInt(tab.join('')) <= 1000) {
                    sum += parseInt(tab.join(''));
                }
            }
            
        }
        if(tabErr.length) {
            throw new Error ("Negatives not allowed. " + tabErr.join());
        }
        return sum;
    }
}


export { StringCalculator };