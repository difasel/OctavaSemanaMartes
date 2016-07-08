$(document).ready(function(){
  // Tu código va aquí

  var cancel_1 = false;
  var cancel_2 = false;
  var valida1 = false;
  var valida2 = false;
  var count = 0;

  $("button").click(function( event ){
      
    // event.preventDefault();

      valores_iniciales();
      iniciar();
      
      $("button").prop("disabled", true);
      $("button").html("Reiniciar")
      // get_winner();


  });

  function valores_iniciales(){
    count = 0
    cancel_1 = false;
    cancel_2 = false;
    valida1 = false;
    valida2 = false;
    $("button").prop("disabled", false);
    $("#countdown").html("");
    $("#ganador").html("");
    $('tr#Player1').find('td.active').removeClass("active");
    $('tr#Player2').find('td.active').removeClass("active");
    $("#Player1").find("td").attr("style", "");
    $("#Player2").find("td").attr("style", "");
    // $("#Player1").find("#num_tab_90").css("background-color", "red");
    // $("#Player2").find("#num_tab_90").css("background-color", "red");
    $('tr#Player1').find('#num_tab_1').addClass("active");
    $('tr#Player2').find('#num_tab_1').addClass("active");

    // $('tr#Player2').find('#num_tab_1').addClass("active").css("background-color", "black");

  }

  function iniciar(){

    countdown();

  }  

  


   function throw_coin_1(){

    console.log("moneda1");
    console.log(cancel_1);

    $('tr#Player1').find('td.active').next().addClass("active");
    $('tr#Player1').find('td.active').first().removeClass("active");
    console.log("-------------------------");
    var test = $('tr#Player1').find("td#num_tab_100").attr("class")
    console.log(test);
    if ($('tr#Player1').find("td#num_tab_100").attr("class") === "active"){ 
      cancel_1 = true; 
      valida1 = true;
    }
    valida_vars();
    if (cancel_1 === false) { setTimeout(throw_coin_1, 10)};
    // $('tr#Player1').find('td').last().addClass("active");

  };


  function throw_coin_2(){

    $('tr#Player2').find('td.active').next().addClass("active");
    $('tr#Player2').find('td.active').first().removeClass("active");

    if ($('tr#Player2').find("td#num_tab_100").attr("class") === "active")
      { cancel_2 = true;
        valida2 = true;
         }
         valida_vars();

    if (cancel_2 === false) { setTimeout(throw_coin_2, 10)};
    // $('tr#Player2').find('td').last().addClass("active");
  };


  function get_winner(){

    var tab_user1 = $('tr#Player1').find('td.active').attr("id");
    tab_user1 = tab_user1.split("_").pop();

    var tab_user2 = $('tr#Player2').find('td.active').attr("id");
    tab_user2 = tab_user2.split("_").pop();

    user1_int = parseInt(tab_user1);
    user2_int = parseInt(tab_user2);


    if (tab_user1 > 90 &&  tab_user2 > 90)
      { $("#Player1").find("td").css("background-color", "#FF7373")
        $("#Player2").find("td").css("background-color", "#FF7373")
        $("#ganador").html("Los dos perdieron!!!").css("color","red")}
    else if (tab_user1 === 90 &&  tab_user2 === 90)
      {$("#ganador").html("Es un empate")}
    else if (tab_user1 <= 90 &&  tab_user2 > 90)
      {$("#ganador").html("El jugador 1 Gana!!!")}
    else if (tab_user2 <= 90 &&  tab_user1 > 90)
      {$("#ganador").html("El jugador 2 Gana!!!")}
    else if (tab_user1 === 90 &&  tab_user2 < 90)
      {$("#ganador").html("El jugador 1 Gana!!!")}
    else if (tab_user2 === 90 &&  tab_user1 < 90)
      {$("#ganador").html("El jugador 2 Gana!!!")}
    else if ((tab_user2 < 90 &&  tab_user1 < 90) && tab_user2 < tab_user1 )
      {$("#ganador").html("El jugador 1 Gana!!!")}
    else if ((tab_user2 < 90 &&  tab_user1 < 90) && tab_user1 < tab_user2 )
      {$("#ganador").html("El jugador 2 Gana!!!")}
    else if ((tab_user2 < 90 &&  tab_user1 < 90) && tab_user1 === tab_user2 )
      {
        $("#Player1").find("td").css("background-color", "green")
        $("#Player2").find("td").css("background-color", "green")
        $("#ganador").html("Es un empate!!!")}
    else 
      {$("#ganador").html("error!!")}

    $("button").prop("disabled", false);
    // valores_iniciales()

  };

  function countdown(){
    console.log("inside countdown");
    console.log(cancel_1);
    
    var counter = 4;
    var start_count = setInterval(function () {
    --counter;
    $("#countdown").html(counter)
    if (counter === 0) { 
      clearInterval(start_count);
      throw_coin_1();
      throw_coin_2();
      // $(document).on('keyup', getKey);
    };
    }, 1000);
  };


  


  function valida_vars(){
    if (valida1 === true && valida2 === true) 
      { get_winner(); }

  }

  // var getKey = function(e){

    $(document).keyup(function(e) {
      // console.log('INSIDE getKey');
      // console.log(e);
      if(e.keyCode == 81)  {
        cancel_1 = true;
        valida1 = true
        valida_vars()
        count += 1;

      }
      if(e.keyCode == 80) {
        cancel_2 = true;
        valida2 = true
        valida_vars()
        count += 1;
      } 


      // for (var i = 0; count !== 2)

      // while (count === 2){ 
      //   get_winner(tab_user1, tab_user2);
      //     console.log(tab_user1)
      //     console.log(tab_user2)
      //     count = 0
      //   }
   

    });

  // };


});



