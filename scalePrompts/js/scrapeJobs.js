const axios = require("axios");

const jobSites = [
  "indeed.com",
  "monster.com",
  "careerbuilder.com",
  "linkedin.com",
];

const getJobListings = async (jobSite) => {
  const response = await axios.get(
    `https://${jobSite}/jobs/software-engineer-contract?q=software-engineer-contract`
  );
  const jobListings = response.data.results;

  for (const jobListing of jobListings) {
    const jobTitle = jobListing.title;
    const companyName = jobListing.company;
    const location = jobListing.location;
    const salary = jobListing.salary;
    const description = jobListing.description;

    console.log(`
      Job Title: ${jobTitle}
      Company Name: ${companyName}
      Location: ${location}
      Salary: ${salary}
      Description: ${description}
    `);
  }
};

async function main() {
  for (const jobSite of jobSites) {
    await getJobListings(jobSite);
  }
}

main();
