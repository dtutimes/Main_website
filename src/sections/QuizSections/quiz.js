
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton, EmailIcon, EmailShareButton} from 'react-share';
import { Animated } from 'react-animated-css';
import useDelayedState from 'use-delayed-state';
import './quiz.css';
export default function App() {
	const questions = require("./questions.json");

	const [currentQuestion, setCurrentQuestion] = useDelayedState(0);
	const [showScore, setShowScore] = useDelayedState(false);
	const [score, setScore] = useState(0);
    const [clickedItem, setClickedItem] = useState(null);
    const [clicked, setClicked] = useDelayedState(false);
    const handleCSS = (e, sscore) => {
        let selectedTag = e ? parseInt(e.target.id, 10) : null;
        setClickedItem(selectedTag);
        setClicked(true, 0);
        
		setScore(score + sscore);
		
        
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion, 1000);
            setTimeout(()=>{
                setClickedItem(null)
                setClicked(false)
            }, 900)
		} else {
			setShowScore(true,500);
            ReactGA.event({
                category:'Analytics',
                action:'Reached the end of the quiz'
            })
		}
    }
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
            this.classList.add('incorrect')
			setScore(score + 1);
		}
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion, 1000);
            setTimeout(()=>{
                setClickedItem(null)
            }, 1000)
		} else {
			setShowScore(true);
		}

        // moveToNext();
	};
    const moveToNext = () =>{
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
            ReactGA.event({
                category:'Analytics',
                action:'Reached the end of the quiz'
            })
		}
    }
    
	return (
        <div className="quizDiv">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        {score > questions.length*3/4 ? 
                            (<div>
                                YAYY
                                <br/>
                                {score}
                                <br/>
                                <br/>
                                <p style={{fontSize:"0.7em"}}> Share with your friends</p>
                                
                                
                                <FacebookShareButton
                                    url={'http://dtutimes.dtu.ac.in'}
                                    quote={'YAYYYY. try it out'}
                                    className="Demo__some-network__share-button"
                                >
                                    <FacebookIcon size={36} round />
                                </FacebookShareButton>
    
                                <WhatsappShareButton
                                    title={'DTU Times Quiz'}
                                    quote={'YAYYYY. try it out'}
                                    url={'http://dtutimes.dtu.ac.in'}
                                >    
                                    <WhatsappIcon size={36} round/>
                                </WhatsappShareButton>
                                
                                <EmailShareButton
                                    subject= {'DTU Times Quiz'}
                                    body={'Yay! I tried it. You too do.'}
                                    url={'http://dtutimes.dtu.ac.in'}
                                >
                                    <EmailIcon size={36} round/>
                                </EmailShareButton>
                            </div>):
                            (<div>
                                NO 
                                <br/>
                                {score}
                                <br/>
                                <br/>
                                <p style={{fontSize:"0.7em"}}> Share with your friends</p>
                                
                            <FacebookShareButton
                                url={'http://dtutimes.dtu.ac.in'}
                                quote={'NOOO. try again'}
                                className="Demo__some-network__share-button"
                            >
                                <FacebookIcon size={50} round style={{margin:"5px"}}/>
                            </FacebookShareButton> 
                            <WhatsappShareButton
                                title={'DTU Times Quiz'}
                                quote={'NOOO. try again'}
                                url={'http://dtutimes.dtu.ac.in'}
                            >    
                                <WhatsappIcon size={50} round style={{margin:"5px"}}/>
                            </WhatsappShareButton>
                            
                            <EmailShareButton
                                subject= {'DTU Times Quiz'}
                                body={'Yay! I tried it. You too do.'}
                                url={'http://dtutimes.dtu.ac.in'}
                            >
                                <EmailIcon size={50} round style={{margin:"5px"}}/>
                            </EmailShareButton>
                            
                            
                            </div>)
                        }
                        
                    </div>
                ) : (
                    <Animated animationOut={"fadeOut"} animationIn={'fadeIn'}>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button 
                                    key={index} 
                                    id={index}
                                    className={`quiz_button ${index == clickedItem ? `${answerOption.isCorrect?'correct':'incorrect'}`:''} ${answerOption.isCorrect? `${clicked?'correct':''}`:''}`} 
                                    onClick={(e) => {handleCSS(e, answerOption.score)}} >

                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                        <div className="skipQues" onClick ={moveToNext}>Skip</div>
                    </Animated>
                )}
            </div>

        </div>
		
    );
}