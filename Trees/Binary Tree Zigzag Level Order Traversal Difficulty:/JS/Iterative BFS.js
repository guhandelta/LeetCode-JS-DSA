
class Node{
    constructor(){
        this.left=this.left;
        this.right=this.right;
        this.value=this.value;
    }
}




function wordLadder(startWord, endWord, wordList){

    const wordSet = new Set(wordList);

    if(wordSet.has(endWord)){
        return{
            length: 0,

        }
    }

    for(word in wordSet){
        for(const c in word){
            const char = String.fromCharCode(c);

            const nextWord = word.slice(0,i) + char + word.slice(i+1)

            
        }
    }
}