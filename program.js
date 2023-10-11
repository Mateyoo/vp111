function teljeskepnyit(kep){
    var szepkapva = kep.split(".")
    document.getElementById("teljeskepkeret").style.display = "flex" ;
    document.getElementById("teljeskep").src = szepkapva[0]+"D."+szepkapva[1];
}

function elozokep(){

}

function kovetkezokep(){

}

function teljeskepzar(){
    document.getElementById("teljeskepkeret").style.display = "none" ;
}




function kepbalra(){
    var i = 0;
  
    function updatePosition() {
      var mozgatas = i + "px";
      document.getElementById('teljeskep').style.objectPosition = mozgatas;
      
      i+=5;
      
      if (i < 750) {
        setTimeout(updatePosition, 1);
      }
    }
    updatePosition();
}



function kepjobbra() {
    var i = 0;
  
    function updatePosition() {
      var mozgatas = i + "px";
      document.getElementById('teljeskep').style.objectPosition = mozgatas;
      
      i-=5;
      
      if (i > -750) {
        setTimeout(updatePosition, 1);
      }
    }
    updatePosition();
  }