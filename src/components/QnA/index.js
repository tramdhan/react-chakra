import React, { useEffect, useState, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { Box } from "@chakra-ui/react";
import styles from "./QnA.module.css";

import "antd/dist/antd.css";

/**
 * Machine Learning QnA function using Tensorflow js
 * Takes user input in natural language and returns a response
 */

const QnA = () => {
  const [answer, setAnswer] = useState();
  const [userQuestion, setQuestion] = useState();
  const [qnaModel, setQnaModel] = useState({});

  const questionRef = useRef(null);

  const qnaContent =
    "There once lived a poor tailor, who had a son called Aladdin, a careless, idle boy who would do nothing but play ball all day long in the streets with little idle boys like himself. This so grieved the father that he died; yet, in spite of his mother`s tears and prayers, Aladdin did not mend his ways. One day, when he was playing in the streets as usual, a stranger asked him his age, and if he was not the son of Mustapha the tailor. 'I am, sir,' replied Aladdin; 'but he died a long while ago.' On this the stranger, who was a famous African magician, fell on his neck and kissed him, saying, 'I am your uncle, and knew you from your likeness to my brother. Go to your mother and tell her I am coming.' Aladdin ran home and told his mother of his newly found uncle. 'Indeed, child,' she said, 'your father had a brother, but I always thought he was dead.' However, she prepared supper, and bade Aladdin seek his uncle, who came laden with wine and fruit. He presently fell down and kissed the place where Mustapha used to sit, bidding Aladdin`s mother not to be surprised at not having seen him before, as he had been forty years out of the country. He then turned to Aladdin, and asked him his trade, at which the boy hung his head, while his mother burst into tears. On learning that Aladdin was idle and would learn no trade, he offered to take a shop for him and stock it with merchandise. Next day he bought Aladdin a fine suit of clothes and took him all over the city, showing him the sights, and brought him home at nightfall to his mother, who was overjoyed to see her son so fine. The next day the magician led Aladdin into some beautiful gardens a long way outside the city gates. They sat down by a fountain and the magician pulled a cake from his girdle, which he divided between them. They then journeyed onward till they almost reached the mountains. Aladdin was so tired that he begged to go back, but the magician beguiled him with pleasant stories, and led him on in spite of himself."; // merged content for searching

  const loadQnaModel = async () => {
    const loadedModel = await qna.load();
    setQnaModel(loadedModel);
  };

  useEffect(() => {
    loadQnaModel();
  }, []);

  const answerQuestion = async (e) => {
    if (e.which === 13 && qnaContent) {
      const question = questionRef.current.value;

      if (!qnaModel) {
        console.log("qnaModel is not loaded");
      }

      const answers = await qnaModel.findAnswers(question, qnaContent);
      setAnswer(answers);
      setQuestion(question);
    }
  };

  const showAnswer = () => {
    return answer ? "Response:" : "";
  };

  const showFailedResponse = () => {
    return answer?.length < 1 && userQuestion ? (
      <div className={styles.helpResponse}>Sorry, can't find a response to your question</div>
    ) : (
      ""
    );
  };

  return (
    <>
      {qnaModel == null ? (
        <div style={{ marginTop: "2em" }}>
          <p>Loading AI model...</p>
        </div>
      ) : (
        <Box bg="#d1d1d1" w="60%" ml={80} p={4}>
          Ask a question about the story below:
          <br />
          <input
            ref={questionRef}
            className={styles.helpQuestion}
            onKeyPress={answerQuestion}
            rows="2"
            cols="22"
          ></input>
          <br />
          <br />
          <span>{showAnswer()}</span>
          {answer?.slice(0, 1).map((ans, idx) => (
            <div className={styles.helpResponse} key={idx}>
              {ans.text}.
            </div>
          ))}
          {showFailedResponse()}
          <br />
          <br />
          <p>{qnaContent}</p>
        </Box>
      )}
    </>
  );
};

export default QnA;
