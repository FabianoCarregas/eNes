import GameStars from "../GameStars";
import '../GameScore/styles.css'

type Props = {
    score: number;
    count: number;
} 

function GameScore({ score, count } : Props) {

return (
   <div className="egames-score-container">
        <p className="games-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <GameStars score={score} />
        <p className="egames-score-count">{count} avaliações</p>
    </div>
    )
}

export default GameScore;