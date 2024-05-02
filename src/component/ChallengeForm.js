import axios from "axios";
import { useState } from "react";

function ChallengeForm({getUpdatedChallengeList}) {
const [month,setMonth] = useState('');
const [description,setDescription] = useState('')

  const saveChallenge = async(e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:8023/challenge",{month,description});
        setMonth('');
        setDescription('');
        getUpdatedChallengeList();     
    } catch (error) {
        console.error("Error While saving the data : ",error)
    }
   
  }

    return(
        <div className="card my-5">
            <div class="card-header">
                Add New Challenge
            </div>
            <div className="card-body">
            <form onSubmit={saveChallenge}>
                <div className="mb-3">
                <label htmlFor="month" className="form-label">Month</label>
                <input className="form-control" type="text" id="month" placeholder="e.g January" value={month} onChange={(e)=>setMonth(e.target.value)}></input>
                </div>
                <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" placeholder="Describe the challenge" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    );
    
}

export default ChallengeForm;