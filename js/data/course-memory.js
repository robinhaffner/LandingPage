app.courseAdapter = (function () {

    "use strict";

    var findById = function (id) {
            var deferred = $.Deferred(),
                course = null,
                l = courses.length;
            for (var i = 0; i < l; i++) {
                console.log("finding course", i);
                if (courses[i].course_id === id) {
                    course = courses[i];
                    break;
                }
            }
            deferred.resolve(course);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = courses.filter(function (element) {
                return element.course_title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            //deferred.resolve(courses);
            return deferred.promise();
        },
        getAllCourses = function () {
            var deferred = $.Deferred();
            deferred.resolve(courses);
            return deferred.promise();
        }, 
        getAllFaculty = function () {
            var deferred = $.Deferred();
            deferred.resolve(faculty);
            return deferred.promise();
        },
        getHeader = function () {
            var deferred = $.Deferred();
            deferred.resolve(header);
            return deferred.promise();
        },
        getFooter = function () {
            var deferred = $.Deferred();
            deferred.resolve(footer);
            return deferred.promise();
        },
        getSpecialties = function () {
            var deferred = $.Deferred();
            deferred.resolve(specialties);
            return deferred.promise();
        },


  
    courses =  [
    {
      "course_title": "Module 1: Binge Eating Disorder in 2014 and Beyond: Current and Emerging Directions in Treatment",
      "course_id": 94327,
      "course_sequence": "1",
      "cert_completion_percent":"70",
      "course_faculty":"Cynthia M. Bulik, PhD, FAED; Susan L. McElroy, MD; Chevese Turner",
      "course_credits":"0.75 AMA PRA Category 1 Credit™",
      "course_expiration":"April 1, 2015",
      "course_url":"http://eval.opencme.org/wix/p405773872.aspx?specialty=",
      "course_thumbnail":"module1.png",
       "smallPic": "module1.png",
       "largePic": "module1.png"
    },
       {
      "course_title": "Module 2: Binge Eating Disorder in 2014 and Beyond: Current and Emerging Directions in Treatment",
      "course_id": 94327,
      "course_sequence": "2",
      "cert_completion_percent":"70",
      "course_faculty":"Cynthia M. Bulik, PhD, FAED; Susan L. McElroy, MD; Chevese Turner",
      "course_credits":"0.75 AMA PRA Category 1 Credit™",
      "course_expiration":"April 1, 2015",
      "course_url":"http://opencme.org/sites/opencme.org/medical/180200129-2/index.php?specialty=",
      "course_thumbnail":"module2.png",
       "smallPic": "module2.png",
       "largePic": "module2.png"
    },
       {
      "course_title": "Module 3: Binge Eating Disorder in 2014 and Beyond: Current and Emerging Directions in Treatment",
      "course_id": 94327,
      "course_sequence": "3",
      "cert_completion_percent":"70",
      "course_faculty":"Cynthia M. Bulik, PhD, FAED; Susan L. McElroy, MD; Chevese Turner",
      "course_credits":"0.50 AMA PRA Category 1 Credit™",
      "course_expiration":"April 30, 2015",
      "course_url":"http://opencme.org/sites/opencme.org/medical/180200129-3/index.php?specialty=",
      "course_thumbnail":"module3.png",
       "smallPic": "module3.png",
       "largePic": "module3.png"
    }
  ],
        
  faculty = [
    {
      "faculty_name": "Cynthia M. Bulik, PhD, FAED",
      "faculty_thumbnail":"module1f.png",
      "faculty_titles": [
                  {"title": "Distinguished Professor of Eating Disorders"},
                  {"title": "Department of Psychiatry"},
                  {"title": "Professor of Nutrition, Gillings School of Public Health"},
                  {"title": "Director, UNC Center of Excellence for Eating Disorders"},
                  {"title": "Co-Director, UNC Center for Psychiatric Genomics"},
                  {"title": "University of North Carolina at Chapel Hill"},
                  {"title": "Chapel Hill, North Carolina"}
                ],
                
              "sequence": 1
          },
            
    {

        "faculty_name": "Susan L. McElroy, MD",
      "faculty_thumbnail":"module2f.png",
      "faculty_titles": [
                  {"title": "Chief Research Officer, Lindner Center of HOPE"},
                  {"title": "Professor of Psychiatry and Behavioral Neuroscience"},
                  {"title": "University of Cincinnati College of Medicine"},
                  {"title": "Mason, Ohio"}
                ],
        "sequence": 2
    },
    {
      "faculty_name": "Turner, TK",
      "faculty_thumbnail":"module3f.png",
       "faculty_titles": [
                  {"title": "President and CEO, Binge Eating Disorder Association"},
                  {"title": "Severna Park, Maryland"}
                ],
        "sequence": 3
    }],
    header =  
    {
      "header_content": '<p>Binge Eating Disorder in 2014 and Beyond: Current and Emerging Directions in Treatment</p>',
        "logo": "logo.png"
    },
    footer =  
    {
      "footer_content": '<div id="bottombar"><div id="disclaimer"><a href="/terms-of-use">Terms of Use</a> <!--|| To receive e-mail updates, click here--><br>Please contact <a href="mailto:info@opencme.org">info@opencme.org</a> with any questions, comments, or feedback about our activities. <br><br><strong>Hardware and Software Requirements</strong> <br>OpenCME recommends using the latest versions of these supported browsers: Google Chrome, Microsoft Internet Explorer, Mozilla Firefox, Safari. Depending on your browser of choice, additional software, such as <a href="http://get.adobe.com/reader/" target="_blank">Adobe Reader®</a> and <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe® Flash® Player</a> may be required. <br><br>Copyright 2009-2014OpenCME. All rights reserved. </div></div>',
        "logo": "logo.png"
    },
    specialties = 
    [
        {"specialty_name": "Physician: Family Practice"},
        {"specialty_name": "Physician: General Practice"},
        {"specialty_name": "Physician: Internal Medicine"},
        {"specialty_name": "Registered Nurse"},
        {"specialty_name": "Nurse Practitioner"},
        {"specialty_name": "Pharmacist"},
        {"specialty_name": "Physician's Assistant"},
        {"specialty_name": "Physician: Psychiatry"}
    ]
 

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        getAllCourses: getAllCourses,
        getAllFaculty: getAllFaculty,
        getHeader: getHeader,
        getFooter: getFooter,
        getSpecialties: getSpecialties
    };

}());

 