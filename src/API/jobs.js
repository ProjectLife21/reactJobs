//API Verson 1.0.0

/*
Desc: GET ALL JOBS
Method: GET
URL: http://localhost:3000/jobs
Access: PUBLIC
*/
export const getAllJobs = "http://localhost:3000/jobs";

/*
Desc: GET SINGLE JOB WITH ID
Method: GET
URL: http://localhost:3000/jobs/jobID
Access: PUBLIC
*/
export const getJobWithID = (jobID) => {
  return `http://localhost:3000/jobs/${jobID}`;
};
