# Criar um repositório

Rota responsável por cadastrar|criar o repositório

**URL** : `/api/accounts/`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data example** All fields must be sent.

```json
{
  "title": "GoStack Desafios",
  "url": "https://github.com/Rocketseat/bootcamp-gostack-desafios",
  "techs": ["Noje.js", "React Native"]
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `201 CREATED`

**Content example**

```json
{
  "id": "03880430-9fa3-4431-924c-6715ae989047",
  "title": "GoStack Desafios",
  "url": "https://github.com/Rocketseat/bootcamp-gostack-desafios",
  "techs": ["Noje.js", "React Native"],
  "likes": 0
}
```
