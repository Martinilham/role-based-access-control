# 🔐 Role, Access & Permission Based Access Control - Express.js Middleware

## Selamat datang
Middleware ini membantu memeriksa:  
**Siapa** user kamu (Role), **akses kemana** (Access), dan **boleh ngapain** (Permission) — semua bisa diatur lewat JSON atau database.

---

## 🎯 Fitur Utama

✅ Role-Based Access Control  
✅ Access URL Validation  
✅ Permission-Based Action Control  
✅ Konfigurasi Fleksibel via JSON / DB  
✅ Support JWT & OAuth integrasi  
✅ Clean & Mudah Diintegrasikan ke Express!

---

## 💡 Konsep Dasar

| Konsep | Fungsi | Contoh |
|--------|--------|--------|
| **Role** | Identitas / jabatan user. | `admin`, `karyawan`, `pengunjung` |
| **Access** | URL / route yang boleh diakses. | `["/dashboard", "/menu"]` |
| **Permission** | Aksi yang diizinkan di route tersebut. | `["get", "tambah", "edit"]` |

---

## 💻 Contoh Data User

```json
{
  "nama": "rusdi",
  "keyaccess": {
    "role": "karyawan",
    "access": ["/dashboard"],
    "permissions": ["get"]
  }
}
```
## ⚡ Contoh Middleware Routing
### Cek Akses URL
```js
route.get('/dashboard', canAccess("/dashboard"),(req, res) => {
    res.send('Welcome to Dashboard!');
  });
```
### Cek Role
```js
route.get('/admin', authorizeRole('admin'), (req, res) => {
    res.send('Welcome Admin!');
  });
```
### Cek permissions
```js
route.get('/menu', authorizeRole(['karyawan',"admin"]),hasPermission("get"),(req, res) => {
    res.send('Welcome to menu!');
});
```

## 📂 Struktur Project
```graphql
├── middleware/
│   ├── accessControl.js      # Cek akses URL user
│   ├── hasPermission.js      # Validasi hak aksi user
│   └── authorizeRole.js          # Validasi role user
├── contoh
│   ├── server.js # menjalankan API
├── route
│   ├── route.js # route untuk access
├── package.json
├── config.json
└── README.md
```
## 📈 Integrasi Lanjutan
💡 Bisa digabung dengan JWT Token / OAuth untuk produksi.
💡 Data user bisa diambil dari database MongoDB, PostgreSQL, atau file JSON.
💡 Mudah di-deploy ke berbagai backend seperti Vercel, Heroku, atau VPS.

## 🙌 Terima Kasih!
Terima kasih sudah mengunjungi project ini!
Semoga sistem Role, Access & Permission Control ini bisa membantu kamu membangun aplikasi yang lebih aman, rapi, dan scalable.

Jangan ragu untuk eksplorasi, kembangkan, dan sesuaikan middleware ini dengan kebutuhan project kamu.

## 📜 Lisensi

Project ini dirilis dengan lisensi [MIT License](./LICENSE).  
Bebas dipakai, dikembangkan, dan dimodifikasi — cukup cantumkan kredit nama pembuat.

