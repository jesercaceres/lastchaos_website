import axios from 'axios';

// Aqui estamos "treinando nosso garçom" dizendo onde fica a cozinha.
// Pelo seu código do backend, ele roda na porta 3000 e as rotas começam com /owlc
export const api = axios.create({
  baseURL: 'http://localhost:3000/owlc', 
});