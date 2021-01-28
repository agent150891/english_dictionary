import  words  from './words_dictionary';

const functions = {
    // 1.How many words start with the letter <LETTER>
    getNumberOfWordsStartingWith: (letter: string): number => {
        return (words.reduce((acc: number, word: string) => {
            if (word[0] === letter) acc++;
            return acc;
        }, 0))
    },
    // 2.How many times does the letter <LETTER> appear in the dictionary?
    getNumberOfLettersInDictionary: (letter: string): number => {
        const reg = new RegExp(letter, 'gi')
        return (words.reduce((acc: number, word: string) => {
            const count = word.match(reg)?.length || 0
            acc += count;
            return acc
        }, 0))
    },
    // 3.How many words end with the letter <LETTER>?
    getNumberOfWordsEndWithLetter: (letter: string): number => {
        return (words.reduce((acc: number, word: string) => {
            if (word[word.length - 1] === letter) acc++;
            return acc;
        }, 0))
    },
    // 4.How many words have the same letter repeated in conjunction? 
    // For instance, the word professor has `ss,` and for that, the count is
    getWordsWithSameLetter: (letter: string): number => {
        const reg = new RegExp(letter + letter, 'gi')
        return (words.reduce((acc: number, word: string) => {
            if (word.match(reg)) acc++
            return acc;
        }, 0))
    }
}

export default functions