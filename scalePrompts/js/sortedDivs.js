const sortDivs = (divs, sortBy) => {
  if (sortBy === "title") {
    return divs.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "updated") {
    return divs.sort((a, b) => a.updated.localeCompare(b.updated));
  } else {
    throw new Error("Invalid sort_by value");
  }
};

const divs = [
  {
    title: "Another Test SPC Only",
    updated: "2/2/2023",
  },
  {
    title: "Test Filtering Sales Chat Only",
    updated: "2/2/2023",
  },
  {
    title: "Primary Verification for PACT",
    updated: "1/31/2023",
  },
  {
    title: "Test Activity",
    updated: "1/31/2023",
  },
];

const sortedDivs = sortDivs(divs, "title");

console.log(sortedDivs);
