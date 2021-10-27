const categories = document.querySelector('#categories');
const allItemCategories = categories.querySelectorAll('.item');
const countCategories = allItemCategories.length;
console.log(`Number of categories: ${countCategories}`);

allItemCategories.forEach((item) => {
    let titleText = item.querySelector('h2').textContent;
    let countElements = item.querySelectorAll('li').length;
    console.log(`Category: ${titleText}`)
    console.log(`Elements: ${countElements}`)

});