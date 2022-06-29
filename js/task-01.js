const categoriesElts = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElts.length}`);
categoriesElts.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
})