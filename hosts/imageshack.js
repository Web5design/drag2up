//magic totally obfuscated key that you shall never see
//39ACEJNQa5b92fbce7fd90b1cb6f1104d728eccb

function uploadImageshack(file, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://www.imageshack.us/upload_api.php");  
	var formData = new FormData();  
	
	//var file = imgtest;
	var bb = new BlobBuilder(file.type);
	var bin = atob(file.data.replace(/^data.+base64,/i,''));
	var arr = new Int8Array(bin.length);
	for(var i = 0, l = bin.length; i < l; i++){
	  arr[i] = bin.charCodeAt(i)
	}
	
	bb.append(arr.buffer)
	var blob = bb.getBlob(file.type);
	
	blob.name = file.name;
	formData.append("fileupload", blob);
	
	formData.append("key", "39ACEJNQa5b92fbce7fd90b1cb6f1104d728eccb"); 
	xhr.onload = function(){
		console.log(xhr)
	}
	xhr.send(formData);
}


function uploadImageshack3(file, callback){
  var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://www.imageshack.us/upload_api.php");  
	xhr.onload = function(){
    console.log(xhr);
	}
	xhr.sendMultipart({
	  key: "39ACEJNQa5b92fbce7fd90b1cb6f1104d728eccb",
	  fileupload: file
	})
}


function uploadImageshack2(file, callback){	
	ajaxMultipart("http://www.imageshack.us/upload_api.php", [
	  ['fileupload', file],
	  ['key', "39ACEJNQa5b92fbce7fd90b1cb6f1104d728eccb"]
	])
}
