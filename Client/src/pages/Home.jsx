import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

import { getJobs } from "../services/jobService";

function Home() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data = await getJobs();

        setJobs(data);
        setLoading(false);

      } catch (error) {

        console.log(error);
      }
    };

    fetchJobs();

  }, []);
    const filteredJobs = jobs.filter((job) => {

    const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());

    const matchesRisk =
        riskFilter === "All" ||
        job.riskLevel === riskFilter;

    return matchesSearch && matchesRisk;
    });

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <div className="px-10 py-20">

        <div className="max-w-4xl">

          <h1 className="text-7xl font-extrabold leading-tight mb-6">
            Detect Fake Jobs
            <span className="text-blue-500">
              {" "}Smarter 
            </span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            AI-powered platform to identify fraudulent job postings and explore trusted opportunities safely.
          </p>

        </div>

      </div>

      {/* JOB SECTION */}
      <div className="px-10 pb-20">

        <div className="flex flex-col md:flex-row gap-4 mb-10">

        <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-3 flex-1"
        />

        <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-3"
        >
            <option value="All">All Risks</option>
            <option value="Safe">Safe</option>
            <option value="Medium Risk">Medium Risk</option>
            <option value="High Risk">High Risk</option>
        </select>

        </div>

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-bold">
            Latest Jobs
          </h2>

          <p className="text-gray-500">
            {jobs.length} Jobs Found
          </p>

        </div>
        {loading ? (

        <p className="text-gray-400">
            Loading jobs...
        </p>

        ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredJobs.length === 0 ? (

            <p className="text-gray-500">
                No jobs found.
            </p>

            ) : (

            filteredJobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))

            )}

        </div>

        )}

      </div>

    </div>
  );
}

export default Home;