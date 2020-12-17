const multer = require('multer');

const uploadImg = multer({
    fileFilter:(req,file,cb)=>{
      if(!file) cb(null,false); // 에러는 없지만 파일이 없을 경우 false 로 넘기겠음.
      else{
        const arr = file.originalname.split('.');
        let type = arr[arr.length -1];
        type = type.toLocaleLowerCase();
        if(type==='png' || type ==='jpg' || type == 'jpeg') cb(null,true);
        else cb(new Error('Only PNG,JPG,JPEG'), false); // 파일 형식이 안맞을 경우 에러로 응답.
      }  
    },
    storage : multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,'intro_image')
        },
        filename : (req,file,cb)=>{
            const arr = file.originalname.split('.');
            let type = arr[arr.length -1];
            req.fileName = `${Date.now()}.${type}`;
            cb(null,`${Date.now()}.${type}`);

        },
    }),
    limits:{ fileSize: 20*1024*1024},
});

module.exports = {
    uploadImg,
}