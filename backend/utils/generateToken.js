import jwt from 'jsonwebtoken';

export const generateToken = (res, user, message) => {
  const token = jwt.sign ({userId: user._id}, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  // Log the generated token for debugging
  console.log ('Generated Token:', token);

  res.cookie ('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Set true in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.status (200).json ({
    success: true,
    message,
    user,
    token, // Include the token in response for debugging
  });
};
