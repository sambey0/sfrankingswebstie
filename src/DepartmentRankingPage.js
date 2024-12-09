import React from 'react';

const DepartmentRankingPage = () => {
  return (
    <div>
      <h2>Department-wise Rankings</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>University</th>
            <th>Ranking Score</th>
            <th>Sentiment Score</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with the actual data */}
          <tr>
            <td>Stony Brook University</td>
            <td>8.3</td>
            <td>0.5</td>
          </tr>
          <tr>
            <td>University of Rochester</td>
            <td>7.8</td>
            <td>0.6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentRankingPage;
