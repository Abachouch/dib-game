import wolfy from '../../static/hero.png'
import './Game.css'

const loop = ["chefti dib" , "chefto" , "chefti ke3lalto"]

function Game() {


    return (

        <div className="home-container" >
            <div className="home">
                <h1 className="home-title" >DIB</h1>
                <img className='home-spirit' src={wolfy} alt="Cute Wolf" />
                <button className='home-play'> Play Now </button>
            </div>
            <div className="game">

                <div className='question-container' >
                    <h2 className="question">Cheti diib</h2>
                    <div className="progress-wraper">
                        <div className="progress"></div>
                    </div>
                </div> 
                <div className="answers">
                    <button className="answer">chefti <br /> ke3lalto</button>
                    <button className="answer">chefti <br /> dib</button>
                    <button className="answer">chefto</button>
                </div>

            </div>
        </div>
    )
}

export default Game;