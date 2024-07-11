import { useEffect } from "react";
import Job from "./Job";
import { useState } from "react";

const jobsUrl = "http://localhost:3000/jobs";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await fetch(jobsUrl);

      if (!response.ok) {
        throw new Error(`Something went wrong. Please try again later...`);
      }

      const data = await response.json();
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Recent Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs?.map((job) => {
            const { id } = job;
            return <Job key={id} {...job} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default JobListings;
