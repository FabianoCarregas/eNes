import { Link } from 'react-router-dom';
import '../Form/styles.css';

function Form() {

    const game = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="egames-form-container">
        <img className="egames-game-card-image" src={game.image} alt={game.title} />
        <div className="egames-card-bottom-container">
            <h3>{game.title}</h3>
            <form className="egames-form">
                <div className="form-group egame-form-group">
                    <label htmlFor="email">Enter your E-mail here</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group egames-form-group">
                    <label htmlFor="score">Rate this game</label>
                    <select className="form-control" id="score">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="egames-form-btn-container">
                    <button type="submit" className="btn btn-primary egames-btn">Salvar</button>
                </div>
            </form >
            <Link to="/">
            <button className="btn btn-primary egames-btn mt-3">Cancelar</button>
            </Link>
        </div >
    </div >
    );
}

export default Form;