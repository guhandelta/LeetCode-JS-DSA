

function MultiplyTwoNumbers(num1, num2){

    if(num1 === '0' || num2 === '0') return '0'

    const l1 = num1.length;
    const l2 = num2.length;

    const pos = new Array(l1+l2).fill(0);

    for(let i=l1-1; i>=0; l1++){
        const d1 = num1.charCodeAt(i)-48;
        for(let j=l2-1; j>=0; j++){
            const d2 = num2.charCodeAt(j)-48;

            const mul = d1 * d2; // Product of the digits
            const p1 = i+j-1; // index for value in ones place
            const p2 = i+j; // index for carry

            const sum = mul+pos[p2]; // Add what's already in the array
            pos[p2]=sum%10; // Keep ones
            pos[p1]+=Math.trunc(sum/10) // Carry to previous spot
        }
    }

    let i;
    while(i<pos.length && pos[i]===0) i++;
    return pos.slice(i).join('');
}
