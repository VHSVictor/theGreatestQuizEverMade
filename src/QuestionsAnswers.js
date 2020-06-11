import React, {useState} from "react";

import {getAnswersQuestions} from "./utils";
import SliderCarousel from "./SliderCarousel";

const QuestionAnswers = () => {
    const [completeQuestions, setCompleteQuestions] = useState(false);

    const questions = getAnswersQuestions();

    const showCompleteQuestions = () => {
        return (<div style ={{color: "white"}}>
            Questionario Completado!
        </div>);
    };

    const callCompleteLayout = () => setCompleteQuestions(true);

    const handleLayout = () => {
        if(completeQuestions) return showCompleteQuestions();

        return <SliderCarousel questions={questions} callCompleteLayout={callCompleteLayout} />
    };

    return ( 
        <div style = {{width: "1500px", height:"500px", backgroundColor:"black"}}>
            {handleLayout()}
        </div>
    );
}
 
export default QuestionAnswers;