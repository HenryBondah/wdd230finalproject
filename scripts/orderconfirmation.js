
let url = new URL(window.location);
let params = url.searchParams;

for (const p of params) {
  console.log(p);
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    document.querySelector('#name').value = params.get('name');
    document.querySelector('#email').value = params.get('email');
    document.querySelector('#phone').value = params.get('phone');
    document.querySelector('#fruit1').value = data.fruit1;
    document.querySelector('#fruit2').value = data.fruit2;
    document.querySelector('#fruit3').value = data.fruit3;
    document.querySelector('#message').value = data.message;
  }
};
xhr.open('GET', '../freshpage/fruits.json');
xhr.send();

