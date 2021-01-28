import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../../db.json';

import {
  Widget,
  WidgetHeader,
  WidgetContent,
  WidgetTopic,
} from '../components/Widget';

import { Button } from '../components/Button';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import GitHubCorner from '../components/GitHubCorner';
import { FormEvent, useEffect, useState } from 'react';
import QuizContainer from '../components/QuizContainer';

function LoadingWidget() {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>

      <WidgetContent>[Desafio do Loading]</WidgetContent>
    </Widget>
  );
}

interface QuestionProps {
  question: {
    image: string;
    title: string;
    description: string;
    alternatives: Array<string>;
  };
  currentQuestion: number;
  totalQuestions: number;
  onSubmit: Function;
}

function QuestionWidget({
  question,
  currentQuestion,
  totalQuestions,
  onSubmit,
}: QuestionProps) {
  const questionId = `question_${currentQuestion}`;

  const router = useRouter();

  function handleSubmitButton(event: FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <Widget>
      <WidgetHeader>
        <h1>
          Pergunta {currentQuestion + 1} de {totalQuestions}
        </h1>
      </WidgetHeader>

      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />

      <WidgetContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={handleSubmitButton}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            return (
              <WidgetTopic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input id={alternativeId} name={questionId} type="radio" />
                {alternative}
              </WidgetTopic>
            );
          })}

          <br />
          <Button type="submit">Confirmar</Button>
        </form>
      </WidgetContent>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage="/mpb.png">
      <Head>
        <title>Song Quiz | Jogar </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmit}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou x questões, parabéns!</div>
        )}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lorenasg1/songquiz" />
    </QuizBackground>
  );
}
