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
        // $(".char"+(i+1)).val(characters[i].name);
        // $("#char"+(i+1)+"b").html('<img src="'+(characters[i].beginImgUrl)+'" alt="Char Image" class="characterImage" />');
        // var img = $('<img />').attr({
        //     'src':characters[i].beginImgUrl,
        //     'alt':"Char Image",
        //     'class': "characterImage",
        // })
        // $("#char"+(i+1)+"b").html(img)
        $("#char"+(i+1)+"c").html(characters[i].health);
        // $(".char"+(i+1)).val(characters[i].health);
        console.log (characters[i].beginImgUrl)
    }
    
    var attackerSelected=0
    if((attackerSelected===0)){
        $(".char1,.char2,.char3,.char4").on("click", function() {
            console.log(attackerSelected)
            var attacker = this;
            
            var attackerClone = $(attacker).clone();
            console.log (attackerClone)
            $(".char8").replaceWith(attackerClone)
            var defender = []
            console.log(this)
            var enemies = $(".char1,.char2,.char3,.char4").not(this)
            console.log(enemies);
            for (j=0; j<enemies.length-1;j++){
                var enemiesClone = $(enemies[j]).clone(true)
                console.log (enemiesClone)
                $(".char"+(j+5)).replaceWith(enemiesClone)
            }
            $(".hide1").show();
            $(".hide2").hide();
            $(".hide3").hide();
            attackerSelected++
            console.log(attackerSelected)
    
            // $(".char8").clone(this)
            
            // enemies.push(characters.not(this));
            // console.log(enemies);
            // console.log(enemies)
    
    
            // for (var i = 0; i < characters.length; i++) {
            // $("#char"+(i+4)+"a").html(enemies[i].name);
            // }
        })
    }
    else {

    }


})

