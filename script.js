// Get elements
paragraphDiv = document.getElementById("p-div");
imageDiv = document.getElementById("img-div");
let P_button = document.getElementById("p-button");
let Img_button = document.getElementById("img-button");
let Nothing_button = document.getElementById("nothing-button");

let pCount = 0;
function paragraph() {
    // Hide image div and show paragraph div
    imageDiv.style.display = "none";
    paragraphDiv.style.display = "block";

    // Create new paragraph element and add it to div
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Hot Chocolate is bad today";
    paragraphDiv.appendChild(newParagraph);
    
    // Increment pCount and update counter
    pCount++;
    document.getElementById("p-count").innerText = `pCount: ${pCount}`
}

let imgCount = 0;
function image() {
    // Hide paragraph div and show image div
    paragraphDiv.style.display = "none";
    imageDiv.style.display = "block";
    
    // Create new image and add it to div
    let newImage = document.createElement("img");
    newImage.src = "Pidgeotto.png";
    imageDiv.appendChild(newImage);
    
    // Increment imgCount and update counter
    imgCount++;
    document.getElementById("img-count").innerText = `imgCount: ${imgCount}`;

}

let nothingCount = 0;
function nothing(){
    // Increment counter and update nothing counter
    nothingCount++;
    document.getElementById("nothing-count").innerHTML = `nothingCount: ${nothingCount}`;
}

// Event listeners
P_button.addEventListener("click", paragraph);
Img_button.addEventListener("click", image);
Nothing_button.addEventListener("click", nothing);