import React, { useContext } from 'react'
import Jobs from '../../components/Jobs/Jobs'
import Nav from '../../components/Nav/Nav'

const Home = ({jobs, deleteJob}) => {
  //console.log(getJobs);
  return (
    <div>
      <Nav />
      <Jobs jobs = {jobs} deleteJob={deleteJob} />
    </div>
  )
}

export default Home