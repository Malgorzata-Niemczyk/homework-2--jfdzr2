// Zad 1
const arrA = [9, 3, '7', '3'];
const arrB = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
const arrC = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];

function sumElements() {
 
}

function sumNumbers() {

}



// Zad 2
function getInitials() {}


// Zad 3
function sumPositives() {}



//BONUS
function countPositivesAndSumNegatives() {
  // returns [positivesCount, negativeSum]
}



// Zad 4
var students = [
  {name: 'Janusz', tasksDone: 150, hoursSpent: 160},
  {name: 'Karyna', tasksDone: 1, hoursSpent: 1},
  {name: 'Krystek', tasksDone: 100, hoursSpent: 80},
  {name: 'Seba', tasksDone: 200, hoursSpent: 40},
  {name: 'Dagmara', tasksDone: 50, hoursSpent: 100}
]

 var requirements = {
  minHoursSpent: 80,
  minTasksDone: 100
}

//console.log(students[2].tasksDone)

function praiseHardworkersBashLazyStudents(student) {
  switch (true) {
    case (student.tasksDone >= 100 && student.hoursSpent >= 80):
      console.log(`${student.name} - gratulacje! Ciężka praca popłaca!`);
      break;
    default:
      console.log(`${student.name} - DO ROBOTY LENIE!`)
  }
}

console.log(students.filter(praiseHardworkersBashLazyStudents))


// Zad 5
const arr1 = [1, 2]
const arr2 = [3, 4]
const newArr = arr1.concat(arr2)

// console.log(newArr)

const sumArrays = newArr.reduce((a, b) => {
  return a + b
})

console.log(sumArrays)


// Zad 6
function canYouPlayBanjo() {}


// Zad 7
function reverseString(str) {
  return str.split('').reverse('').join('');
};

console.log(reverseString('world'));


// Zad 8
function enough() {}



// Zad 9
function multiplyTable() {}



// Zad 10
function canDivideBy() {}



// Zad 11
function ageDifferences() {}



// Zad 12
function gimmeMiddleIndex() {}



// Zad 13
function whatsMySuperVillainName() {}



// Zad 14
function checkExam() {}



// Zad 15
function getNiceNames(){}

function getNaughtNames() {}
