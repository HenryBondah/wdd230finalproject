

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
const urlParams = new URLSearchParams(window.location.search);
const urlParam = new URL(window.location);
const urlparams = urlParam.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of urlparams) {
  console.log(p);
}

document.querySelector('#name').textContent = urlparams.get("name");
document.querySelector('#email').textContent = urlparams.get("email");
document.querySelector('#phone').textContent = urlparams.get("phone");
document.querySelector('#fruit1').textContent = urlparams.get("fruit1");
document.querySelector('#fruit2').textContent = urlparams.get("fruit2");
document.querySelector('#fruit3').textContent = urlparams.get("fruit3");
document.querySelector('#message').textContent = urlparams.get("message");

