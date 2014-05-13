app.views.HomeView = function () {

    "use strict";
//Load the tempates required for this view
    var template = app.templates.get("Home"),
        listItemTemplate = app.templates.get("CourseListItem"),
        facultyItemTemplate = app.templates.get("FacultyListItem"),
        headerTemplate = app.templates.get("Header"),
        footerTemplate = app.templates.get("Footer"),
        specialtiesTemplate = app.templates.get("SpecialtyListItem");

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.$el = $('<div/>');
        console.log("HomeView initialize");
       
   };

    this.render = function () {
        console.log("HomeView render");
        this.$el.html(template());
        return this;
    };

 
    this.getAllCourses = function () {
        app.courseAdapter.getAllCourses().done(function (courses) {
            $('.course-list').html(listItemTemplate(courses));
            console.log("findAll course", courses);
        });
    };
    this.getAllFaculty = function () {
        app.courseAdapter.getAllFaculty().done(function (faculty) {
            $('.faculty-list').html(facultyItemTemplate(faculty));
            console.log("findAll faculty", faculty);
        });
    };
     this.getHeader = function () {
        app.courseAdapter.getHeader().done(function (header) {
            $('.page-header').html(headerTemplate(header));
            console.log("get header", header);
        });
    };
    this.getFooter = function () {
        app.courseAdapter.getFooter().done(function (footer) {
            $('.page-footer').html(footerTemplate(footer));
            console.log("get footer", footer);
        });
    };
    
     this.getSpecialties = function () {
        app.courseAdapter.getSpecialties().done(function (specialties) {
            $('.page-specialties').html(specialtiesTemplate(specialties));
            console.log("get specialties", specialties);
        });
    };

    this.initialize();

}