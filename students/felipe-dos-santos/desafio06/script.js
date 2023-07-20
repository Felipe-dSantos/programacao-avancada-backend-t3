const lu = document.getElementById('lista');


fetch('http://jsonplaceholder.typicode.com/users')
    //O método json() converte o conteúdo da resposta em formato JSON para um objeto.
    .then(teste => {
      // valida se a requisição falhou
      if (!teste.ok) {
        return new Error('falhou a requisição') 
      }

      // verificando pelo status
      if (teste.status === 404) {
        return new Error('não encontrou qualquer resultado')
      }

      // retorna uma promise com os dados em JSON
      return teste.json()
    })
    // .then(console.log)
    .then(users => {
        users.forEach(user => {
            // console.log('nome: ' + user.name + ' email: ' + user.email ) ;

            //cria um elemento li
            const li = document.createElement('li');

            //atribui o valor contido em user.name e user.email ao elemento li usando método textContent 
            li.textContent = `${user.name} - ${user.email}`
            
            // console.log(li)
            //adiciona o elemento li dentro do elemento lu usando o metodo appendChild()
            lu.appendChild(li);
        });
    })
    .catch(error => {
        console.error(error);
        lu.textContent = 'Erro ao carregar os dados dos usuários.';
      })







