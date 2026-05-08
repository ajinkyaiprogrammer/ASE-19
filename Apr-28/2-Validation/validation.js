// document.getElementById("btn").onclick = function () {
//     let x = document.forms['form-1']['fname'].value;
//     if(x==''){
//         alert('Name must be filled out');
//     }
// };

document.getElementById('btn').onclick=function(){
    let number=document.getElementById('num').value;
    if(isNaN(number)||number<1||number>10){
        document.getElementById('demo').innerHTML='invalid input';
    }else{
        document.getElementById('demo').innerHTML='done';
    }
};