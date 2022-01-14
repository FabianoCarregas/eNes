import { Link } from "react-router-dom";
import GameScore from "../GameScore";

function GameCard() {

    const game = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};

    return(
        <div>
            <img className="egames-game-card-image" src={game.image} alt={game.title} />
            <div className="egames-card-bottom-container">
                <h3>{game.title}</h3>
                <GameScore />
                <Link to={'/form/${game.id}'}>                
                <div className="btn btn-primary egames-btn">Rate</div>
                </Link>
            </div>
        </div>

    );
}

export default GameCard;