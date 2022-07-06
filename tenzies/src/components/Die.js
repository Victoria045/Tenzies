export default function Die(props) {
  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <div 
      className="card" 
      onClick={props.handleClick} 
      style={styles}
    >
       <h2 className="card-elem">{props.value}</h2>
    </div>
  )
}