

function CombinationSum2(candidates, target){
    if(!candidates.length || !target) return 'Check inputs'

    candidates.sort((a,b) => a-b);

    const res = [], path=[];

    function DFS(start, remain){
        // hit the target and record a copy of the current path
        if(remain===0){
            res.push([...path]);
            return;
        }

        if(remain<0) return 'Stopping: Ran out of numbers or Sum has exceed the target'

        for(let i=0;i<candidates.length;i++){
            const val = candidates[i];

            // Skip duplicates AT THIS LEVEL:
            // If current equals previous and we're at same depth start,
            // picking it would create a duplicate combination.
            if(i>start && candidates[i] === candidates[i-1]) continue;

            // Pruning: if currentVal is already greater than remainingTarget,
            // no need to continue with larger numbers (since array is sorted)
            if (val > remainingTarget) {
                break;
            }

            path.push(val);

            // Recurse with next index (i + 1) to ensure a number is used at most once
            DFS(i+1, remain-val);

            // Backtack
            path.pop();
        }
    }

    DFS(0,target);
    return res;
}