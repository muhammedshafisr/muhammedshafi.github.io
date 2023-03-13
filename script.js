$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

//  validation starting from here ..

function req() {

  $("#form").submit(function(e) {
    e.preventDefault();
});
  // var btn = document.getElementById('button').enable=true;
  const text = document.getElementById("validationtext");
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const flag = document.getElementsByClassName('flag');
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emi = document.getElementById("email");

  if (username === "") {
    text.innerHTML = "Name box cannot be empty !";
    text.style.color = "red";
    const txt = document.getElementById("username");
    txt.style.border = "2px solid red";
  } else if (email === "") {
    text.innerHTML = "Email box cannot be empty !";
    text.style.color = "red";
    emi.style.border = "2px solid red";
  }else if (!email.match(re)) {
    text.innerHTML = "Enter a valid email !";
    text.style.color = "red";
    emi.style.border = "2px solid red";
  }else if (subject === "") {
    text.innerHTML = "Subject box cannot be empty !";
    text.style.color = "red";
    const sbj = document.getElementById("subject");
    sbj.style.border = "2px solid red";
  }else if (message === "") {
    text.innerHTML = "Message box cannot be empty !";
    text.style.color = "red";
    const msg = document.getElementById("message");
    msg.style.border = "2px solid red";
  }
  else{
    for (let i = 0; i < flag.length; i++) {
        flag[i].style.border='2px solid green';
    }
    text.innerHTML='Message sended'
    text.style.color='green'
    
    



    $("#form").submit((e)=>{
      console.log('in');
        
        // e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwhOxrs-RaaBUJ_xiO6wOoi4aIKQVRthNlSkxEOHE5e_WUn4fJQ/exec",
            data:$("#form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                 window.location.reload()
                //window.location.href="https://google.com"
                 
            },
            error:function (err){
              alert("Something Error")
  
            }
        })
        console.log('out');
    })
        

  }
  // btn.disabled=true;
    
    
}
