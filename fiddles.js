// converting a sentence into a chain of keywords -
// all the words of the sentence are converted to keywords

const pickedSentence = "The time has come when it will pay to act on the reality underlying the the existing newspaper structure."

function allKeyWords(string){
  const arrayToString =[];
  string.split(" ").map((ele, index) => {
    arrayToString.push(`#${ele}`)
  })
  return arrayToString.join(" ")
}
console.log(allKeyWords(pickedSentence));


// Only one word become a keyword

function randomKeyWord(string){
  const arrayToString =[];
  const stringToArray = string.split(" ");
  var item = stringToArray[Math.floor(Math.random()*stringToArray.length)];
  stringToArray.map((ele, index) => {
    arrayToString.push(`${ele}`)
      if(ele === item){
        arrayToString.push(`#${ele}`)
      }
  })
  return arrayToString.join(" ")
}
// console.log(randomKeyWord(pickedSentence));


// Define the number of words that'll become keywors

function randomKeyWord(string, selectedNumber){
  const arrayToString =[];
  const selectedStrings = [];
  const stringToArray = string.split(" ");

  for(var i=0; i<selectedNumber; i++){
    var item = stringToArray[Math.floor(Math.random()*stringToArray.length)];
    selectedStrings.push(item)
  };

  stringToArray.map((ele, index) => {
    arrayToString.push(`${ele}`)
      if(selectedStrings.indexOf(ele) > -1){
        arrayToString.push(`#${ele}`)
      }
  })
  return arrayToString.join(" ")
}

console.log(randomKeyWord(pickedSentence, 8));
