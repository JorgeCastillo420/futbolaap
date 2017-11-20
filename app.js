$.getJSON("data.json", function (json) {

    games = json.games;
    //llamada de la funcion// 
    escudos(games);
});


function escudos(games) {

    var todo = document.getElementsByClassName("content-block1")[0];

    for (var i = 0; i < games.length; i++) {
        
        
        var escudo1 = games[i].equipo1;

        var date = games[i].Date;
        var escudo2 = games[i].equipo2;

        var padre = document.createElement("div");
        var logo1 = document.createElement("img");
        var logo2 = document.createElement("img");
        var medio = document.createElement("div");
        var divlogo1 = document.createElement("div");
        var divlogo2 = document.createElement("div");
        
        logo1.setAttribute("src", escudo1);
        logo2.setAttribute("src", escudo2);
        padre.setAttribute("class", "row");
        medio.setAttribute("class", "md");
        divlogo1.append(logo1);
        divlogo2.append(logo2);
       
        padre.append(divlogo1);
        padre.append(medio);
        medio.innerHTML = date;
        todo.append(padre);
        
        padre.append(divlogo2);




    }
}


var myApp = new Framework7();

var $$ = Dom7;

$$('.accordion-item').on('accordion:opened', function () {
    myApp.alert('Accordion item opened');
});

$$('.accordion-item').on('accordion:closed', function (e) {
    myApp.alert('Accordion item closed');
});

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});