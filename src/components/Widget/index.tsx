import styled from 'styled-components';

export const Widget = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 153, 0, 0.6);
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
  }
`;

export const WidgetHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.125rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

export const WidgetContent = styled.div`
  padding: 1.5rem 2rem;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input {
    width: 283px;
    height: 40px;
    border: 1px solid rgba(255, 153, 0, 0.6);
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    font-family: 'Lato' sans-serif;
    color: #fff;
    font-size: 0.875rem;
    margin: 1rem 0;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
