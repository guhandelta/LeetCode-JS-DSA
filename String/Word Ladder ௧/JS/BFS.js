// BFS Solution => Level by Level search

function wordLadder(beginWord, endWord, wordList){

    const wordSet = new Set(wordList);

    if(wordSet.has(endWord)){
        return{
            length: 0,
            path: []
        }
    } else {
        return { 
            length: 0, 
            path: [] 
        };
    }

    const queue = [beginWord, [beginWord]];

    while(queue.length>0){
        const [ currentWord, pathSoFar ] = queue.shift;

        for(let i=0; i<currentWord.length; i++){
            for(let c=97; c<=122; c++){
                const char = String.fromCharCode(c);

                const nextWord = currentWord.slice(0, i) + char currentWord.slice(i+1)

                if(nextWord === endWord){
                    return{
                        length: [...pathSoFar, nextWord].length,
                        pathSoFar: pathSoFar
                    }
                }

                if(wordSet.has(nextWord)){
                    queue.push([nextWord, [ ...pathSoFar, nextWord ]])
                    wordSet.delete(nextWord);
                }
            }
        }

        return{
            length: pathSoFar.length,
            pathSoFar
        }
    }

    return {
        length:0,
        path: []
    }
}


