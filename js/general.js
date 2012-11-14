jQuery(function($){
	var img = getUrlVars()['i'];
	var slides;
	if ( !img ){
		//Replace this list of files
		slides = [
				{image : 'img/001.gif'},
				{image : 'img/002.gif'},
				{image : 'img/003.gif'},
				{image : 'img/004.gif'},
				{image : 'img/005.gif'},
				{image : 'img/006.gif'},
				{image : 'img/007.gif'},
				{image : 'img/008.gif'}
			]
		
	}else{
		
		
		slides = [{image: img}];
	}
	
	$.supersized({
			start_slide :   0,  // Start slide (0 is random)
			new_window  :   1,  // Image links open in new window/tab
			image_protect   :   1,  // Disables image dragging and right click with Javascript
			min_width   :   1024,   // Min width allowed (in pixels)
			min_height  :   0,  // Min height allowed (in pixels)
			vertical_center :   1,  // Vertically center background
			horizontal_center   :   1,  // Horizontally center background
			fit_always  :   0,  // Image will never exceed browser width or height (Ignores min. dimensions)
			fit_portrait    :   1,  // Portrait images will not exceed browser height
			fit_landscape   :   0,  // Landscape images will not exceed browser width,
			random	:	0,
			slides :    slides
	});
	
	
	var slideTitle = api.getField('image');
	
	$('.site .url').append( '<a href="'+ $(location).attr('href') + '?i=' + slideTitle + '">Permalink</a>');
	
	$('.random').on('click', function(){
		
		window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;
	})
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}