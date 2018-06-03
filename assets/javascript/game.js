// Global Variables 
var characters = [
    {
      name: "Luke",
      faction: "Jedi",
      health: 150,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/luke.jpg",
      attackImgUrl: "../images/lukegreen.jpg",
    },
    {
      name: "Obi Wan",
      faction: "Jedi",
      health: 120,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/obiwancalm.jpg",
      attackImgUrl: "../images/obiwan.jpg",
    },
    {
      name: "Darth Vader",
      faction: "Sith",
      health: 200,
      attack: 1,
      counterAttack: 1,
      beginImgUrl: "../images/vader.jpg",
      attackImgUrl: "../images/vaderatt.png",
    },
    {
      name: "Kylo Ren",
      faction: "Sith",
      health: 140,
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
    for (var i = 0; i < characters.length; i++) {
        $("#char"+(i+1)+"a").html(characters[i].name);
        $("#char"+(i+1)+"b").html('<img src="'+(characters[i].beginImgUrl)+'" alt="Char Image" class="characterImage" />');
        // var img = $('<img />').attr({
        //     'src':characters[i].beginImgUrl,
        //     'alt':"Char Image",
        //     'class': "characterImage",
        // })
        // $("#char"+(i+1)+"b").html(img)
        $("#char"+(i+1)+"c").html(characters[i].health);
        console.log (characters[i].beginImgUrl)
    }
    $(".char1,.char2,.char3,.char4").on("click", function() {
        var attacker = []
        var defender = []
        var enemies = []
        $(".hide1").show();
        $(".hide2").hide();
        $(".hide3").hide();
        attacker.push(this.text());
        enemies.push(characters.not(this));
        console.log(attacker);
        console.log(enemies)


        // for (var i = 0; i < characters.length; i++) {
        // $("#char"+(i+4)+"a").html(enemies[i].name);
        // }
    })


})

