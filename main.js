function inpt(text){
    if(text=="BS"){
        var str = document.getElementById("display").value;
        document.getElementById("display").value = str.substring(0,str.length-1);
    }
    else if (text=="C"){
        document.getElementById("display").value="";
    }
    else if (text=="="){
        var str = document.getElementById("display").value;
        document.getElementById("display").value = eval(str);
    }
    else
        document.getElementById("display").value+=text;
}

function darkmode(){
    document.body.classList.toggle("darktheme");
}