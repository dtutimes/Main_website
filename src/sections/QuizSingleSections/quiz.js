
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { FacebookShareButton, FacebookIcon, WhatsappIcon, WhatsappShareButton, EmailIcon, EmailShareButton} from 'react-share';
import { Animated } from 'react-animated-css';
import './quiz.css';

export default function App(props) {
    var slug = window.location.pathname;
    slug = slug.substring(6);
    // console.log(slug);
    React.useEffect(()=>{
        document.body.scrollTop = 0;
    },[]);
	const questionData = require(`./data/${slug}.json`);
    const questions = questionData.questions;
    const resultData = questionData.results;
    // const questions = require(`./data/questions.json`);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [total, setTotal] = useState(0);
	const [score, setScore] = useState(0);
    const [results, setResults] = useState(new Array(resultData.length).fill(0));
    const [clickedItem, setClickedItem] = useState(null);

    const handleCSS = (e, sscore, res) => {
        let selectedTag = e ? parseInt(e.target.id, 10) : null;
        setClickedItem(selectedTag);
        console.log(sscore);
		setScore(sscore);
        setTotal(total => total+sscore);
        const tempResults = [...results];
        tempResults[res]++;
        setResults(tempResults);
 
        // console.log(total);
        setTimeout(() => {
            setScore(0);
            setClickedItem(null);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
                console.log(total);
                ReactGA.event({
                    category:'Analytics',
                    action:'Reached the end of the quiz'
                })
            }
        }, 500);

        // console.log(sscore);
    }
    const submit = () => {
        // console.log(score);
        
        if(clickedItem){
            setTotal(total => total+score);
            setScore(0);
            setClickedItem(null);
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
        // console.log(total);
    }
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
    const result = () =>{
       const maxResult = Math.max(results);
       const predictedResult = results.indexOf(maxResult);
       const { heading, body } = resultData[predictedResult];

       return (
            <div>
                <h1>{heading}</h1><br/>
                <p>{body}</p>
            </div>
        );
    }
	return (
        <div className="quizDiv">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        {result()}
                        <br/>
                        
                        <p style={{fontSize:"0.7em"}}> Share with your friends</p>
                        
                        
                        <FacebookShareButton
                            url={'http://dtutimes.dtu.ac.in'}
                            quote={'YAYYYY. try it out'}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={46} round />
                        </FacebookShareButton>

                        <WhatsappShareButton
                            title={'DTU Times Quiz'}
                            quote={'YAYYYY. try it out'}
                            url={'http://dtutimes.dtu.ac.in'}
                        >    
                            <WhatsappIcon size={46} round/>
                        </WhatsappShareButton>
                        
                        <EmailShareButton
                            subject= {'DTU Times Quiz'}
                            body={'Yay! I tried it. You too do.'}
                            url={'http://dtutimes.dtu.ac.in'}
                        >
                            <EmailIcon size={46} round/>
                        </EmailShareButton>
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
                                    className={`quiz_button ${index == clickedItem ? 'clicked':''}`} 
                                    onClick={(e) => {handleCSS(e, answerOption.score, answerOption.result)}} >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                        <div className="submitBlock">
                            {
                                // <div className="submitQues" onClick = {submit}>Submit</div>
                            }
                            <div className="skipQues" onClick ={moveToNext}>Skip</div>
                        </div>
                        
                    </Animated>
                )}
            </div>

        </div>
		
    );
}