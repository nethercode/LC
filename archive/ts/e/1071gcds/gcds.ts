function gcdOfStrings(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;
    let gcdLen = gcd(len1, len2);

    const gcdString = str1.slice(0, gcdLen);

    if (checkDivides(str1, gcdString) && checkDivides(str2, gcdString)) {
        return gcdString;
    }

    return "";
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function checkDivides(str: string, sub: string): boolean {
    const len1 = str.length;
    const len2 = sub.length;

    if (len1 % len2 !== 0) {
        return false;
    }

    for (let i = 0; i < len1; i += len2) {
        if (str.slice(i, i + len2) !== sub) {
            return false;
        }
    }

    return true;
}