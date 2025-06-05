Este projeto é uma aplicação full stack com Java (Spring Boot) no backend e Angular no frontend, que permite realizar operações de cadastro, listagem, edição e exclusão de produtos.
Tecnologias Utilizadas
    • Backend:
    • Java 17
    • Spring Boot 3
    • Spring Data JPA
    • H2 Database (em memória)
    • Frontend:
    • Angular 17+
    • TypeScript
    • Bootstrap (opcional)
Como Executar
Backend (Spring Boot)
    • Pré-requisitos:
    • Java 17+
    • Maven instalado
Clonar e rodar o backend:

git clone https://github.com/mylene10gois/crud-produtos-springboot.git
cd crud-produtos-springboot
mvn spring-boot:run

    • Acesso:
    • API REST: http://localhost:8080/produtos
    • Console do banco H2: http://localhost:8080/h2-console
    • JDBC URL: jdbc:h2:mem:produtosdb
    • Usuário: sa
    • Senha: (deixe em branco)
Frontend (Angular)
    • Pré-requisitos:
    • Node.js 18+
    • Angular CLI instalado (npm install -g @angular/cli)
Clonar e rodar o frontend:

git clone https://github.com/mylene10gois/frontend-angular-produtos
cd frontend-angular-produtos
npm install
ng serve

Acesso: http://localhost:4200
Certifique-se de que o backend esteja rodando em http://localhost:8080 antes de acessar o frontend.
Funcionalidades
    • Cadastrar novo produto
    • Listar produtos com tabela dinâmica
    • Editar produto
    • Excluir produto
    • Paginação no backend (Pageable)
Estrutura dos Diretórios

crud-produtos-springboot/
└── Backend Spring Boot

crud-produtos-frontend/
└── Frontend Angular

Autoria
Desenvolvido por Mylene como parte de um desafio técnico full stack.




