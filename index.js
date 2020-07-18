const ExifImage = require('exif').ExifImage;
const Express = require('express')
const ejs = require('ejs')

const app = Express()

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    try {
        new ExifImage({ image: 'D:\\테스트 사진\\IMG_3706.jpg' }, (error, exifData) => {
            if(error) {
                console.log('Error: ' + error.message)
                
                res.send('Error: ' + error.message)
            }
            else {
                console.log(exifData.gps)
                //res.send('GPSData: ' + exifData.gps)
                //return res.render('index', {Latitude: 33.450701, Longitude: 126.570667})
                //return res.render('index', {Latitude: 37.856308, Longitude: 128.855881})
                return res.render('index', {Latitude: 37, Longitude: 128})
                //return res.render('index', {Latitude: exifData.gps.GPSLatitude[0], Longitude: exifData.gps.GPSLongitude[0]})
                //return res.render('index', {Latitude: exifData.gps.GPSLatitude[0], Longitude: exifData.gps.GPSLongitude[0]})
            }
        })
    } catch(error) {
        console.error(error)
        res.send('Error: ' + error.message)
    }
})

app.listen(80)
console.log('OK Server open')