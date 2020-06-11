import React, {useState} from "react";
import {getAnswersQuestions} from "./utils";
import SliderCarousel from "./SliderCarousel";
import ReactPlayer from "react-player"

const QuestionAnswers = () => {
    const [completeQuestions, setCompleteQuestions] = useState(false);

    const questions = getAnswersQuestions();

    const refreshPage = () => {
        window.location.reload(false);
    }

    const showCompleteQuestions = () => {
        return (
            <div style ={{color: "white"}}>
                <h1>Concluido</h1>
                <button onClick={refreshPage}>Recarregar</button>
            </div>
        );
    };

    const callCompleteLayout = () => {
        setCompleteQuestions(true);
    }

    const handleLayout = () => {
        if(completeQuestions) return showCompleteQuestions();

        return (
            <React.Fragment>
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=gCtqbC_gack" controls={true}/>
                </div>
                <div style = {{width: "100%", height:"500px", backgroundColor:"black"}}>
                    <div>
                        <SliderCarousel questions={questions} callCompleteLayout={callCompleteLayout} />
                    </div>
                </div>
            </React.Fragment>
        );
    };

    return ( 
        handleLayout()
    );
}
 
export default QuestionAnswers;