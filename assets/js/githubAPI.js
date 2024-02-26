// Substitua 'SEU_NOME_DE_USUÁRIO' pelo seu nome de usuário do GitHub
const username = '111Yokoo';

// URL da API para obter os repositórios de um usuário específico
const apiUrl = `https://api.github.com/users/${username}/repos`;

// Realiza uma requisição GET para a API do GitHub
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao obter os repositórios');
    }
    return response.json();
  })
  .then(repositories => {
    console.log('Meus Repositórios no GitHub:');
    repositories.forEach(repo => {
      console.log(repo);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });