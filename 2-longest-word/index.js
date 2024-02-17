const SENTENCE = "Saya sangat senang mengerjakan soal algoritma";

// Manual
const longestWord = (sentence) => {
    const words = sentence.split(' ');
    let word = '';

    for (let index = 0; index < words.length; index++) {
        if (words[index].length > word.length) {
            word = words[index];
        }
    }

    return word;
}

// Declarative
const declarativeLongestWord = (sentence) => {
    const words = sentence.split(' ').sort(function(a, b) { 
        return b.length - a.length;
    });

    return words?.[0] || '';
}

console.log(longestWord(SENTENCE));
console.log(declarativeLongestWord(SENTENCE));