import React, {useState, useEffect} from "react";
import {Carousel, Button} from 'react-bootstrap';

const BOM = 0;
const RUIM = 1;

const SliderCarousel = ({questions = [], callCompleteLayout}) => {
    //Respondeu ruim em 3 questões de alimentação -> video alimentação
    //Respondeu ruim em 3 questões de atividade fisica -> video alimentação
    //Respondeu ruim em 3 questões de estresse -> video alimentação

    const [foodAnswers, setFoodAnswers] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [stressAnswers, setStressAnswers] = useState([]);
    const [activityAnswers, setActivityAnswers] = useState([]);
    const [showVideos, setShowVideos] = useState({
        showFoodVideo: false,
        showActivityVideo: false,
        showStressVideo: false
    })

    useEffect(() => {
        const answersWithType = countAnswersTypes("alimentação", RUIM);

        if(answersWithType.length >= 3) setShowVideos({...showVideos, showFoodVideo: true});

    },[foodAnswers]);

    useEffect(() => {
        const answersWithType = countAnswersTypes("atividade", RUIM);

        if(answersWithType.length >= 3) setShowVideos({...showVideos, showActivityVideo: true});
    },[activityAnswers]);

    useEffect(() => {
        const answersWithType = countAnswersTypes("stress", RUIM);

        if(answersWithType.length >= 3) setShowVideos({...showVideos, showStressVideo: true});
    },[stressAnswers]);

    const countAnswersTypes = (tipo = "", option = 0) => {
        const answers = handleCount[tipo];

        const filteredAnswers = answers.filter(answer => answer.option === option);

        return filteredAnswers.length;
    };

    const addFoodAnswer = (info = {}) => setFoodAnswers([...foodAnswers, { ...info }]);
    

    const addActivityAnswer = (info = {}) => setActivityAnswers([...activityAnswers, { ...info }]);
    

    const addStressAnswer = (info = {}) => setStressAnswers([...stressAnswers, { ...info }]);
    

    const handleAdd = {
        "alimentação" : () => addFoodAnswer(),
        "atividade" : () => addActivityAnswer(),
        "stress" : () => addStressAnswer()
    }

    const handleCount = {
        "alimentação" : foodAnswers,
        "atividade" : activityAnswers,
        "stress" : stressAnswers
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
            <Carousel.Item>
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
        return <div style ={{width:"500px", textAlign: "center"}}><h3 style ={{color:"white", fontSize:"20px"}}>{title}</h3></div>
    };

    const displayAnswer = (answer = {}, question = {}) => {
        const {resposta = ""} = answer || {};

        return <Button onClick = {() => handleAnswer(answer, question)} style ={{marginBottom: "10px"}} variant="primary">{resposta}</Button>
    };

    const displayQuestionAnswers = (question = []) => {
        const {respostas = {}} = question || {};
        return respostas.map(answer => {return displayAnswer(answer, question)});
    };
    
    return (
      <React.Fragment>
          <Carousel activeIndex={questionIndex} onSelect={handleSelect} slide={true} controls={false} interval={null} indicators={false}>
              {questions.map((question, index) => { return displayItem(question, index+1)})}
          </Carousel>
          <div style={{display: "flex", justifyContent: "center", alignItems:"center", marginTop: "20px"}}>
              <Button onClick ={() => callCompleteLayout()}>Concluir</Button>
          </div>
      </React.Fragment>
    );
}
 
export default SliderCarousel;