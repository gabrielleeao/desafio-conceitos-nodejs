const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

function repoExist(request, response, next) {
  const { id } = request.params;

  const idExists = repositories.find((repo) => repo.id === id);

  if (!idExists) {
    return response.status(400).json({ error: "Repository not found" });
  }

  return next();
}

app.get("/repositories", (request, response) => {
  const repo = repositories;

  if (repo.length <= 0) {
    return response
      .status(200)
      .json({ message: "You don't have repositories" });
  }

  return response.json(repo);
  // TODO
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repo = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repo);

  return response.json(repo);
});

app.put("/repositories/:id", repoExist, (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repository = repositories.find((repo) => repo.id === id);

  // const likes = repositories[repoIndex]["like"];

  const repo = {
    id,
    title,
    url,
    techs,
    likes: 0,
  };

  repositories[repository] = repo;

  return response.json(repo);
});

app.delete("/repositories/:id", repoExist, (request, response) => {
  const { id } = request.params;

  const repository = repositories.find((repo) => repo.id === id);

  repositories.pop(repository);

  return response.status(204).send();
});

app.post("/repositories/:id/like", repoExist, (request, response) => {
  const { id } = request.params;

  const repository = repositories.find((repo) => repo.id == id);

  repository.likes += 1;

  return response.json(repository);
});

module.exports = app;
