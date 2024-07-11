import Job from "./Job";

// custom fetch hook
import useFetch from "../customHooks/useFetch";

const jobsUrl = "http://localhost:3000/jobs";

const JobListings = ({ isHome = false }) => {
  const { data: jobs, isLoading, error } = useFetch(jobsUrl);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error.isError) {
    return <h2>{error?.errorMsg}</h2>;
  }

  const listOfJobs = isHome ? jobs : jobs?.slice(0, 3);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Recent Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listOfJobs?.map((job) => {
            const { id } = job;
            return <Job key={id} {...job} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default JobListings;
