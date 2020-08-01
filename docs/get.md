# Mostrar todos repositórios

Rota responsável por mostrar todos os repositórios

**URL** : `/repositories`

**Method** : `GET`

**Auth required** : NO

**Permissions required** : None

**Data constraints** :

```
json
[
  {
  "message": "You don't have repositories"
  }
]
```

## Success Responses

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : User can see one or more Accounts.

**Code** : `200 OK`

**Content** : In this example, the User can see two Repositorios:

```json
[
  {
    "id": "924776fd-319c-4e31-86b5-777705002594",
    "title": "Desafios",
    "url": "https://github.com/Rocketseat/bootcamp-desafios",
    "techs": ["React Native"],
    "likes": 0
  },
  {
    "id": "03880430-9fa3-4431-924c-6715ae989047",
    "title": "GoStack",
    "url": "https://github.com/Rocketseat/bootcamp-gostack",
    "techs": ["Noje.js"],
    "likes": 0
  }
]
```
