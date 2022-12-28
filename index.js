var mySong = document.getElementById("mysong");
        var icon = document.getElementById("play");
        var text = document.getElementById("text");
        icon.onclick = function () {
            if(mySong.paused){
                mySong.play();
                icon.src="pause.png";
                text.innerHTML="Click Here to Pause";
            }
            else{
                mySong.pause();
                icon.src="play.png";
                text.innerHTML="Click Here to Play";


            }
        }
        icon.onmouseover=function(){
            this.style.width="100px";
        }
        icon.onmouseout=function(){
            this.style.width="80px";
        }
        var menulist=document.getElementById("menulist");
        menulist.style.maxHeight="0px"; 
        function togglemenu(){
            if(menulist.style.maxHeight=="0px"){
                menulist.style.maxHeight="130px";
            }
            else{
                menulist.style.maxHeight="0px";
                 
            }
    }