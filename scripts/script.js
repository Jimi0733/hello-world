function menuToggle() {
	var box= document.getElementById("menu");
	if (box.checked) {
		document.getElementsByTagName("nav")[0].style.maxHeight= '100%';
		//document.getElementsByTagName("nav")[0].style.display= 'block';
	} else {
		//document.getElementsByTagName("nav")[0].style.display= 'none';
		document.getElementsByTagName("nav")[0].style.maxHeight= '0';
	}
}
