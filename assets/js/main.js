//Sidebar Toggle
$(".sidebar-toggle").click(function(e) {
    e.preventDefault();
    $(".sidebar").toggleClass("collapsed");
    $("#page-wrapper").toggleClass("collapsed");
});
