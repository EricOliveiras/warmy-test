
# Warmy Backend Test

Desafio Técnico - Desenvolvedor Backend (Nível Júnior)

## Utlizando o projeto

### Dependências globais

Você precisa destas dependencias instaladas:

- Docker Engine v17.12.0 com Docker Compose v1.24.1 (ou qualquer versão superior)

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/EricOliveiras/warmy-test
```

### Rodando o projeto

Entre no diretório do projeto:

```bash
  cd warmy-test
```

Rode o comando:

```bash
  docker-compose up -d
```

Utilize a url base: http://localhost:3333

## Documentação da API

### Cria uma Task

```http
  POST /task
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Obrigatório**. Título da task |
| `description` | `string` | **Opcional**. Descrição da task |

### Retorna todas as tasks

```http
  GET /task
```

### Retorna uma task

```http
  GET /task/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

### Atualiza uma task

```http
  PUT /task/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |
| `title`      | `string` | **Obrigatório**. Título da task |
| `description`      | `string` | **Opcional**. Descrição da task |
| `finished`      | `boolean` | **Opcional**. Se a tarefa foi finalizada |

### Deleta uma task

```http
  DEL /task/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

## Stack utilizada

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [NodeJS](https://nodejs.org/)
- [Prisma](https://www.prisma.io/)
