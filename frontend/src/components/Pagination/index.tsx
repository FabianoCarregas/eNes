import { ReactComponent as Arrow } from '../../assets/img/arrow.svg'
import '../Pagination/styles.css'

function Pagination() {

    return(
        <div className="egames-pagination-container">
            <div className="egames-pagination-box">
                <button className="egames-pagination-button" disabled={true} >
                    <Arrow className="egames-flip-horizontal"/>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="egames-pagination-button" disabled={false} >
                    <Arrow/>
                </button>
            </div>
        </div>
    );  
}

export default Pagination;