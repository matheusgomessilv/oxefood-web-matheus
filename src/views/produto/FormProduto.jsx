import React, { useState } from 'react';

const FormProduto = () => {
  const [form, setForm] = useState({
    titulo: '',
    codigo: '',
    descricao: '',
    valor: '',
    tempoMin: '',
    tempoMax: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h3 style={{ marginTop: '40px', marginBottom: '30px', color: '#555' }}>
        <span style={{ color: '#999' }}>Produto »</span> <strong>Cadastro</strong>
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Linha 1 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Título *</label>
            <input
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Informe o título do produto"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Código do Produto *</label>
            <input
              type="text"
              name="codigo"
              value={form.codigo}
              onChange={handleChange}
              placeholder="Informe o código do produto"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
        </div>

        {/* Linha 2 */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Informe a descrição do produto"
            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '80px', resize: 'none' }}
          />
        </div>

        {/* Linha 3 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Valor Unitário *</label>
            <input
              type="number"
              name="valor"
              value={form.valor}
              onChange={handleChange}
              placeholder="R$"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Tempo de Entrega Mínimo em Minutos</label>
            <input
              type="number"
              name="tempoMin"
              value={form.tempoMin}
              onChange={handleChange}
              placeholder="30"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>Tempo de Entrega Máximo em Minutos</label>
            <input
              type="number"
              name="tempoMax"
              value={form.tempoMax}
              onChange={handleChange}
              placeholder="60"
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
        </div>

        {/* Botões */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={() => window.location.href = '/produtos'}
            style={{
              backgroundColor: '#fff',
              color: '#f58634',
              border: '1px solid #f58634',
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          >
            ⮌ Listar
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

export default FormProduto;
