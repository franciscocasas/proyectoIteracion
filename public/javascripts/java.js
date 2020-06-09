window.addEventListener('load', function () {
	fetch('https://api.covid19api.com/world/total')
		.then(function (respuesta) {
			return respuesta.json();
		})
		.then(function (datos) {
			console.log(datos);

			var div = document.querySelector('.datos');
			var div2 = document.querySelector('.datos2');
			var div3 = document.querySelector('.datos3');
			console.log(datos.TotalConfirmed);
			function formatNumber(num) {
				return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
			}
			console.log(formatNumber(10000000000));
			div.innerHTML += '<p>Cantidad de casos:' + formatNumber(datos.TotalConfirmed) + '</p>';
			div2.innerHTML += '<p>Cantidad de muertes:' + formatNumber(datos.TotalDeaths) + '</p>';
			div3.innerHTML += '<p>Cantidad de recuperados:' + formatNumber(datos.TotalRecovered) + '</p>';
			//! La funcion format Number le pone un formato a los nuumeros
		});
});
