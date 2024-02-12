
function insert(num){
  document.form.textarea.value = document.form.textarea.value + num;
}

function equal(){
	let hasil = document.form.textarea.value;
	if(hasil == ""){
		document.form.textarea.value = "";
	}else{
		document.form.textarea.value = eval(hasil);
	}
}

function del(){
  let hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);;
}

function clr(){
	document.form.textarea.value = "";
}