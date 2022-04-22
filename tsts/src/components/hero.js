import {React,
     useState} from 'react'
import StarGarden from './stargarden'
function Hero(props){
    let heroLeft = props.heroLeft
    let heroTop = props.heroTop
    let boxLeft = heroLeft + 'px'
    let boxTop = heroTop + 'px'
 
    // console.log(boxTop)
    
    // console.log(boxLeft)
    

    let [position, setPosition] = useState({
        heroLeft: 200,
        heroTop: 200
    })
   
   
    function handleKey(e){
        
        
        
         
        if(e.code === 'ArrowUp'){
            
            setPosition({heroTop: position.heroTop - 1, heroLeft: position.heroLeft});
            
            // props.appCallback(position.heroLeft, position.heroTop)
                     
          
           
           
          
            
        }
        else if(e.code === 'ArrowDown'){
            
            setPosition({heroTop: position.heroTop + 1, heroLeft: position.heroLeft});
            
            // props.appCallback(position.heroLeft, position.heroTop)
            
            
            
        }
            else if(e.code === 'ArrowLeft'){
                
                setPosition({heroTop: position.heroTop, heroLeft: position.heroLeft - 1});
                
                // props.appCallback(position.heroLeft, position.heroTop)
                
            
           
            // document.getElementById('Hero').style.left = heroLeft + 'px';
        }
            else if(e.code === 'ArrowRight'){
                
                setPosition({heroTop: position.heroTop, heroLeft: position.heroLeft + 1});
             
                // props.appCallback(position.heroLeft, position.heroTop)
                console.log(position)
              
            
         
            // document.getElementById('Hero').style.left = heroLeft + 'px';
        }
       

    }
   
    
   let gatherIngredient = function(i){
        console.log('gotcha')
        
        props.inventory[i.ingredient.name] += 1
        console.log(props.inventory)
        alert("You obtained a " + i.ingredient.name)
        i.ingredient = null
        i.verticalLocation = null
        i.horizontalLocation = null
        // props.loot.list.splice(props.loot.list.indexOf(i))
        console.log(props.inventory)
        props.homeCallback(props.inventory)
        console.log(props.storage)
        props.player['exp'] += 1
        props.playerCallback(props.player)
    }
    console.log(position.heroLeft, position.heroTop)
    for(let i = 0; i < props.loot.list.length; i++){
    //    console.log((position.heroLeft == props.loot.list[i].horizontalLocation && position.heroTop == props.loot.list[i].verticalLocation))

        if(position.heroLeft == props.loot.list[i].horizontalLocation && position.heroTop == props.loot.list[i].verticalLocation){
            gatherIngredient(props.loot.list[i])
        }
    }
    // console.log(props.loot)
    // console.log(props.inventory)


    
    return(
        <div style = {{height: '10px', width: '10px', backgroundColor: 'blue', position: 'absolute', top: `${position.heroTop}px`, left: `${position.heroLeft}px`}} onKeyDown = {(e, herostyle) => handleKey(e, herostyle)} tabIndex={0}></div>
    )
}
export default Hero