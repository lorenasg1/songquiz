import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  border-radius: 4px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }

    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
