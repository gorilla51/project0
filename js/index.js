
var container =document.querySelector(' .banner');
var box = document.querySelector('.img-list');
var prev = document.querySelector('.prev');
var next = document.querySelector(' .next');
 
 

window.onload = function(){
    /* pics swift */
    var prev = document.getElementsByClassName("prev");
    var next = document.getElementsByClassName("next");
    var imgs = document.getElementsByClassName("img-list")[0];
    var img = imgs.getElementsByTagName('img')[0];
    var imgArr =["img/01.jpg","img/02.jpg","img/03.jpg"];
    var allA = imgs.document.getElementsByTagName('a')[0];
    var curr = 0;
    

    prev.onclick = function(){
        curr--;
        if(curr<0){
            curr = imgArr.length-1;

        }
        img.src= imgArr[curr];
        

    }

    next.onclick = function(){
        curr++;
        curr%=imgArr.length;
        img.src = imgArr[curr];

    }

    for(var i =o ;i<allA.length;i++){
        allA[i].index =i;
        allA[i].onclick = function(){
            curr =this.index;
            img.src = imgArr[curr];
            
        }
    }

   /*
        setInterval(function(){
            curr++;
            curr %=imgArr.length;
           img.src = imgArr[curr];  
            
        },2000);

        */

       
    }
    
    


