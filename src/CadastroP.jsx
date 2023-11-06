import React, { useState } from 'react';

function CadastroP() {
  const [descricao, setDescricao] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    const produto = {
      descricao,
      fornecedor,
      dataValidade,
      quantidadeEstoque,
    };

    console.log('Produto cadastrado:', produto);
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleCadastro}>
        <div className="form-group">
          <label htmlFor="descricao">Descrição do Produto</label>
          <input
            type="text"
            className="form-control"
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fornecedor">Fornecedor</label>
          <input
            type="text"
            className="form-control"
            id="fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataValidade">Data de Validade</label>
          <input
            type="date"
            className="form-control"
            id="dataValidade"
            value={dataValidade}
            onChange={(e) => setDataValidade(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque</label>
          <input
            type="number"
            className="form-control"
            id="quantidadeEstoque"
            value={quantidadeEstoque}
            onChange={(e) => setQuantidadeEstoque(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}

export default CadastroP;