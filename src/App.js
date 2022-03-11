import React,{ useState, useEffect} from "react"
import axios from "axios"


import './App.css';
import Home from "./pages/Home/Home"



function App() {
  const [jobs, setJobs] = useState([])

        const fetchjobs = async () => {
          const response = await axios.get("http://localhost:6564/api/Job/get-jobs");
          setJobs(response.data);
        }

        useEffect(
          () =>{
              fetchjobs();
          }, [jobs]
        )

        const deleteJob = async (id) => {
          await axios.delete("http://localhost:6564/api/Job/delete-job?jobId="+id);
          const newJobList = jobs.filter(job => 
          {
            return job.id !== id;
          }
        );
        setJobs(newJobList);
          
        }

        console.log(jobs);

  return (
   
    <div className="">     
      <Home jobs = {jobs} deleteJob = {deleteJob} />
    </div>
  );
}

export default App;
