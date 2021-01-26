import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../../db.json';

import { Widget, WidgetHeader, WidgetContent } from '../components/Widget';

import { Button } from '../components/Button';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import { FormEvent } from 'react';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function QuizPage() {
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Song Quiz | Jogar </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <WidgetHeader>
            <h1>Pergunta 1 de 5</h1>
          </WidgetHeader>
          <WidgetContent>
            <p>Que música é essa?</p>
            <p>
              <em>Se você tiver que escolher entre você e o seu amor</em>
            </p>

            <form onSubmit={handleSubmit}>
              <Button type="submit" disabled>
                Confirmar
              </Button>
            </form>
          </WidgetContent>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lorenasg1/songquiz" />
    </QuizBackground>
  );
}
