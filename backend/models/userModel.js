import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    studentId: { type: Number, required: true, unique: true }, //아이디로 사용
    major: { type: String, required: true },
    major2: { type: String, trim: true },
    password: { type: String, required: true },
    isEnroll: { type: String, required: true },
    isPresident: { type: String, trim: true },
    isAdmin: { type: Boolean, required: true, default: false },
    like: [{ type: String, trim: true }],
    resetToken: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
