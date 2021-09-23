
import React, { useState } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Animated } from 'react-animated-css';
import useDelayedState from 'use-delayed-state';
import './quiz.css';
export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useDelayedState(0);
	const [showScore, setShowScore] = useDelayedState(false);
	const [score, setScore] = useState(0);
    const [clickedItem, setClickedItem] = useState(null);
    const [clicked, setClicked] = useDelayedState(false);
    const handleCSS = (e, isCorrect) => {
        let selectedTag = e ? parseInt(e.target.id, 10) : null;
        setClickedItem(selectedTag);
        setClicked(true, 0);
        if (isCorrect) {
			setScore(score + 1);
		}
        
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion, 1000);
            setTimeout(()=>{
                setClickedItem(null)
                setClicked(false)
            }, 900)
		} else {
			setShowScore(true,500);
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
		}
    }
    
	return (
        <div className="quizDiv">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        {score > questions.length*3/4 ? 
                            (<div>YAYY
                                <br/>
                                Share on Facebook
                                <br/>
                                <FacebookShareButton
                                    url={'http://dtutime.dtu.ac.in'}
                                    quote={'YAYYYY. try it out'}
                                    className="Demo__some-network__share-button"
                                >
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                            </div>):
                            (<div>NO
                                <br/>
                                Share on Facebook
                                <br/>
                                <FacebookShareButton
                                url={'http://dtutime.dtu.ac.in'}
                                quote={'NOOO. try again'}
                                className="Demo__some-network__share-button"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>    
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
                                    onClick={(e) => {handleCSS(e, answerOption.isCorrect)}} >

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