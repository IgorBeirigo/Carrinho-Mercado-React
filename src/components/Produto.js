import React from 'react';

// Importando todas as imagens corretamente
import imagem1 from '../assets/imagem_1.webp';
import imagem2 from '../assets/imagem_2.webp';
import imagem3 from '../assets/imagem_3.webp';
import imagem4 from '../assets/imagem_4.webp';
import imagem5 from '../assets/imagem_5.jpg';
import imagem6 from '../assets/imagem_6.avif';
import imagem7 from '../assets/imagem_7.jpg';
import imagem8 from '../assets/imagem_8.jpg';
import imagem9 from '../assets/imagem_9.avif';
import imagem10 from '../assets/imagem_10.jpeg';

// Criando um objeto de mapeamento de imagens
const imagens = {
  1: imagem1,
  2: imagem2,
  3: imagem3,
  4: imagem4,
  5: imagem5,
  6: imagem6,
  7: imagem7,
  8: imagem8,
  9: imagem9,
  10: imagem10,
};

function Produto({ id, nome, preco, quantidade, imagem, onAlterarQtd }) {
  return (
    <tr>
      <td>
  <img src={imagens[id]} alt={nome} className="produto-imagem" />
</td>

      <td>{nome}</td>
      <td>{preco}</td>
      <td>
        <button onClick={() => onAlterarQtd(id, '-')} className="btn btn-danger">-</button>
        <span className="mx-2">{quantidade}</span>
        <button onClick={() => onAlterarQtd(id, '+')} className="btn btn-success">+</button>
      </td>
      <td>R$ {(quantidade * parseFloat(preco.replace('R$', '').replace('.', ''))).toLocaleString('pt-BR')}</td>
    </tr>
  );
}


export default Produto;
