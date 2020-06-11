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
router.get('/levantarse', function (req, res, next) {
	res.render('rutina/levantarse');
});
router.get('/comer', function (req, res, next) {
	res.render('rutina/comer');
});
router.get('/procastinar', function (req, res, next) {
	res.render('rutina/procastinar');
});
router.get('/procastinar2', function (req, res, next) {
	res.render('rutina/procastinar2');
});
router.get('/almorzar', function (req, res, next) {
	res.render('rutina/almorzar');
});
router.get('/desayunar', function (req, res, next) {
	res.render('rutina/desayunar');
});
router.get('/seguir', function (req, res, next) {
	res.render('rutina/seguir');
});
router.get('/trabajar', function (req, res, next) {
	res.render('rutina/trabajar');
});
module.exports = router;
