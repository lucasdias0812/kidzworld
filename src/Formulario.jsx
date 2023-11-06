import React from 'react';

function Formulario() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Faça o seu Login</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Nome de Usuário ou Email</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;