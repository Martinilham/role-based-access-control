//kode program untuk permission 

const hasPermission = (accesspermission) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.keyaccess) {
      return res.status(401).json({ message: 'Unauthorized: No keyaccess' });
    }

    const permissions  = user.keyaccess.permissions;

    if (!accesspermission.includes(permissions)) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    next();
  };
}

export default hasPermission