import { Link } from "react-router-dom";
import { Game } from "../../types/game";
import GameScore from "../GameScore";

type Props = {
    game: Game;
}

function GameCard({ game } : Props) {


    return(
        <div>
            <img className="egames-game-card-image" src={game.image} alt={game.title} />
            <div className="egames-card-bottom-container">
                <h3>{game.title}</h3>
                <GameScore count={game.count} score={game.score} />

                <Link to={`/form/${game.id}`}>                
                <div className="btn btn-primary egames-btn">Rate</div>
                </Link>
            </div>
        </div>
    );
}

export default GameCard;