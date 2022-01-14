import GameStars from "../GameStars";
import '../GameScore/styles.css'

function GameScore() {

const score = 3.5;
const count = 13;

return (
   <div className="egames-score-container">
        <p className="games-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <GameStars />
        <p className="egames-score-count">{count} avaliações</p>
    </div>
    )
}

export default GameScore;