import express from "express";
import Route from "../route/route.js"

const app = express();

// Simulasi autentikasi (biasanya di-handle oleh middleware auth/JWT)
app.use((req, res, next) => {
  req.user = {
    nama: 'rusdi',
    keyaccess: {
      role: 'karyawan',
      access: ['/dashboard'],
      permissions: ['get']
    }
  };
  next();
});

app.use(Route);

app.listen(3000, () => console.log('Server berjalan di http://localhost:3000'));