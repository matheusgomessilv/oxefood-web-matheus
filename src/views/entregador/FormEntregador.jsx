import React, { useState } from 'react';

const FormEntregador = () => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    rg: '',
    nascimento: '',
    celular: '',
    fixo: '',
    qtdEntregas: '',
    valorFrete: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    cep: '',
    uf: '',
    complemento: '',
    ativo: 'Sim'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Entregador cadastrado:', form);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h3 style={{ marginTop: '40px', marginBottom: '30px', color: '#555' }}>
        <span style={{ color: '#999' }}>Entregador »</span> <strong>Cadastro</strong>
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Linha 1 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 2 }}>
            <label style={{ fontWeight: 'bold' }}>Nome *</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>CPF *</label>
            <input
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>RG</label>
            <input
              type="text"
              name="rg"
              value={form.rg}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        </div>

        {/* Linha 2 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>DT Nascimento</label>
            <input
              type="text"
              placeholder="Ex: 20/03/1985"
              name="nascimento"
              value={form.nascimento}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Fone Celular *</label>
            <input
              type="text"
              name="celular"
              value={form.celular}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Fone Fixo</label>
            <input
              type="text"
              name="fixo"
              value={form.fixo}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>QTD Entregas Realizadas</label>
            <input
              type="number"
              name="qtdEntregas"
              value={form.qtdEntregas}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Valor Por Frete</label>
            <input
              type="number"
              name="valorFrete"
              value={form.valorFrete}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        </div>

        {/* Linha 3 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 3 }}>
            <label style={{ fontWeight: 'bold' }}>Rua</label>
            <input
              type="text"
              name="rua"
              value={form.rua}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Número</label>
            <input
              type="text"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        </div>

        {/* Linha 4 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Bairro</label>
            <input
              type="text"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Cidade</label>
            <input
              type="text"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>CEP</label>
            <input
              type="text"
              name="cep"
              value={form.cep}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        </div>

        {/* Linha 5 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>UF</label>
            <select
              name="uf"
              value={form.uf}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            >
              <option value="">Selecione</option>
              <option value="PE">PE</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              {/* ... outros estados */}
            </select>
          </div>
        </div>

        {/* Linha 6 */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Complemento</label>
          <input
            type="text"
            name="complemento"
            value={form.complemento}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Linha 7 - Ativo */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontWeight: 'bold' }}>Ativo:</label>{' '}
          <label>
            <input
              type="radio"
              name="ativo"
              value="Sim"
              checked={form.ativo === 'Sim'}
              onChange={handleChange}
            />{' '}
            Sim
          </label>{' '}
          <label>
            <input
              type="radio"
              name="ativo"
              value="Não"
              checked={form.ativo === 'Não'}
              onChange={handleChange}
            />{' '}
            Não
          </label>
        </div>

        {/* Botões */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={() => window.location.href = '/entregadores'}
            style={{
              backgroundColor: '#fff',
              color: '#f58634',
              border: '1px solid #f58634',
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            ⮌ Voltar
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: '#fff',
              color: '#00aaff',
              border: '1px solid #00aaff',
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            💾 Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEntregador;
