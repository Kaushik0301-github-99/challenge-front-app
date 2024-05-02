function ChallengeComponent({challenge}) {
    return(
    <div className="list-group-item list-group-item-action ">
 <h5>{challenge.month}</h5>
 <p>{challenge.description}</p>
    </div>    
    );
 }
 
 export default ChallengeComponent;