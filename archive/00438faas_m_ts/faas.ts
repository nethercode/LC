function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  const freqP: number[] = new Array(26).fill(0);
  const lenP = p.length;
  const lenS = s.length;

  for (let i = 0; i < lenP; i++) {
    freqP[p.charCodeAt(i) - 97]++;
  }

  let freqWin: number[] = new Array(26).fill(0);
  for (let i = 0; i < lenS; i++) {
    freqWin[s.charCodeAt(i) - 97]++;
    if (i >= lenP) {
      freqWin[s.charCodeAt(i - lenP) - 97]--;
    }
    if (i >= lenP - 1 && freqWin.every((count, j) => count === freqP[j])) {
      result.push(i - lenP + 1);
    }
  }

  return result;
}
