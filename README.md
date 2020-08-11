![Proffy](./assets/proffy.png)

# NLW#02 - Next Level Week

Aplicação de treinamento da **Rocketseat** desenolvida com **Node.js + Express** no *back-end*, **Sqlite** como banco de dados, **React.js** no *front-end* e **React Native** para desenvolver o mobile.

#### Projeto 
O Proffy é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores. A aplicação oferece aos professores a possibilidade de registrar aulas, adicionando informações como a disciplina, o custo e horário dessas aulas.
Os alunos podem buscar por essas aulas cadastradas e entrar emm contato com os professores referentes as aulas escolhidas.

### Tecnologias utilizadas 
- Node.js
- Expo
- Express
- React
- React Native
- TypeScript
- Knex

## Rodando em ambiente de desenvolvimento

Certifique-se de que possui os **Node.js** e o **Git** instalados e configurados em sua máquina. Também se faz necessário ter o **Expo** instalado de forma global em sua máquina.

**1:** Clone o repositório.

```
git clone https://github.com/NandaMonteiro/proffy
```

Para rodar o servidor da aplicação, se faz necessário que navegue através do terminal até a pasta serve e execute os comandos:

```
npm isntall

npm start
```

Para executar o Frontend se faz necessário que navegue através do terminal até a pasta web e execute os seguintes comandos:

```
npm install

npm start

```

Para executar o Mobile navegue através do terminal até a pasta mobile e execute os seguintes comandos:

```
npm install

npm start

```

# API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start