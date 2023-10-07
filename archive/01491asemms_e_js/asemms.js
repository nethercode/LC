var average = function(salary) {
    // Find min && max values of array
    let minSalary = Math.min(...salary);
    let maxSalary = Math.max(...salary);
    
    // Open a sum variable and set it to 0
    let sum = 0;
    
    // Loop over array and add all salaries to the sum variable
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] !== minSalary && salary[i] !== maxSalary) {
            sum += salary[i];
        }
    }
    
    // Find average salary (dividing sum by salary quantity, excluding the min and max salaries)
    let avgSalary = sum / (salary.length - 2);
    
    // Return average with precision of five decimal places
    return Number(avgSalary.toFixed(5));
};

// Example In
let salary1 = [4000, 3000, 1000, 6000];
let salary2 = [1000, 2000, 3000];

// Example Averaging
let avg1 = average(salary1);
let avg2 = average(salary2);
let avg3 = average([...salary1, ...salary2]);

// Example Out (to CLI)
console.log("Average salary for salary1 array: ", avg1); // Expected output: 3500.00000
console.log("Average salary for salary2 array: ", avg2); // Expected output: 2000.00000
console.log("Average salary for salary3 array: ", avg3); // Expected output: 2400.00000