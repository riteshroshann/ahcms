import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'cw-hostel-dev-secret';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header.' });
  }
  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload; // { id, role: 'student' | 'admin', name }
    next();
  } catch {
    return res.status(401).json({ error: 'Token expired or invalid.' });
  }
}

export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied.' });
    }
    next();
  };
}
