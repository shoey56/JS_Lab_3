/* Task: Create an array of objects representing student submissions. Define a variety of
functions for working with such an array. Also call each of the functions at least once to test it.*/


/*Declare a variable named submissions that is initialized to an array with the following
objects:*/
let submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
]


// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.
function addSubmission(array, newName, newScore, newDate){
    let passed = true;
    if (newScore >= 60){
        passed = true;
    }else{
        passed = false;
    }
    let newStudent = {name: newName, score: newScore, date: newDate, passed: passed}
    array.push(newStudent);
}
addSubmission(submissions, "Shannon", 87, "2020-11-11");
// console.log(submissions);


/* Declare a function named deleteSubmissionByIndex
○ Parameter(s): array, index
○ Functionality: remove the object from the array at the specified index using the
splice method.*/
function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);


/*Declare a function named deleteSubmissionByName
○ Parameter(s): array, name
○ Functionality: remove the object from the array that has the provided name.
Incorporate the findIndex method and the splice method.*/
function deleteSubmissionByName(array, name){
    const i = array.findIndex((array) => array.name == name);
  array.splice(i, 1);
}
deleteSubmissionByName(submissions, "Shannon");
// console.log(submissions);


/*Declare a function named editSubmission
○ Parameter(s): array, index, score
○ Functionality: update an object’s score in the array at the specified index. Use
conditional statements to set the value for the passed property to true if the
score is greater than or equal to 60 and false otherwise.*/
function editSubmission(array, index, score){
    array[index].score = score;
    let passed = true;
    if (score >= 60){
        passed = true;
    }else{
        passed = false;
    }
    array[index].passed = passed;
    }
    editSubmission(submissions, 1, 57);
    // console.log(submissions);


/**Declare a function named findSubmissionByName
○ Parameter(s): array, name
○ Functionality: return the object in the array that has the provided name. Use the
find method.
 */
function findSubmissionByName(array, name){
    const findByName = array.find((array) => array.name == name);
    return findByName;
}
// console.log(findSubmissionByName(submissions, "Jill"));


/**Declare a function named findLowestScore
○ Parameter(s): array
○ Functionality: return the object in the array that has the lowest score. Use the
forEach method to loop through the whole array.
 */
function findLowestScore(array){
    let lowestObject = null;
    array.forEach(function(object){
       let newScore = object.score;
       if (lowestObject === null || newScore < lowestObject.score){
           lowestObject = object;
       }
   });
   return lowestObject; 
}
// console.log(findLowestScore(submissions));


/** Declare a function named findAverageScore
○ Parameter(s): array
○ Functionality: return the average quiz score. Use a for...of loop.
 */
function findAverageScore(array){
    let totalScore = 0;
    let count = 0;
    for (object of array){
        let score = object.score;
        totalScore += score;
        count++;
    }
    let averageScore = totalScore/count;
    return averageScore;
}
// console.log(findAverageScore(submissions));


/**Declare a function named filterPassing
○ Parameter(s): array
○ Functionality: return a new array using the filter method. The filter method
should find objects in the array that have passing scores */
function filterPassing(array){
    let passing = array.filter(passed => passed.passed === true);
    return passing;    
}
// console.log(filterPassing(submissions));


/**Declare a function named filter90AndAbove
○ Parameter(s): array
○ Functionality: return a new array using the filter method. The filter method
should find objects in the array that have scores greater than or equal to 90.
 */
function filter90AndAbove(array){
    let above90 = array.filter(above => above.score >= 90);
    return above90;
}
// console.log(filter90AndAbove(submissions));


//////EXTENDED CHALLENGE///////////


/** Create a function named createRange
○ Parameter(s): start, end
○ Functionality: construct and return an array of integers starting with the start
parameter and ending at the end parameter. e.g createRange(2, 5) returns
[2, 3, 4, 5].
 */
function createRange(start, end){
    var range = [];
    for (let num = start; num <= end; num++)
        range.push(num);
        return range;
}
// console.log(createRange(2, 5));


/**Create a function named countElements
○ Parameter(s): array (an array of strings)
○ Functionality: construct and return an object with the array values as keys and
the number of times that key appears in the array as values. e.g.
countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2,
c: 1 }. */
function countElements(array){
    newCount = array;
    var count = {};
    newCount.forEach(function(i) {count[i] = (count[i]||0) + 1});
    return count;
}
// console.log(countElements(['a', 'b', 'a', 'c', 'a', 'b']));