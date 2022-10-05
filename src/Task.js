export const Task = (props) =>{
     return (
       <div className="task"
       style={{ backgroundColor: props.completed ? "green" : "white", color: props.completed? "white" : "blacl" } }
       >
         <h4>{props.taskName}</h4>
         <button className='completeBtn' 
         onClick={()=>props.completeTask(props.id
            
            )}>
            Complete
            </button>
         <button
           className="deleteBtn"
           onClick={() => props.deleteTask(props.id)}
         >
           X
         </button>
       </div>
     );
}