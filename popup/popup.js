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
    var srcVal = document.getElementById('srcVal').value;
    var srcLen = srcVal.length;
    for(let i=0; i<srcVal.length; i++){
       // if(srcVal[i]>=src || srcVal[i]<'0'){
       //     throw alert("Please enter valid input");
      //  }
    }
    let semi = parseInt(srcVal,src);
    let res = semi.toString(dst);
    throw alert(res);

}

function changeSrc(){
    src = parseInt(document.getElementById('src').value);
}
function changeDst() {
    dst = parseInt(document.getElementById('dst').value);
}
