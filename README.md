🍔 DevBurguer - Back-End
Este é o back-end do projeto DevBurguer, uma aplicação completa que simula o funcionamento real de uma hamburgueria. O sistema foi dividido em duas partes — back-end e front-end — com foco total em criar uma estrutura robusta, segura e escalável para gerenciar usuários, produtos, categorias, pedidos e transações financeiras.

🧠 Objetivo
Desenvolver a estrutura completa de um sistema de pedidos de uma hamburgueria com autenticação, banco de dados relacional e não-relacional, validação de dados, upload de arquivos e integração com sistema de pagamento.

🚀 Tecnologias Utilizadas
- Node.js (JavaScript);
- Express;

- PostgreSQL – banco relacional para:
.Usuários;
.Produtos;
.Categorias;
.Transações;

- MongoDB – banco não relacional para:
.Pedidos;

- Yup – validação de dados
- JWT (JSON Web Token) – autenticação e segurança;
- Multer – upload de imagens de produtos;
- Stripe – integração para pagamento (modo teste);
- Dotenv – variáveis de ambiente;
- Bcrypt – criptografia de senhas;
- Arquitetura MVC – Controllers, Models, Schemas e Rotas organizadas;

📁 Estrutura do Projeto
pgsql
Copiar
Editar
📦 devburguer-backend
 ┣ 📂controllers
 ┣ 📂models
 ┣ 📂schemas
 ┣ 📂routes
 ┣ 📂middlewares
 ┣ 📂uploads
 ┣ 📄server.js
 ┣ 📄.env
 ┣ 📄package.json
 
🔒 Segurança
JWT para autenticação de rotas protegidas;
Criptografia de senhas com Bcrypt;
Validação de entrada de dados com Yup;

💸 Integração com Stripe
Integração com a API da Stripe para simulação de pagamento;
Testes com chave pública e secreta de ambiente;

📌 Funcionalidades
Cadastro e login de usuários;
Cadastro de produtos e categorias;
Upload de imagens para produtos com Multer;
Listagem e edição de produtos;
Criação e gerenciamento de pedidos no MongoDB;
Pagamento simulado via Stripe;
Rotas organizadas e separadas por responsabilidades (MVC);

🧠 Aprendizados
Integração entre dois bancos de dados (PostgreSQL e MongoDB);
Boas práticas de organização de código com a arquitetura MVC;
Segurança e autenticação robusta com JWT;
Validação eficiente com Yup;
Criação de endpoints RESTful seguindo padrões profissionais;
Deploy e escalabilidade de um sistema real;

⚙️ Como rodar o projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Matheus-Figueiredo-Dev/Devburguer-API.git
Instale as dependências:

bash
Copiar
Editar
yarn
Configure as variáveis de ambiente no .env:

env
Copiar
Editar
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/devburguer
MONGO_URL=mongodb://localhost:27017/devburguer
JWT_SECRET=sua_chave_secreta
STRIPE_SECRET_KEY=sua_chave_stripe
Inicie o servidor:

bash
Copiar
Editar
yarn
📍 Status
✅ Projeto em constante evolução. Parte back-end finalizada com todas as funcionalidades principais de uma hamburgueria moderna.
