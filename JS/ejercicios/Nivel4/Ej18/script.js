function calcular(){
    var num=document.getElementById("numerito").value;
    document.getElementById("result").innerHTML="";
    for(let i=1;i<=10;i++)
        document.getElementById("result").innerHTML+=i+" x "+num+" = "+(i*num)+"<br>";
}