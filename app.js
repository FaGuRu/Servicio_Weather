const express = require('express')
const request = require('request')
const port = process.env.PORT || 3000

//Aplicación
const app = express()

app.get('/',(req, res) => {
    let city = req.query.city;
	var request = require('request');
    request(
		`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=c025fbf57c3f1145a5eded8503ab8706`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
				res.send(`The sky in your city "${city}" is ${data.list[0].weather[0].main}`);
			}
		}
	);
})

app.listen(port, () => console.log(`Server started on port ${port}`))