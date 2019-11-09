
function scrollWin() {
	window.scrollBy(0, 2); // horizontal and vertical scroll 					increments
	scrolldelay = setTimeout('scrollWin()', 1); // scrolls 						every 100 milliseconds

 if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

clearTimeout(scrolldelay);
	scrolldelay = setTimeout('PageUp()', 2000);
}
}


	$(document).ready(function(){
		$('#rotate').click(function(){
			$(this).toggleClass('open');
		});
	});


	

	function burgerClick(){
		var x = document.getElementById("hero");
  if (x.style.opacity === "0.03") {
    x.style.opacity = "1";
  } else {
    x.style.opacity = "0.03";
  }
}
		

	

	