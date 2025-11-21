function authBearer(req, res, next) {
  const authHeader = req.headers.authorization;

  // Tidak ada Authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header' });
  }

  const [scheme, token] = authHeader.split(' ');

  // Bukan Bearer
  if (scheme !== 'Bearer') {
    return res.status(401).json({ message: 'Bearer token required' });
  }

  // Cek token
  const VALID_TOKEN = '12345TOKENRAHASIA';
  if (token !== VALID_TOKEN) {
    return res.status(403).json({ message: 'Bearer token invalid' });
  }

  next();
}

module.exports = { authBearer };
