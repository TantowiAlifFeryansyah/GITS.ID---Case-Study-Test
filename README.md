
# Publishing Platform API (Express + Sequelize + PostgreSQL)

REST API untuk mengelola **Authors**, **Publishers**, dan **Books** dengan **JWT Authentication**. Dirancang sebagai fondasi untuk aplikasi web/mobile masa depan.

## ✨ Fitur
- **Auth**: Register & Login (JWT Bearer)
- **CRUD**: Authors, Publishers, Books
- **Relasi**:
  - `Author 1..* Book`
  - `Book 1..1 Publisher` (Book **wajib** memiliki tepat satu Publisher melalui FK `publisherId`)
- **Validasi input**: `express-validator`
- **Seeder**: User admin + contoh data
- **ORM**: Sequelize (dialect: PostgreSQL)
- **Postman Collection**: tersedia

## 🧰 Tech Stack
Node.js (Express), Sequelize, PostgreSQL, JWT, express-validator, CORS, Morgan, BCrypt

## 📦 Persyaratan
Node.js 18+, PostgreSQL 13+, npm/yarn

## ⚙️ Environment
```bash
cp .env.example .env
```
Isi: DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, JWT_SECRET, PORT (opsional).

### 🔑 JWT Secret
Anda bisa memakai nilai contoh di `.env.example`:

JWT_SECRET=supersecretkey_change_me

Untuk produksi, ganti dengan secret acak yang kuat, contoh:
openssl rand -base64 32
# atau
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

## 🚀 Instalasi & Menjalankan
```bash
npm install
npm run db:sync
npm run db:seed
npm run dev
# http://localhost:4000
```
Akun admin:
```
email: admin@example.com
password: Admin@123
```

## 🧪 Postman
Import: `postman/case-study-case.postman_collection.json`  
Header auth: `Authorization: Bearer <token>`

## Endpoints
- Auth: POST /api/v1/auth/register, POST /api/v1/auth/login
- Authors: GET/POST /api/v1/authors, GET/PUT/DELETE /api/v1/authors/:id
- Publishers: GET/POST /api/v1/publishers, GET/PUT/DELETE /api/v1/publishers/:id
- Books: GET/POST /api/v1/books, GET/PUT/DELETE /api/v1/books/:id

## Arsitektur & Kode
```
src/
  app.js           # inisialisasi express, middleware, mount router
  server.js        # start server + cek koneksi DB
  controllers/     # HTTP logic per resource
  middleware/      # auth JWT, errors, validate
  models/          # Sequelize models + associations
  routes/          # Express Router modular
  utils/           # jwt & password helpers
scripts/
  dbSync.js        # sync schema
  dbSeed.js        # seed awal
sql/               # skema & seed SQL opsional
postman/           # koleksi postman
```
**Routing Layer (Express Router)** — kita **tidak** memakai lib `trouter`, tapi **Express Router** standar dengan konsep modular yang sama (pemetaan path → handler terpisah).

## Catatan
- Relasi ditetapkan RESTRICT pada delete untuk keamanan data.
- Bisa ditambah migration (`sequelize-cli`) bila diperlukan.
- Logging: `morgan('dev')`, CORS diaktifkan.
