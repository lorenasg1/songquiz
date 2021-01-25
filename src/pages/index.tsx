import styled from 'styled-components';

import db from '../../db.json';

import { Widget, Header, Content } from '../components/Widget';
import QuizLogo from '../components/QuizLogo';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Header>
            <h1>{db.title}</h1>
          </Header>
          <Content>
            <p>{db.description}</p>
          </Content>
        </Widget>

        <Widget>
          <Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Content>
        </Widget>
        <Footer />
      </QuizContainer>
      // <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
