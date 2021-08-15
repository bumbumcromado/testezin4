var paragrafo = document.querySelector('p');
fetch('https://druiddd-test.herokuapp.com/esqueleto/c1cp1').then(function (response) {
  return response.json();
}).then(function (json) {
  msg = json.content;
  paragrafo.textContent = msg;
});