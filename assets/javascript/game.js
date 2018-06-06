// Global Variables 
var characters = [
    {
      name: "Luke",
      faction: "Jedi",
      health: 150,
      attack: 10,
      counterAttack: 15,
      beginImgUrl: "assets/images/luke.jpg",
      attackImgUrl: "assets/images/lukegreen.jpg",
    },
    {
      name: "Obi Wan",
      faction: "Jedi",
      health: 120,
      attack: 7,
      counterAttack: 5,
      beginImgUrl: "assets/images/obiwancalm.jpg",
      attackImgUrl: "assets/images/obiwan.jpg",
    },
    {
      name: "Darth Vader",
      faction: "Sith",
      health: 200,
      attack: 9,
      counterAttack: 12,
      beginImgUrl: "assets/images/vader.jpg",
      attackImgUrl: "assets/images/vaderatt.png",
    },
    {
      name: "Kylo Ren",
      faction: "Sith",
      health: 140,
      attack: 8,
      counterAttack: 9,
      beginImgUrl: "assets/images/Kylo_Ren_rest.png",
      attackImgUrl: "assets/images/kylo-ren-star-wars.jpg",
    }
  ];
var attacker1 = []
var defender1 = []


// window.onload = function startgame(){
//     $(".hide1").hide();
//   }
$(document).ready(function(){
    $(".hide1").hide();
    for (var i = 0; i < characters.length; i++) {
        $("#char"+(i+1)+"a").html(characters[i].name);
        // $(".char"+(i+1)).val(characters[i].name);
        $("#char"+(i+1)+"b").html('<img src='+characters[i].beginImgUrl+' alt="Char Image" class="characterImage" />');
        // var img = $('<img />').attr({
        //     'src':characters[i].beginImgUrl,
        //     'alt':"Char Image",
        //     'class': "characterImage",
        // })
        // $("#char"+(i+1)+"b").html(img)
        $("#char"+(i+1)+"c").html(characters[i].health).val(characters[i].health)
        $(".char"+(i+1)).val(i);
        // console.log($("#char"+(i+1)+"c").val())
        console.log($(".char"+(i+1)).val())
        console.log($(".char"+(i+1)))
        // $(".char"+(i+1)).val(characters[i].health);
        // console.log (characters[i].beginImgUrl)
    }
    
    var attackerSelected=0
    var defenderSelected=0
    var attackerValue=[]
    var defenderValue=[]
    
        $(".char1,.char2,.char3,.char4").on("click", function() {
            if((attackerSelected===0)){
                var attacker = this;
                // attacker1.push(this)
                console.log(this)
                console.log($(this).val())
                // console.log(attacker1)
                attackerValue.push($(this).val())
                console.log(attackerValue)
                var attackerClone = $(attacker).clone();
                $(".char8").replaceWith(attackerClone).attr("class","char8")
                var enemies = $(".char1,.char2,.char3,.char4").not(this)
                console.log(enemies)
                for (j=0; j<enemies.length-1;j++){
                    var enemiesClone = $(enemies[j]).clone(true)
                    $(".char"+(j+5)).replaceWith(enemiesClone)
                    console.log($(".char"+(j+1)).not(this).val())
                }
                $(".hide1").show();
                $(".hide2").hide();
                $(".hide3").hide();
                attackerSelected++
            }
            else if (defenderSelected===0) {
                var defender = this;
                // defender1.push(this)
                console.log(this)
                defenderValue.push($(this).val())
                console.log($(this).val())
                console.log(defenderValue)
                var defenderClone = $(defender).clone();
                $(".char9").replaceWith(defenderClone).attr("class","char9")
                $(this).hide()
                defenderSelected++
            }
        $(".btn-danger").on("click", function(){
            console.log($("attacker1").find($(".char1a")).text())
            console.log($("defender1").find($(".char4a")).text())
        })
    })
    }


)

