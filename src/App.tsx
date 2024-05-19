import { useState } from "react"
import Header from "./Header.tsx"
import headerImage from './assets/goals.jpg'
import CourseGoals from "./CourseGoals.tsx"

type courseGoals = {
  title:string,
  description: string,
  id: number
}


function App() {

  const [goals, setGoals]  = useState<courseGoals[]>([]) 
 
  const handleAddGoals = () =>{

  }

  return (
    <>
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:"center"}}>
        <Header image = {{src: headerImage , alt :'Image'}} >
          <h1> Your Course Gaols</h1>
          </Header>
          <button onClick={handleAddGoals}>Add Goals</button>

          <CourseGoals title='React + TypeScript' description="A Great course to learn React and TS"/>
      </div>
    </>
  )
}

export default App
