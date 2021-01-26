import styled from 'styled-components';

interface QuizBackgroundProps {
  backgroundImage: string;
}

const QuizBackground = styled.div<QuizBackgroundProps>`
  width: 100%;
  background-size: initial;
  background-position: right;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat right
    top;
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;

  @media screen and (max-width: 500px) {
    background-image: none;

    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
