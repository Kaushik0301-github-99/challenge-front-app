import ChallengeComponent from "./ChallengeComponent.js";

function ChallengeList({challenges}) {
    return challenges.map(challenge =>{
        return( 
        <div className="list-group">
        <ChallengeComponent key={challenge.id}  challenge ={challenge}/>
        </div>
        );
    })
}

export default ChallengeList;
