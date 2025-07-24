

function combinationSumBacktrack(candidates, target){
    if(!arr.length || target===null) return [];

    const res = [];
    candidates.sort((a,b) => a-b);                  // Optional, aids pruning

    function dfs(start, remain, path){

        if(remain === 0){
            res.push([...path]);                    // Found a combo
            return
        }

        for(let i=0; i<candidates.length;i++){
            const pick = candidates[i];
            if(pick > remain) break;
            path.push(pick);
            dfs(i, remain-pick, path);              // i -> reuse same number
            path.pop();                             // Backtrack
        }
    }

    dfs(0, target, []);
    return res
}