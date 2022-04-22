import {useState} from 'react'
function Lab(props){
    
    // props.inventory = JSON.parse(props.inventory)
    
    
   let recipelist = props.recipelist
   let player = props.player
   let ingredientlist = props.ingredientList
   let Inventory = props.inventory
   let inventoryElList = []
   let ingredientElList = []
   let putinbuttonList = []
   let[rerender, setRerender] = useState(false)

    let cauldronStyle = {height:50, width: 50, backgroundColor: 'black'}
    let cauldronElement = (<div style = {cauldronStyle} onClick={()=>putinFunction}></div>)
    
    function sell(recipe, recipelist, Inventory){
   
        
        
        // console.log(amountsold)
        
        // console.log(sellAmount)
        // console.log(list.hasChildNodes)
        // console.log(sellAmount)
    
                let sellAmount = 1
                console.log(player['gold coins'])
                
                if(sellAmount > Inventory[recipe.name]){
                    alert('You don\'t have any ' + recipe.name)
                }
                else{
                    Inventory[recipe.name] = Inventory[recipe.name] - sellAmount
                    // console.log(gold)
                    // console.log(sellAmount)
                    // console.log(crop.value)
                    console.log(player['gold coins'])
                    player['gold coins'] +=  recipe.value
                    console.log(player['gold coins'])
                
                    props.appCallback(Inventory)
                    props.playerCallBack(player)
                    props.storage.setItem('Inventory', Inventory)
                    getInventory(Inventory, recipelist)
                    setRerender(!rerender)
                    // console.log(gold)
                    
                    
                    // for(let i = 0; i < croplist.length; i++){
                    // let item = document.createElement('div', classname = 'item')
                    // item.innerText = croplist[i].name + ': ' + JSON.stringify(Inventory[croplist[i].name])
                    // list.append(item)
                    // sellbutton = document.createElement('button')
                    // sellbutton.innerText = 'SELL'
                    // sellbutton.addEventListener('click',()=> sell(croplist[i]))
                    // }
            }
                
                
                }  
            
    
    function getInventory(Inventory, recipelist){
        // console.log('is thisworking?' + sell(wheat))
        // console.log(recipelist)
        
        inventoryElList.push(<div key = {Math.ceil(Math.random()* Date.now()) }>Gold coins:  {JSON.stringify(player['gold coins'])}</div>)
        inventoryElList.push(<div key = {Math.ceil(Math.random()* Date.now()) }>Experience points:  {JSON.stringify(player['exp'])}</div>)
      
        
        for(let i = 0; i < recipelist.length; i++){
               
                inventoryElList.push(<div key = {Math.ceil(Math.random()* Date.now()) }>{recipelist[i].name}:  {JSON.stringify(Inventory[recipelist[i].name])}</div>)
                inventoryElList.push(<button onClick= {()=>sell((recipelist[i]),  recipelist, Inventory)}  >Sell {recipelist[i].name}</button>)
               
            }
        for(let i = 0; i < ingredientlist.length; i++){
                ingredientElList.push(<div key = {Math.ceil(Math.random()* Date.now()) }>{ingredientlist[i].name}: {JSON.stringify(Inventory[ingredientlist[i].name])}</div>)
                
            }
            
     }
    
    
        
        
    let putin = function(recipelist, ingredientlist){
            
        
            for (let i = 0; i < recipelist.length; i++ ){
               
                // let button = document.createElement('button')
                // button.innerText= recipelist[i].name
                // console.log(button.innerText)
                putinbuttonList.push(<button onClick={()=>bake(recipelist[i],recipelist, ingredientlist)} >{recipelist[i].name} </button>)
                // onMouseEnter={recipeDescription(recipelist[i])} onMouseLeave = {clearInfo()}
                // button.addEventListener('click',() => )
                // button.addEventListener('mouseenter', ()=> recipeDescription(recipelist[i]))
                // button.addEventListener('mouseleave', ()=> clearInfo())
                // recipeSelection.append(button)
     
            }
            
            // console.log(recipelist)
            // for(let i = 0; i < recipelist.length; i++){
            //     console.log(recipelist[i])
            // }
          
     
            
             
             
         
      
             
      
         }
        
    let takeout = function(cauldronrecipe, ingredientlist, recipelist){
            // recipelist = [flour, sugar, bread, sugarcookies]
            alert(`congratulations! you successfully made a ${cauldronrecipe.name}`)
            alert(`You have gained ${cauldronrecipe.expyield} Experience points `)
            Inventory[cauldronrecipe.name] += 1
            player['exp'] += cauldronrecipe.expyield
            // exp += this.recipe.expyield
            cauldronrecipe = null
            let putinFunction = putin(recipelist,ingredientlist)
            cauldronElement = (<div style = {cauldronStyle} onClick={()=>putinFunction}></div>)
            
            cauldronready = false
            console.log(Inventory)
            setRerender(!rerender)
            // this.fieldElement.addEventListener('click',() => this.plant())
           
            
                // while(list.lastElementChild){
                //     console.log(list.lastElementChild)
                //     list.removeChild(list.lastElementChild)
                //     console.log(list.lastElementChild)
                //     console.log('n')
                // }
                props.appCallback(Inventory)
                props.playerCallBack(player)
                getInventory(Inventory, recipelist)
            
        }
    let bake = function(recipe, recipelist, croplist){
            putinbuttonList = []
            
            cauldronrecipe = recipe
            let sufficientIngredients = true
            
            for(let i = 0; i < cauldronrecipe.ingredients.length; i++){
                let callsfor = 0
                for(let j = 0; j < cauldronrecipe.ingredients.length; j++){
                    if(cauldronrecipe.ingredients[i] == recipe.ingredients[j]){
                        callsfor += 1
                    }
                }
                if(Inventory[cauldronrecipe.ingredients[i].name] < callsfor){
                        sufficientIngredients = false
                        
                    }
                
                    
            }
            if(sufficientIngredients == true){
                for(let i = 0; i < cauldronrecipe.ingredients.length; i++){
                    
                   
                    Inventory[cauldronrecipe.ingredients[i].name] = Inventory[cauldronrecipe.ingredients[i].name] - 1
                    
                   
                }
                props.appCallback(Inventory)
                cauldronElement = (<div style = {cauldronStyle}>{cauldronrecipe.name} brewing</div>)
               
                
            
            let timeLeft = setTimeout(() => {
                cauldronready = true
                takeout(cauldronrecipe,recipelist, ingredientlist)
                
            
            }, 1000  )
            
            }
            else{
                alert('Insufficient ingredients')
            }
            
            
           
            }
            let cauldronrecipe = null
            
           cauldronElement = (<div style = {cauldronStyle}></div>)
           let putinFunction = putin(recipelist,ingredientlist) 
                 
            if(cauldronrecipe ==null){ cauldronElement = (<div style = {cauldronStyle} onClick={()=>putinFunction}></div>)}
            

            let cauldronready = false
            
            

            getInventory(Inventory, recipelist)
            let unlockableGardens = []
            if(player['exp'] >= 100){
                unlockableGardens.push(<button><a href = '/starGarden1/'>Get Ingredients in Garlic Garden</a></button>)
            }
        return(<div>
        <div>{inventoryElList}</div>
        <div>{ingredientElList}</div>
        <div>{putinbuttonList}</div>
        <div >{cauldronElement}</div>
        <button><a href = '/stargarden/'>Get some ingredients!</a></button>
        <div>{unlockableGardens}</div>
        
        </div>)
}
            // cauldronElement = (<div style = {cauldronStyle} onClick={()=> putin(recipelist, ingredientlist)}></div>)
            // function Cauldron(){
            //     if(cauldronrecipe == null){
            //         return emptyCauldronElement
            //     }
            //     else if (cauldronready == true){
            //         return readyCauldronElement
            //     }
            //     else{
            //         return cauldronElement
            //     }

            // }
          
        
        
        
        
        
    


export default Lab