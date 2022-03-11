import './Job.css';

const Job = ({job, deleteJob}) => {
  console.log(deleteJob);
  return (
    <div className='job-container'>
        <div className="left">
            <div className="title">
              {job.JobTitle}
            </div>
            <div className="location">
                {job.Location}
            </div>
        </div>
        <div className="center">
            <div className="salary">
               ${Intl.NumberFormat('en-US').format(job.MinimumSalary)} 
               - 
               ${Intl.NumberFormat('en-US').format(job.MaximumSalary)}
            </div>
        </div>
        <div className="right">
            <button type='button' className='view'>View</button>
            <button type='button' className='edit'>Edit</button>
            <button type='button' className='delete' onClick={() => deleteJob(job.Id)}>Delete</button>
        </div>

    </div>
  )
}

export default Job