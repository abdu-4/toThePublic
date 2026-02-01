function deleteFirstElement(array){
    return array.shift();
}

let arrayOne = [1,2,3,4,5];
const array = document.querySelector('.array');
array.innerHTML = deleteFirstElement(arrayOne);