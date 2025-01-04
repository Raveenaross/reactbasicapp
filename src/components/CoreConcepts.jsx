export default function CoreConcepts({image , title , description}){
  return (
    <li>
  {/*    
     Can be written with props or without props
  
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>  
  */}
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  
  )
}