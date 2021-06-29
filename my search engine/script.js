
    document.getElementById("btn").onclick= function(){
        let txt=document.getElementById("txt").innerHTML;
        document.getElementById("txt").innerHTML="https://www.google.com/search?q="+txt;
        alert(txt);
        console.log(txt);
    };