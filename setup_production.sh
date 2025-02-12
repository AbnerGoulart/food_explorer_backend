#!/bin/bash
knex migrate:latest
sqlite3 src/database/database.db < src/database/seed.sql
npm install
npm run create-admin