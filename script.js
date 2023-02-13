$(document).ready(function() {
    $('#btnRight').click(function() {
        var selectedOpts = $('#lstBox1 option:selected');

        $('#lstBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        // e.preventDefault();
    });

    $('#btnLeft').click(function() {
        var selectedOpts = $('#lstBox2 option:selected');
        

        $('#lstBox1').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        // e.preventDefault();
    });
});