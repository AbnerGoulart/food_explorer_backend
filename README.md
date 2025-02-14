# Food Explorer Backend

API do desafio final da formação explorer da Rocketseat.

## Sumário
- [Sobre a API](#sobre-a-api)
  - [Endereço de Produção](#endereço-de-produção)
  - [Endpoints](#endpoints)
- [Executando em ambiente local](#executando-em-ambiente-local)
- [Deploy](#deploy)

## Sobre a API
### Endereço de Produção
- `https://food-explorer-backend-3dbs.onrender.com`
### Endpoints
- `POST /session` -  Autentica um usuário
- `POST /register` - Cria um usuário
- `GET /dishes` - Lista pratos
- `GET /dishes/:id` - Recupera dados de um prato
- `POST /dishes` - Cria um prato
- `PUT /dishes/:id` - Atualiza um prato
- `DELETE /dishes/:id` - Deleta um prato
- `GET /sections` - Lista seções de pratos

## Executando em ambiente local
1. Instale todas as dependências:
```bash
npm install
```

2. Instale o knex globalmente para habilitar a execução de migrations:
```bash
npm install -g knex
```

3. Execute o script para rodar as migrations e popular as tabelas com os dados iniciais necessários:
```bash
sh prepare_db.sh
```
> Este script irá criar os pratos e seções iniciais, além do usuário admin. As credenciais do admin são:
> - **email:** admin@foodexplorer.com
> - **senha:** 123456

4. Inicie a API:
```bash
npm run dev
```

5. Acesse a API pelo endereço `http://localhost:3333`.

## Deploy
O deploy está automatizado. Para dispará-lo basta realizar o merge da sua branch na branch `main`. O processo será iniciado imediatamente após o merge.