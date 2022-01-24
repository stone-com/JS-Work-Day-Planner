const currentTime = $('#currentDay') //create variable referencing p element in jumbotron, used to display current date



//run this function as soon as the page loads and is 'ready'
$(document).ready(function() {
    //create variable for current time using moment js

    var rightNow = moment().format("dddd, MMMM Do YYYY");

    //display the current time/date on the DOM

        currentTime.text(rightNow) 
    
 
        //get current hour moment hour method, returns time in 24 hour format
        var hourNow = moment().hour();
        console.log(hourNow);

        //loop through hours of 9-5, comparing time to current 'hourNow' variable, adding classes for past,present,future. used to change color of row depending on time
        for(var i = 9; i < 18; i++) {
            if (i < hourNow) {
                $('#'+i).addClass('past');
            } else if (i === hourNow) {
                $('#'+i).addClass('present');
            } else {
                $('#'+i).addClass('future');
            };
        };

    //localstorage 
    //when clicking savebtn, create variables for each textinput value, then set localstorage to those values
    //not sure if this is the most efficient way to do this, but it works and makes sense to me 

    $('.saveBtn').click(function() {
        var task9 = $('#9').val();
        localStorage.setItem('9Am Task', task9);
        var task10 = $('#10').val();
        localStorage.setItem('10Am Task', task10);
        var task11 = $('#11').val();
        localStorage.setItem('11Am Task', task11);
        var task12 = $('#12').val();
        localStorage.setItem('12Pm Task', task12);
        var task13 = $('#13').val();
        localStorage.setItem('1Pm Task', task13);
        var task14 = $('#14').val();
        localStorage.setItem('2Pm Task', task14);
        var task15 = $('#15').val();
        localStorage.setItem('3Pm Task', task15);
        var task16 = $('#16').val();
        localStorage.setItem('4Pm Task', task16);
        var task17 = $('#17').val();
        localStorage.setItem('5Pm Task', task17);

        $( "#dialog" ).dialog(); //show dialog/modal saying saved successfully
    });

    //display saved lcalstorage data on page on reload
    //create variables for each localstorage entry then set textarea values to those saved values
    var savedTask9 = localStorage.getItem('9Am Task');
    $('#9').val(savedTask9);
    var savedTask10 = localStorage.getItem('10Am Task');
    $('#10').val(savedTask10);
    var savedTask11 = localStorage.getItem('11Am Task');
    $('#11').val(savedTask11);
    var savedTask12 = localStorage.getItem('12Pm Task');
    $('#12').val(savedTask12);
    var savedTask13 = localStorage.getItem('1Pm Task');
    $('#13').val(savedTask13);
    var savedTask14 = localStorage.getItem('2Pm Task');
    $('#14').val(savedTask14);
    var savedTask15 = localStorage.getItem('3Pm Task');
    $('#15').val(savedTask15);
    var savedTask16 = localStorage.getItem('4Pm Task');
    $('#16').val(savedTask16);
    var savedTask17 = localStorage.getItem('5Pm Task');
    $('#17').val(savedTask17);
});

//clear localstorage function, set all textarea values back to empty string
function clearStorage() {
    localStorage.clear();
    $('#9').val('');
    $('#10').val('');
    $('#11').val('');
    $('#12').val('');
    $('#13').val('');
    $('#14').val('');
    $('#15').val('');
    $('#16').val('');
    $('#17').val('');

};
//event handler for clicking clear button
$('.clearBtn').click(clearStorage);


//dark mode toggle. adds and removes dark classes and changes button text based off of current state
$('#darktoggle').on('click', function() {
    if( $('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('.jumbotron').removeClass('dark');
        $('.row > .hour').removeClass('hour-dark');
        $('#darktoggle').text("Off");
    } else {
        $('body').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.row > .hour').addClass('hour-dark');
        $('#darktoggle').text('On');

    }
})


