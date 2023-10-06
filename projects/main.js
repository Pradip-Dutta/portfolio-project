let openbtn= document.querySelector('.btn');
let closebtn =document.querySelector('.modal-btn');
let modal = document.querySelector('.modal-box');

openbtn.addEventListener('click', function(){
    let modal = document.querySelector('.modal-box');
    if(modal.style.display === 'none'){
        modal.style.display = 'block';
    }else{
        modal.style.display = 'none';
    }
});

closebtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

// login form

var modal1 = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// food and dite palne site

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// faq

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
  });
});


// menu hide and show

function myFunction() {
  var x = document.getElementsByTagName("nav");
  if (x.className === "btn") {
    x.className += " responsive";
  } else {
    x.className = "btn";
  }
}