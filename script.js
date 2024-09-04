 // Obtener los parámetros de la URL
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);

 // Extraer los valores de los parámetros
 const name = urlParams.get('name');
 const address = urlParams.get('address');
 const phone = urlParams.get('phone');
 const email = urlParams.get('email');
 const education = urlParams.get('education');
 const gender = urlParams.get('gender');

 // Mostrar los valores en la página
 document.getElementById('nameOutput').textContent = name;
 document.getElementById('addressOutput').textContent = address;
 document.getElementById('phoneOutput').textContent = phone;
 document.getElementById('emailOutput').textContent = email;
 document.getElementById('educationOutput').textContent = education;
 document.getElementById('genderOutput').textContent = gender;