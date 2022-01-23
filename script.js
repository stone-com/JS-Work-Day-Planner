const currentTime = $('#currentDay') //create variable referencing p element in jumbotron, used to display current date


//run this function as soon as the page loads and is 'ready'
$(document).ready(function() {
    //create variable for current time using moment js

    var rightNow = moment().format("dddd, MMMM Do YYYY");

    //display the current time/date on the DOM

        currentTime.text(rightNow) 
    
        //variable for current time
        var day = new Date();
        //get current hour using getHours method, returns time in 24 hour format
        var hourNow = day.getHours(); 

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
    })
})