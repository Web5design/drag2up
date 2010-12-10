function uploadImmio(req, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://imm.io/?callback=true&name=drag2up');
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  getBinary(req, function(file){
    xhr.send('image='+encodeURIComponent('data:'+file.type+';base64,'+btoa(file.data)))
  });
  xhr.onload = function(){
    callback(xhr.responseText.replace(/^ERR:/,'error: '));
  }
}

