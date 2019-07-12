"use strict";
/*
   Final Project Step 6
   Student Portfolio
   
   Author: Angela Valenzuela
   Date: 05/01/2019

   Filename: sidebar.js
*/


function w3_open() {
            document.getElementById("mySidebar").style.display = "block";
            document.getElementById("myOverlay").style.display = "block";
        }

function w3_close() {
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("myOverlay").style.display = "none";
        }

window.onload = w3_open();
window.onload = w3_close();