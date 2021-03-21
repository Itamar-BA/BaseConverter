var src = 2;
var dst = 2;

var gen = document.getElementById('generate');
if(gen){
    gen.addEventListener('click', generate);
}
var sr = document.getElementById('src');
if(sr){
    sr.addEventListener('change',changeSrc);
}
var ds = document.getElementById('dst');
if(ds){
    addEventListener('change',changeDst);
}

function generate(){
    throw alert(src + " " + dst);
}
function changeSrc(){
    src = document.getElementById('src').value;
}
function changeDst() {
    dst = document.getElementById('dst').value;
}
