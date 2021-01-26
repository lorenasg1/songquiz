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
import { FormEvent, useState } from 'react';

// import bgImg from '/mpb2.jpg';

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

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  // function handleInputName(event: FormEvent) {
  //   event => setName(event.target.value
  // }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage="/mpb.png">
      <Head>
        <title>Song Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <WidgetHeader>
            <h1>{db.title}</h1>
          </WidgetHeader>
          <WidgetContent>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name=""
                id=""
                onChange={event => setName(event.target.value)}
                placeholder="Diz aí seu nome pra jogar :)"
              />

              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </WidgetContent>
        </Widget>

        <Widget>
          <WidgetContent>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lorenasg1/songquiz" />
    </QuizBackground>
  );
}
