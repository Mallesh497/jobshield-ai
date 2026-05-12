const suspiciousKeywords = [
  "quick money",
  "registration fee",
  "earn instantly",
  "limited slots",
  "work from home guaranteed",
];

const detectFraud = (job) => {

  let score = 0;

  let reasons = [];

  // Keyword detection
  suspiciousKeywords.forEach((keyword) => {

    if (
      job.description.toLowerCase().includes(keyword)
    ) {
      score += 20;

      reasons.push(
        `Suspicious keyword detected: ${keyword}`
      );
    }
  });

  // Suspicious email
  if (
    job.email.includes("@gmail.com") ||
    job.email.includes("@yahoo.com")
  ) {
    score += 20;

    reasons.push("Personal email detected");
  }

  // Unrealistic salary
  if (
    job.salary &&
    parseInt(job.salary) > 50
  ) {
    score += 20;

    reasons.push("Unrealistic salary detected");
  }

  // Risk Level
  let riskLevel = "Safe";

  if (score >= 40) {
    riskLevel = "Medium Risk";
  }

  if (score >= 60) {
    riskLevel = "High Risk";
  }

  return {
    fraudScore: score,
    riskLevel,
    reasons,
  };
};

module.exports = detectFraud;