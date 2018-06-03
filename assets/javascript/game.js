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

// window.onload = function startgame(){
//     $(".hide1").hide();
//   }
$(document).ready(function(){
    $(".hide1").hide();
    // for (var i = 0; i < characters.length; i++) {
        $("#char1a")==(characters[0].name);
        $("#char2a")==(characters[1].name);
        $("#char3a")==(characters[2].name);
        $("#char4a")==(characters[3].name);

})

