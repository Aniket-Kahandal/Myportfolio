$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });


    
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });



    let typed = new Typed(".typing-1",{
       strings : ["Developer..", "Student..", "UI/UX Developer"],
       typeSpeed : 100,
       backSpeed : 60,
       loop : true,
    });


    let typed2 = new Typed(".typing-2",{
      strings : ["Developer", "Student", "UI/UX Developer"],
      typeSpeed : 100,
      backSpeed : 60,
      loop : true,
   });




    $('.carousel').owlCarousel({
      margin:20,
      loop :true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          nav: false
        },
        600:{
          items:2,
          nav: false
        },
        1000:{
          items:3,
          nav: false
        }
      }
    });
    
    /* Read button */
 
    let readMoreBtn = document.getElementById('read-more-btn');
    readMoreBtn.addEventListener('click',function(){
      let showHide = document.getElementById('invisible-text-id');
      let str = readMoreBtn.innerHTML;
      showHide.classList.toggle('invisible-text');
      readMoreBtn.innerHTML = (str == "Read More") ? "Read Less" : "Read More";
    });
});
