// Global Variables 
var characters = [
    {
      name: "Luke",
      faction: "Jedi",
      health: 1,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/luke.jpg",
      attackImgUrl: "../images/lukegreen.jpg",
    },
    {
      name: "Obi Wan",
      faction: "Jedi",
      health: 1,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/obiwancalm.jpg",
      attackImgUrl: "../images/obiwan.jpg",
    },
    {
      name: "Darth Vader",
      faction: "Sith",
      health: 1,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/vader.jpg",
      attackImgUrl: "../images/vaderatt.png",
    },
    {
      name: "Kylo Ren",
      faction: "Sith",
      health: 1,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/Kylo_Ren_rest.png",
      attackImgUrl: "../images/kylo-ren-star-wars.jpg",
    }
  ];

window.onload = function startgame(){
    $(".hide1").hide();
  }
$(document).ready(function(){
    $(".hide1").hide();
})

