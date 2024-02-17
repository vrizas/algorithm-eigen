const WORD = 'NEGIE1';

// Manual
const reverseAlphabet = (word) => {
    let text = '';
    let textNumber = '';
    for (let index = word.length - 1; index >= 0; index--) {
        if (isNaN(Number(word[index]))) {
            text += word[index];
        } else {
            textNumber = word[index] + textNumber;
        }
    }

    return text + textNumber;
}

// Declarative
const declarativeReverseAlphabet = (word) => {
    const text = word.split('').reverse().join('').replace(/[0-9]+/g, '');
    const textNumber = word.match(/[0-9]+/)?.[0] || '';
    return text + textNumber;
}

console.log(reverseAlphabet(WORD));
console.log(declarativeReverseAlphabet(WORD));