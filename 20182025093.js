function calcular(){ 
let peso;
let estatura;
let edad;
let genero;
let imc;
let s="Saludable. !Felicitaciones, no te descuides!";
let ns="No muy saludable. !Haz ejercicio!";

peso=document.getElementById('peso').value;
estatura=document.getElementById('estatura').value;
edad=document.getElementById('edad').value;
genero=document.getElementById('genero').value;

imc=peso/(estatura*estatura);
document.getElementById('Su IMC es:').innerHTML = imc;

if(genero=="hombre"){
    if(imc<=25){
        document.getElementById('Su peso es:').innerHTML= s;
    }
    else{
        document.getElementById('Su peso es:').innerHTML= ns;
    }
}

if(genero=="mujer"){
    if(imc<=22){
        document.getElementById('Su peso es:').innerHTML= s;
    }
    else{
        document.getElementById('Su peso es:').innerHTML= ns;
    }
}
}






