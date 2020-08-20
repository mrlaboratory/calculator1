var calDis = $('.calculator-display input');
function insertNumber(calNum){
	var exnum = calDis.val();
	var number =calNum;
	calDis.val(exnum+number);		
}

function calClear(){
	calDis.val('');
	
}
function calEquel(){
	var calTotal = calDis.val();
	calDis.val(eval(calTotal));	
}
function calDelate(){
	var delatenn = calDis.val();
	if(delatenn != ""){
		calDis.val(calDis.val().slice(0,-1));
		
	}
}


