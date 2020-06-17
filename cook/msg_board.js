function showImg(thisimg) {
	var file = thisimg.files[0];
	if(window.FileReader) {
		var fr = new FileReader();
		
		var showimg = document.getElementById('showimg');
		fr.onloadend = function(e) {
		showimg.src = e.target.result;
	};
	fr.readAsDataURL(file);
	showimg.style.display = 'block';
	}
}
function Clear(){
    document.getElementById('in_msg').value = '';
    document.getElementById('in_name').value = '';
}
function Submit(){
    var txt_msg=document.getElementById('in_msg').value;
    var txt_name=document.getElementById('in_name').value;
    var box=document.createElement('div');
    var box_s=document.createElement('div');
    var name=document.createElement('h3');
    var msg=document.createElement('p');
    var img=document.createElement('img')


    
    if(txt_name == ''){
        alert('Who are you?');
        return 0
    }
    box.setAttribute('class','msg_box');
    name.innerHTML = txt_name;
    msg.innerHTML = txt_msg;

    name.setAttribute('class','msg');
    msg.setAttribute('class','msg');
    box_s.setAttribute('class','box_s')
    img.setAttribute('class','msg_img')
    img.setAttribute('src','pic06.jpg')

  

    Clear();

    box_s.appendChild(name);
    box_s.appendChild(msg);
    box.appendChild(box_s);
    box.appendChild(img)
    document.getElementById('down1').appendChild(box); 
}

window.onload=function() {
    var odiv = document.getElementById("counter");
    var obt = document.getElementById("bt");
    var count = 0;
    obt.onclick = function () {
      count = count + 1;
      odiv.innerHTML = count;
    }
  }
  