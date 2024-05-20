import { useState } from "react"
import Header from "./Header.tsx"
import headerImage from './assets/goals.jpg'

import AddGoalForm from "./AddGoalForm.tsx"
import GoalCard from "./GoalCard.tsx"

export type courseGoals = {
  title:string,
  description: string,
  id: number
}


function App() {

  const [goals, setGoals]  = useState<courseGoals[]>([]) 
 
  const handleAddGoals = (title:string , description:string) =>{
  
    if(title && description){
    console.log(title,description)

    }
      setGoals([...goals, {title,description,id:Math.random()} ])
  }
  
  const onDelete = (id:number) =>{
   setGoals(goals.filter((goal)=>{
     if(goal.id !== id){
      
      return [...goals]
     }
    }))
  }

  return (
    <>
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:"center"}}>
        <Header image = {{src: headerImage , alt :'Image'}} >
          <h1> Your Course Gaols</h1>
          </Header>
        
          <AddGoalForm onAddGoals = {handleAddGoals}/>
         {goals.map((goal)=>{
          return <GoalCard key={goal.id} title={goal.title} description={goal.description} id={goal.id} onDelete={onDelete}/>
         })}
      </div>
    </>
  )
}

export default App
