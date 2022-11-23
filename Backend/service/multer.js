const multer = require('multer')
const path = require('path')

const storage = (dest) => multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dest)
        // cb(null, 'uploads/studentId/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const sponsorStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, "sponsor" + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] !== 'image') {
        cb(null, false)
    } else {
        cb(null, true)
    }
}

const sponsorFileFilter = (req, file, cb) => {
    if (file.mimetype !== "image/svg+xml") {
        cb(null, false)
    } else {
        cb(null, true)
    }
}

const limits = {
    fileSize: 5 * 1048576
}

const sponsorLimits = {
    fileSize: 10 * 1048576
}

exports.makeMulter = (dest) => {
    return multer({ storage: storage(dest), fileFilter, limits })
}

exports.sponsor = multer({ storage: sponsorStorage, fileFilter: sponsorFileFilter, limits: sponsorLimits })

