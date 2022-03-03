function go1(){
    var n= parseInt(document.getElementById("npt").value);
    // console.log("hey"+n);
    // var n=2;
    var i;
    var p="";
    
    for(i=1;i<=10;i++){
        p=p+"<p>"+n+" X "+i+" = "+(n*i)+"</p>"
        document.getElementById("innercont").innerHTML=p;
        //  document.getElementById("innercont").innerHTML="it works"+n;
    }
    }
    const demo =()=>{
        console.log("demo");
        var n= parseInt(document.getElementById("npt").value);
        var i;
        var p=""; 
        // document.getElementById("innercont").innerHTML="it works"+n;
        for(i=1;i<=10;i++){
            p=p+"<p>"+n+" X "+i+" = "+(n*i)+"</p>"
            document.getElementById("innercont").innerHTML=p;
        }
        }


