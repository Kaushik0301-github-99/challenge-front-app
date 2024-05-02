import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ChallengeList from './component/ChallengeList';
import ChallengeForm from './component/ChallengeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [challenges,setChallenges] = useState([]);
  useEffect(()=>{
    fetchAllChallenges();
  },[]);

  const fetchAllChallenges = async ()=>{
    try {
      const fetchedData = await axios.get('http://localhost:8023/challenge');
      console.log(fetchedData)
      setChallenges(fetchedData.data);  
    } catch (error) {
      console.error("Error While Fetching data : ",error);
    }
    
  }

  const fetchChallengesAfterSaving =() =>{
    fetchAllChallenges();
  }
  return (
    <div className="container mt-5">
      <h1 className='text-center mb-4'>Monthly Challenge App</h1>
      <ChallengeForm getUpdatedChallengeList={fetchChallengesAfterSaving}/>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App;
