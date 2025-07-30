// BFS Solution => Level by Level search

function wordLadder(beginWord, endWord, wordList){

    const wordSet = new Set(wordList);

    if(wordSet.has(endWord)){
        return{
            length: 0,
            path: []
        }
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





function wordLadder(begin, end, list){

    const wordList = new Set(list);

    if(wordList.has(end)){
        return{
            length: 0;
            pathSoFar: []
        }
    }

    const queue = [begin, [begin]];

    while(queue.length>0){
        const [currentWord, pathSoFar] = queue.shift;

        for(let i=0; i<currentWord.length; i++){
            for(let j=97;j<122;j++){

                const char = String.fromCharCode(j);

                const nextWord = currentWord(0,i) + char + currentWord(i+1);

                if(nextWord === end){
                    return{
                        length: [...pathSoFar, nextWord].length,
                        pathSoFar: pathSoFar
                    }
                }
                
                if(wordList.has(nextWord)){
                    queue.push[pathSoFar, [...pathSoFar, nextWord]];
                    wordList.delete(nextWord)
                }
            }
        }
        
        return{
            length: pathSoFar.length,
            pathSoFar
    }

    return{
        length: 0,
        pathSoFar: []
    }
}
