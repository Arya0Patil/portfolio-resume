

function hide() {
    var x = document.getElementById("hidden");
    var btn = document.getElementById("connect-btn")

    if (x.style.display === "none") {
      x.style.display = "block";
     
    } else {
      x.style.display = "none";
    }

    
  }


  //SKILLS DISPLAY FUNCTION
  var Scontent = document.getElementById("skills");

  function skills() {
   
    hcontent.style.display = "none";
    econtent.style.display = "none";
    var sbtn = document.getElementById("sbtn")
    

    if (Scontent.style.display === "none") {
      Scontent.style.display = "flex";
      sbtn.style.color = 'blue'
      
      
     
    } else {
      Scontent.style.display = "none";
      sbtn.style.color = ' rgba(20, 20, 20, 0.829)'
    }

    
  }

// HOBBIES DISPLAY FUNCTION
var hcontent = document.getElementById("hobbies");
  function hobbies() {
    var hbtn = document.getElementById("hbtn")
    Scontent.style.display = "none";
    econtent.style.display = "none";
    
   

    if (hcontent.style.display != "none") {
        hcontent.style.display = "none";
        hbtn.style.color = ' rgba(20, 20, 20, 0.829)'
     
    } else {
        hcontent.style.display = "flex";
        hbtn.style.color = 'red'
        sbtn.style.color = ' rgba(20, 20, 20, 0.829)'
    }

    
  }


  var econtent = document.getElementById("education");
  function education() {
    var ebtn = document.getElementById("ebtn")
    Scontent.style.display = "none";
    hcontent.style.display = "none";
    
   

    if (econtent.style.display != "none") {
        econtent.style.display = "none";
        ebtn.style.color = ' rgba(20, 20, 20, 0.829)'
     
    } else {
        econtent.style.display = "block";
        ebtn.style.color = 'red'
        sbtn.style.color = ' rgba(20, 20, 20, 0.829)'
    }

    
  }


  