//código do carro 
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 2.3, 3.3]
let larguraDoCarro = 50;
let alturaDoCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraDoCarro, alturaDoCarro )
  }
}

function movimentaCarro(){
  for(let i = 0; i < velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoDoCarro(){
  for(let i = 0; i < velocidadeCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
       xCarros[i] = 600;
       }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}