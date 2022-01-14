import Pagination from "../../components/Pagination"
import GameCard from "../../components/GameCard";

function Listing() {

    return (
       <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <GameCard />
                    </div>
                  
                </div>
            </div>

        </>
    );
}

export default Listing;