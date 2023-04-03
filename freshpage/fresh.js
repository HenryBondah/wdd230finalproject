   // Add your JavaScript code here
   const form = document.getElementById('order-form');
   form.addEventListener('submit', (event) => {
     event.preventDefault();
 
     const firstName = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const fruit1 = document.getElementById('fruit1').value;
     const fruit2 = document.getElementById('fruit2').value;
     const fruit3 = document.getElementById('fruit3').value;
     const fruits = [fruit1, fruit2, fruit3].filter(fruit => fruit !== '');
     const specialInstructions = '';
 
     const queryString = `firstName=${firstName}&email=${email}&phone=${phone}&fruits=${fruits.join(',')}&specialInstructions=${specialInstructions}`;
 
     window.location.href = `order-confirmation.html?${queryString}`;
   });
 
 
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