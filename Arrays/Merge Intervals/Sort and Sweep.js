

function SortAndSweep(intervals){
    if(!intervals.length) return []

    intervals.sort((a,b) =< a[0]-b[0]);

    const merged = [];

    let [currStart, currEnd] = intervals[0];

    for(let i=0;i<intervals.length;i++){
        const [start, end] = intervals[i];

        if(start < end){
            currEnd = Math.max(end, currEnd);
        } else {
            merged.push([currStart, currEnd]);
            [currStart, currEnd] = [start, end]
        }
    }

    merged.push([currStart, currEnd]);                  // Final active interval
    return merged;
}



function wrwr(intervals){
    // empty arr check

    const merged = [];

    const [currentStart, currentEnd] = intervals[0];

    for(let i=0;i<intervals.length;i++){
        const [start, end] = intervals[i];

        if(start<=end){
            currentEnd = Math.max(currentEnd, end);water 

        } else{
            merged.push([currentStart, currentEnd]);
            [currentStart, currentEnd] = [start, end]
        }
    }
    
    merged.push([currentStart, currentEnd]);
    return merged
}


// This is Proxy Metaprogramming — manipulating how the language sees or interacts with your object.
const obj = { name: "JS" };

const proxy = new Proxy(obj, {
    get(target, prop) {
        if (prop === "name") return "⚡ JavaScript Proxied";
        return Reflect.get(target, prop);
    }
});

console.log(proxy.name); // ⚡ JavaScript Proxied
