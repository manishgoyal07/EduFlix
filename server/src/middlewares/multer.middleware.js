import multer from "multer";

//storing the file in disk not memory

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      //Here we should use the absolute path instead of relative path in case there's an error
      cb(null, "public/temp/");
   },
   //set filename with original name + current date + random no. 
   filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.originalname + "-" + uniqueSuffix);
   },
});

export const upload = multer({ storage });
