

const  gameBoard=(function(){

    let first=true,isWin=true;

    let winingPossibility=[
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8] 
        
    ];
   
    const result=document.getElementById('result');
    const marker=document.querySelectorAll('.marker');
    const restart=document.getElementById('restart');

    marker.forEach((m)=>{
        m.onclick=function(){
                play(m);               
        }    
    });

    let playerOneArray=[];
    let playerTwoArray=[];

    const play=(fillBox)=>{
        if(isWin){
            if(fillBox.childNodes.length===0){
                if(first){
                    fillBox.innerHTML='&times;';
                    playerOneArray.push(parseInt(fillBox.dataset.index));
                    display('player &oast; turn ');
                    first=false;   
                    if(playerOneArray.length >=3){
                        Winner('player &times;',playerOneArray)
                    }        
                }
                else{
    
                    fillBox.innerHTML='&oast;';
                    playerTwoArray.push(parseInt(fillBox.dataset.index));
                    display('player &times; turn ');
                    first=true;
                    if(playerTwoArray.length >=3){
                        Winner('player &oast;',playerTwoArray)
                    }  
                }
            }
            else{
                return;
            } 

        }
       
    }

    const display=(status)=>{
        result.innerHTML=status
    }

    const clear=()=>{
        marker.forEach((box)=>{
            box.innerHTML='';
        });
        result.innerHTML='player &times; turn'
        first=true;
        playerOneArray=[];
        playerTwoArray=[];
        isWin=true;
        isCheckerStatus=false;
    }

    let isCheckerStatus=false;

    const checker=(arr)=>{
      for(let i=0;i<=winingPossibility.length-1;i++){
        isCheckerStatus=winingPossibility[i].every(ele=>arr.includes(ele));
        if(isCheckerStatus){
            return isCheckerStatus;
        }
      }
    } 

    const Winner=(str,arr)=>{
        if(checker(arr)){
            display(`${str} Win !`)
            isCheckerStatus=false;
            isWin=false; 
        }

        else if(playerTwoArray.length+playerOneArray.length==9){
            display('Game Over !');

        }
        
    }

    restart.addEventListener('click',clear);

 })();
