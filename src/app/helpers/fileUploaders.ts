import multer from "multer"
import path from "path"
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
import { ICloudinaryResponse, IFileType } from "../app/interfaces/file";



/*=================
  Setup the Multer
  =================*/

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '/uploads')
        cb(null, path.join(process.cwd(), 'uploads'))
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

/*=====================
  Set Up the Cloudinary
  =====================*/
cloudinary.config({
    cloud_name: 'dsc0hliud',
    api_key: '186536899689947',
    api_secret: 'fgZ_KhHH2Y_QCQO1gT8EKA-KOaw' // Click 'View API Keys' above to copy your API secret
});

const uploadToCloudinary = (file: IFileType): Promise<ICloudinaryResponse | undefined> => {
    console.log(file);


    return new Promise((resolve, rejects) => {
        cloudinary.uploader.upload(file.path,
            // { public_id: file.originalname },
            (error: Error, result: ICloudinaryResponse) => {
                fs.unlinkSync(file.path)
                if (error) {
                    rejects(error)
                }
                else {
                    resolve(result)
                }
            }
        )
    })

}
// console.log(uploadToCloudinary);


export const fileUploader = {
    upload,
    uploadToCloudinary
}