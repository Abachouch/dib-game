import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import wolfy from '../../static/hero.png'
import './Game.css'

const loop = ["cheftiDib", "chefto", "cheftiKe3lalto"]

/**
 * 
 * @param {Number} turnCount 
 * @returns {Number}
 */
const getCurrentQuestionIndex = (turnCount) => {
    return  (((turnCount * 2) - 2) % 3)
}

/**
 * 
 * @param {Number} quationIndex 
 * @param {Number} answerIndex 
 * @returns {Boolean}
 */
const isCorrectAnswer = (turnCount, answerIndex) => {
    return (((turnCount * 2) - 1) % 3) === answerIndex
}

const getRandomNumbersArray =() => {
    let a = [1, 2 , 3] ;
    for(let i =0 ; i<5 ; i++){
        let cash  ;
        let p1 =  Math.floor(Math.random() * 3 )
        let p2 =  Math.floor(Math.random() * 3 ) 

        cash = a[p1] ;
       a[p1] = a[p2] ;
        a[p2] = cash
    }
    return a ;
}


function Game({ setScore }) {

    const [gameStage, setGameStage] = useState('is-home') // is-home,  is-game , is-lost
    const [turnCount, setTurnCount] = useState(0);
    const [animation, setAnimation] = useState() ;
    const [randomPositions ,setRandomPositions] = useState([1,2,3])

    const {t} =  useTranslation()


    useEffect(() => {
        if (gameStage === 'is-game') {

            setRandomPositions(getRandomNumbersArray())

            if (animation) {
                animation.cancel();
                animation.play();
            } else {
                const progressAnimation = new KeyframeEffect(
                    document.getElementById('progress'),
                    [
                        { width: "0%" },
                        { width: "100%" }
                    ],
                    { duration: 6000, easing: 'linear' }
                )
                const an = new Animation(progressAnimation, document.timeline)
                an.addEventListener('finish', () => {
                    if (gameStage === 'is-game')
                        setGameStage('is-lost');
                })
                setAnimation(an)
                an.play();

            }
        }
    }, [turnCount])

    function initGame() {
        setGameStage('is-game')
        setScore(0)
        setTurnCount(1);

    }

    function answer(useranswerIndex) {
        if (isCorrectAnswer(turnCount, useranswerIndex)) {
            setTurnCount(1 + turnCount)
            setScore(turnCount)
        }
        else {
            setGameStage('is-lost');
        }
    }

    return (
        <div className={`home-container  ${gameStage} `}  >
            <div className="home">
                <h1 className="home-title" >DIB</h1>
                <img className='home-spirit' src={wolfy} alt="Cute Wolf" />
                <button className='home-play' type='submit' onClick={() => {
                    initGame()
                }} > {t('home.playNow')} </button>
            </div>
            <div className="game">
                <div className='question-container' >
                    <h2 className="question">{ t(`game.${loop[getCurrentQuestionIndex(turnCount)]}`) }</h2>
                    <div className="progress-wraper">
                        <div id='progress' className="progress" role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="answers">

                    {
                        loop.map((el, index) => {
                            return <button key={index} className={`answer  order-${randomPositions[index]}  `}  onClick={() => {
                                answer(index)
                            }} > { t(`game.${el}`)} </button>
                        }
                        )
                    }
                </div>
            </div>
            <div className="lost">
                <h3>{t('lost.youLost')} </h3>
                <p> {t('lost.yourScore')}  : {turnCount - 1}</p>
                <button type='submit' onClick={() => {
                    initGame()
                }} > {t('lost.playAgain')} </button>
            </div>
        </div>
    )
}

export default Game;