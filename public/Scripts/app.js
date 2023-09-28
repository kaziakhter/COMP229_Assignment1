// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Capture form information 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // For demonstration, log the captured information
    console.log('Captured Form Information:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Redirect to the Home Page
    window.location.href = "/home"; 
  }