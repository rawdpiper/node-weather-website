const request = require('request')

const forecast = (lattitude, longitude, callback) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lattitude + '&lon=' + longitude + '&appid=58fd7ea0c6217c2bb5805eeec3868cd5&units=imperial'
    
        request({url, json: true}, (error, {body}) => {
                if (error) {
                        callback('Unable to connect to weather service!', undefined)
                } else if (body.cod != 200) {
                        callback('Unable to find location!', undefined)
                } else {
                        callback(undefined, body.weather[0].description + '. It is currently ' + body.main.temp + ' degrees out. There is a ' + body.main.humidity + '% humidity.')
                }
        })
    }

module.exports = forecast