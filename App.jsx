
import React, { useState } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', payment: 'pix' });

  const addItem = () => {
    setMenuItems([...menuItems, newItem]);
    setNewItem({ name: '', description: '', price: '', payment: 'pix' });
  };

  const sendToWhatsApp = (item) => {
    const message = \`Pedido: \${item.name}\nDescrição: \${item.description}\nPreço: R$ \${item.price}\nPagamento: \${item.payment}\`;
    const url = \`https://wa.me/5521999999999?text=\${encodeURIComponent(message)}\`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Cardápio Digital</h1>
      <div style={{ marginBottom: 20 }}>
        <input placeholder="Nome do item" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
        <br />
        <textarea placeholder="Descrição" value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} />
        <br />
        <input type="number" placeholder="Preço" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
        <br />
        <select value={newItem.payment} onChange={(e) => setNewItem({ ...newItem, payment: e.target.value })}>
          <option value="pix">Pix</option>
          <option value="cartao">Cartão de Crédito</option>
        </select>
        <br />
        <button onClick={addItem}>Adicionar Item</button>
      </div>
      <div>
        {menuItems.map((item, index) => (
          <div key={index} style={{ border: '1px solid gray', padding: 10, marginBottom: 10 }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <strong>R$ {item.price}</strong>
            <p>Pagamento: {item.payment}</p>
            <button onClick={() => sendToWhatsApp(item)}>Fazer pedido</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
