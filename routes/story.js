var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	if (req.session.numeroDia == undefined) {
		req.session.numeroDia = 0;
	}
	req.session.numeroDia++;
	let dia = req.session.numeroDia;
	res.render('story', { dia: dia });
});

/*  GET PASTO */
router.get('/despierto', function (req, res, next) {
	res.render('rutina/despierto');
});
router.get('/comer', function (req, res, next) {
	res.render('rutina/comer');
});
router.get('/procastinar', function (req, res, next) {
	res.render('rutina/procastinar');
});
router.get('/almuerzo', function (req, res, next) {
	res.render('rutina/almuerzo');
});
router.get('/desayunar', function (req, res, next) {
	res.render('rutina/desayunar');
});
router.get('/trabajar', function (req, res, next) {
	res.render('rutina/trabajar');
});
router.get('/post', function (req, res, next) {
	res.render('rutina/post');
});
router.get('/cena', function (req, res, next) {
	res.render('rutina/cena');
});
router.get('/noche', function (req, res, next) {
	res.render('rutina/noche');
});
module.exports = router;
