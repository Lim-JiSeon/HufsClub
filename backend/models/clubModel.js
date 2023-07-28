import mongoose from 'mongoose';

const executiveSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 10 },
  email: { type: String, required: false, maxLength: 30 },
  role: { type: String, required: false },
});

const recruitSchema = new mongoose.Schema({
  period: { type: String, required: true, trim: true, maxLength: 30 },
  way: { type: String, required: true },
  num: { type: String, required: true },
});

const clubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 30 },
    field: { type: String, required: true, maxLength: 10 },
    topic: { type: String, required: true, maxLength: 10 },
    executive: [executiveSchema],
    activity: { type: String, required: true, minLength: 20 },
    recruit: recruitSchema,
    room: { type: String, trim: true },
    logoUrl: String,
    imageUrl: String,
  },
  {
    timestamps: true, //include createdAt and updatedAt
  }
);

const Club = mongoose.model('Club', clubSchema);
export default Club;
