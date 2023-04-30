function setInputField(inputElement, defaultValue) {
    inputElement.addEventListener('focus', () => {
      if (inputElement.value === defaultValue) {
        inputElement.value = '';
      }
      inputElement.style.border = "2px solid #4CAF50";
      inputElement.style.borderRadius = "4px";
    });
  
    inputElement.addEventListener('focusout', () => {
      if (inputElement.value === '') {
        inputElement.value = defaultValue;
      }
      inputElement.style.border = '';
      inputElement.style.borderRadius = '';
    });
  }
  
  const nameValue = document.getElementById("username");
  setInputField(nameValue, 'Enter your name');
  
  const emailValue = document.getElementById('email');
  setInputField(emailValue, 'Enter your email');
  
  const textarea = document.querySelector('textarea');
  setInputField(textarea, 'Enter your message');