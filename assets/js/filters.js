let indoorArrow = document.getElementById('indoor--arrow');
let outdoorArrow = document.getElementById('outdoor--arrow');
let medicineArrow = document.getElementById('medicine--arrow');

let indoorList = document.getElementById('indoor--list');
let outdoorList = document.getElementById('outdoor--list');
let medicineList = document.getElementById('medicine--list');


indoorArrow.addEventListener('click', () => {
    if(indoorArrow.classList.contains('filters__sub-heading--arrow-down')) {
        indoorArrow.classList.toggle('toggle');
    }
    if(indoorList.classList.contains('filters__sub-heading--list')) {
        indoorList.classList.toggle('toggle');
    }
});

outdoorArrow.addEventListener('click', () => {
    if(outdoorArrow.classList.contains('filters__sub-heading--arrow-down')) {
        outdoorArrow.classList.toggle('toggle');
    }
    if(outdoorList.classList.contains('filters__sub-heading--list')) {
        outdoorList.classList.toggle('toggle');
    }
});

medicineArrow.addEventListener('click', () => {
    if(medicineArrow.classList.contains('filters__sub-heading--arrow-down')) {
        medicineArrow.classList.toggle('toggle');
    }
    if(medicineList.classList.contains('filters__sub-heading--list')) {
        medicineList.classList.toggle('toggle');
    }
});
