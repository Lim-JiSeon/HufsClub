import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    studentId: { type: Number, required: true, unique: true }, //아이디로 사용
    password: { type: String, required: true },
    isPresident: { type: String, trim: true },
    isAdmin: { type: Boolean, required: true, default: false },
    like: [{ type: String, trim: true }],
    resetToken: { type: String },
    checkToken: { type: String },
    verificationCode: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
