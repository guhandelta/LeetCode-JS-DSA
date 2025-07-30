

function GroupAnagraps(str, list){
    // null check

    const anagramGroup = new Map();

    for(str of list){

        const sortedStr = str.split('').sort().join('');

         // Check if this sorted string (key) already exists in our map
        if (anagramGroups.has(sortedStr)) {
            // If it exists, it means we've encountered an anagram of a previous string.
            // Add the current original string to the array associated with this key.
            anagramGroups.get(sortedStr).push(str);
        } else {
            // If it doesn't exist, this is the first time we've seen this anagram group.
            // Create a new entry in the map with the sorted string as the key
            // and an array containing the current original string as the value.
            anagramGroups.set(sortedStr, [str]);
        }
    }

    return Array.from(anagramGroup.values())
}