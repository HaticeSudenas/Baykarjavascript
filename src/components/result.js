// src/components/ResultTable.js
import React from 'react';

const Result = ({ questions, Answers }) => {
  return (
    <div>
      <h2>Quiz Results</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={question.id}>
              <td>{question.title}</td>
              <td>{Answers[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
