for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",press);
}

function press(){
    var op=this.innerHTML;
    operation(op);
    animation(op);
}
document.addEventListener("keydown",letter);
function letter(eve){
    operation(eve.key);
    animation(eve.key);
    
}
    function operation(io){
        switch(io){
        
            case "w":
                var ty=new Audio("crash.mp3");
                ty.play();
                break;
                case "a":
                    var ty1=new Audio("kick-bass.mp3");
                    ty1.play();
                    break;
                    case "s":
                        var ty2=new Audio("snare.mp3");
                        ty2.play();
                        break;
                        case "d":
                            var ty3=new Audio("tom-1.mp3");
                            ty3.play();
                            break;
                            case "j":
                                var ty4=new Audio("tom-2.mp3");
                                ty4.play();
                                break;
                                case "k":
                                    var ty5=new Audio("tom-3.mp3");
                                    ty5.play();
                                    break;
                                    case "l":
                                        var ty6=new Audio("tom-4.mp3");
                                        ty6.play();
                                        break;
    
    }

    }
    function animation(key){
 var ui=document.querySelector("."+key)
 ui .classList.add("pressed");
 setTimeout(function(){
    ui.classList.remove("pressed")
 },100);
    }
   

