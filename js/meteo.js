$(document).ready(function(){
    
    $.ajax({
        // 1) on définit le fichier vers lequel on envoye la requête POST
    url : 'https://www.prevision-meteo.ch/services/json/Paris',
   
    // 2/ on spécifie la méthode  
    type : 'GET', // Le type de la requête HTTP, ici  POST
   
    // 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
    data : { 
            // nom: nom, 
            // prenom: prenom, 
            // genre: genre
            }, // On fait passer nos variables au script coucou.php
    
    // 4) format de retour du fichier php dans "data"
    dataType : 'json',
    
    // 5) fonction à effectuer en cas de succès
    success : function(monArray){ //  contient le HTML renvoyé

        console.log(monArray)
        

        $(".info_1").html(monArray.city_info.name);
        $(".info_2").html(monArray.city_info.country);
        $(".info_temp").html(monArray.current_condition.tmp+'C°'); 
        $(".info_3 span").html(monArray.city_info.sunrise);
        $(".info_4 span").html(monArray.city_info.sunset);
        $(".info_5 span").html(monArray.current_condition.condition);
        $(".info_6 img").attr('src','img/'+monArray.current_condition.condition_key+'.png');
        $(".info_min_0").html('min :'+monArray.fcst_day_0.tmin); 
        $(".info_max_0").html('max :'+monArray.fcst_day_0.tmax+'C°'); 
        $(".info_jour_0").html(monArray.fcst_day_0.day_short); 
        $(".info_min_1").html('min :'+monArray.fcst_day_1.tmin); 
        $(".info_max_1").html('max :'+monArray.fcst_day_1.tmax+'C°'); 
        $(".info_jour_1").html(monArray.fcst_day_1.day_short); 
        $(".info_min_2").html('min :'+monArray.fcst_day_2.tmin); 
        $(".info_max_2").html('max :'+monArray.fcst_day_2.tmax+'C°'); 
        $(".info_jour_2").html(monArray.fcst_day_2.day_short); 
        $(".info_min_3").html('min :'+monArray.fcst_day_3.tmin); 
        $(".info_max_3").html('max :'+monArray.fcst_day_3.tmax+'C°'); 
        $(".info_jour_3").html(monArray.fcst_day_3.day_short); 
        $(".info_min_4").html('min :'+monArray.fcst_day_4.tmin); 
        $(".info_max_4").html('max :'+monArray.fcst_day_4.tmax+'C°'); 
        $(".info_jour_4").html(monArray.fcst_day_4.day_short); 

       

    
    } // success
   
   }); // intro ajax function         
  // });//click


  $("#go").click(function(e){
    
    e.preventDefault();
    var ville = $('#ville').val();
    if (ville == "bruxelles") { ville = "bruxelles-1"}


    $.ajax({


      // 1) on définit le fichier vers lequel on envoye la requête POST
  url : 'https://www.prevision-meteo.ch/services/json/'+ville,
 
  // 2/ on spécifie la méthode  
  type : 'GET', // Le type de la requête HTTP, ici  POST
 
  // 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
  data : { 
          // nom: nom, 
          // prenom: prenom, 
          // genre: genre
          }, // On fait passer nos variables au script coucou.php
  
  // 4) format de retour du fichier php dans "data"
  dataType : 'json',
  
  // 5) fonction à effectuer en cas de succès
  success : function(monArray){ //  contient le HTML renvoyé 
    
    console.log(monArray)

      $(".info_1").html(monArray.city_info.name);
      $(".info_2").html(monArray.city_info.country);
      $(".info_temp").html(monArray.current_condition.tmp+'C°'); 
      $(".info_3 span").html(monArray.city_info.sunrise);
      $(".info_4 span").html(monArray.city_info.sunset);
      $(".info_5 span").html(monArray.current_condition.condition);
      $(".info_6 img").attr('src','img/'+monArray.current_condition.condition_key+'.png');
      $(".info_min_0").html('min :'+monArray.fcst_day_0.tmin); 
      $(".info_max_0").html('max :'+monArray.fcst_day_0.tmax+'C°'); 
      $(".info_jour_0").html(monArray.fcst_day_0.day_short); 
      $(".info_min_1").html('min :'+monArray.fcst_day_1.tmin); 
      $(".info_max_1").html('max :'+monArray.fcst_day_1.tmax+'C°'); 
      $(".info_jour_1").html(monArray.fcst_day_1.day_short); 
      $(".info_min_2").html('min :'+monArray.fcst_day_2.tmin); 
      $(".info_max_2").html('max :'+monArray.fcst_day_2.tmax+'C°'); 
      $(".info_jour_2").html(monArray.fcst_day_2.day_short); 
      $(".info_min_3").html('min :'+monArray.fcst_day_3.tmin); 
      $(".info_max_3").html('max :'+monArray.fcst_day_3.tmax+'C°'); 
      $(".info_jour_3").html(monArray.fcst_day_3.day_short); 
      $(".info_min_4").html('min :'+monArray.fcst_day_4.tmin); 
      $(".info_max_4").html('max :'+monArray.fcst_day_4.tmax+'C°'); 
      $(".info_jour_4").html(monArray.fcst_day_4.day_short); 

      
      


  
  } // success
 
      }); // intro ajax function         




  });


});
