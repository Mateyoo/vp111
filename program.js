var elmozgas = 0


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

function kepbalra() {
  elmozgas = balraMozgas(elmozgas)
}

function kepjobbra() {
  elmozgas = jobbraMozgas(elmozgas)
}

function balraMozgas(elmozgas) {
  if (elmozgas < 750) {
  var mozgatas = elmozgas + "px";
  document.getElementById('teljeskep').style.objectPosition = mozgatas;
          
  elmozgas++;
         

  setTimeout(balraMozgas, 1000);
  }
  return elmozgas
}

function jobbraMozgas(elmozgas) {
  if (elmozgas > -750) {
  var mozgatas = elmozgas + "px";
  document.getElementById('teljeskep').style.objectPosition = mozgatas;
        
  elmozgas--;
       
    setTimeout(jobbraMozgas, 1000);
  }
  return elmozgas
}