// const search = () => {
//     const searchBox = document.getElementById("getSearch");
//     console.log("You searched for: " +  search);
// }

// Algorithm
// Once user inputs query on Search Box, and presses enter or clicks Google Search button
// Code will take user's query and save it
// Code will

const searchBox = document.getElementById("getSearch");
const searchBtn = document.getElementById("searchButton");

// console.log(searchBox);


searchBtn.addEventListener("click", () =>{
    const searchQuery = searchBox.value;
    // alert("You searched for: " + searchQuery);

    if (searchQuery !== "") {
        alert(`You searched for: ${searchQuery}`);
    } else {
        alert("Please input value on search bar :)!");
    }
} );