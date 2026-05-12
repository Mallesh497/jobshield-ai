function JobCard({ job }) {

  const riskColor =
    job.riskLevel === "High Risk"
      ? "text-red-500"
      : job.riskLevel === "Medium Risk"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition">
      
      <h2 className="text-2xl font-bold mb-2">
        {job.title}
      </h2>

      <p className="text-gray-400 mb-1">
        {job.company}
      </p>

      <p className="text-gray-500 mb-4">
        {job.location}
      </p>

      <p className="text-gray-300 mb-5">
        {job.description}
      </p>

      <div className="mb-4">
        
        <p className="text-sm text-gray-400">
          Fraud Score:
        </p>

        <h3 className="text-2xl font-bold">
          {job.fraudScore}%
        </h3>

      </div>

      <div className="mb-4">

        <p className="text-sm text-gray-400">
          Risk Level:
        </p>

        <h3 className={`font-bold ${riskColor}`}>
          {job.riskLevel}
        </h3>

      </div>

      {job.reasons?.length > 0 && (

        <div>

          <p className="text-sm text-gray-400 mb-2">
            Reasons:
          </p>

          <ul className="list-disc list-inside text-red-400 space-y-1">

            {job.reasons.map((reason, index) => (
              <li key={index}>
                {reason}
              </li>
            ))}

          </ul>

        </div>
      )}

    </div>
  );
}

export default JobCard;