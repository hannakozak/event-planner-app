import multer from "multer";
import { v4 as uuid } from 'uuid';

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

export const fileUpload = multer({
    limits: 500000,
    storage: multer.discStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/images')

        },
        fileName: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimeType];
            cb(null, uuid() + '.' + ext)
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimeType]
        let error = isValid ? null : new Error('Invalid mime type!')
        cb(error, isValid)
    }
})