function supports_canvas() {
  return !!document.createElement('canvas').getContext;
}
  
function generateNoise(opacity) {  
   if ( !!!document.createElement('canvas').getContext ) {  
      return false;  
   }  
  
   var canvas = document.createElement("canvas"),  
   ctx = canvas.getContext('2d'),  
   x, y,  
   number,  
   opacity = opacity || .2;  
  
   canvas.width = 200;  
   canvas.height = 200;  
  
   for ( x = 0; x < canvas.width; x++ ) {  
      for ( y = 0; y < canvas.height; y++ ) {  
         number = Math.floor( Math.random() * 60 );  
  
         ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";  
         ctx.fillRect(x, y, 1, 1);  
      }  
   }  
  
   $('body').css({backgroundImage: "url(" + canvas.toDataURL("image/png") + ")"});  
}  

function createTopGradient(opacity) {
	var canvas = document.createElement("canvas"),
	ctx = canvas.getContext('2d');
	canvas.width = 1200;
	canvas.height = 600;
	opacity = opacity || .2; 
	
	var radgrad2 = ctx.createRadialGradient(600,120,0,600,120,600);
	
	radgrad2.addColorStop(0, 'rgba(202,168,255,'+opacity+')');
	radgrad2.addColorStop(1, 'rgba(202,168,255,0)');
	
	ctx.fillStyle = radgrad2;
	ctx.fillRect(0, 0, 1200, 600);
	$('body').prepend('<div id="grad"></div>');
	$('#content').css({
	    zIndex: 1
	});
	$('body').css({overflowX: 'hidden'});
	$('#grad').css({
		width: 'auto',
	    height: 'auto',
	    margin: '0 auto',
	    position: 'absolute',
	    top: 0,
	    left: '50%',
	    marginLeft: '-600px',
	});
	$('#grad').css({
	 	width: '1200px',
	    height: '1200px',
	    display: 'block',
	    background: "url(" + canvas.toDataURL("image/png") + ") center top no-repeat",

	 });
}

$(function() {
	if (supports_canvas()) {
		createTopGradient(0.04);
		generateNoise(.05);
	}
	$('#title').lettering();
}) 
  
  
  
