


function letterCombinationsBacktrack(digits) {        // Main API function.
  if (!digits) return [];                             // 1️⃣ Guard-clause: empty input → empty result.

    const map = {                                       // 2️⃣ Digit-to-letters lookup table.
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const res = [];                                     // 3️⃣ Output array to collect answers.
    
    function dfs(inx, path){

        if(inx==1){
            dfs(inx+1,path)
            return;
        }

        if(inx===digits.length){
            res.push(path);
            return
        }

        const alphas = map[digits[inx]];
        for(const ch of digits){
            dfs(inx+1, path+1);
        }

    }

    dfs(0,'');
    return res
}

console.log(letterCombinationsBacktrack('34'));




function dfs_phone_keypad(nos){

    !nos && return 'empty input';

    const map = {                                       // 2️⃣ Digit-to-letters lookup table.
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz',
        '0':'', // handle 0 and 1 by mapping to empty string and skipping it
        '1':''
    };

    const res = [];

    function dfs(inx, path){

        if(inx==1){
            dfs(inx+1, path)
        }
        
        if(inx === nos.length){
            // Only add chars in path, not just from 0 and 1
            if(path.length === nos.length){ // Push valid combinations
                res.push(path)
            }
            return;
        }

        for(const ch of map[nos[no]]){
            dfs(inx+1, path+ch)
        }


    }

    dfs(0, '');
    return res;

}

