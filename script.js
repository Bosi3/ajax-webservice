
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function() 
    {
        //check if the status is 200(means everything is okay)
        if (this.readyState == 4 && this.status == 200) 
            {
                //return server response as an object with JSON.parse
                var response = JSON.parse(xhr.responseText);
                document.getElementById("quote").innerHTML = "<img id= 'photo' class='img-rounded img-fluid' class='img-responsive'  src='"+response.photo+"'><br><div  class=' myquote col-9 col-offset-1'><q>"+response.quote +"</q></div><br><cite id='cite'>"+ response.author+"</cite>";
                //document.getElementById("cite").innerHTML = response.author ;
                //document.getElementById("photo").innerHTML = response.photo ;
    }
            }
//call send
xhr.send();
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN
//call the fetch function
fetch('https://thatsthespir.it/api')
.then(res => res.json())//response type
.then(data => console.log(data)); //log the data;<div class="photo " data-author="Anna Eleanor Roosevelt" https://thatsthespir.it/uploads/greyscale_mother-teresa-o.jpg style="background-image: url(/uploads/greyscale_annaZeleanorZroosevelt.jpg);">&nbsp;</div>
