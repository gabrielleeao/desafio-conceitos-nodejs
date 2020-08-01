# Fazer atualização de like

Update "like" at Repository, when request add +1 "like".

**URL** : `/repositories/:id/likes`

**URL Parameters** : `id=[uuid]` where `id` is the ID of the Repository.

**Method** : `POST`

**Auth required** : NO

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "03880430-9fa3-4431-924c-6715ae989047",
    "title": "GoStack Desafios",
    "url": "https://github.com/Rocketseat/bootcamp-gostack-desafios",
    "techs": ["Noje.js", "React Native"],
    "likes": 1
  }
]
```

## Error Responses

**Condition** : If there was no Repository available to uptade.

**Code** : `400 BAD REQUEST`

**Content** :

```json
[
  {
    "error": "Repository not found"
  }
]
```
