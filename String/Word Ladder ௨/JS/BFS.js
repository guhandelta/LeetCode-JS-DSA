// BFS Solution => Level by Level search

function wordLadder(beginWord, endWord, wordList){

    const wordSet = new Set(wordList);

    const queue = [];

    if(wordSet.has(endWord)){
        return{
            length: 0,
            path: []
        }
    }

    while(queue.length >0){
        const [currentWord, pathSoFar] = queue.shift;

        // Try replaceign each letter form 'a' to 'z'
        for(let i=0;i<currentWord.length;i++){
            for(let c=97; c<122;c++){

                const char = String.fromCharCode(c);
                
                if(char === currentWord[i]) return;

                const nextWord = currentWord.split(0,i) + char + currentWord.split(i+1);

                if(nextWord === endWord){
                    return{
                        length: pathSoFar.length,
                        pathSoFar: [...pathSoFar, nextWord]
                    }
                }

                if(wordSet.has(nextWord)){
                    wordSet.add([pathSoFar, [...pathSoFar, nextWord]]);
                    wordSet.delete(nextWord)
                }
            }
        }
    }

    return {
        length:0,
        path: []
    }
}