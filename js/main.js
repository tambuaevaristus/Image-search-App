let result = document.getElementById("images");
let form = document.getElementById("form");
form.addEventListener('submit', submit);
let searchedResult




console.log(result.value);

function submit(event){
    event.preventDefault();
    var image = document.getElementById("image_name").value;
    searchedResult = image.trim();
    console.log(searchedResult);

    // if(result ==[]){
    //     result.innerHTML = ` <img
    //     src="https://media.giphy.com/media/wvtt4mtViPOSrLYNFh/giphy.gif"
    //     alt="Mountains"
    //     width="100%"
    //     height="100%"
    //   />`;
    // }

    search_from_unsplash(searchedResult);



} 

async function search_from_unsplash(searchedResult){
    const endpoint = `https://api.unsplash.com/search/photos?query=${searchedResult}&client_id=pxWHpPFlVa0TdL83fLSSjsKN2KA2Ffm7Y9e4D-cVV4Q`;

    const response = await fetch(endpoint);
    if(!response.ok){
        throw Error(response.statusText);
    }
    const jsonResult = await response.json();
    console.log(jsonResult.results)
   


    jsonResult.results.forEach((element) => {
        let img = document.createElement('img');
        let div = document.createElement('div');

        div.setAttribute('class','gallery');
        div.appendChild(img)
        img.setAttribute("src", element.urls.small);
        img.setAttribute("height","100%")
        result.appendChild(div);

        let inner_div = document.createElement('div');
        inner_div.setAttribute('class', 'desc');
        let text = document.createTextNode(element.urls.description)
        console.log(element.urls.description);
        inner_div.appendChild(text);

    });
    return jsonResult;
}



//  function fetchResults(searchedResult) {
//     try {
//         const results = search_from_unsplash(searchedResult);
//         console.log(results);
//         displayResults(results);
//     } catch(err) {
//         console.log(err);
        
//     }
// } 


function displayResults(jsonResult){
    const searchResults = document.getElementById("images");
    searchResults.textContent = "";

 


}