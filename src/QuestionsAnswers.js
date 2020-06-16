import React, {useState} from "react";
import {getAnswersQuestions} from "./utils";
import SliderCarousel from "./SliderCarousel";
import ReactPlayer from "react-player"

const defaultVideos = {
    showFoodVideo: false,
    showStressVideo: false,
    showActivityVideo: false,
    completeQuestions: false
};
const QuestionAnswers = () => {
    const [videosToShow, setVideosToShow] = useState(defaultVideos);
    const questions = getAnswersQuestions();

    const introLink = "https://www.youtube.com/watch?v=gCtqbC_gack";
    const foodLink = "https://www.youtube.com/watch?v=-FXkdUfQ_nQ";
    const stressLink = "https://www.youtube.com/watch?v=TV60yla2Zfg";
    const activityLink = "https://www.youtube.com/watch?v=aQknXgU2iHM";

    const displayYoutubePlayer = (url = "") => {
        return <ReactPlayer url={url} controls={true}/>;
    };

    const showCompleteQuestions = () => {
        const {showFoodVideo = false, showStressVideo = false, showActivityVideo = false} = videosToShow || {};

        return (
            <div style= {{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                {showFoodVideo && displayYoutubePlayer(foodLink)}
                {showStressVideo && displayYoutubePlayer(stressLink)}
                {showActivityVideo && displayYoutubePlayer(activityLink)}
            </div>
        );
    };

    const handleLayout = () => {
        const {completeQuestions = false} = videosToShow || {};

        if(completeQuestions) return showCompleteQuestions();

        return (
            <React.Fragment>
                <div style= {{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px"}}>
                    {displayYoutubePlayer(introLink)}
                </div>
                <div style = {{width: "100%", height:"500px", backgroundColor:"black"}}>
                    <div>
                        <SliderCarousel questions={questions} videosToShow ={videosToShow} setVideosToShow={setVideosToShow} />
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