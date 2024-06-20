// navigation bar function
    function myMenuFunction(){
      var menuBtn = document.getElementById('myNavMenu');

      if(menuBtn.className ==="nav-menu"){
        menuBtn.className += "responsive";
      } else {
        menuBtn.className = "nav-menu"
      }
    }



// add shadow on navigation
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader = document.getElementById(header);

      if(document.body.scrollTop > 50 || documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else{

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }

// typing effect
var typingEffect = new Typed(".typedText", {
  String : ["Developer", "Youtube", "Designer"], 
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80, 
  backDelay : 2000
})





// scroll reveal animation 


const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true

})
// home
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social_icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})

// project box
sr.reveal('.project-box', {Interval: 200})
// heading
sr.reveal('.top-header', {})
//  about information contact info
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', {delay: 100})
srLeft.reveal('.contact-info', {delay: 100})

// about skills  and form box

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

//  project information
// change actve links
const section = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = Window.scrollY;

  section.forEach(current =>{
    const sectionHeight = current.offsetHeight
          sectionTop = current.offsetTop - 50
          sectionId = current.getAttribute('id')


          if(scrollActive > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('Active_link')
          } else {

            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('Active_link')

          }
  })
}
window.addEventListener('scroll', scrollActive)




