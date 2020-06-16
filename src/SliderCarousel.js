import React, {useState, useEffect, useCallback} from "react";
import {Carousel, Button} from 'react-bootstrap';

const BOM = 0;
const RUIM = 1;

const SliderCarousel = ({questions = [], videosToShow = {}, setVideosToShow}) => {
    //Respondeu ruim em 3 questões de alimentação -> video alimentação
    //Respondeu ruim em 3 questões de atividade fisica -> video alimentação
    //Respondeu ruim em 3 questões de estresse -> video alimentação
    const [foodAnswers, setFoodAnswers] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [stressAnswers, setStressAnswers] = useState([]);
    const [activityAnswers, setActivityAnswers] = useState([]);

    const handleCount = {
        "alimentação" : foodAnswers,
        "atividade" : activityAnswers,
        "stress" : stressAnswers
    }

    const countAnswersTypes = useCallback((tipo = "", option = false) => {
        const answers = handleCount[tipo];

        const filteredAnswers = answers.filter(answer => answer.option === option);

        return filteredAnswers.length;
      }, [handleCount]);

    useEffect(() => {
        const {showFoodVideo = false} = videosToShow || {};

        if(showFoodVideo) return;

        const answersWithType = countAnswersTypes("alimentação", RUIM);

        if(answersWithType >= 3) setVideosToShow({...videosToShow, showFoodVideo: true});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[foodAnswers, countAnswersTypes, setVideosToShow]);

    useEffect(() => {
        const {showActivityVideo = false} = videosToShow || {};

        if(showActivityVideo) return;

        const answersWithType = countAnswersTypes("atividade", RUIM);

        if(answersWithType >= 3) setVideosToShow({...videosToShow, showActivityVideo: true});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[activityAnswers, countAnswersTypes, setVideosToShow]);

    useEffect(() => {
        const {showStressVideo = false} = videosToShow || {};

        if(showStressVideo) return;

        const answersWithType = countAnswersTypes("stress", RUIM);

        if(answersWithType >= 3) setVideosToShow({...videosToShow, showStressVideo: true});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[stressAnswers, countAnswersTypes, setVideosToShow]);

    const handleCompleteLayout = () => {
        setVideosToShow({
            ...videosToShow,
            completeQuestions: true
        });
    };

    const addFoodAnswer = (info = {}) => setFoodAnswers([...foodAnswers, { ...info }]);
    
    const addActivityAnswer = (info = {}) => setActivityAnswers([...activityAnswers, { ...info }]);
    
    
    const addStressAnswer = (info = {}) => setStressAnswers([...stressAnswers, { ...info }]);
    
    const handleAdd = {
        "alimentação" : (info) => addFoodAnswer(info),
        "atividade" : (info) => addActivityAnswer(info),
        "stress" : (info) => addStressAnswer(info)
    }

    const handleSelect = (selectedIndex) => {
        setQuestionIndex(selectedIndex);
    };

    const handleAnswer = (answer = {}, question = {}) => {
        const {tipo = ""} = question || {};

        handleAdd[tipo]({...answer,...question});
        setQuestionIndex(questionIndex+1);
    };

    const displayItem = (question = {}, index = 0) => {
        const {pergunta = ""} = question || {};
        return (
            <Carousel.Item key={index}>
                <div style ={{ width:"100%", height:"300px", display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", marginBottom:"200px", paddingTop: "120px"}}>
                    <div style ={{display:"flex", justifyContent:"center", marginBottom:"50px"}}>
                        {displayQuestionTitle(pergunta)}
                    </div>
                    <React.Fragment>
                    {displayQuestionAnswers(question)}
                    </React.Fragment>
                </div>
                <Carousel.Caption>
                    <p>Pergunta {index}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    };

    const displayQuestionTitle = (title = "") => {
        return <div style ={{width:"500px", textAlign: "center"}}><h3 style={{color:"white", fontSize:"20px"}}>{title}</h3></div>
    };

    const displayAnswer = (answer = {}, question = {}, index = 0) => {
        const {resposta = ""} = answer || {};

        return <Button key = {index} onClick = {() => handleAnswer(answer, question)} style ={{marginBottom: "10px"}} variant="primary">{resposta}</Button>
    };

    const displayQuestionAnswers = (question = []) => {
        const {respostas = {}} = question || {};
        return respostas.map((answer, index) => {return displayAnswer(answer, question, index)});
    };
    
    return (
      <React.Fragment>
          <Carousel activeIndex={questionIndex} onSelect={handleSelect} slide={true} controls={false} interval={null} indicators={false}>
              {questions.map((question, index) => { return displayItem(question, index+1)})}
              <Carousel.Item>
                  <div style ={{ width:"100%", height:"300px", display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", marginBottom:"200px", paddingTop: "120px"}}>
                      <h3 style={{color:"white", fontSize:"35px"}}>Fim da pesquisa, clique no botão abaixo para mostrar seu resultado!</h3>
                      <div style={{display: "flex", justifyContent: "center", alignItems:"center", marginTop: "20px"}}>
                        <Button onClick ={() => handleCompleteLayout()}>Mostrar Resultado</Button>
                      </div>
                  </div>
              </Carousel.Item>
          </Carousel>
      </React.Fragment>
    );
}
 
export default SliderCarousel;