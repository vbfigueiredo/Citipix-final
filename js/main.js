$(document).ready(function(){

	//grab the input in cityname
	$('form').on('submit', function(event){
		//prevent the default (refresh the page after submit)
		event.preventDefault();

		//after submit, store input in city var
		var city = $('#city-type').val().toLowerCase();

		//and if user input NYC, New York City, New York
		
		if (city === 'nyc' || city === 'new york' || city === 'new york city'|| city === 'ny') {
					//console.log('Big Apple Baby!!!'); this line is to test the previous line
		// if('NYC', 'New York', 'New York City').change('background-image' + 'url=../images/nyc.jpg');
			$('body').css('background-image', "url('images/nyc.jpg')");
			$(this).closest('form')[0].reset()
		}
		else if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
			$('body').css('background-image', "url('images/sf.jpg')");
			$(this).closest('form')[0].reset();
		}
	//compare with all my vars available	
		else if (city === 'sidney' || city === 'sid') {
			$('body').css('background-image', "url('images/sydney.jpg')");
			$(this).closest('form')[0].reset();
		}
		else if (city === 'austin' || city === 'atx') {
			$('body').css('background-image', "url('images/austin.jpg')");
			$(this).closest('form')[0].reset();
		}
		else if (city === 'los angeles' || city === 'lax' || city === 'la') {
			$('body').css('background-image', "url('images/la.jpg')");
			$(this).closest('form')[0].reset();
		}
 	//depending of the return of typed city, select background
 	
	});
});