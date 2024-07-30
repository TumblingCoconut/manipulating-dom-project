paragraphDiv = document.getElementById("p-div");
imageDiv = document.getElementById("img-div");
let addP = document.getElementById("p-button");
let addImg = document.getElementById("img-button");

function add_paragraph() {
    imageDiv.style.display = "none";
    paragraphDiv.style.display = "block";
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "Hot Chocolate is bad today";
    paragraphDiv.appendChild(newParagraph);
}

function add_image(){
    paragraphDiv.style.display = "none";
    imageDiv.style.display = "block";
}


addP.addEventListener("click", add_paragraph);
addImg.addEventListener("click", add_image);