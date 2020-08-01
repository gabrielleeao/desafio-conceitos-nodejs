# Fazer atualização no repositório

Update the Repository.

**URL** : `/repositories/:id`

**URL Parameters** : `id=[uuid]` where `id` is the ID of the Repository.

**Method** : `PUT`

**Auth required** : NO

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

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "03880430-9fa3-4431-924c-6715ae989047",
    "title": "GoStack Desafios",
    "url": "https://github.com/Rocketseat/bootcamp-gostack-desafios",
    "techs": ["Noje.js", "React Native"],
    "likes": 0
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
