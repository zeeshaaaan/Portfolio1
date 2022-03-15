// ===Typing Animation==== //

var typed = new Typed(".typing",{
    strings:["","Frontend Developer","Web Developer","Angular Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ===Aside==== //

// const nav = document.querySelector(".nav"),
//     navList=nav.querySelectorAll(".li"),
//     totalNavList = navList.length;
//     for(let i=0;i<totalNavList;i++)
//     {
//         const a= navList[i].querySelector("a");
//         a.addEventListener("click", function(){
//             for(let j=0;totalNavList;j++){
//                 navList[j].querySelector("a").classList.remove("active");
//             }
//             this.classList.add("active")
            
//         })
//     }

function myFunction(e) {
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
  }

  window.onbeforeunload = function() { 
    window.setTimeout(function () { 
        window.location = '/#home';
    }, 0); 
    window.onbeforeunload = null;
    
}



  
  

