import { useEffect, useState } from 'react';
import axios from "axios"


import Job from '../Job/Job';
import './Jobs.css';

    const Jobs = ({jobs, deleteJob}) => {
    console.log(deleteJob);
    return (
        <div className='jobs-container'>
            {
                jobs.map(job => <Job job={job} key={job.Id} deleteJob={deleteJob} /> )
            }       
        </div>
    )
   }



export default Jobs