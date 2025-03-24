/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word){
    let counter = 0;
    let vowelsInWord = [];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if (word[i] == (vowels[j])){
                counter++;
                vowelsInWord.push(vowels[j])
            }
        }
    }
    return counter, vowelsInWord;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)