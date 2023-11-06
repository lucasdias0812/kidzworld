import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section about">
                <img src="/src/assets/Logo.png" alt="" width={'300px'}/>
                <p>
                  KidzWorld
                </p>
              </div>
              <div className="footer-section links">
                <h3>Links</h3>
                <ul>
                  <li><a href="/login">Entrar</a></li>
                  <li><a href="/CadastroP">Cadastro Produto</a></li>
                </ul>
              </div>
              <p>
                &copy; {new Date().getFullYear()} KidzWorld. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      );
}

export default Footer