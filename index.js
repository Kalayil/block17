// Complete the Numbers class below
// The constructor has already been provided
class Numbers {
    constructor(data) {
        // data can either be a string or an array of numbers
        if (typeof data === "string") {
            this.data = data.split(",").map((number) => number * 1); // Convert string to array of numbers
        } else {
            this.data = data;
        }
    }

    // 1. Count: Return the count of numbers in the data
    count() {
        return this.data.length;
    }

    // 2. Print Numbers: Print the numbers in data
    printNumbers() {
        console.log(this.data.join(', ')); // Print numbers separated by commas
    }

    // 3. Odds: Return the odd numbers in data
    odds() {
        return this.data.filter(num => num % 2 !== 0); // Return odd numbers
    }

    // 4. Evens: Return the even numbers in data
    evens() {
        return this.data.filter(num => num % 2 === 0); // Return even numbers
    }

    // 5. Sum: Return the sum of the numbers
    sum() {
        return this.data.reduce((acc, num) => acc + num, 0); // Sum up all the numbers
    }

    // 6. Product: Return the product of the numbers
    product() {
        return this.data.reduce((acc, num) => acc * num, 1); // Multiply all numbers to get the product
    }

    // 7. Greater Than: Return numbers greater than the target
    greaterThan(target) {
        return this.data.filter(num => num > target); // Filter numbers greater than the target
    }

    // 8. How Many: Return the count of a specific number
    howMany(target) {
        return this.data.filter(num => num === target).length; // Count occurrences of the target number
    }
}

// Prompt the user for a list of integers separated by commas
const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");

// Create an instance of Numbers
const n1 = new Numbers(str);

// Test the methods of the Numbers class
console.log(n1.count());         // Returns count of numbers
n1.printNumbers();               // Prints the numbers
console.log(n1.odds());          // Returns odd numbers
console.log(n1.evens());         // Returns even numbers
console.log(n1.sum());           // Returns sum of the numbers
console.log(n1.product());       // Returns product of the numbers
console.log(n1.greaterThan(3));  // Returns numbers greater than 3
console.log(n1.howMany(3));      // Returns how many times the number 3 appears
