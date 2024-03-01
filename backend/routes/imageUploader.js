import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import path from 'path';
import Club from '../models/clubModel.js';

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const s3 = new AWS.S3();

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];

// 이미지 업로드용 함수
const upload = multer({
    storage:multerS3({
        s3: s3,
        bucket: 'hufsclub-bucket', // 버킷 이름
        key: (req, file, callback) => {
            const uploadDirectory = req.query.directory ?? 'image'; // 업로드할 디렉토리를 설정하기 위해 넣어둔 코드, 없어도 무관
            const extension = path.extname(file.originalname);
            if (!allowedExtensions.includes(extension)) { // extension 확인을 위한 코드, 없어도 무관
                return callback(new Error('wrong extension'));
            }
            callback(null, `${uploadDirectory}/${Date.now()}_${file.originalname}`);
        },
        acl: 'public-read-write'
    }),
});

// S3에서 이미지 삭제
const deleteImage = (fileKeys) => {
    s3.deleteObjects(
      {
        Bucket: 'hufsclub-bucket',
        Delete: {
            Objects: [
                {
                    Key: 'image/' + fileKeys[0],
                },
                {
                    Key: 'image/' + fileKeys[1],
                },
                {
                    Key: 'image/' + fileKeys[2],
                },
                {
                    Key: 'image/' + fileKeys[3],
                },
                {
                    Key: 'image/' + fileKeys[4],
                }
            ]
        }
      },
      (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
      }
    );
};

export { upload, deleteImage };