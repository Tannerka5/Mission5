function calculateTotal() {
    $('#hoursError').hide().text('');
    $('#resultBox').hide();

    var hours = $('#hours').val();

    if (hours === '' || hours === null) {
        $('#hoursError').text('⚠️ Please enter the number of hours needed.').show();
        return;
    }

    hours = parseFloat(hours);

    if (isNaN(hours)) {
        $('#hoursError').text('⚠️ Please enter a valid number.').show();
        return;
    }

    if (hours <= 0) {
        $('#hoursError').text('⚠️ Please enter a positive number of hours.').show();
        return;
    }

    var hourlyRate = 15.00;
    var total = hours * hourlyRate;

    $('#totalCost').val('$' + total.toFixed(2));
    $('#resultBox').fadeIn(400);
}

$(document).ready(function () {
    $('#hours').on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            calculateTotal();
        }
    });
});
