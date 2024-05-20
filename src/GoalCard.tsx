

type goalProps = {
    title : string,
    description : string
    id: number 
    onDelete : (id:number) => void
}
const GoalCard = ({title,description,onDelete,id}:goalProps) => {

    const handleDelete = () =>{
onDelete(id)
    }
    
  return (
    <div>
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        <button onClick= {handleDelete}>X</button>
    </div>
  )
}

export default GoalCard