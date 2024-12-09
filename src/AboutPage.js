import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h2>About the Project</h2>
      <p>
        This project aims to develop a comprehensive university ranking metric based on teaching quality. We analyze professor reviews from Rate My Professor, perform sentiment analysis, and combine it with average ratings to create a composite ranking metric.
      </p>
      <p>
        We also aggregate the rankings at the department level, offering a more granular and accurate view of teaching effectiveness across different universities.
      </p>
      <h3>Project Methodology</h3>
      <p>
        The project uses data scraped from Rate My Professor and Google Scholar citations to analyze teaching quality. Sentiment analysis of student comments plays a crucial role in assessing teaching effectiveness, which, combined with ratings, helps create a valid and reliable metric.
      </p>
    </div>
  );
};

export default AboutPage;
