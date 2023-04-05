
let url = new URL(window.location);
let params  = url.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

document.querySelector('#Fruit1').textContent = params.get("name");
document.querySelector('#Fruit2').textContent = params.get("food");
document.querySelector('#Fruit3').textContent = params.get("gender")
document.querySelector('#message').textContent = params.get("gender")