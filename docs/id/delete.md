# Deletar o repositório

Delete the Repository.

**URL** : `/repositories/:id`

**URL Parameters** : `id=[uuid]` where `id` is the ID of the Repository.

**Method** : `DELETE`

**Auth required** : NO

**Data** : `{}`

## Success Response

**Condition** : If the Repository exists.

**Code** : `204 NO CONTENT`

**Content** : `{}`

## Error Responses

**Condition** : If there was no Repository available to delete.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "error": "Repository not found"
}
```
