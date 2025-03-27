import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils/generateToken.js';
export const register = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;
    const hashedPassowrd = await bcrypt.hash (password, 10);

    if (!name || !email || !password) {
      return res.status (400).json ({
        success: false,
        msg: 'Please enter all fields',
      });
    }

    const existingUser = await User.findOne ({email});
    if (existingUser) {
      return res.status (400).json ({
        success: false,
        msg: 'User already exists',
      });
    }

    const newUser = new User ({
      name,
      email,
      password: hashedPassowrd,
    });

    await newUser.save ();

    return res.status (201).json ({
      success: true,
      msg: 'User registered successfully',
      user: newUser,
    });
  } catch (error) {
    console.error ('Error in register function:', error);
    return res.status (500).json ({
      success: false,
      msg: 'Server Error',
    });
  }
};
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status (400).json ({
        success: false,
        msg: 'Please enter email and password',
      });
    }

    const user = await User.findOne ({email});
    if (!user || !await bcrypt.compare (password, user.password)) {
      return res.status (401).json ({
        success: false,
        msg: 'Invalid credentials',
      });
    }

    // Call generateToken with the correct user object
    generateToken (res, user, `Welcome Back ${user.name}`);
  } catch (error) {
    console.error ('Error in login function:', error);
    return res.status (500).json ({
      success: false,
      msg: 'Server Error',
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie ('token', {path: '/'});
  return res.json ({success: true, msg: 'Logged out successfully'});
  generateToken (res, null, 'Goodbye!');
  res.status (200).json ({success: true, msg: 'Logged out successfully'});
};

export const getProfile = async (req, res, next) => {
  try {
    const userId = req.id;
    const user = await User.findById (userId)
      .select ('-password')
      .populate ('enrolledCourses');
    if (!user) {
      return res.status (404).json ({
        message: 'Profile not found',
        success: false,
      });
    }
    return res.status (200).json ({
      success: true,
      user,
    });
  } catch (error) {
    console.error ('Error in getProfile function:', error);
    return res.status (500).json ({success: false, msg: 'Server Error'});
  }
};
