# Sistema de Controle de Gastos Residenciais

O objetivo da aplicação é permitir o gerenciamento de pessoas e de suas transações financeiras, exibindo o saldo individual e o consolidado geral, respeitando todas as regras de negócio propostas.

## Tecnologias utilizadas

### Back-end

- C#
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite

### Front-end

- React
- TypeScript
- Vite
- Axios
- CSS

## Funcionalidades

### Cadastro de Pessoas

- Cadastro de pessoas
- Listagem de pessoas
- Exclusão de pessoas
- Identificador gerado automaticamente

Cada pessoa possui:

- Nome
- Idade

### Cadastro de Transações

- Cadastro de receitas
- Cadastro de despesas
- Listagem de transações

Cada transação possui:

- Descrição
- Valor
- Tipo (Receita ou Despesa)
- Pessoa vinculada

## Dashboard

A aplicação possui uma tela de resumo contendo:

- Total de receitas por pessoa
- Total de despesas por pessoa
- Saldo individual
- Totais gerais
- Número de pessoas cadastradas

## Regras de negócio implementadas

- Pessoas menores de **18 anos** podem cadastrar **apenas despesas**.
- Toda transação deve estar vinculada a uma pessoa existente.
- Ao excluir uma pessoa, todas as suas transações são removidas automaticamente.
- Os valores apresentados no dashboard são calculados dinamicamente a partir das transações cadastradas.

## Estrutura do projeto

```text
/
├── backend
│   ├── Controllers
│   ├── Data
│   ├── Dtos
│   ├── Models
│   └── Program.cs
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── layout
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── types
│   │   └── utils
│   └── package.json
```

## Persistência

Os dados são armazenados utilizando **SQLite**, garantindo que permaneçam disponíveis mesmo após o encerramento da aplicação.

## Como executar

### Pré-requisitos

- .NET 8 SDK
- Node.js 20+ (ou superior)
- npm

### Back-end

```bash
cd backend

dotnet restore
dotnet ef database update
dotnet run
```

A API será iniciada em:

```
http://localhost:5183
```

### Front-end

Antes de rodar o projeto, crie um arquivo `.env` na raiz da pasta `frontend`:

```env
VITE_API_URL=http://localhost:5183/api
```

Depois execute:

```bash
cd frontend

npm install
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173
```


## Decisões de implementação

Durante o desenvolvimento foram adotadas algumas práticas visando facilitar manutenção e organização do código:

- Utilização de DTOs para comunicação entre API e cliente.
- Hooks customizados no React para encapsular regras de negócio.
- Services responsáveis pelas chamadas HTTP.
- Componentização da interface para aumentar reutilização.
- Tipagem completa utilizando TypeScript.

## Regras atendidas

- Cadastro de Pessoas
- Exclusão de Pessoas
- Cadastro de Transações
- Persistência dos dados
- Restrição para menores de idade
- Exclusão em cascata das transações
- Consulta de totais individuais
- Consulta do total geral
- Front-end em React + TypeScript
- Back-end em .NET 8 + C#

---

Desenvolvido como solução para um desafio técnico de desenvolvimento.
