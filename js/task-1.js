const quantityCategories = document.querySelectorAll(".item")
console.log(`Number of categories: ${quantityCategories.length}`);

quantityCategories.forEach(item => console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.childElementCount}`));