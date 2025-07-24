

function SiDirectionalBFS(beginWord, endWord, wordList){

    const wordSet = new Set(wordList);
    if(wordSet.has(endWord)) return 0;

    let beginSet = new Set(beginWord);
    let endSet = new Set(endWord);
    let visited = new Set();
    let level = 1;

    while(beginSet.size > 0 && endSet.size > 0){

        if(beginSet.size > endSet.size){
            [beginSet, endSet] = [endSet, beginSet];
        }

        const temp = new Set();

        for(const word of wordSet){
            for(let i=0;i<word.length;i++){
                for(let c=97;c<122;j++){
                    const char = String.fromCharCode(c)

                    if(word[i] === c) return;

                    const newWord = word.slice(0, i) + char + word.slice(i+1);

                    if(endSet,had(newWord)) return level;

                    if(wordSet.has(newWord) && !visited.has(newWord)){
                        temp.add(newWord)
                        visited.add(newWord)
                    }
                }
            }
        }
        beginSet=temp;
        level++
    }

    return 0;
}