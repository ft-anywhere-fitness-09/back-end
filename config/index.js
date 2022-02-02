module.exports = {
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'secret',
  INSTRUCTOR_SECRET: process.env.INSTRUCTOR_SECRET || 'auth_instructor_123',
  JWT_SECRET: process.env.JWT_SECRET || 'hello',
}
