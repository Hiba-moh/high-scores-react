import React from 'react';
import scores from './scores';
import PlayerScore from './PlayerScore';
import CountriesNames from './CountriesNames';

let countryN = [];
const sortCountryNames = () => {
  scores.map (record => countryN.push (record.name));
  countryN = countryN.sort ();
};

const HighScoreTable = () => {
  sortCountryNames ();
  return (
    <div>

      <tr class="header"><h1>High Score </h1></tr>
      <table class="allContries">
        {scores.map ((item, index) => {
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
