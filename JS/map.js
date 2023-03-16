// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//  if (ScrollTrigger.isTouch !==1) {
//     ScrollSmoother.create({
//         wrapper: '.wrapper',
//         content: '.content',
//         smooth: 1.5,
//         effects: true
//     })
//  }


window.addEventListener('scroll', function() {
    var header = document.querySelector('#main-header');
    var nav = document.querySelector('#main-nav');
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition > 50) {
      header.classList.add('shrink');
      nav.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
      nav.classList.remove('shrink');
    }
  });
  
  