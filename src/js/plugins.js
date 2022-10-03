(function ($) {

    $("a.dropdown-item").on("click", function () {
        var text = $(this).text();
        $($(this).closest("ul").siblings()[0]).html(text);
    });

})(jQuery);

