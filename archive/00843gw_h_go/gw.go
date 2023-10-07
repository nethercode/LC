func findSecretWord(wordlist []string, master *Master) {
    ln := len(wordlist)
    for i := 0; i < 10; i++ {
        nMatches := master.Guess(wordlist[0])
        if nMatches == 6 {
            return
        }
        ln = reorganize(wordlist[0], wordlist, ln, nMatches)
    }
}

func reorganize(matchWord string, wordList []string, ln, nMatches int) int {
    i := 0
    for i < ln {
        if numberOfMatches(matchWord, wordList[i]) != nMatches {
            ln--
            wordList[i] = wordList[ln]
        } else {
            i++
        }
    }
    return ln
}

func numberOfMatches(w1, w2 string) int {
    count := 0
    for i := range w1 {
        if w1[i] == w2[i] {
            count++
        }
    }
    return count
}