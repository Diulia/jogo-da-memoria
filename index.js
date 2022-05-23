const cards = document.querySelectorAll('.memory-card');


var virouCarta = false;
var cartaUm = null
var cartaDois = null;




function triggerClick(){
  if(cartaUm == null){
    this.classList.toggle('flip');
    cartaUm = this

  } else {
    // if(cartaUm.getAttribute('id')=== this.getAttribute('id')) {
    //   console.log("mostra o id das cartas: ", cartaUm.id, this.getAttribute('id'))
    //   alert("mesma carta")
    // }
    this.classList.toggle('flip')
    cartaDois = this
  }

  
  if(areBothCardsSetted()){
    let cardUmData = cartaUm.querySelector('.front-face').getAttribute('datacard')
    let cardDoisData = cartaDois.querySelector('.front-face').getAttribute('datacard')
   
    if(cardUmData === cardDoisData){
      console.log(cardUmData, cardDoisData)
    } else {
      alert("cartas são diferentes")
      cartaUm.classList.toggle('flip');
      cartaDois.classList.toggle('flip')
    }

    cartaUm = null
    cartaDois = null
  }

}

function areBothCardsSetted(){
  return(cartaUm !== null && cartaDois !== null)
}

function replay(){
  console.log("clicou")
  cards.forEach(card => card.classList.remove('flip'))
  cards.forEach(card => {
    let shuffle = Math.floor(Math.random()*12);
    card.style.order = shuffle
  })
}

cards.forEach(card => card.addEventListener('click', triggerClick));





