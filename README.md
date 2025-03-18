<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> </p><p align="center"> Um framework progressivo <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicações server-side eficientes e escaláveis. </p><p align="center"> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão do NPM" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads do NPM" /></a> <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a> <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a> <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" /></a> <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" /></a> <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Doar-PayPal-ff3f59.svg" alt="Doar"/></a> <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Seguir" alt="Siga-nos no Twitter"></a> </p>
Descrição
Este projeto é um sistema de gerenciamento de tarefas (To-Do) desenvolvido com NestJS, um framework progressivo para Node.js. Ele inclui funcionalidades como autenticação de usuários, CRUD de tarefas, filtragem de tarefas por status e integração com um banco de dados PostgreSQL.

Funcionalidades Principais
Autenticação de Usuários:

Registro e login de usuários com autenticação segura via JWT (JSON Web Tokens).

Gerenciamento de Tarefas:

Criar, editar, excluir e listar tarefas.

Marcar tarefas como concluídas.

Filtrar tarefas por status (pendente/concluída).

Integração com PostgreSQL:

Persistência de dados de usuários e tarefas.

Design Responsivo:

Pronto para ser consumido por frontends responsivos (desktop e mobile).

API Externa (Opcional):

Integração com uma API pública para exibir citações motivacionais aleatórias.

Configuração do Projeto
Pré-requisitos
Node.js (v16 ou superior)

PostgreSQL (local ou via Docker)

Docker (opcional, para rodar o PostgreSQL em container)

Instalação
Clone o repositório:

bash
Copy
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
Instale as dependências:

bash
Copy
npm install
Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env
Copy
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=tarefas_db
JWT_SECRET=sua_chave_secreta
Suba o banco de dados com Docker (opcional):

bash
Copy
docker-compose up -d
Execute o projeto:

bash
Copy
npm run start:dev
Rotas da API
Autenticação
Registrar um novo usuário:

POST /users/register

Body:

json
Copy
{
"email": "usuario@example.com",
"password": "senha123"
}
Login:

POST /auth/login

Body:

json
Copy
{
"email": "usuario@example.com",
"password": "senha123"
}
Tarefas
Criar uma nova tarefa:

POST /tasks

Headers: Authorization: Bearer <token_jwt>

Body:

json
Copy
{
"title": "Minha primeira tarefa",
"description": "Descrição da tarefa"
}
Listar todas as tarefas:

GET /tasks

Headers: Authorization: Bearer <token_jwt>

Buscar uma tarefa por ID:

GET /tasks/:id

Headers: Authorization: Bearer <token_jwt>

Atualizar uma tarefa:

PATCH /tasks/:id

Headers: Authorization: Bearer <token_jwt>

Body:

json
Copy
{
"title": "Tarefa atualizada",
"description": "Nova descrição",
"completed": true
}
Excluir uma tarefa:

DELETE /tasks/:id

Headers: Authorization: Bearer <token_jwt>

Filtrar tarefas por status:

GET /tasks?status=<status>

Headers: Authorization: Bearer <token_jwt>

Parâmetros:

status: pending (pendente) ou completed (concluída).

Executando o Projeto
Modo de desenvolvimento:

bash
Copy
npm run start:dev
Modo de produção:

bash
Copy
npm run start:prod
Testes:

Testes unitários:

bash
Copy
npm run test
Testes de integração (e2e):

bash
Copy
npm run test:e2e
Estrutura do Projeto
Copy
src/
├── auth/ # Módulo de autenticação (JWT)
├── tasks/ # Módulo de gerenciamento de tarefas
├── users/ # Módulo de gerenciamento de usuários
├── app.module.ts # Módulo principal da aplicação
└── main.ts # Ponto de entrada da aplicação
Suporte
Este projeto é mantido por Seu Nome. Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma issue.

Licença
Este projeto está licenciado sob a Licença MIT.
