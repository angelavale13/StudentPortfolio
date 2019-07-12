/*
   Final Project Step 6
   Student Portfolio
   
   Author: Angela Valenzuela
   Date: 11/19/2018


   Filename: contact_js.js

   Purpose: The purpose of this program is to report
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.
*/

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for your message!");
      return false;
   }
}

window.onload = setForm;