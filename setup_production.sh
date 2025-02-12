#!/bin/bash
npm install -g knex
npm install
knex migrate:latest
sqlite3 src/database/database.db < src/database/seed.sql
npm run create-admin