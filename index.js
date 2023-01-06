const express = require('express');
var Hebcal = require('hebcal');
const PORT = 3000;
const app = express();

let day = new Hebcal.HDate()
day = day.toString('h');

let routeDatePath = '/hebrew-date/:mounth-:day-:year';

app.listen(PORT, () => {
	console.log(`server is runing at port ${PORT}`);
});

app.use(express.static('website'));

app.get('/', (req, res) => {
	res.redirect('./index.html');
});

app.get('/hebrew-date', (req, res) => {
	res.send(day);
});

app.get(routeDatePath, (req, res) => {
	let routeYear = req.params.year;
	let routeMounth = req.params.mounth;
	let routeDay = req.params.day;
	let routeDate = new Hebcal.HDate(new Date(routeYear, routeMounth - 1, routeDay));
	res.send(routeDate.toString('h'));
});




