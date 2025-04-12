//kode program untuk permission 

const hasPermission = (accesspermission) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.keyaccess) {
      return res.status(401).json({ message: 'keyaccess kosong' });
    }

    const permissions  = user.keyaccess.permissions;

    if (!accesspermission.includes(permissions)) {
      return res.status(403).json({ message: 'Aksi di tolak' });
    }

    next();
  };
}

export default hasPermission