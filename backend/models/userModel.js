import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    studentId: { type: Number, required: true, unique: true }, //아이디로 사용
    major: { type: String, required: true },
    isEnroll: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isPresident: { type: String, required: true, default: 'false' },
    like: { type: Array, required: false, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
