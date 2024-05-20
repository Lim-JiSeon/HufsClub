import mongoose from 'mongoose';

const executiveSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 10 },
  email: { type: String, required: false, trim: true, maxLength: 30 },
  role: { type: String, required: false, trim: true },
});

const recruitSchema = new mongoose.Schema({
  period: { type: String, required: true, trim: true, maxLength: 100 },
  way: { type: String, trim: true, required: true }, //모집방식 ex)구글폼으로 지원 후 면접
  applyUrl: { type: String, trim: true, },           //구글폼 링크 
  num: { type: String, trim: true, required: true }, //모집인원 ex)23, 변동, *배우팀 : 0명 *무대팀 : 0명 (조명, 음향, 무대 디자인 등)...
});

const activitySchema = new mongoose.Schema({
  imageUrl: String,
  text: { type: String, trim: true, }
})

const clubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true, maxLength: 30 },
    belong: { type: String, required: true, trim: true, maxLength: 10}, // 소속: 동아리 연합회 소속, 단과대 소속
    type: { type: String, required: true, trim: true, maxLength: 10},   // 종류: 중앙 동아리, 학회, ...
    field: { type: String, trim: true, maxLength: 10 },                 // 분야: 창작예술분과, 공연예술분과, ...
    college: { type: String, trim: true, maxLength: 30 },               // 단과대: 공과대학, 인문대학, ...
    topic: [{ type: String, trim: true }],
    executive: [executiveSchema],
    activity: [activitySchema],
    recruit: recruitSchema,
    room: { type: String, trim: true },
    logoUrl: String,
    meta: {
      views: { type: Number, default: 0, required: true },
    },
  },
  {
    timestamps: true, //include createdAt and updatedAt
  }
);

clubSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(',')
    .map((word) => (word.trim().startsWith("#")) ? word.trim() : `#${word.trim()}`);
});

const Club = mongoose.model('Club', clubSchema);
export default Club;
