import React, { useState } from 'react';
import Produto from './components/Produto';
import './styles/style.css';

// Importando as imagens
import imagem1 from './assets/imagem_1.webp';
import imagem2 from './assets/imagem_2.webp';
import imagem3 from './assets/imagem_3.webp';
import imagem4 from './assets/imagem_4.webp';
import imagem5 from './assets/imagem_5.jpg';
import imagem6 from './assets/imagem_6.avif';
import imagem7 from './assets/imagem_7.jpg';
import imagem8 from './assets/imagem_8.jpg';
import imagem9 from './assets/imagem_9.avif';
import imagem10 from './assets/imagem_10.jpeg';

// Mapeamento das imagens
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

function App() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Smartphone Iphone 11', descricao: '128gb', cor: 'Lilás', codigo: '9325425A', preco: 'R$ 1.000', quantidade: 0 },
    { id: 2, nome: 'Notebook Nova geração', descricao: '12ª geração Intel® Core™ i7-1255U', cor: '16 GB DDR4', codigo: '9432442B', preco: 'R$ 2.000', quantidade: 0 },
    { id: 3, nome: 'Televisão', descricao: 'Resolução 4K', cor: 'Taxa de atualização 60 Hz', codigo: '9325425C', preco: 'R$ 3.000', quantidade: 0 },
    { id: 4, nome: 'Tablet', descricao: 'Tela AMOLED', cor: 'Cinza', codigo: 'M4N5O6P7', preco: 'R$ 1.800', quantidade: 0 },
    { id: 5, nome: 'Fone de Ouvido', descricao: 'Cancelamento de Ruído', cor: 'Vermelho', codigo: 'Q8R9S1T2', preco: 'R$ 400', quantidade: 0 },
    { id: 6, nome: 'Monitor', descricao: 'Full HD', cor: 'Preto', codigo: 'U3V4W5X6', preco: 'R$ 1.200', quantidade: 0 },
    { id: 7, nome: 'Teclado', descricao: 'Mecânico RGB', cor: 'Branco', codigo: 'Y7Z8A9B1', preco: 'R$ 350', quantidade: 0 },
    { id: 8, nome: 'Mouse', descricao: 'Sem Fio', cor: 'Dourado', codigo: 'C2D3E4F5', preco: 'R$ 150', quantidade: 0 },
    { id: 9, nome: 'Impressora', descricao: 'Jato de Tinta', cor: 'Cinza', codigo: 'G6H7I8J9', preco: 'R$ 600', quantidade: 0 },
    { id: 10, nome: 'Caixa de Som', descricao: 'Som Surround', cor: 'Preto', codigo: 'K1L2M3N4', preco: 'R$ 800', quantidade: 0 },
  ]);

  const alterarQtd = (id, acao) => {
    setProdutos((prevProdutos) =>
      prevProdutos.map((produto) =>
        produto.id === id
          ? {
              ...produto,
              quantidade:
                acao === '+' ? produto.quantidade + 1 : Math.max(produto.quantidade - 1, 0),
            }
          : produto
      )
    );
  };

  const subtotal = produtos.reduce(
    (total, produto) =>
      total + produto.quantidade * parseFloat(produto.preco.replace('R$', '').replace('.', '')) ,
    0
  );

  return (
    <div className="container">
      <header>
      <h1>
        <i id="cifrao" className="bi bi-cart-check"></i> Loja beirigo.
      </h1>
      <div id='simbolotelefone'>
      <svg id='simbolo' xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <g clip-path="url(#clip0_2005_97)">
                  <path d="M3.42596 1.74525C3.37062 1.67406 3.30076 1.61545 3.22103 1.57334C3.1413 1.53122 3.05352 1.50655 2.96352 1.50096C2.87352 1.49537 2.78337 1.509 2.69904 1.54094C2.61471 1.57287 2.53815 1.62238 2.47443 1.68619L1.50508 2.65647C1.05228 3.11021 0.885414 3.75238 1.08322 4.31581C1.9042 6.64787 3.23968 8.76516 4.9906 10.5107C6.7361 12.2616 8.85338 13.597 11.1854 14.4181C11.7488 14.6159 12.391 14.449 12.8447 13.9962L13.8141 13.0268C13.8779 12.9631 13.9274 12.8866 13.9593 12.8022C13.9913 12.7179 14.0049 12.6277 13.9993 12.5377C13.9937 12.4477 13.969 12.36 13.9269 12.2802C13.8848 12.2005 13.8262 12.1306 13.755 12.0753L11.5923 10.3935C11.5162 10.3345 11.4277 10.2935 11.3336 10.2737C11.2394 10.2539 11.1419 10.2557 11.0485 10.2791L8.99547 10.7919C8.72143 10.8604 8.43432 10.8568 8.1621 10.7814C7.88988 10.7059 7.64182 10.5613 7.44208 10.3616L5.13966 8.05822C4.93976 7.85857 4.79497 7.61055 4.7194 7.33833C4.64383 7.0661 4.64004 6.77894 4.70842 6.50482L5.22215 4.45174C5.2455 4.35837 5.24734 4.26091 5.22753 4.16671C5.20772 4.07252 5.16677 3.98406 5.10778 3.90801L3.42596 1.74525ZM1.76664 0.979327C1.93069 0.815222 2.12778 0.687894 2.34481 0.6058C2.56185 0.523706 2.79386 0.488724 3.02545 0.503176C3.25705 0.517629 3.48291 0.581185 3.68806 0.689625C3.8932 0.798065 4.07293 0.948908 4.21531 1.13214L5.89713 3.29396C6.20556 3.69051 6.31431 4.20706 6.19244 4.69455L5.67964 6.74762C5.65313 6.85396 5.65456 6.96535 5.6838 7.07097C5.71303 7.17659 5.76909 7.27286 5.84651 7.35042L8.14987 9.6538C8.22753 9.73138 8.32396 9.78753 8.42976 9.81677C8.53556 9.84601 8.64713 9.84736 8.7536 9.82067L10.8057 9.30787C11.0463 9.24772 11.2974 9.24305 11.54 9.29421C11.7827 9.34537 12.0105 9.45102 12.2063 9.60318L14.3681 11.285C15.1453 11.8897 15.2165 13.0381 14.5209 13.7328L13.5516 14.7021C12.8579 15.3959 11.821 15.7005 10.8545 15.3602C8.38066 14.4898 6.13457 13.0736 4.28281 11.2166C2.42595 9.36507 1.00973 7.1193 0.139187 4.6458C-0.200177 3.6802 0.104501 2.64241 0.798229 1.94868L1.76757 0.979327H1.76664Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2005_97">
                <rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
              </clipPath>
            </defs>
        </svg>
        <span id='telefone'>+55 11 1234-5678</span>
      </div>
        
      </header>
      
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Produto</th>
            <th>Preço Unitário</th>
            <th>Qtd</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <Produto
              key={produto.id}
              {...produto}
              imagem={imagens[produto.id]} // Passando a imagem corretamente
              onAlterarQtd={alterarQtd}
            />
          ))}
        </tbody>
      </table>
      <footer className="text-center">
        <span>
          <i className="bi bi-cart4"></i> Subtotal{' '}
          <span id="subtotal">R$ {subtotal.toLocaleString('pt-BR')}</span>
        </span>
      </footer>
    </div>
  );
}

export default App;
