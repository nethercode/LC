var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const diff1 = [];
    const diff2 = [];
    
    set1.forEach(num => {
        if (!set2.has(num)) {
            diff1.push(num);
        }
    });
    
    set2.forEach(num => {
        if (!set1.has(num)) {
            diff2.push(num);
        }
    });
    
    return [diff1, diff2];
};

// Test case
const nums1 = [1, 2, 3, 4, 7];
const nums2 = [3, 5, 6, 7];
const expected = [[1, 2, 4], [5, 6]];

const result = findDifference(nums1, nums2);

// Assertion
if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log(result);
    console.log("Test passed!");
} else {
    console.error("Test failed!");
    console.log("Expected: ", expected);
    console.log("Actual: ", result);
}

