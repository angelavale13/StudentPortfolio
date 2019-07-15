function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for your message!");
      return false;
   }
}

window.onload = setForm;