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

    function refreshPage() {
        window.location.reload(false);
    }

    const displayYoutubePlayer = (url = "", mensagem = "") => {
        return(
            <div>
                <div style={{maxWidth: "930px", display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "50px"}}>
                    <h2 style={{marginBottom: "20px"}}>{mensagem}</h2>
                    <ReactPlayer url={url} controls={true}/>
                </div>
                <hr/>
            </div>
        );
    };

    const showCompleteQuestions = () => {
        const {showFoodVideo = false, showStressVideo = false, showActivityVideo = false} = videosToShow || {};
        const allOk = !showFoodVideo && !showActivityVideo && !showStressVideo;

        return (
            <div style= {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px", width: "100%"}}>
                {showFoodVideo && displayYoutubePlayer(foodLink, "Notamos que você precisa dar mais atenção a sua alimentação. Que tal assistir a um vídeo que fala um pouco mais sobre isso?")}
                {showStressVideo && displayYoutubePlayer(stressLink, "Notamos que você precisa dar mais atenção ao seu estresse. Que tal assistir a um vídeo que fala um pouco mais sobre isso?")}
                {showActivityVideo && displayYoutubePlayer(activityLink, "Notamos que você precisa dar mais atenção as suas atividades físicas. Que tal assistir a um vídeo que fala um pouco mais sobre isso?")}
                {allOk && "Parabens você está saudável"}
                <button onClick={refreshPage}>Recomeçar</button>
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