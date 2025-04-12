//kode program untuk mengakases

const canAccess = (accessto) => {
    return (req, res, next) => {
      const user = req.user;
  
      if (!user || !user.keyaccess) {
        return res.status(401).json({ message: 'Unauthorized: No keyaccess' });
      }
      
      //lokasi key berdasarkan req.user
      const access= user.keyaccess.access;
      
      //aksi untuk menyeleksi
      if (!accessto.includes(access)) {
        return res.status(403).json({ message: 'tidak dapat mengakses laman ini' });
      }
  
      next();
    };
  }
  
  export default canAccess