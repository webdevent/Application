const form = document.getElementById('application-form');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // prevent the default form submission behavior
  collectFormData();
});

function collectFormData() {
    const formData = {};
    const formElements = form.elements;
  
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type === 'radio' || element.type === 'checkbox') {
        if (element.checked) {
          formData[element.name] = element.value;
        }
      } else {
        formData[element.name] = element.value;
      }
    }
  
    // Store the form data in local storage (optional)
    localStorage.setItem('formData', JSON.stringify(formData));
  // Redirect to the display page
  window.location.href = 'displayin.html';
}

const displayDataDiv = document.getElementById('display-data');

// Retrieve the form data from local storage (if stored)
const formData = JSON.parse(localStorage.getItem('formData'));

// Display the form data
Object.keys(formData).forEach((key) => {
  const value = formData[key];
  const paragraph = document.createElement('p');
  paragraph.textContent = `${key}: ${value}`;
  displayDataDiv.appendChild(paragraph);
});