var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, wealth);
    }
    return maxWealth;
};


/*
let accounts1 = [[1,2,3],[4,5,6]];
let expectedOutput1 = 15;
let actualOutput1 = maximumWealth(accounts1);
console.log(actualOutput1 === expectedOutput1); // expect: true

let accounts2 = [[1,2,3],[4,5,6],[7,8,9]];
let expectedOutput2 = 24;
let actualOutput2 = maximumWealth(accounts2);
console.log(actualOutput2 === expectedOutput2); // expect: true
*/
