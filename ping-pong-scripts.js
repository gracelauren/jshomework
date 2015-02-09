$(document).ready(function() {
	userNum= prompt("What number would you like me to ping-pong up to?");
    var num = parseInt($("input#userNum").val()); 
       
         

        
   		for (var counter =1; counter <=userNum; counter ++) {
   			if(counter % 3 && counter % 5 ) {
   				document.write("<li>"+ counter + "</li>");

   			} else {
   				if (counter % 3 ==0) {
   					document.write("<li>ping</li>");
                  
   				}
   				if (counter % 5 == 0) {
   					document.write("<li>pong</li>");
                  
   				}

   				if (counter % (5*3) == 0) {
   					document.write("<li>ping-pong</li>");
                  
   				}	

         }


         $("#list").show();
   		
   		
   		

   		}
		
		
		
		


event.preventDefault();  
 
});