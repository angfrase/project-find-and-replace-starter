// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.
console.log ("hello")
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE 

replaceAllButton.addEventListener("click", function(){
    // console.log(".replace-all-button")

    let search= findInput.value
    let replace = replaceInput.value

    for(let i=0;i<rowElements.length;i++){
        let cellElements=getCellElements(rowElements[i])
        // console.log(cellElements);

       for(let j=0;j<cellElements.length;j++) {
           let cellText=cellElements[j].innerHTML;
        //    console.log(cellText)
            if(cellText.includes(search) ) {
            // console.log("search text")
            cellText=cellText.replace(search,replace);
            console.log( replace )
            }
        }
    }
})


// function filteredArray(arr, elem) {
//     var newArr = [];
//     // change code below this line
//     newArr = [...arr];
//     for (var i = 0; i < arr.length; i++){
//       for(var x = 0; x < arr[i].length; x++){
//         if (elem === newArr[i][x]){
//           newArr[i] = [];
//         }
//       }
//     }
//     return newArr.filter(function(i){ return i.length > 0 });
//   }
// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
