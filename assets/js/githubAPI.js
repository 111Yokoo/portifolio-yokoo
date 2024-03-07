$(document).ready(function() {
  const username = '111Yokoo';
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  $.get(apiUrl)
    .done(function(repositories) {
      repositories.forEach(function(repo) {
        if (repo.html_url.includes('churrascaria')) {
          const repoLink = $('<a>').attr('href', repo.html_url).text("Clique para ver o repositório").attr('target', '_blank');
          $('#churrascaria').append(repoLink, $('<br>'));
        } else if (repo.html_url.includes('calendario_alimentacao')) {
          const repoLink = $('<a>').attr('href', repo.html_url).text("Clique para ver o repositório").attr('target', '_blank');
          $('#calendario_alimentacao').append(repoLink, $('<br>'));
        }
      });
    })
    .fail(function(error) {
      console.error('Ocorreu um erro:', error);
    });
});