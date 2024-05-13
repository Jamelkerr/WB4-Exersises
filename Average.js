"use strict"

const grades = [80, 83, 86, 92, 100];


function getAvg(grades) {
  
  return grades.reduce((acc, c) => acc + c, 0) / grades.length;
}

console.log(getAvg(grades));
