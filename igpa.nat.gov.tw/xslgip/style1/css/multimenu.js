activateMenu = function(nav) {
    /* currentStyle restricts the Javascript to IE only */
	if (document.all && document.getElementById(nav).currentStyle) {  
		var navroot = document.getElementById(nav);
        /* Get all the list items within the menu */
        var lis=navroot.getElementsByTagName("LI");  
		for (i=0; i<lis.length; i++) {
            /* If the LI has another menu level */
            if(lis[i].lastChild.tagName=="UL"){
                /* assign the function to the LI */
             	lis[i].onmouseover=function() {		
                   /* display the inner menu */
                   this.lastChild.style.display="block";
      			}
				lis[i].onmouseout=function() {                       
                    this.lastChild.style.display="none";
				}
            }
		}
	}
}
/* I do this differently on the test page to fix a problem float container problem in IE5 Mac*/
/*Uncomment the function below*/
/* <-- delete this whole line.
window.onload= function(){
   
    activateMenu('nav'); //you only need one of these for each menu
    activateMenu('vertnav');  
}
delete this whole line.--> */
