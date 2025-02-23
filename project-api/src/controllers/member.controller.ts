import { Request, Response } from "express";
const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./members.db', (err: Error) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the members database.');

    // Create the 'members' table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS members (
          id INTEGER PRIMARY KEY AUTOINCREMENT,    -- Auto-incrementing ID
          firstName TEXT NOT NULL,                 -- First name, required
          lastName TEXT NOT NULL,                  -- Last name, required
          birthday TEXT NOT NULL,                  -- Birthday, stored as ISO 8601 string
          email TEXT NOT NULL UNIQUE,              -- Email, required and must be unique
          role TEXT NOT NULL CHECK (role IN ('Admin', 'User', 'Guest')) -- Role with constraints
      );
    `;

    db.run(createTableQuery, (err: Error) => {
      if (err) {
        console.error("Error creating 'members' table:", err.message);
      } else {
        console.log("'members' table is ready.");
      }
    });
  }
});


export default class MemberController {
  async create(req: Request, res: Response) {
    const sql = `INSERT INTO members (firstName, lastName, birthday, email, role) VALUES (?, ?, ?, ?, ?)`;
    const params = [
      req.body.firstName,
      req.body.lastName,
      req.body.birthday,
      req.body.email,
      req.body.role
    ];
    db.run(sql, params, function (err: Error) {
      if (err) {
        res.status(500).json({ message: "Internal Server Error!", error: err.message });
      } else {
        res.status(201).json({ message: "create OK", id: db.lastID });
      }
    });
  }

  async findAll(req: Request, res: Response) {
    const sql = `SELECT * FROM members`;
    db.all(sql, [], (err: Error, rows: any[]) => {
      if (err) {
        res.status(500).json({ message: "Internal Server Error!", error: err.message });
      } else {
        res.status(200).json({ message: "findAll OK", body: rows });
      }
    });
  }

  async findOne(req: Request, res: Response) {
    const sql = `SELECT * FROM members WHERE id = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err: Error, row: any) => {
      if (err) {
        res.status(500).json({ message: "Internal Server Error!", error: err.message });
      } else if (!row) {
        res.status(404).json({ message: "Member not found" });
      } else {
        res.status(200).json({ message: "findOne OK", body: row });
      }
    });
  }

  async update(req: Request, res: Response) {
    const sql = `UPDATE members SET firstName = ?, lastName = ?, birthday = ?, email = ?, role = ? WHERE id = ?`;
    const params = [
      req.body.firstName,
      req.body.lastName,
      req.body.birthday,
      req.body.email,
      req.body.role,
      req.params.id
    ];
    db.run(sql, params, function (err: Error) {
      if (err) {
        res.status(500).json({ message: "Internal Server Error!", error: err.message });
      } else {
        res.status(200).json({ message: "update OK", changes: db.changes });
      }
    });
  }

  async delete(req: Request, res: Response) {
    const sql = `DELETE FROM members WHERE id = ?`;
    const params = [req.params.id];
    db.run(sql, params, function (err: Error) {
      if (err) {
        res.status(500).json({ message: "Internal Server Error!", error: err.message });
      } else {
        res.status(200).json({ message: "delete OK", changes: db.changes });
      }
    });
  }
}