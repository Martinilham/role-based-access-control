const authorizeRole = (access) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.keyaccess) {
      return res.status(401).json({ message: 'Unauthorized: No keyaccess' });
    }

    const   role   = user.keyaccess.role;

    console.log(role)
    
    if (!req.user || !access.includes(role)) {
      return res.status(403).json({ message: 'akses ditolak role tidak sesuai' });
    }

    next();
  };
}

export default authorizeRole;