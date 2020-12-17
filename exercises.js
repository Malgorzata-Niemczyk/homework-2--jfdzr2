// Zad 1
const arrA = [9, 3, '7', '3'];
const arrB = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
const arrC = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];

const toNumArrA = arrA.map(Number);
//console.log(toNumArrA);
const toNumArrB = arrB.map(Number);
//console.log(toNumArrB);
const toNumArrC = arrC.map(Number);
//console.log(toNumArrC)

//Zad 1 - część 1
function sumElements(arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum;
};

console.log(sumElements(toNumArrA));
console.log(sumElements(toNumArrB));
console.log(sumElements(toNumArrC))

//Zad 1 - część 2
function sumNumbers(arr) {
  const numbers = arr.filter(value => {
    if (typeof(value) === 'number') {
      return value;
    }
  })
  //console.log(numbers)
  
  let total = 0;
  for (let num in numbers) {
      total += numbers[num]
  }
  return total
};

console.log(sumNumbers(arrA));
console.log(sumNumbers(arrB));
console.log(sumNumbers(arrC));



// Zad 2
function getInitials(name) { 
    const nameArr = name.split(' ');

    const firstInit = nameArr.shift().charAt(0).toUpperCase();
    const lastInit = nameArr.pop().charAt(0).toUpperCase();

    return `${firstInit}.${lastInit}.`;
}

console.log(getInitials('Harry Potter'))



// Zad 3
const mixedArr1 = [1,2,3,4,5];
const mixedArr2 = [1,-2,3,4,5];
const mixedArr3 = [-1,-2,-3,-4,-5];
const mixedArr4 = [-1,2,3,4,-5];
const emptyArr = [];

function sumPositives(arr) {
  const positiveNum = arr.filter(value => {
    return (value > 0);
  })
  
  const sum = positiveNum.reduce((a, b) => {
    return (a + b);
  });
  
  return sum;
};

console.log(sumPositives(mixedArr1));
console.log(sumPositives(mixedArr2));
console.log(sumPositives(mixedArr4));

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
function canDivideBy(initNum, divisor1, divisor2) {
 if (initNum % divisor1 === 0 && initNum % divisor2 === 0) {
    return true;
 } else {
   return false;
 };
};

console.log(canDivideBy(-12, 2, -6));
console.log(canDivideBy(-12, 2, -5));


// Zad 11
const age = [82, 15, 6, 38, 35]

function ageDifferences() {
  const theOldest = Math.max(...age);
  console.log(`Najstarszy domownik ma ${theOldest} lat.`)

  const theYoungest = Math.min(...age);
  console.log((`Najmłodszy domownik ma ${theYoungest} lat.`))

  const ageDiff = `${theOldest}` - `${theYoungest}`
  console.log(`Różnica wieku między najstarszym a najmłodszym domownikiem wynosi ${ageDiff} lat.`)
}

ageDifferences()


// Zad 12
const numArray1 = [2, 3, 1];
const numArray2 = [5, 10, 14];

function gimmeMiddleIndex(arr) {
  const theMiddle = Math.round(arr.length -1) / 2;

  console.log(theMiddle);
}

gimmeMiddleIndex(numArray1);
gimmeMiddleIndex(numArray2);



// Zad 13
function whatsMySuperVillainName() {}



// Zad 14
function checkExam() {}



// Zad 15
const people = [
  { name: 'Kursant czytający ten tekst', wasNice: true },
  { name: 'Jack Mehoff', wasNice: false },
  { name: 'Santa', wasNice: true }
] 

function getNiceNames(person){
  
}

function getNaughtNames() {

}
