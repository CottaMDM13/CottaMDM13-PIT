const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Conexão com o banco de dados
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jhonatan009009",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send({ msg: "Email e senha são obrigatórios" });
  }

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    if (result.length === 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          return res.status(500).send(err);
        }
        
        db.query(
          "INSERT INTO usuarios (email, password) VALUES (?, ?)",
          [email, hash],
          (error, response) => {
            if (error) {
              return res.status(500).send(error);
            }

            res.status(201).send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.status(409).send({ msg: "Email já cadastrado" });
    }
  });
});

// Verificação de login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send({ msg: "Email e senha são obrigatórios" });
  }

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          return res.status(500).send(error);
        }
        
        if (response === true) {
          res.send({ msg: "Login bem-sucedido" });
        } else {
          res.status(401).send({ msg: "Email ou senha incorreta" });
        }
      });
    } else {
      res.status(404).send({ msg: "Usuário não registrado!" });
    }
  });
});

// Configurações do CRUD
app.post("/insert", (req, res) => {
  const { name, cost } = req.body;

  if (!name || cost === undefined) {
    return res.status(400).send({ msg: "Nome e custo são obrigatórios" });
  }

  const SQL = "INSERT INTO items (name, cost) VALUES (?, ?)";
  
  db.query(SQL, [name, cost], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.status(201).send({ msg: "Item inserido com sucesso", result });
  });
});

app.get("/get", (req, res) => {
  const SQL = "SELECT * FROM items";

  db.query(SQL, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.send(result);
  });
});

app.get("/getCards/:nome", (req, res) => {
  const nome = req.params.nome;

  if (!nome) {
    return res.status(400).send({ msg: "Nome é obrigatório" });
  }

  const SQL = "SELECT * FROM items WHERE name LIKE ?";
  db.query(SQL, [`${nome}%`], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id, name, cost } = req.body;

  if (!id || !name || cost === undefined) {
    return res.status(400).send({ msg: "ID, nome e custo são obrigatórios" });
  }

  const SQL = "UPDATE items SET name = ?, cost = ? WHERE iditems = ?";
  
  db.query(SQL, [name, cost, id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.send({ msg: "Item atualizado com sucesso", result });
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ msg: "ID é obrigatório" });
  }

  const SQL = "DELETE FROM items WHERE iditems = ?";
  
  db.query(SQL, [id], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.send({ msg: "Item deletado com sucesso", result });
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
