
       // Load the fruits data from the JSON file
       const fruitsUrl = "fruits.json";
       fetch(fruitsUrl)
         .then(response => response.json())
         .then(data => {
           // Populate the select inputs with the fruits
           const selectInputs = document.querySelectorAll("select");
           selectInputs.forEach(selectInput => {
             const option = document.createElement("option");
             option.value = "";
             option.text = "Select a fruit";
             selectInput.appendChild(option);
             
             data.forEach(fruit => {
               const option = document.createElement("option");
               option.value = fruit.name;
               option.text = fruit.name;
               selectInput.appendChild(option);
             });
           });
         });



let urlParam = new URL(window.location);
let params1  = urlParam.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params1) {
    console.log(p);
}

document.querySelector('#Name').textContent = params1.get("name");
document.querySelector('#Email').textContent = params1.get("email");
document.querySelector('#Phone').textContent = params1.get("phone");
document.querySelector('#Fruit1').textContent = params1.get("fruit1");
document.querySelector('#Fruit2').textContent = params1.get("fruit2");
document.querySelector('#Fruit3').textContent = params1.get("fruit3");
document.querySelector('#Message').textContent = params1.get("message")

