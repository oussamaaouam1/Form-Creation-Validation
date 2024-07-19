document.addEventListener('DOMContentLoaded', () => {
  //form selection
  const form = document.getElementById ('registration-form');
  //feedback variable
  const feedbackDiv = document.getElementById ('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    //variables for inputs
    const username = document.getElementById ('username').value.trim();
    const email = document.getElementById ('email').value.trim();
    const password = document.getElementById ('password').valu.trim();

    let isValid = true ;
    let message = [];

    if (username.length < 3) {
      isValid = false;
      message.push("username should be more htan 3 character!");

    }
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Email must contain both '@' and '.' characters.");
      
    }
    if (username.length < 8) {
      isValid = false;
      message.push("password should be more htan 3 character!");

    }
    feedbackDiv.style.display = "block";
    
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = '#28a745';
  } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
    }

  });
});
