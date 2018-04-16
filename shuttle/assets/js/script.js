	function Show_Hidden(obj){
		
		if(obj.style.display=="block")
			
		{
			
			obj.style.display='none';		
			
		}
		
		else
			
		{
			
			obj.style.display='block';
		
		}
		
	}

	function Open_Close(){
		
		var odiv = document.getElementById('dig');
		
		Show_Hidden(odiv);
		
		return false;
		
	}