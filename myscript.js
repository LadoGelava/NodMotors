
	function scrollWin() {
  	window.scrollBy(0, 3000); //vertical scroll
  	
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
		

	

	