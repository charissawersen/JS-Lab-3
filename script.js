// name, score, date, passed are the objects
//  Declare a variable named submissions that is initialized to an array with the following objects:
const submissions = [
    { name: 'Jane', score: 95, date: '2020-01-24', passed: true },
    { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
    { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
    { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
];

function addSubmissions(array, newName, newScore, newDate) {
    let passed;
    if (newScore >= 60) {
        passed = true;
    }
    else {
        passed = false;
    };
    let newStudent = { name: newName, score: newScore, date: newDate, passed: passed, };
    array.push(newStudent);
};

// test function with dummy data: 
// addSubmissions(submissions, 'Zelda', 80, '2020-11-12');
// console.log(submissions);
// addSubmissions(submissions, 'Charissa', 99, '2020-11-13');
// console.log(submissions);
// addSubmissions(submissions, 'Mario', 55, '2020-06-12');
// console.log(submissions);

// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove the object from the array at the specified index using the
// splice method.
function deleteSubmissionByIndex(array, index) {
    let removed = array.splice([index], 1);
    console.log(removed);
};
// test function with dummy data: 
// deleteSubmissionByIndex(submissions, [3]);

// // Declare a function named deleteSubmissionByName
// // Parameter(s): array, name
// // Functionality: remove the object from the array that has the provided name.
// // Incorporate the findIndex method and the splice method.
function deleteSubmissionByName(array, name) {
    let index = array.findIndex(array => array.name === name);
    let removed = array.splice(index, 1);
    console.log(removed)
};
// test function with dummy data; 
// deleteSubmissionByName(submissions, 'Mario');

// // Declare a function named editSubmission
// // Parameter(s): array, index, score
// // Functionality: update an object’s score in the array at the specified index. Use
// // conditional statements to set the value for the passed property to true if the
// // score is greater than or equal to 60 and false otherwise.
function editSubmission(array, index, score) {
    if (score >= 60) {
        passed = true;
    }
    else {
        passed = false;
    };
    array[index].score = score;
    array[index].passed = passed;
};
// test function with dummy data; 
// editSubmission(submissions, 1, 60);
// editSubmission(submissions, 0, 59);
// console.log(submissions);

// // Declare a function named findSubmissionByName
// // Parameter(s): array, name
// // Functionality: return the object in the array that has the provided name. Use the
// // find method.
function findSubmissionByName(array, name) {
    const found = array.find(array => array.name === name);
    console.log(found);
};
// test function
// findSubmissionByName(submissions, 'Charissa');

// // Declare a function named findLowestScore
// // Parameter(s): array
// // Functionality: return the object in the array that has the lowest score. 
// // Use the forEach method to loop through the whole array.
function getLowestScore(array) {
    let lowestScore = 105;
    let lowestStudent = null;
    array.forEach(function (item) {
        if (item.score < lowestScore) {
            lowestScore = item.score;
            lowestStudent = item;
        }
    });
    return lowestStudent;
};
let lowestStudent = getLowestScore(submissions)
// test function
// console.log(lowestStudent);

// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score. Use a for...of loop.
function findAverageScore(array) {
    let sum = 0;
    for (let item of array) {
        {
            sum += item.score;
        }
        let avg = sum / array.length;
        return avg; 
    }
};
let avg = findAverageScore(submissions)
// test function
// console.log(avg);

// Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have passing scores.
function filterPassing(array) {
    let passingScore = array.filter(item => item.score >= 60);
    console.log(passingScore);
}
// test function
// filterPassing(submissions);

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have scores greater than or equal to 90.
function filter90AndAbove(array) {
    let highScore = array.filter(item => item.score >= 90);
    console.log(highScore);
}
// test function
// filter90AndAbove(submissions);