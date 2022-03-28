const summaryToDo = 'O app consiste em uma lista de tarefas com várias funcionalidades,'
+ ' como por exemplo: adicionar tarefa, riscar tarefa concluída, mudar ordem das tarefas,'
+ ' remover uma tarefa e salvar a lista de tarefas.';

const summaryWebWallet = 'A aplicação simula uma carteira de controle de gastos com'
+ ' conversor de moedas. A conversão é sempre atualizada com consumo'
+ 'de dados da API awesomeAPI - Cotações de Moedas.';

const toDoListVanilla = {
  id: 1,
  title: 'To-Do List (Lista de Tarefas)',
  summary: summaryToDo,
  tags: ['front-end', 'vanilla', 'JavaScript'],
};

const webWalletReact = {
  id: 2,
  title: 'WebWallet',
  summary: summaryWebWallet,
  tags: ['front-end', 'ReactJS', 'Redux', 'JavaScript'],
};

export { toDoListVanilla, webWalletReact };
