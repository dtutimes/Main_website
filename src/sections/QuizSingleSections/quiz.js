
import React, { useState } from 'react';
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
	const questions = require(`./data/${slug}.json`);
    // const questions = require(`./data/questions.json`);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [total, setTotal] = useState(0);
	const [score, setScore] = useState(0);
    const [clickedItem, setClickedItem] = useState(null);
    
    const handleCSS = (e, sscore) => {
        let selectedTag = e ? parseInt(e.target.id, 10) : null;
        setClickedItem(selectedTag);
		setScore(sscore);
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
        if(total >= 56 && total <= 28){
            return (
                <div>
                    <h1>Anaari</h1><br/>
                    <p>
                        You learnt absolutely nothing; zilch in two years. 
                        You count your blessings after two years because even you don't know how you survived online classes. 
                        But you are here, so there's that 🤷‍♂️
                    </p>
                </div>
            )
        }else if(total >= -27 && total <= 0){
            return (
                <div>
                    <h1>Survivor</h1><br/>
                    <p>
                    You barely got away with your life, barely being the operating term here. 
                    You most probably dozed off in your classes (more power to you), 
                    and skipped the remaining classes. 
                    That is the only rational explanation for your ignorance.
                     Or was this your silent rebellion all along 
                     (well played, in that case) 👏?
                    </p>
                </div>
            )
        }else if(total >= 1 && total <= 28){
            return (
                <div>
                <h1>Fuccha</h1><br/>
                    <p>
                    Congratulations! You are on the right path. If online classes continue, you'll probably get better with time. 
                    You have both time and potential to get better at a redundant skill. Go you! 💃
                    </p>
                </div>
            )
        }else{
            return (
                <div>
                <h1>Khilaadi</h1>
                <br/>
                    <p>
                    You are hereby christened Supreme Lord of Online Classes. 
                    Please send us a picture of yourself with sunglasses. 
                    We'll post it in the nearest temple, 
                    so fucchas can seek your blessings before diving into the GMeet link. 
                    Donations will strictly be 50-50 though 😎
                    </p>
                </div>
            )
        }
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
                                    onClick={(e) => {handleCSS(e, answerOption.score)}} >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>
                        <div className="submitBlock">
                            <div className="submitQues" onClick = {submit}>Submit</div>
                            <div className="skipQues" onClick ={moveToNext}>Skip</div>
                        </div>
                        
                    </Animated>
                )}
            </div>

        </div>
		
    );
}