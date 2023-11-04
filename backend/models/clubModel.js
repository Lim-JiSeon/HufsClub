import mongoose from 'mongoose';

const executiveSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 10 },
  email: { type: String, required: false, maxLength: 30 },
  role: { type: String, required: false },
});

const recruitSchema = new mongoose.Schema({
  period: { type: String, required: true, trim: true, maxLength: 100 },
  way: { type: String, required: true },             //모집방식 ex)구글폼으로 지원 후 면접
  applyUrl: { type: String },                        //구글폼 링크 
  num: { type: String, trim: true, required: true }, //모집인원 ex)23, 변동, *배우팀 : 0명 *무대팀 : 0명 (조명, 음향, 무대 디자인 등)...
});

const activitySchema = new mongoose.Schema({
  imageUrl: { type: String },
  text: { type: String, required: true, minLength: 20 }
})

const clubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true, maxLength: 30 },
    field: { type: String, required: true, trim: true, maxLength: 10 }, //학술, 종교, 스포츠, 친목, 문화, 봉사
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
    .map((word) => (word.startsWith("#")) ? word : `#${word}`);
});

const Club = mongoose.model('Club', clubSchema);
export default Club;
