document.addEventListener('DOMContentLoaded',function () {
	console.log('Loaded');
    txt = " Hipity Hopity Anu is my property";
    txt1= "Anu is my property";
    anu_txt = document.querySelector("#typewrite");
	
	function dp(){
        if(i==3){
            document.querySelector('#animate').style.animation="bounce 2s";
        }
		if(i==14){
            anu_txt.innerHTML = anu_txt.innerHTML + "<br/>";
        }
		if(i < txt.length){
			anu_txt.innerHTML = anu_txt.innerHTML + txt.charAt(i);

			i++;
			setTimeout(dp,200);
        }
        
    }
   
	i = 0;
    dp();
	setInterval(function(){
		i = 0;
        anu_txt.innerHTML = "";
        document.querySelector('#animate').style.animation="none";
		dp();
    },8000);
});