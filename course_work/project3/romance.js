//make string lowercase
//remove punctuation
//change string into an array

function parseText(string){
    return string
    .toLowerCase()
    .replace(/[^a-z\s]/gi, "")
    .split(" ");
}

let text = "Ever since I left the city, you, you, you You and me we just don't get along";

// take the input text and use our parseText function --> array of words
// create an object to generate key value pairs key - currentWord and value [nextWord]
// loop over it bound it by substracting 1
// if key in obj then push the value into our value array
// otherwise we want to currentWord : [nextWord]
// return built obj

function generateWordPairs(text){
    const wordPairs = {};
    const arrayOfWords = parseText(text);
    for (let i =0; i < arrayOfWords.length - 1; i++)
    const currentWord = arrayOfWords[i];
    const nextWord = arrayOfWords[i + 1];
    if (currentWord in wordPairs){
        wordPairs[currentWord].push(nextWord);
    }else {
        wordPairs[currentWord] = [nextWord];
    }
    return wordPairs
}
console.log(wordPairs)

function randomWord(wordArr){
    let newIndex = Math.floor(Math.random() * wordArr.length);
    return wordArr[newIndex];
}

function writeLine (stringText, numOfLines){
    let words = parseText(stringText);
    const getWordPairs = generateWordPairs(stringText);
    let word = randomWord(words);
    let phrase = [word];

    while (getWordPairs[word]){
        let nextWord = getWordPairs[word];
        word = randomWord(nextWord);
        phrase.push(word);
        
        if (phrase.length > numOfLines){
            break;
        }
    }
    return phrase.join(" ");
}

function generatePoem(corpus, lines){
    for (let i = 0; i < lines; i++){
        let numOfWordPerLine = Math.floor(Math.random() * 10) + 1;
    }
}

generatePoem(text, 6);