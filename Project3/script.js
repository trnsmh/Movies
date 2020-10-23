
// jQuery  ready() function determines what happens when page is loading ...
jQuery(document).ready(function(){


// Loading circle (SHOW)
    $("#loading-div").modal("show");  

//
//
//
//  FIRST REQUEST FOR THE DEFAULT PAGE VIEW !!!!!!!!!!!!!!!
//
//
//


     //axios.get() --->>> request from client
     axios.get('http://csc225.mockable.io/movies')

        .then(function(response){
            
            console.log(response.data);

            // KEY --->>> VALUE pair with map() , return value assigned to variable moviesHTML
            
            var moviesHTML = response.data.map(function(movie){

            return '<p class= "movie" data-movie="'+movie.id+'">' + movie.title + '</p>' ;

            });


            // Print
            $('#movies').html(moviesHTML);

        // Loading circle (HIDE)
            $("#loading-div").modal("hide");
            
            
        });


// on (click) to an object which from function return value !!!! 
        $('body').on('click', '.movie', function(){




            // Loading circle (SHOW)
             $("#loading-div").modal("show"); 

// create variables id and url use them in axios get()



// WHAT TO DO AFTER 

            var id = $(this).data('movie');
            var url = 'https://csc225.mockable.io/movies/'+ id;
            
            axios.get(url).then(function(response){

                var movie = response.data;
                var poster = '<img src="'+ movie.poster +'">';
                var movieHTML = '<p> Title: ' + movie.title + '</p>';

                movieHTML += '<p> Director: ' + movie.director + '</p>';
                movieHTML += '<p> Release Date: ' + movie.release+ '</p>';
                movieHTML += '<a href="' + movie.poster + '">[POSTER]</a>';

                $('#current-movie').html(movieHTML+poster);

                $("#loading-div").modal("hide");
            })


        });



    });