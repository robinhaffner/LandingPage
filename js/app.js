/*
This is the application CONTROLLER for the CME landing pages. The primary role of the Controller is to create a global scope for the application views and to manage navigation between pages.
*/

var app = {
    views: {}
};

$(document).ready(function () {

    "use strict";

    var detailsURL = /^#showCourse\/(\d{1,})/;
   console.log("detailsURL",detailsURL);

    //NAVIGATION BETWEEN PAGES
    function route() {
        var hash = window.location.hash,
            match,
            view;
       if (!hash) {
            view = new app.views.HomeView(); // set up inital landing page
            $("body").html(view.render().$el);
            view.getAllCourses(); //render the course list
            view.getAllFaculty();//render the faculty
            view.getHeader();//render the faculty
            view.getFooter();//render the faculty
            view.getSpecialties();//render the faculty
       }
      match = hash.match(detailsURL);//if the user clicks on a course, pull the route and pass it to the Model to find the clicked item
        if (match) {
            console.log("match", match);
            app.courseAdapter.findById(Number(match[1])).done(function (course) {
                view = new app.views.CourseView(course);
                $("body").html(view.render().$el);
            });
       }
    }

    //load all the required templates and when done, initalize the home page
    app.templates.load("Home",  "CourseListItem", "FacultyListItem","SpecialtyListItem", "Header", "Footer").done(function () {
        route();
        $(window).on('hashchange', route);
    });

});
