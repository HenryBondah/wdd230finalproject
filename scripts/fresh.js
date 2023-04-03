// Load the fruit options from the JSON file
fetch('fruits.json')
.then(response => response.json())
.then(data => {
    // Populate the select inputs with the fruit options
    const fruitSelects = document.querySelectorAll('select[name^="fruit"]');
    fruitSelects.forEach(select => {
        data.fruits.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit;
            option.text = fruit;
            select.appendChild(option);
        });
    });
});