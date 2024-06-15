const catImg = document.querySelector("#cat-img");
console.log(catImg);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

catImg.addEventListener("mouseover", showInfo);
catImg.addEventListener("mouseout", hideInfo);

moreInfo.innerHTML = "<p>Add to cart</p>";

function showInfo(){
    catImg.classList.add("show");
    moreInfo.computedStyleMap.backgroundColor = "coral";
}

function hideInfo(){
    catImg.classList.remove("show");
}