// ===============================
// Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;


// ===============================
// Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===============================
// Vencimiento del Token
// ===============================
// 60 Segundos
// 60 Minutos
// 24 Horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ===============================
// SEED de autenticación (semilla)
// ===============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===============================
// Base de Datos
// ===============================
let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// ===============================
// Google Client ID
// ===============================
process.env.CLIENTE_ID = process.env.CLIENTE_ID || '550160548132-fg7uafeiunnbdnv7i12v7njggjo5h046.apps.googleusercontent.com';