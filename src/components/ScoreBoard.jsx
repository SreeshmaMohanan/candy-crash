const ScoreBoard = ({ score }) => {
 
    return (
      
      <div className="score-board shadow bg-dark text-light"
      style={{
        width:'200px',
        borderRadius:'20px',
        
      }}>
        <h2 className="text-center">Score: {score}</h2>
        
      </div>
    )
  }
  
  export default ScoreBoard