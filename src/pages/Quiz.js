import _ from "lodash";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import ProgressBar from "../components/ProgressBar";
import useQuestions from "../hooks/useQuestions";

const initialState = null;
const Quiz = () => {
  const { id } = useParams();
  const { questions, loading, error } = useQuestions(id);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "questions":
        action.value.forEach((queston) =>
          queston.option.forEach((option) => {
            option.checked = false;
          })
        );
        return action.value;
      case "answer":
        const questions = _.cloneDeep(state);
        questions[action.questionID].options[action.optionIndex].checked =
          action.value;

        return questions;

      default:
        return state;
    }
  };

  const [qna, dispatch] = useReducer(reducer, initialState);
  console.log(qna);
  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[0].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
