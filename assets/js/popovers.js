$(function () {
    // Popover initialization
    $('[data-toggle="popover"]').popover();
    /*
     * Popovers use a fragment link as a fallback in AMP, but we 
     * don't realy want users sharing "resource not found" links,
     * so prevent the default anchor tag behavior outside of AMP.
     */
    $('[data-toggle="popover"]').on('click', function(event) {
        event.preventDefault();
    })
});