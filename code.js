// let cards = document.getElementsByClassName('card');
// for (i = 0; i<cards.length; i++) {
    
//     cards.item(i).addEventListener( 'click', function() {
//         cards.item(i).className.padEnd('is-flipped')
//       });
// }
// cards[0].addEventListener( 'click', function() {
//     cards[0].classList.add('is-flipped')
//   });

//   cards[1].addEventListener( 'click', function() {
//     cards[1].classList.add('is-flipped')
//   });

var card = document.querySelector(".card");
card.addEventListener("click",function(){
    card.classList.toggle("is-flipped");
});
