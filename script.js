//Redirecting user to another site
window.addEventListener("message", loginMessage, false);
  function loginMessage(event)
  {
    if(event && event.data && event.data.redirectUrl)
    {
      window.location.href = event.data.redirectUrl;
    }
  };

// Get the modal
var modal = document.getElementById('id01');
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}