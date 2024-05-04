import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./components/question";
import Result from "./components/result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [Answers, setAnswers] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    // JSONPlaceholder API'den soruları çekme
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const Questionss = response.data.slice(0, 3); // İlk 10 soruyu al
        setQuestions(Questionss);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleAnswerSelection = (selected) => {
    setAnswers([...Answers, selected]);
    setTimeout(() => {
      setcurrentIndex(currentIndex + 1);
    }, 30000); // 30 saniye sonra bir sonraki soruya geç
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Question question={questions[currentIndex]} SelectAnswer={handleAnswerSelection} />}/>
          <Route path="/results" element={<Result questions={questions} Answers={Answers} />}/>           
        </Routes>
      </Router>
    </div>
  );
};

export default App;



