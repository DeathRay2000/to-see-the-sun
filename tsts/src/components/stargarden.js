import Loot from './loot.js'
import Hero from './hero.js'
import { 
    useState} from 'react'
function StarGarden(props){
    console.log("Is this showing up?")
    let ingredientlist = props.ingredientlist
    let heroTop = props.heroTop
    let heroLeft = props.heroLeft
    let inventory = props.inventory
    
    // console.log(ingredientlist)
    let ingredientsspawned = []
    let randomNumber = Math.ceil(Math.random() * 100)
    // =
    let [numIngredients, setNumIngredients] = useState(randomNumber)
    
    // function randomFunction(){
    //     console.log('i should onlybe here once')
    // }
    // randomFunction()

    let [ingredientList, setIngredientList] = useState({list: []})
    
    // let [position, setPosition] = useState({
    //     heroLeft: 200,
    //     heroTop: 200
    //   })
 
    
      
      
        
       

    let handleCallback = (item, xaxis, yaxis) => {
        // console.log(item)
        // console.log(xaxis)
        // console.log(yaxis)
        
        setIngredientList(prevState => ({list: [...prevState.list, {ingredient: item, horizontalLocation: xaxis, verticalLocation: yaxis}]}))
        // console.log(item)
        // console.log(xaxis)
        // console.log(yaxis)
        
    }

    for(let i = 0; i < numIngredients; i++){
        // console.log(numIngredients)
        
        // console.log(ingredientList.list[i])
        ingredientsspawned.push(<Loot  ingredientlist = {ingredientlist}  key = {i} inventory = {inventory} appCallback = {handleCallback} />)
        // console.log(ingredientsspawned[i].style)
    }

    // console.log(ingredientsspawned)
    // console.log(ingredientList.list)
 
    
    return(<div>
        
        <div>
            
            {numIngredients}</div>
       
        <div>{ingredientsspawned}
        
        </div>
        
        <div>
        
            </div>
            <button><a href = '../lab'>Okay let's go home now...</a></button>
        
        <Hero loot = {ingredientsspawned} inventory = {props.inventory} loot = {ingredientList} appCallback = {handleCallback} homeCallback = {props.appCallBack} playerCallback = {props.homeCallback} player = {props.player} storage = {props.storage}/>
        </div>
    )
}

export default StarGarden