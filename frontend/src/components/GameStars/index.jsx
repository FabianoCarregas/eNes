import { ReactComponent as StarFull} from '../../assets/img/vectfull.svg'; 
import { ReactComponent as StarHalf} from '../../assets/img/vecthalf.svg';
import { ReactComponent as StarEmpty} from '../../assets/img/vectempty.svg';
import './styles.css'

function GameStars() {
return (
    <div className="egames-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarHalf />
        <StarEmpty />
    </div>
    );

}

export default GameStars;