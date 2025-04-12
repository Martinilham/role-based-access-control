import express from "express";
import authorizeRole from "../middleware/authorizeRole.js";
import hasPermission from "../middleware/hasPermission.js";
import canAccess from "../middleware/accesscontroll.js";

const route = express.Router()


// Route yang dilindungi berdasarkan access
route.get('/dashboard', canAccess("/dashboard"),(req, res) => {
    res.send('Welcome to Dashboard!');
  });
// Route yang dilindungi berdasarkan permission
route.get('/menu', authorizeRole(['karyawan',"admin"]),hasPermission("get"),(req, res) => {
    res.send('Welcome to menu!');
});
    
  // Route yang dilindungi berdasarkan role
route.get('/admin', authorizeRole('admin'), (req, res) => {
    res.send('Welcome Admin!');
  });
  



export default route;