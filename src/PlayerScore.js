import React from 'react';

const PlayerScore = props => {
  return (
    <tr class="onePlayerRow">
      <td class="NS">{props.player}</td>
      <td class="NS">{props.score}</td>
    </tr>
  );
};

export default PlayerScore;
