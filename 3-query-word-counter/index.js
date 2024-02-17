const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

// Manual
const countWords = (input, query) => {
    const output = [];

    for (let queryIndex = 0; queryIndex < query.length; queryIndex++) {
        let total = 0;
        for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
            if (input[inputIndex] === query[queryIndex]) {
                total++;
            }
        }
        
        output.push(total);
    }

    return output;
}

// Declarative
const declarativeCountWords = (input, query) => {
    const output = query.map((queryWord) => {
        const total = input.filter((inputWord) => inputWord === queryWord).length;
        return total;
    });

    return output;
}

console.log(countWords(INPUT, QUERY));
console.log(declarativeCountWords(INPUT, QUERY));