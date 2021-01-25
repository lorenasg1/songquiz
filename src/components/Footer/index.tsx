import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000007;
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

<<<<<<< HEAD
export default function Footer() {
=======
export default function Footer(props: any) {
>>>>>>> 62decccd7e312363bb0acbfaf1eaeeb55b257e77
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
