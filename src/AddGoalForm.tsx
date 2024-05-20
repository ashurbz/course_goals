import { FormEvent, useRef } from "react"

type addGoal = {
   onAddGoals : (goal:string , description: string) => void
}
const AddGoalForm = ({onAddGoals }: addGoal) => {
    const goalInput = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }
   

    
    
    
   
    const handleAddGoal = () =>{
        const goal = goalInput?.current!.value
    const desc = description?.current!.value
        onAddGoals(goal,desc)
   
    }
      return (
    <div>
        <form onSubmit={handleOnSubmit}>

        
        <input type="text" placeholder="Enter Your Goal" ref={goalInput!}/>
        <input type="text" placeholder="Enter description for the goal" ref={description!}/>
        
        <button onClick={handleAddGoal} >Add Goal</button>
        </form>
    </div>
  )
}

export default AddGoalForm