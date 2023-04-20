console.log('hello world')


// --------------- BELOW IS STEP 2 OF INSTRUCTIONS --------------- 

// // for elements put the element as 'element'
// // for class put the class as '.class'
// // for id put the id as '#id'

// let inputField = document.querySelector('input') // => getting the input element 
// let addbtn = document.querySelector('#addbtn') // =>getting the addbutton by id


// // creating our callback
// function addMovie(event){
//     event.preventDefault(); // => this prevents a refresh which voids added steps

//     let movie = document.createElement('li'); // => creating list element

//     let movieTitle = document.createElement('span') // creating span element
//     movieTitle.textContent = inputField.value // =>assigning the value from input field to movieTitle

//     movie.appendChild(movieTitle) // => appending movieTitle to list element "movie"
//     document.querySelector('ul').appendChild(movie) // => selecting the 'ul' from html document and adding 'movie'
// }


// // connecting js script to html

// document.addEventListener('submit',addMovie) //=> callback function triggered by submit



// --------------- BELOW IS STEP 3 OF INSTRUCTIONS --------------- 


// const inputField = document.querySelector('input') // => getting the input element 
// const addbtn = document.querySelector('#addbtn') // =>getting the addbutton by id

// // creating our delete function 
// function deleteMovie(event){
//     event.preventDefault(); // => this prevents a refresh which voids added steps

//     event.target.parentNode.remove() // => removing the item
// }


// // creating our addmovie function
// function addMovie(event){
//     event.preventDefault(); // => this prevents a refresh which voids added steps

//     const movie = document.createElement('li'); // => creating list element

//     const movieTitle = document.createElement('span') // creating span element
//     movieTitle.textContent = inputField.value // =>assigning the value from input field to movieTitle

//     movie.appendChild(movieTitle) // => appending movieTitle to list element "movie"
    
//     const deleteBtn = document.createElement('button'); // => creating a delete button
//     deleteBtn.textContent = 'X' // => setting the text contents of the button to an X

//     deleteBtn.addEventListener('click', deleteMovie) // callback function based on event click
//     movie.appendChild(deleteBtn) // =>adding the delete button to the new movie list item created

//     document.querySelector('ul').appendChild(movie) // => selecting the 'ul' from html document and adding 'movie'
// }




// // connecting js script to html
// document.addEventListener('submit',addMovie) //=> callback function triggered by submit







// --------------- BELOW IS STEP 4 OF INSTRUCTIONS --------------- 


// const inputField = document.querySelector('input') // => getting the input element 
// const addbtn = document.querySelector('#addbtn') // =>getting the addbutton by id

// // creating our delete function 
// function deleteMovie(event){
//     event.preventDefault(); // => this prevents a refresh which voids added steps

//     event.target.parentNode.remove() // => removing the item
// }

// function crossOffMovie(event){
//     // event.preventDefault(); // => this prevents a refresh which voids added steps
//     event.target.classList.toggle('checked')// =>used to pass a class to be added or removed, in this line "checked" is the class
// }

// // creating our addmovie function
// function addMovie(event){
//     event.preventDefault(); // => this prevents a refresh which voids added steps

//     const movie = document.createElement('li'); // => creating list element

//     const movieTitle = document.createElement('span') // creating span element
//     movieTitle.textContent = inputField.value // =>assigning the value from input field to movieTitle

//     movieTitle.addEventListener('click',crossOffMovie)

//     movie.appendChild(movieTitle) // => appending movieTitle to list element "movie"
    
//     const deleteBtn = document.createElement('button'); // => creating a delete button
//     deleteBtn.textContent = 'X' // => setting the text contents of the button to an X

//     deleteBtn.addEventListener('click', deleteMovie) // callback function based on event click
//     movie.appendChild(deleteBtn) // =>adding the delete button to the new movie list item created

//     document.querySelector('ul').appendChild(movie) // => selecting the 'ul' from html document and adding 'movie'
// }




// // connecting js script to html
// document.addEventListener('submit',addMovie) //=> callback function triggered by submit





// --------------- BELOW IS STEP 5 OF INSTRUCTIONS --------------- 


const inputField = document.querySelector('input') // => getting the input element 
const addbtn = document.querySelector('#addbtn') // =>getting the addbutton by id
const message = document.querySelector('#message')  // => getting the aside element by id


// creating our delete function 
function deleteMovie(event){
    event.preventDefault(); // => this prevents a refresh which voids added steps

    event.target.parentNode.remove() // => removing the item
}

function crossOffMovie(event){
    // event.preventDefault(); // => this prevents a refresh which voids added steps
    event.target.classList.toggle('checked')// =>used to pass a class to be added or removed, in this line "checked" is the class
}

// creating our addmovie function
function addMovie(event){
    event.preventDefault(); // => this prevents a refresh which voids added steps

    const movie = document.createElement('li'); // => creating list element

    const movieTitle = document.createElement('span') // creating span element
    movieTitle.textContent = inputField.value // =>assigning the value from input field to movieTitle

    movieTitle.addEventListener('click',crossOffMovie)

    movie.appendChild(movieTitle) // => appending movieTitle to list element "movie"
    
    const deleteBtn = document.createElement('button'); // => creating a delete button
    deleteBtn.textContent = 'X' // => setting the text contents of the button to an X

    deleteBtn.addEventListener('click', deleteMovie) // callback function based on event click
    movie.appendChild(deleteBtn) // =>adding the delete button to the new movie list item created

    document.querySelector('ul').appendChild(movie) // => selecting the 'ul' from html document and adding 'movie'
}




// connecting js script to html
document.addEventListener('submit',addMovie) //=> callback function triggered by submit
