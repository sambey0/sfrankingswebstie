import React from 'react';

const schoolsData = [
  { institution_name: 'united states military academy', ranking_metric: 3.236381 },
  { institution_name: 'sarah lawrence college', ranking_metric: 2.208024 },
  { institution_name: 'bard college', ranking_metric: 1.773717 },
  { institution_name: 'touro college', ranking_metric: 1.347072 },
  { institution_name: 'union college', ranking_metric: 1.060919 },
  { institution_name: 'vassar college', ranking_metric: 0.844725 },
  { institution_name: 'hamilton college', ranking_metric: 0.706333 },
  { institution_name: 'the new school', ranking_metric: 0.701751 },
  { institution_name: 'skidmore college', ranking_metric: 0.604490 },
  { institution_name: 'colgate university', ranking_metric: 0.348263 },
  { institution_name: 'purchase college (suny purchase)', ranking_metric: 0.226077 },
  { institution_name: 'hartwick college', ranking_metric: 0.133562 },
  { institution_name: 'lehman college', ranking_metric: 0.091276 },
  { institution_name: 'long island university - post', ranking_metric: 0.074707 },
  { institution_name: 'ithaca college', ranking_metric: -0.009508 },
  { institution_name: 'hobart and william smith colleges', ranking_metric: -0.026451 },
  { institution_name: 'adelphi university', ranking_metric: -0.109086 },
  { institution_name: 'fordham university at lincoln center', ranking_metric: -0.117066 },
  { institution_name: 'columbia university', ranking_metric: -0.143291 },
  { institution_name: 'new york university', ranking_metric: -0.180802 },
  { institution_name: 'yeshiva university', ranking_metric: -0.186769 },
  { institution_name: 'st. john\'s university - jamaica/queens', ranking_metric: -0.204806 },
  { institution_name: 'st. lawrence university', ranking_metric: -0.256961 },
  { institution_name: 'binghamton university (suny)', ranking_metric: -0.324335 },
  { institution_name: 'cornell university', ranking_metric: -0.392073 },
  { institution_name: 'fordham university - rose hill', ranking_metric: -0.423215 },
  { institution_name: 'pace university (all)', ranking_metric: -0.501174 },
  { institution_name: 'hofstra university', ranking_metric: -0.581891 },
  { institution_name: 'stony brook university (suny)', ranking_metric: -0.621072 },
  { institution_name: 'university of rochester', ranking_metric: -0.633691 },
  { institution_name: 'rochester institute of technology', ranking_metric: -0.642159 },
  { institution_name: 'marist college', ranking_metric: -0.806078 },
  { institution_name: 'syracuse university', ranking_metric: -0.845943 },
  { institution_name: 'suny college of environmental science and forestry', ranking_metric: -0.891686 },
  { institution_name: 'university at buffalo (suny buffalo)', ranking_metric: -1.028568 },
  { institution_name: 'university at albany (suny albany)', ranking_metric: -1.394575 },
  { institution_name: 'clarkson university', ranking_metric: -1.437581 },
  { institution_name: 'rensselaer polytechnic institute', ranking_metric: -1.598514 }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Top 30 University Rankings Based on Teaching Quality</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Institution</th>
            <th>Ranking Metric</th>
          </tr>
        </thead>
        <tbody>
          {schoolsData.map((school, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="institution-name">{school.institution_name}</td>
              <td>{school.ranking_metric.toFixed(6)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
