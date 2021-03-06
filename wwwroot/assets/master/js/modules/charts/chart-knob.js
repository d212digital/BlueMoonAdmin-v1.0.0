// Knob chart
// -----------------------------------

(function() {
    'use strict';

    $(initKnob);

    function initKnob() {

        if (!$.fn.knob) return;

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info']
        };
        $('#knob-chart1').knob(knobLoaderOptions1);

        var knobLoaderOptions2 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };
        $('#knob-chart2').knob(knobLoaderOptions2);

        var knobLoaderOptions3 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info'],
            bgColor: APP_COLORS['gray'],
            angleOffset: -125,
            angleArc: 250
        };
        $('#knob-chart3').knob(knobLoaderOptions3);

        var knobLoaderOptions4 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['pink'],
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        $('#knob-chart4').knob(knobLoaderOptions4);

        // Bluemoon additional charts 

        // completed services

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['success']
        };
        $('#knob-chart-completed').knob(knobLoaderOptions1);

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };

        // single services 

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info']
        };
        $('#knob-chart-single').knob(knobLoaderOptions1);

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };
        // services upcoming

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['yellow']
        };
        $('#knob-chart-upcoming').knob(knobLoaderOptions1);

            var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };

        // services overdue

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['danger']
        };

        $('#knob-chart-overdue').knob(knobLoaderOptions1);

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['red'],
            readOnly: true
        };
    }

})();