import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Question = ({ question, SelectAnswer }) => {
  const [enableAnswers, setEnableAnswers] = useState(false);
  
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    setEnableAnswers(false); 

    const timer = setTimeout(() => {
      setEnableAnswers(true); 
    }, 10000); 

    return () => clearTimeout(timer);
    
  }, [question]); 


  useEffect(() => {
    if (question&&question.id === 3) {
        const redirectTimer = setTimeout(() => {
            setRedirect(true);
          }, 30000);
    
          return () => clearTimeout(redirectTimer);
    }
  }, [question]);

  

  if (redirect) {
    return <Navigate to="/results" />;
  }
if (!question) {
    return <div>Yükleniyor...</div>; 
  }
  const { id, title, body } = question;

  const parts = body.split('\n');

  const choices = ['A', 'B', 'C', 'D'];

  const handleAnswerClick = (choice) => {
    if (enableAnswers) {
      SelectAnswer(choice);
    } else {
      console.log("Henüz cevapları seçmeye izin verilmedi.");
    }
  };
  console.log(question)

  return (
    <div>
      <h2>Soru {id}</h2>
      <p>{title}</p>
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={choices[index]}
                onClick={() => handleAnswerClick(choices[index])}
                disabled={!enableAnswers}
              />
              <span>{choices[index]}: {part}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

