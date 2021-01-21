'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    projectClick();
});

function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("Javascript is connected");
        $(this).text("Too many questions is the Chan disease.");
        $(".jumbotron p").toggleClass("active");
    });

    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    console.log("CLICK1");
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
    //var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}
