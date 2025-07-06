



const letterCombinationsReduce = (digits) => {        // Arrow-function variant.
      if (!digits) return [];                             // 1️⃣ Empty input → empty output.

    const map = {                                       // 2️⃣ Phone-key mapping.
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    /* -------------------------------------------------
        3️⃣ Use reduce to successively cross-multiply the
            accumulator (all combos so far) with the set
            of letters for the next digit.
    --------------------------------------------------*/

    return [...digits].reduce(
        (acc, digit)=>                                                      // a) acc = array of strings built so far.
            acc.flatMap(str =>                                             // b) flatMap avoids nested arrays. 
                map[digit].split('').map(ch => str + ch)             // c) Append each new letter to existing string.
            ),
        ), ['']                                                              // d) Initial accumulator (empty prefix).
    );

}

