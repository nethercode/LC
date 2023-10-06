function findSubstring(s: string, words: string[]): number[] {
    const wordCounts: {[key: string]: number} = {};
    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    const wordLength: number = words[0].length;
    const windowSize: number = wordLength * words.length;

    const result: number[] = [];
    for (let i: number = 0; i <= s.length - windowSize; i++) {
        const substring: string = s.substr(i, windowSize);
        const substringWordCounts: {[key: string]: number} = {};
        for (let j: number = 0; j < substring.length; j += wordLength) {
            const word: string = substring.substr(j, wordLength);
            substringWordCounts[word] = (substringWordCounts[word] || 0) + 1;
        }
        let isValid: boolean = true;
        for (const word of words) {
            if (wordCounts[word] !== substringWordCounts[word]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            result.push(i);
        }
    }

    return result;
}
