#!/bin/bash
knex migrate:rollback
knex migrate:latest
sqlite3 src/database/database.db < src/database/seed.sql