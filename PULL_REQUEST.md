# Api Crud de veículos

## tecnologias utilizadas

-   Node.js
-   Expres.js
-   Prisma
-   typescript

## Logica geral utilizada na resolução do desafio

Criar algo simples e escalável que permita a fácil alteração e inclusão de novas features.

Para isso toda a estrutura do projeto teve como base o uso da Clean Arch e com princípios de SOLID.

Um dos requisitos era a pesquisa por vários campos de uma determinada entidade, nesse caso "Veiculos". Como a maioria dos ORM não tem um suporte legal para fazer full text search,foi necessário fazer a consulta com o sql puro.

A api esta com versionamento, ou seja, mudanças notáveis não afetara o uso da api
nas versões antigas.
