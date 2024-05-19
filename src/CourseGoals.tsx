
type props ={
    title: string
    description : string
}

const courseGoals = ({description,title} : props) => {
  return (
    <div>
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
    </div>
  )
}

export default courseGoals