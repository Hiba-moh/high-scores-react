import React from 'react';
import scores from './scores';
import PlayerScore from './PlayerScore';
import CountriesNames from './CountriesNames';

let countryN = [];
const sortCountryNames = () => {
  scores.map (record => countryN.push (record.name));
  countryN = countryN.sort ();
};

let sortedCountriesScores = [];

const sortCountryRecordsByScores = () => {
  countryN.forEach (element => {
    scores.forEach (item => {
      if (element === item.name) {
        sortedCountriesScores.push (item);
      }
    });
  });

  sortedCountriesScores.forEach (item => {
    item.scores.sort ((a, b) => (a.s < b.s ? 1 : -1));
  });

  console.log (sortedCountriesScores);
};

const HighScoreTable = () => {
  sortCountryNames ();
  sortCountryRecordsByScores ();
  return (
    <div>

      <tr class="header"><h1>High Score Per Country</h1></tr>
      <table class="allContries">
        {sortedCountriesScores.map ((item, index) => {
          return (
            <div>
              <table class="countryTable">

                <CountriesNames country={countryN[index]} />

                {item.scores.map (player => {
                  return <PlayerScore player={player.n} score={player.s} />;
                })}
              </table>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default HighScoreTable;
