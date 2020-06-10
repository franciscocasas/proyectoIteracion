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
router.get('/pasto', function (req, res, next) {
	res.render('pasto/pasto');
});
router.get('/pasto/zebra', function (req, res, next) {
	res.render('pasto/zebra');
});
router.get('/pasto/antilope', function (req, res, next) {
	res.render('pasto/antilope');
});
router.get('/pasto/leon', function (req, res, next) {
	res.render('pasto/leon');
});
router.get('/pasto/cheetah', function (req, res, next) {
	res.render('pasto/cheetah');
});

/*  GET ALGAS */
router.get('/alga', function (req, res, next) {
	res.render('alga/alga');
});
router.get('/alga/zooplancton', function (req, res, next) {
	res.render('alga/zooplancton');
});
router.get('/alga/ballena', function (req, res, next) {
	res.render('alga/ballena');
});
router.get('/alga/anchoas', function (req, res, next) {
	res.render('alga/anchoas');
});
router.get('/alga/gaviotas', function (req, res, next) {
	res.render('alga/gaviotas');
});
router.get('/alga/pinguinos', function (req, res, next) {
	res.render('alga/pinguinos');
});
router.get('/alga/leon', function (req, res, next) {
	res.render('alga/leon');
});
router.get('/alga/orca', function (req, res, next) {
	res.render('alga/orca');
});

module.exports = router;
