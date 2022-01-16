import { ReactComponent as Arrow } from '../../assets/img/arrow.svg'
import { GamePage } from '../../types/game';
import '../Pagination/styles.css'

type Props = {
    page: GamePage
    onChange: Function;
}

function Pagination({ page, onChange } : Props) {

    return(
        <div className="egames-pagination-container">
            <div className="egames-pagination-box">
                <button className="egames-pagination-button" 
                disabled={page.first} onClick={()=> onChange(page.number - 1)} >
                    <Arrow className="egames-flip-horizontal"/>
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="egames-pagination-button" 
                disabled={page.last} onClick={()=> onChange(page.number + 1)} >
                    <Arrow/>
                </button>
            </div>
        </div>
    );  
}

export default Pagination;