import { useEffect, useState} from "react"

function Loot(props){
    let verticalLocation = Math.ceil(Math.random() * 700)
    let horizontalLocation = Math.ceil(Math.random() * 700)
    let [coordinates, setCoordinates] = useState({x: horizontalLocation, y:verticalLocation})
    // setCoordinates({x: horizontalLocation, y: verticalLocation}, [])
    function determineIngredient(ingredientlist){
       
        // console.log(props.random)
        let ingredient = ingredientlist[0]
       
        let totalrarity = 0
        let raritylist = []
        for(let i = 0; i < ingredientlist.length; i++){
            totalrarity +=  ingredientlist[i].rarity
            raritylist.push(ingredientlist[i].rarity)

        }
        let determinationNumber = Math.ceil(Math.random() * totalrarity)
       
        let currentrarity = 0
        for (let i = 0; i< ingredientlist.length; i++){
            currentrarity += ingredientlist[i].rarity
           
            
            
            if(determinationNumber < currentrarity){
               
                ingredient = ingredientlist[i]
                break
                
            }
        } 
        return ingredient
    }
    
    let ingredient = determineIngredient(props.ingredientlist)
   
    
    function ingredientspawn(ingredient, verticalLocation, horizontalLocation){
       
        this.ingredient = ingredient
        this.verticalLocation = JSON.stringify(coordinates.y) + 'px'
        this.horizontalLocation = JSON.stringify(coordinates.x) + 'px'
        
        // console.log(coordinates)


    }
    
    let loot = new ingredientspawn(ingredient, verticalLocation, horizontalLocation)
    let item = loot.ingredient
    let west = loot.horizontalLocation
    let north =loot.verticalLocation
   
    useEffect(()=>{
        
        props.appCallback(loot.ingredient, coordinates.x, coordinates.y)},[])
    // console.log(coordinates)
    
    
    
    
    let thestyle = {'width': '10px', 'height': '10px', 'backgroundColor': 'green', 'position': 'absolute', 'top': coordinates.y + 'px' , 'left': coordinates.x+ 'px'}
    
    return(<div  style= {thestyle} ></div>
    )
}
export default Loot