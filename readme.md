# :octocat: CRUD para gerenciamento de usuários

<p>Gerencie seus usuários de forma rápida e eficiente</p>

### :art: Layout

<p>Tela principal</p>

<img src="./.github/dashboard.jpg" alt="Foto do projeto">

<p>Modal para criar usuário</p>

<img src="./.github/create-user.jpg" alt="Foto do projeto">

<p>Modal para editar usuário</p>

<img src="./.github/edit-user.jpg" alt="Foto do projeto">

<p>Modal para deletar usuário</p>

<img src="./.github/delete-user.jpg" alt="Foto do projeto">

# :wrench: API 

## Listar usuários

> Exemplo Request
```http
GET https://localhost:4000/users
```

> Exemplo de resposta
```
    [
        {
            "id": "da8097ae-cb53-4bc3-98d9-449cc4fc8118",
            "firstName": "Leonardo",
            "lastName": "santos",
            "email": "leonardo@gmail.com",
            "age": 20
        }
    ]
```

> Criar usuário
```http
POST https://localhost:4000/users
Content-Type: application/json

Body:

    {
        "firstName": "Leo",
        "lastName": "santos",
        "email": "leonardo@gmail.com",
        "age": 20
    }
```

> Deletar usuário
```http
DELETE https://localhost:4000/users/{ID_do_usuário}
```

> Editar usuário
```http
PUT https://localhost:4000/users/{ID_do_usuário}
Content-Type: application/json
body: 
    {
        "firstName": "Leo",
        "lastName": "santos",
        "email": "leonardo@gmail.com",
        "age": 20
    }

```



### :rocket: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Styled Components](https://styled-components.com/)
- [Typecript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Node](https://nodejs.org/en/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)

### :memo: Licença

Este projeto está sob a licença MIT. Consulte [LICENÇA](https://github.com/leosantosx/api-do-github/blob/master/LICENSE) para obter detalhes.

