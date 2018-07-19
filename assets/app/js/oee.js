var
    SECs = 0,
    ms1000 = new Date(),
    chartOeeTrend,
    chartSixBigLosses,
    chartEvents,
    chartFloorMap,
    chartEquipmentFailure,
    chartSetupAndAdjustments,
    chartIdlingAndMinorStops,
    chartReducedSpeed,
    chartProcessDefects,
    chartReducedYield;


var rtsOEEM = {
    availability: 85,
    performance: 85,
    quality: 85,
    oeec: 0,
    oeea: 0,
    oeep: 0,
    oeeq: 0,
    productCurrent: 0,
    productTarget: 5555,
    downtime: false,
    downtimeCurrent: 0,
    downtimeTotal: 0,
    bigLossFilter: 90,
    sblEquipmentFailure: {
        title: 'Equipment Failure',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sblSetupAndAdjustments: {
        title: 'Setup and Adjustments',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sblIdlingAndMinorStops: {
        title: 'Idling and Minor Stops',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sblReducedSpeed: {
        title: 'Reduced Speed',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sblProcessDefects: {
        title: 'Process Defects',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sblReducedYield: {
        title: 'Reduced Yield',
        occurrences: 0,
        totalizer: 0,
        rate: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    events: [
        {reason: '', occurrences: 0, totalizer: 0},
    ]
};


function chartOeeTrendInit(title, series) {
    var chartSeries;
    if (series == null) {
        var OEE = [];
        var Availability = [];
        var Performance = [];
        var Quality = [];
        var n = 100;
        var tm = Math.round(new Date().getTime() / 1000) * 1000 - n * 3000;
        for (var i = 0; i < n; i++) {
            tm += 3000;
            Availability.push([tm, 85 + Math.round((Math.random() * 14))]);
            Performance.push([tm, 85 + Math.round((Math.random() * 14))]);
            Quality.push([tm, 85 + Math.round((Math.random() * 14))]);
            OEE.push([tm, Availability[Availability.length - 1][1] * Performance[Performance.length - 1][1] * Quality[Quality.length - 1][1] / 10000]);
        }
        chartSeries = [];
        chartSeries.push({
            name: 'OEE',
            data: OEE
        });
        chartSeries.push({
            name: 'Availability',
            data: Availability
        });
        chartSeries.push({
            name: 'Performance',
            data: Performance
        });

        chartSeries.push({
            name: 'Quality',
            data: Quality
        });
    } else {
        chartSeries = series;
    }
    chartOeeTrend = new Highcharts.stockChart('chartOeeTrend', {
        credits: {
            enabled: false,
            href: 'http://www.rtsperfectplant.com/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: false,
            align: 'center',
            y: 40,
            style: {
                fontSize: '14px',
                display: 'none'
            }
        },

        chart: {
            type: 'spline',
            margin: [0, 90, 0, 90],
            // width: 3108,
            events: {
                load: function () {
// 					alert('load');
                }
            }
        },
        colors: [
            '#d9534f',//'#90ed7d',
            '#5cb85c',//'#7cb5ec',
            '#f0ad4e',//'#f7a35c',
            '#2f71aa',//'#888888'
        ],
        legend: {
            enabled: true,
            align: "center",
            verticalAlign: "bottom",
            shadow: false,
        },
        rangeSelector: {
            buttons: [{
                type: 'minute',
                count: 1,
                text: 'm.'
            }, {
                type: 'hour',
                count: 1,
                text: 'H'
            }, {
                type: 'hour',
                count: 8,
                text: 'S'
            }, {
                type: 'day',
                count: 1,
                text: 'D'
            }, {
                type: 'week',
                count: 1,
                text: 'W'
            }, {
                type: 'month',
                count: 1,
                text: 'M'
            }, {
                type: 'all',
                text: 'All'
            }],
            selected: 0
        },

        yAxis: {
            min: 50,
            max: 100,
            title: {
                text: 'yAxis',
                enabled: false,
            },
            labels: {
                enabled: true,
                formatter: function () {
//              return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    return this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> (%)<br/>',
            valueDecimals: 2,
            split: false
        },
        navigator: {
            enabled: true
        },
        series: chartSeries
    });
}

function chartSixBigLossesInit(title, series) {
    var chartSeries = [];
    var chartCategories = [
        rtsOEEM.sblEquipmentFailure.title,
        rtsOEEM.sblSetupAndAdjustments.title,
        rtsOEEM.sblIdlingAndMinorStops.title,
        rtsOEEM.sblReducedSpeed.title,
        rtsOEEM.sblProcessDefects.title,
        rtsOEEM.sblReducedYield.title
    ];

    if (series == null) {
        rtsOEEM.sblEquipmentFailure.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblEquipmentFailure.totalizer = Math.round(5000);
        rtsOEEM.sblSetupAndAdjustments.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblSetupAndAdjustments.totalizer = Math.round(5000);
        rtsOEEM.sblIdlingAndMinorStops.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblIdlingAndMinorStops.totalizer = Math.round(5000);
        rtsOEEM.sblReducedSpeed.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblReducedSpeed.totalizer = Math.round(5000);
        rtsOEEM.sblProcessDefects.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblProcessDefects.totalizer = Math.round(5000);
        rtsOEEM.sblReducedYield.occurrences = Math.round(10 + Math.random() * 100);
        rtsOEEM.sblReducedYield.totalizer = Math.round(5000);
        var b6 =
            rtsOEEM.sblEquipmentFailure.totalizer +
            rtsOEEM.sblSetupAndAdjustments.totalizer +
            rtsOEEM.sblIdlingAndMinorStops.totalizer +
            rtsOEEM.sblReducedSpeed.totalizer +
            rtsOEEM.sblProcessDefects.totalizer +
            rtsOEEM.sblReducedYield.totalizer;
        var r1 = (100 * rtsOEEM.sblEquipmentFailure.totalizer / b6) | 0;
        var r2 = (100 * rtsOEEM.sblSetupAndAdjustments.totalizer / b6) | 0;
        var r3 = (100 * rtsOEEM.sblIdlingAndMinorStops.totalizer / b6) | 0;
        var r4 = (100 * rtsOEEM.sblReducedSpeed.totalizer / b6) | 0;
        var r5 = (100 * rtsOEEM.sblProcessDefects.totalizer / b6) | 0;
        var r6 = (100 * rtsOEEM.sblReducedYield.totalizer / b6) | 0;

        rtsOEEM.sblEquipmentFailure.rate.shift();
        rtsOEEM.sblEquipmentFailure.rate.push(r1);
        rtsOEEM.sblSetupAndAdjustments.rate.shift();
        rtsOEEM.sblSetupAndAdjustments.rate.push(r2);
        rtsOEEM.sblIdlingAndMinorStops.rate.shift();
        rtsOEEM.sblIdlingAndMinorStops.rate.push(r3);
        rtsOEEM.sblReducedSpeed.rate.shift();
        rtsOEEM.sblReducedSpeed.rate.push(r4);
        rtsOEEM.sblProcessDefects.rate.shift();
        rtsOEEM.sblProcessDefects.rate.push(r5);
        rtsOEEM.sblReducedYield.rate.shift();
        rtsOEEM.sblReducedYield.rate.push(r6);
        chartSeries.push(rtsOEEM.sblEquipmentFailure.rate[rtsOEEM.sblEquipmentFailure.rate.length - 1]);
        chartSeries.push(rtsOEEM.sblSetupAndAdjustments.rate[rtsOEEM.sblSetupAndAdjustments.rate.length - 1]);
        chartSeries.push(rtsOEEM.sblIdlingAndMinorStops.rate[rtsOEEM.sblIdlingAndMinorStops.rate.length - 1]);
        chartSeries.push(rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1]);
        chartSeries.push(rtsOEEM.sblProcessDefects.rate[rtsOEEM.sblProcessDefects.rate.length - 1]);
        chartSeries.push(rtsOEEM.sblReducedYield.rate[rtsOEEM.sblReducedYield.rate.length - 1]);
    }
    for (var i = 0; i < 5; i++) {
        for (var j = i + 1; j < 6; j++) {
            if (chartSeries[i] < chartSeries[j]) {
                var t1 = chartSeries[i];
                chartSeries[i] = chartSeries[j];
                chartSeries[j] = t1;
                var t2 = chartCategories[i];
                chartCategories[i] = chartCategories[j];
                chartCategories[j] = t2;
            }
        }
    }
    chartSixBigLosses = Highcharts.chart('chartSixBigLosses', {
        chart: {
//          backgroundColor: '#f0f0f0',
            margin: [10, 50, 20, 50],
//          width: 600,
            height: 400,
        },
        credits: {
            enabled: false,
            href: 'http://www.rtsperfectplant.com/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        xAxis: {
            categories: chartCategories
        },
        labels: {
            items: [{
                html: 'Six Big Losses',
                style: {
                    left: '80px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [
            {
                type: 'column',
                colorByPoint: true,
                name: 'items',
                data: chartSeries,
                showInLegend: false
            },
            {
                type: 'spline',
                name: 'Accumulate',
                data: [
                    chartSeries[0],
                    chartSeries[0] + chartSeries[1],
                    chartSeries[0] + chartSeries[1] + chartSeries[2],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3] + chartSeries[4],
                    chartSeries[0] + chartSeries[1] + chartSeries[2] + chartSeries[3] + chartSeries[4] + chartSeries[4],
                ],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            },
            {
                type: 'pie',
                name: 'Ratio',
                data: [{
                    name: chartCategories[0],
                    y: chartSeries[0],
                    //              color: Highcharts.getOptions().colors[0] // item's color
                }, {
                    name: chartCategories[1],
                    y: chartSeries[1],
                    //              color: Highcharts.getOptions().colors[1] // item's color
                }, {
                    name: chartCategories[2],
                    y: chartSeries[2],
                    //              color: Highcharts.getOptions().colors[2] // item's color
                }, {
                    name: chartCategories[3],
                    y: chartSeries[3],
                    //              color: Highcharts.getOptions().colors[3] // item's color
                }, {
                    name: chartCategories[4],
                    y: chartSeries[4],
                    //              color: Highcharts.getOptions().colors[4] // item's color
                }, {
                    name: chartCategories[5],
                    y: chartSeries[5],
                    //              color: Highcharts.getOptions().colors[5] // item's color
                }],
                center: [100, 100],
                size: 150,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }],
        legend: {
            enabled: false,
            align: "center",
            verticalAlign: "bottom",
            shadow: false,
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: 'yAxis',
                enabled: false,
            },
            labels: {
                formatter: function () {
//              return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    return this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },
    });
    // cc(chartSixBigLosses.axes[1].toPixels(80, false));
    chartSixBigLosses.renderer.path(['M', 50, chartSixBigLosses.axes[1].toPixels(rtsOEEM.bigLossFilter, false), 'H', 1000, chartSixBigLosses.axes[1].toPixels(rtsOEEM.bigLossFilter, false)]).attr({
        'stroke-width': 1,
        stroke: Highcharts.getOptions().colors[0],
        dashstyle: 'dash'
    }).add();
}

function chartEventsInit(title, series) {
    var chartSeries;
    var reasons = [
        'ToolingFailure',
        'UnplannedMaint',
        'EquipmentFailure',
        'Setup&Changeover',
        'MaterialShortage',
        'OperatorShortage',
        'WarmUpTime',
        'ObstructedFlow',
        'ComponentJams',
        'Misfeeds',
        'SensorBlocked',
        'CleaningChecking',
        'RoughRunning',
        'UnderCapacity',
        'EquipmentWear',
        'OperatorInnefficiency',
        'Scrap',
        'Rework',
        'InProcessDamage',
        'InProcessExpiration',
        'IncorrectAssembly',
        'Unassigned',
        'FailureCtr'
    ];

    var n = 7;// = Math.round(10 + Math.random() * 5);
    rtsOEEM.events = [];
    rtsOEEM.events.push({
        'reason': reasons[Math.round(Math.random() * (reasons.length - 1))],
        'occurrences': Math.round(3 + Math.random() * 10),
        'totalizer': Math.round(100 + Math.random() * 5000)
    });
    for (var i = 0; i < n; i++) {
        var r = '';
        do {
            r = reasons[Math.round(Math.random() * (reasons.length - 1))];
            var m = -1;
            for (var j = 0; j < rtsOEEM.events.length; j++) {
                if (rtsOEEM.events[j]['reason'] == r) {
                    m = j;
                }
            }
        } while (m > 0);

        rtsOEEM.events.push({
            'reason': r,
            'occurrences': Math.round(3 + Math.random() * 10),
            'totalizer': Math.round(100 + Math.random() * 5000)
        });
    }

    chartSeries = [];
    $.each(rtsOEEM.events, function (i, event) {
        chartSeries.push({name: event['reason'], y: event['totalizer']});
    });

    chartEvents = Highcharts.chart('chartEvents', {
        credits: {
            enabled: false,
            href: 'http://www.rtsperfectplant.com/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },
            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },
            text: 'RTS Consulting Inc.'
        },
        title: {
            text: title,
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: false,
            align: 'center',
            y: 40,
            style: {
                fontSize: '14px',
                display: 'none'
            }
        },
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60
            },
//          margin: [0, 165, 0, 165],
            margin: [10, 0, 20, 0],
// width: 600,
            height: 400,
        },
        plotOptions: {
            pie: {
                innerSize: 150,
                depth: 45
            }
        },
        series: [{
            name: 'During',
            data: chartSeries,
//          data: [
//            {name: 'Break Time (12:00PM)', y: 15, color: '#337ab7'},
//            {name: 'Running', y: 25, color: '#5cb85c'},
//            {name: 'Tooling Failure', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 32, color: '#5cb85c'},
//            {name: 'Equipment Failure', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 17, color: '#5cb85c'},
//            {name: 'Misfeeds', y: 13, color: '#f0ad4e'},
//            {name: 'Running', y: 17, color: '#5cb85c'},
//            {name: '', y: 240, color: '#ffffff'},
//            {name: 'Changeover (6:00AM)', y: 10, color: '#f0ad4e'},
//            {name: 'Running', y: 30, color: '#5cb85c'},
//            {name: 'Material Shortage', y: 17, color: '#f0ad4e'},
//            {name: 'Running', y: 23, color: '#5cb85c'},
//            {name: 'Sensor Blocked', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 37, color: '#5cb85c'},
//            {name: 'Break Time (8:00AM)', y: 15, color: '#337ab7'},
//            {name: 'Running', y: 25, color: '#5cb85c'},
//            {name: 'Sensor Blocked', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 52, color: '#5cb85c'},
//            {name: 'Sensor Blocked', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 22, color: '#5cb85c'},
//            {name: 'Meal Time (10:00AM)', y: 30, color: '#337ab7'},
//            {name: 'Running', y: 10, color: '#5cb85c'},
//            {name: 'Sensor Blocked', y: 3, color: '#d9534f'},
//            {name: 'Running', y: 47, color: '#5cb85c'},
//            {name: 'Operator Shortage', y: 7, color: '#f0ad4e'},
//            {name: 'Running', y: 23, color: '#5cb85c'},
//          ]
        }]
    });
    var thead = "<thead><tr><th>Events</th><th>Occurrences</th><th>Totalizer</th></tr></thead><tbody>";
    var n = 0;
    var tbody = "";
    $.each(rtsOEEM.events, function (i, event) {
        tbody = tbody + '<tr><td>' + event['reason'] + '</td><td>' + '</td><td>' + event['occurrences'] + '</td><td>' + (new Date(event['totalizer'] * 1000)).toISOString().substr(11, 8) + '</td> </tr>';
    });

    document.getElementById('eventsTable').innerHTML = thead + tbody + '</tbody>';

}

function chartFloorMapInit(title, series) {
    var OPs = [{
        text: '<u>OP 10</u><br>LaserMarker<br>#1 Pinion', 'x': 60, 'y': 30 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 10</u><br>LaserMarker<br>#2 Pinion', 'x': 60, 'y': 30 + 1 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 10</u><br>LaserMarker<br>#1 Ring', 'x': 60, 'y': 30 + 2 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 10</u><br>LaserMarker<br>#2 Ring', 'x': 60, 'y': 30 + 3 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 10</u><br>LaserMarker<br>#3 Ring', 'x': 60, 'y': 30 + 4 * 80, 'padType': 'Pad80x50'
    }, {
        text: '.', 'x': 200, 'y': 30 + 2 * 80, 'padType': 'Pad60x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#1 Pinion', 'x': 280, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#2 Pinion', 'x': 390, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#3 Pinion', 'x': 390, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#4 Pinion', 'x': 390, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#5 Pinion', 'x': 390, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#6 Pinion', 'x': 280, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#1 Ring', 'x': 610, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#2 Ring', 'x': 490, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#3 Ring', 'x': 490, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#4 Ring', 'x': 490, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#5 Ring', 'x': 490, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>OP 20</u><br>Cutter<br>#6 Ring', 'x': 610, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'
    }, {
        text: '.', 'x': 620, 'y': 30 + 2 * 80, 'padType': 'Pad60x50'
    }, {
        text: '.', 'x': 845, 'y': 90 + 0 * 80, 'padType': 'Pad60x50'
    }, {
        text: '.', 'x': 845, 'y': 50 + 3 * 80, 'padType': 'Pad60x50'
    }, {
        text: '<u>Furnace #1</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 0 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>Furnace #2</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 1 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>Furnace #3</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 2 * 80, 'padType': 'Pad80x50'
    }, {
        text: '<u>Furnace #4</u><br>Pinions<br>Rings', 'x': 940, 'y': 70 + 3 * 80, 'padType': 'Pad80x50'
    },
    ];

    chartFloorMap = Highcharts.chart('chartFloorMap', {
        credits: {
            enabled: false
        },
        chart: {
            margin: [0, 0, 0, 0],
            width: 1080,
            height: 400,
            backgroundColor: '#ffffff',
            events: {
                load: function () {

                    var ren = this.renderer,
                        colors = Highcharts.getOptions().colors,
                        rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                        leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];

                    ren.path(['M', 105, 50, 'L', 105, 350]).attr({'stroke-width': 5, stroke: '#c0c0c0'}).add();
                    ren.path(['M', 100, 200, 'L', 320, 200]).attr({'stroke-width': 5, stroke: '#c0c0c0'}).add();

                    ren.path(['M', 435, 30, 'L', 435, 320, 'L', 325, 320, 'L', 325, 80, 'L', 435, 80]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    // ren.path(['M', 325, 80, 'L', 325, 320, 'L', 435, 320, 'L', 435, 80, 'L', 325, 80]).attr({
                    //     'stroke-width': 5,
                    //     stroke: '#c0c0c0'
                    // }).add();

                    ren.path(['M', 535, 30, 'L', 535, 320, 'L', 655, 320, 'L', 655, 80, 'L', 535, 80]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    // ren.path(['M', 535, 80, 'L', 535, 320, 'L', 655, 320, 'L', 655, 80, 'L', 535, 80]).attr({
                    //     'stroke-width': 5,
                    //     stroke: '#c0c0c0'
                    // }).add();
                    ren.path(['M', 655, 200, 'L', 985, 200,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    ren.path(['M', 880, 80, 'L', 880, 320,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();
                    ren.path(['M', 985, 80, 'L', 985, 320,]).attr({
                        'stroke-width': 5,
                        stroke: '#c0c0c0'
                    }).add();

                    $.each(OPs, function (i, o) {
                        ren.label(o.text, o.x, o.y, 'rect', 10, 10, true, true, o.padType).attr({
                            fill: '#337ab7',
                            stroke: 'white',
                            'stroke-width': 2,
                            padding: 5,
                            r: 5,
                        }).css({color: 'white', fontSize: '12px',}).add().shadow(true);
                    });
                    ren.label('Serial NumberSummary RanCycle CompleteMachine #Date/TimeOperator', 270, 10).attr({
                        fill: '#c0c0c0', stroke: 'c0c0c0',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5,
                    }).css({color: 'white', fontSize: '12px',}).add().shadow(false);

                    ren.label('FORT WAYNE GEARS LINE PART 1', 840, 365).attr({
                        fill: '#337ab7', stroke: '#white',
                        'stroke-width': 1,
                        padding: 5,
                        r: 5,
                    }).css({color: 'white', fontSize: '12px', 'font-weight': 'bold'}).add().shadow(false);

                    ren.image('assets/app/media/img/icons/pc.png', 715, 40, 90, 80).add();
                    ren.image('assets/app/media/img/icons/pc.png', 715, 275, 90, 80).add();
                    ren.image('assets/app/media/img/icons/scanner.png', 212, 180, 36, 36).add();
                    ren.image('assets/app/media/img/icons/scanner.png', 632, 180, 36, 36).add();
                    ren.image('assets/app/media/img/icons/scanner.png', 857, 80, 36, 36).add();
                    ren.image('assets/app/media/img/icons/scanner.png', 857, 280, 36, 36).add();
                    ren.circle(325, 200, 15).attr({
                        fill: 'white', stroke: '#2f71aa', 'stroke-width': 10
                    }).add();
                    ren.circle(775, 200, 40).attr({fill: '#2f71aa', stroke: '#c0c0c0', 'stroke-width': 4}).add();
                    ren.text('PARTS<br>TRAY', 753, 200)
                        .attr({
                            rotation: 0
                        })
                        .css({
                            color: '#ffffff',
                            fontSize: '16px'
                        })
                        .add();

                    ren.circle(880, 200, 15).attr({fill: 'white', stroke: '#2f71aa', 'stroke-width': 10}).add();
                    ren.path(['M', 190, 370, 'L', 190, 285, 'C', 190, 260, 190, 260, 215, 260, 'L', 290, 260, 'L', 285, 265, 'M', 290, 260, 'L', 285, 255,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 190, 30, 'L', 190, 115, 'C', 190, 140, 190, 140, 215, 140, 'L', 290, 140, 'L', 285, 135, 'M', 290, 140, 'L', 285, 145,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 700, 140, 'L', 900, 140, 'C', 925, 140, 925, 140, 925, 115, 'L', 925, 80, 'L', 920, 85, 'M', 925, 80, 'L', 930, 85,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                    ren.path(['M', 700, 260, 'L', 900, 260, 'C', 925, 260, 925, 260, 925, 285, 'L', 925, 320, 'L', 920, 315, 'M', 925, 320, 'L', 930, 315,]).attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    }).add();
                }
            }
        },
        title: {
            text: 'title',
            style: {
                color: 'black',
                display: 'none'
            }
        }
    });

    var ELE = document.getElementsByClassName("highcharts-Pad80x50-box");// Pad fixing
    $.each(ELE, function (i, ele) {
        ele.setAttribute("width", 80);
        ele.setAttribute("height", 50);
    });

    var ELE = document.getElementsByClassName("highcharts-Pad60x50-box");// Pad fixing
    $.each(ELE, function (i, ele) {
        ele.setAttribute("width", 60);
        ele.setAttribute("height", 50);
    });

    var ELE = document.getElementsByClassName("highcharts-label highcharts-Pad80x50");//Font fixing
    $.each(ELE, function (i, ele) {
        if (ele.nodeName == 'DIV') {
            ele.children[0].style['left'] = '3px';
            ele.children[0].style['top'] = '-13px';
            ele.children[0].style['width'] = '75px';
            ele.children[0].style['text-align'] = 'center';
            ele.children[0].style['line-height'] = '14px';
        }
    });
}

function sblEquipmentFailure(newRate, occurrences, totalizer) {
    rtsOEEM.sblEquipmentFailure.rate.shift();
    rtsOEEM.sblEquipmentFailure.rate.push(newRate);
    rtsOEEM.sblEquipmentFailure.occurrences = occurrences;
    rtsOEEM.sblEquipmentFailure.totalizer = totalizer;
    chartEquipmentFailure.series[0].setData(rtsOEEM.sblEquipmentFailure.rate);
    var c = rtsOEEM.sblEquipmentFailure.rate[rtsOEEM.sblEquipmentFailure.rate.length - 1] < rtsOEEM.sblEquipmentFailure.rate[rtsOEEM.sblEquipmentFailure.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateEquipmentFailure').innerHTML = c +
        rtsOEEM.sblEquipmentFailure.rate[rtsOEEM.sblEquipmentFailure.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblEquipmentFailure.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblEquipmentFailure.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblSetupAndAdjustments(newRate, occurrences, totalizer) {
    rtsOEEM.sblSetupAndAdjustments.rate.shift();
    rtsOEEM.sblSetupAndAdjustments.rate.push(newRate);
    rtsOEEM.sblSetupAndAdjustments.occurrences = occurrences;
    rtsOEEM.sblSetupAndAdjustments.totalizer = totalizer;
    chartSetupAndAdjustments.series[0].setData(rtsOEEM.sblSetupAndAdjustments.rate);
    var c = rtsOEEM.sblSetupAndAdjustments.rate[rtsOEEM.sblSetupAndAdjustments.rate.length - 1] < rtsOEEM.sblSetupAndAdjustments.rate[rtsOEEM.sblSetupAndAdjustments.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateSetupAndAdjustments').innerHTML = c +
        rtsOEEM.sblSetupAndAdjustments.rate[rtsOEEM.sblSetupAndAdjustments.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblSetupAndAdjustments.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblSetupAndAdjustments.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblIdlingAndMinorStops(newRate, occurrences, totalizer) {
    rtsOEEM.sblIdlingAndMinorStops.rate.shift();
    rtsOEEM.sblIdlingAndMinorStops.rate.push(newRate);
    rtsOEEM.sblIdlingAndMinorStops.occurrences = occurrences;
    rtsOEEM.sblIdlingAndMinorStops.totalizer = totalizer;
    chartIdlingAndMinorStops.series[0].setData(rtsOEEM.sblIdlingAndMinorStops.rate);
    var c = rtsOEEM.sblIdlingAndMinorStops.rate[rtsOEEM.sblIdlingAndMinorStops.rate.length - 1] < rtsOEEM.sblIdlingAndMinorStops.rate[rtsOEEM.sblIdlingAndMinorStops.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateIdlingAndMinorStops').innerHTML = c +
        rtsOEEM.sblIdlingAndMinorStops.rate[rtsOEEM.sblIdlingAndMinorStops.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblIdlingAndMinorStops.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblIdlingAndMinorStops.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblReducedSpeed(newRate, occurrences, totalizer) {
    rtsOEEM.sblReducedSpeed.rate.shift();
    rtsOEEM.sblReducedSpeed.rate.push(newRate);
    rtsOEEM.sblReducedSpeed.occurrences = occurrences;
    rtsOEEM.sblReducedSpeed.totalizer = totalizer;
    chartReducedSpeed.series[0].setData(rtsOEEM.sblReducedSpeed.rate);
    var c = rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1] < rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 2] ?
        "<li>The loss decreased at<span class=\"label label-success pull-right \" style=\"font-size: 14px\">" :
        "<li>The loss increased at<span class=\"label label-danger pull-right\" style=\"font-size: 14px\">";
    document.getElementById('rateReducedSpeed').innerHTML = c +
        rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1] + "%" +
        "</span></li><li>Occur <span class=\"badge badge-default\" style=\"font-size: 14px\">" +
        rtsOEEM.sblReducedSpeed.occurrences +
        "</span>, Total<span class=\"label label-default pull-right\" style=\"font-size: 14px\">" +
        (new Date(rtsOEEM.sblReducedSpeed.totalizer * 1000)).toISOString().substr(11, 8) + "</span></li>";
    var c = rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1] < rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateReducedSpeed').innerHTML = c +
        rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblReducedSpeed.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblReducedSpeed.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblProcessDefects(newRate, occurrences, totalizer) {
    rtsOEEM.sblProcessDefects.rate.shift();
    rtsOEEM.sblProcessDefects.rate.push(newRate);
    rtsOEEM.sblProcessDefects.occurrences = occurrences;
    rtsOEEM.sblProcessDefects.totalizer = totalizer;
    chartProcessDefects.series[0].setData(rtsOEEM.sblProcessDefects.rate);
    var c = rtsOEEM.sblProcessDefects.rate[rtsOEEM.sblProcessDefects.rate.length - 1] < rtsOEEM.sblProcessDefects.rate[rtsOEEM.sblProcessDefects.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateProcessDefects').innerHTML = c +
        rtsOEEM.sblProcessDefects.rate[rtsOEEM.sblProcessDefects.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblProcessDefects.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblProcessDefects.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblReducedYield(newRate, occurrences, totalizer) {
    rtsOEEM.sblReducedYield.rate.shift();
    rtsOEEM.sblReducedYield.rate.push(newRate);
    rtsOEEM.sblReducedYield.occurrences = occurrences;
    rtsOEEM.sblReducedYield.totalizer = totalizer;
    chartReducedYield.series[0].setData(rtsOEEM.sblReducedYield.rate);
    var c = rtsOEEM.sblReducedYield.rate[rtsOEEM.sblReducedYield.rate.length - 1] < rtsOEEM.sblReducedYield.rate[rtsOEEM.sblReducedYield.rate.length - 2] ?
        '<li><h5>The loss decreased at<span class="badge badge-success pull-right">' :
        '<li><h5>The loss increased at<span class="badge badge-danger pull-right">';
    document.getElementById('rateReducedYield').innerHTML = c +
        rtsOEEM.sblReducedYield.rate[rtsOEEM.sblReducedYield.rate.length - 1] + '%' +
        '</span></h5></li><li><h5>Occur <span class="badge badge-pill badge-info">' +
        rtsOEEM.sblReducedYield.occurrences +
        '</span>, Total<span class="badge badge-pill badge-info pull-right">' +
        (new Date(rtsOEEM.sblReducedYield.totalizer * 1000)).toISOString().substr(11, 8) + "</span><h5></li>";
}

function sblChartsInit() {
    chartEquipmentFailure = Highcharts.chart('chartEquipmentFailure', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartEquipmentFailure',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
    chartSetupAndAdjustments = Highcharts.chart('chartSetupAndAdjustments', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartSetupAndAdjustments',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
    chartIdlingAndMinorStops = Highcharts.chart('chartIdlingAndMinorStops', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartIdlingAndMinorStops',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
    chartReducedSpeed = Highcharts.chart('chartReducedSpeed', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartReducedSpeed',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
    chartProcessDefects = Highcharts.chart('chartProcessDefects', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartProcessDefects',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
    chartReducedYield = Highcharts.chart('chartReducedYield', {
        chart: {
            borderWidth: 0,
            type: 'area',
            renderTo: 'chartReducedYield',
            margin: [0, 10, 0, 0],
            // height: 55,
            // spacingBottom: 5,
            style: {
                overflow: 'visible'
            },
        },
        title: {
            text: 'title',
            style: {
                display: 'none'
            }
        },
        subtitle: {
            text: 'subtitle',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15,
            style: {
                display: 'none'
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            startOnTick: false,
            endOnTick: false,
            tickPositions: []
        },
        yAxis: {
            endOnTick: false,
            startOnTick: false,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            tickPositions: [0]
        },
        tooltip: {
            formatter: function () {
//            return '<b>' + this.series.name + '</b><br/>' +
//              this.x + ': ' + this.y;
                return this.y + '%';
            }
        },
        plotOptions: {
            series: {
                animation: false,
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
    });
}


function oeeRefresh() {
    // console.log('oeeRefresh');

    if (new Date() - ms1000 < 1000) {
        return;
    } else {
        SECs++;
        ms1000 = new Date();
    }
//            console.log(SECs);

    panelOEE(80 + Math.round((Math.random() * 19)), 85 + Math.round((Math.random() * 14)), 95 + Math.round((Math.random() * 5)));  //availability%, performance%, quality%

    if (SECs % 15 == 0) {
        // simulateTarget();
    }


    if (SECs % 3 == 0) {
        chartOeeTrendRefresh();
    }


    if (SECs % 1 == 0) {
        chartSixBigLossesRefresh(rtsOEEM.bigLossFilter);
    }


    if (SECs % 1 == 0) {
        panelSixBigLossesRefresh();
    }


    if (SECs % 1 == 0) {
        chartFloorMapReafresh();
    }


}


function chartFloorMapReafresh() {

    var ele = document.getElementsByClassName("highcharts-Pad80x50-box");
    $.each(ele, function (i, e) {
        var rdm = Math.random();
        if (rdm < .85) {
            e.setAttribute("fill", '#337ab7');
        } else if (rdm >= .85 && rdm < .95) {
            e.setAttribute("fill", '#ffbc00');
        } else if (rdm >= .95) {
            e.setAttribute("fill", '#d9534f');
        }
    });

}

function panelSixBigLossesRefresh() {
    var
        c1 = Math.round(10 + (Math.random() * 100)),
        c2 = Math.round(10 + (Math.random() * 100)),
        c3 = Math.round(10 + (Math.random() * 100)),
        c4 = Math.round(10 + (Math.random() * 100)),
        c5 = Math.round(10 + (Math.random() * 100)),
        c6 = Math.round(10 + (Math.random() * 100)),
        t1 = Math.round(Math.random() * 5000),
        t2 = Math.round(Math.random() * 5000),
        t3 = Math.round(Math.random() * 5000),
        t4 = Math.round(Math.random() * 5000),
        t5 = Math.round(Math.random() * 5000),
        t6 = Math.round(Math.random() * 5000),
        t = t1 + t2 + t3 + t4 + t5 + t6;
    sblEquipmentFailure((100 * t1 / t) | 0, c1, t1);       //new rate%, Occurrences, Totalizer(sec)
    sblSetupAndAdjustments((100 * t2 / t) | 0, c2, t2);    //new rate%, Occurrences, Totalizer(sec)
    sblIdlingAndMinorStops((100 * t3 / t) | 0, c3, t3);    //new rate%, Occurrences, Totalizer(sec)
    sblReducedSpeed((100 * t4 / t) | 0, c4, t4);           //new rate%, Occurrences, Totalizer(sec)
    sblProcessDefects((100 * t5 / t) | 0, c5, t5);         //new rate%, Occurrences, Totalizer(sec)
    sblReducedYield((100 * t6 / t) | 0, c6, t6);           //new rate%, Occurrences, Totalizer(sec)
}

function chartSixBigLossesRefresh(filter) {
    var chartSeries = [
        rtsOEEM.sblEquipmentFailure.rate[rtsOEEM.sblEquipmentFailure.rate.length - 1],
        rtsOEEM.sblSetupAndAdjustments.rate[rtsOEEM.sblSetupAndAdjustments.rate.length - 1],
        rtsOEEM.sblIdlingAndMinorStops.rate[rtsOEEM.sblIdlingAndMinorStops.rate.length - 1],
        rtsOEEM.sblReducedSpeed.rate[rtsOEEM.sblReducedSpeed.rate.length - 1],
        rtsOEEM.sblProcessDefects.rate[rtsOEEM.sblProcessDefects.rate.length - 1],
        rtsOEEM.sblReducedYield.rate[rtsOEEM.sblReducedYield.rate.length - 1],
    ];

    var chartCategories = [
        rtsOEEM.sblEquipmentFailure.title,
        rtsOEEM.sblSetupAndAdjustments.title,
        rtsOEEM.sblIdlingAndMinorStops.title,
        rtsOEEM.sblReducedSpeed.title,
        rtsOEEM.sblProcessDefects.title,
        rtsOEEM.sblReducedYield.title,
    ];

    for (var i = 0; i < 5; i++) {
        for (var j = i + 1; j < 6; j++) {
            if (chartSeries[i] < chartSeries[j]) {
                var t1 = chartSeries[i];
                chartSeries[i] = chartSeries[j];
                chartSeries[j] = t1;
                var t2 = chartCategories[i];
                chartCategories[i] = chartCategories[j];
                chartCategories[j] = t2;
            }
        }
    }
    var chartSeries2 = [];
    var chartSeries3 = [];

    var g = 0;
    for (var n = 0; n < chartSeries.length; n++) {
        g = g + chartSeries[n];
        chartSeries2.push(chartSeries[n]);
        chartSeries3.push(g);
        if (g > filter) {
            n = 100;
        }
    }

    chartSixBigLosses.series[0].setData(chartSeries2);
    chartSixBigLosses.series[1].setData(chartSeries3);
    chartSixBigLosses.series[2].setData([{
        name: chartCategories[0],
        y: chartSeries[0]
    }, {
        name: chartCategories[1],
        y: chartSeries[1]
    }, {
        name: chartCategories[2],
        y: chartSeries[2]
    }, {
        name: chartCategories[3],
        y: chartSeries[3]
    }, {
        name: chartCategories[4],
        y: chartSeries[4]
    }, {
        name: chartCategories[5],
        y: chartSeries[5]
    }]);
    chartSixBigLosses.xAxis[0].setCategories(chartCategories);
}

function panelOEE(availability, performance, quality) {

    rtsOEEM.availability = availability;
    rtsOEEM.performance = performance;
    rtsOEEM.quality = quality;
    rtsOEEM.oeea += availability;
    rtsOEEM.oeep += performance;
    rtsOEEM.oeeq += quality;
    rtsOEEM.oeec++;
    document.getElementById('panelOEE').innerHTML = '<h1>' + ((rtsOEEM.oeea / rtsOEEM.oeec * rtsOEEM.oeep / rtsOEEM.oeec * rtsOEEM.oeeq / rtsOEEM.oeec / 10000) | 0) + '%</h1>';
    document.getElementById('panelOEEX1').innerHTML = '<div class="progress-bar m--bg-brand" role="progressbar" style="width: ' +
        ((availability * performance * quality / 10000) | 0) +
        '%;" aria-valuenow="' +
        ((availability * performance * quality / 10000) | 0) +
        '" aria-valuemin="0" aria-valuemax="100"></div>';
    document.getElementById('panelOEEX2').innerHTML = ((availability * performance * quality / 10000) | 0) + '%';

    document.getElementById('panelAvailability').innerHTML = '<h1>' + ((rtsOEEM.oeea / rtsOEEM.oeec) | 0) + '%</h1>';
    document.getElementById('panelAvailabilityX1').innerHTML = '<div class="progress-bar m--bg-brand" role="progressbar" style="width: ' +
        availability +
        '%;" aria-valuenow="' +
        availability +
        '" aria-valuemin="0" aria-valuemax="100"></div>';
    document.getElementById('panelAvailabilityX2').innerHTML = availability + '%';

    document.getElementById('panelPerformance').innerHTML = '<h1>' + ((rtsOEEM.oeep / rtsOEEM.oeec) | 0) + '%</h1>';
    document.getElementById('panelPerformanceX1').innerHTML = '<div class="progress-bar m--bg-brand" role="progressbar" style="width: ' +
        performance +
        '%;" aria-valuenow="' +
        performance +
        '" aria-valuemin="0" aria-valuemax="100"></div>';
    document.getElementById('panelPerformanceX2').innerHTML = performance + '%';

    document.getElementById('panelQuality').innerHTML = '<h1>' + ((rtsOEEM.oeeq / rtsOEEM.oeec) | 0) + '%</h1>';
    document.getElementById('panelQualityX1').innerHTML = '<div class="progress-bar m--bg-brand" role="progressbar" style="width: ' +
        quality +
        '%;" aria-valuenow="' +
        quality +
        '" aria-valuemin="0" aria-valuemax="100"></div>';
    document.getElementById('panelQualityX2').innerHTML = quality + '%';

}

function chartOeeTrendRefresh() {
    var ts = new Date().getTime();
    chartOeeTrend.series[1].addPoint([ts, rtsOEEM.availability], false, false);
    chartOeeTrend.series[2].addPoint([ts, rtsOEEM.performance], false, false);
    chartOeeTrend.series[3].addPoint([ts, rtsOEEM.quality], false, false);
    chartOeeTrend.series[0].addPoint([ts, rtsOEEM.availability * rtsOEEM.performance * rtsOEEM.quality / 10000], true, false);
}

jQuery(document).ready(function () {
    console.log('starting ..');
    chartOeeTrendInit("Oee Trend", null);             //title & series, random data if null
    chartSixBigLossesInit("Six Big Losses", null);    //title & series, random data if null
    chartEventsInit("Downtime Events", null);         //title & series, random data if null
    chartFloorMapInit('Floor Maps', null);            //title & series, random data if null
    sblChartsInit();
    setInterval(oeeRefresh, 1000);
    floorTreeInit();

});
// jQuery(document).ready(function() {
//     Treeview.init();
// });
function scrollToX(e) {
    // cc(e.parentElement.id);

    // cc(e.parentElement.routerLinkActive);
    // document.getElementById(e.parentElement.id).setAttribute("routerLinkActive", "m-menu__item--active");


    for (var n = 0; n <= 5; n++) {
        document.getElementById('m-menu__item' + n).classList.remove('m-menu__item--active');
    }

    document.getElementById(e.parentElement.id).classList.add('m-menu__item--active');

    // document.getElementById(e.parentElement.id).classList.remove('MyClass');
    if (e.parentElement.id == 'm-menu__item0') {
        $("html, app-index").animate({scrollTop: 0}, 600);
    } else if (e.parentElement.id == 'm-menu__item1') {
        $("html, app-index").animate({scrollTop: 2244}, 600);
    }
    if (e.parentElement.id == 'm-menu__item2') {
        $("html, app-index").animate({scrollTop: 850}, 600);
    }
    if (e.parentElement.id == 'm-menu__item3') {
        $("html, app-index").animate({scrollTop: 3442}, 600);
    }
    if (e.parentElement.id == 'm-menu__item4') {
        $("html, app-index").animate({scrollTop: 1370}, 600);
    }
    if (e.parentElement.id == 'm-menu__item5') {
        $("html, app-index").animate({scrollTop: 2837}, 600);
    }

}

var Treeview = function () {

    var demo1 = function () {
        $('#m_tree_1').jstree({
            "core": {
                "themes": {
                    "responsive": false
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder"
                },
                "file": {
                    "icon": "fa fa-file"
                }
            },
            "plugins": ["types"]
        });
    }

    var demo2 = function () {
        $('#m_tree_2').jstree({
            "core": {
                "themes": {
                    "responsive": false
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder m--font-warning"
                },
                "file": {
                    "icon": "fa fa-file  m--font-warning"
                }
            },
            "plugins": ["types"]
        });

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#m_tree_2').on('select_node.jstree', function (e, data) {
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    var demo3 = function () {
        $('#m_tree_3').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes": {
                    "responsive": false
                },
                'data': [{
                    "text": "Same but with checkboxes",
                    "children": [{
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning m--font-danger"
                    }, {
                        "text": "initially open",
                        "icon": "fa fa-folder m--font-default",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, {
                        "text": "custom icon",
                        "icon": "fa fa-warning m--font-waring"
                    }, {
                        "text": "disabled node",
                        "icon": "fa fa-check m--font-success",
                        "state": {
                            "disabled": true
                        }
                    }]
                },
                    "And wholerow selection"
                ]
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder m--font-warning"
                },
                "file": {
                    "icon": "fa fa-file  m--font-warning"
                }
            },
        });
    }

    var demo4 = function () {
        $("#m_tree_4").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': [{
                    "text": "Parent Node",
                    "children": [{
                        "text": "Initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "Custom Icon",
                        "icon": "fa fa-warning m--font-danger"
                    }, {
                        "text": "Initially open",
                        "icon": "fa fa-folder m--font-success",
                        "state": {
                            "opened": true
                        },
                        "children": [
                            {"text": "Another node", "icon": "fa fa-file m--font-waring"}
                        ]
                    }, {
                        "text": "Another Custom Icon",
                        "icon": "fa fa-warning m--font-waring"
                    }, {
                        "text": "Disabled Node",
                        "icon": "fa fa-check m--font-success",
                        "state": {
                            "disabled": true
                        }
                    }, {
                        "text": "Sub Nodes",
                        "icon": "fa fa-folder m--font-danger",
                        "children": [
                            {"text": "Item 1", "icon": "fa fa-file m--font-waring"},
                            {"text": "Item 2", "icon": "fa fa-file m--font-success"},
                            {"text": "Item 3", "icon": "fa fa-file m--font-default"},
                            {"text": "Item 4", "icon": "fa fa-file m--font-danger"},
                            {"text": "Item 5", "icon": "fa fa-file m--font-info"}
                        ]
                    }]
                },
                    "Another Node"
                ]
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder m--font-brand"
                },
                "file": {
                    "icon": "fa fa-file  m--font-brand"
                }
            },
            "state": {"key": "demo2"},
            "plugins": ["contextmenu", "state", "types"]
        });
    }
    var dm5 = [
        {
            "text": "Parent Node",
            "children": [
                {
                    "text": "Initially selected",
                    "state": {
                        "selected": true
                    }
                },
                {
                    "text": "Custom Icon",
                    "icon": "",// "fa fa-warning m--font-danger"
                },
                {
                    "text": "Initially open",
                    "icon": "",//"fa fa-folder m--font-success",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Another node",
                            "icon": "",//"fa fa-file m--font-waring"
                        }
                    ]
                },
                {
                    "text": "Another Custom Icon",
                    "icon": "",//"fa fa-warning m--font-waring"
                },
                {
                    "text": "Disabled Node",
                    "icon": "",//"fa fa-check m--font-success",
                    "state": {
                        "disabled": true
                    }
                },
                {
                    "text": "Sub Nodes",
                    "icon": "",//"fa fa-folder m--font-danger",
                    "children": [
                        {
                            "text": "Item 1", "icon": "",//"fa fa-file m--font-waring"
                        },
                        {
                            "text": "Item 2", "icon": "",//"fa fa-file m--font-success"
                        },
                        {
                            "text": "Item 3", "icon": "",// "fa fa-file m--font-default"
                        },
                        {
                            "text": "Item 4", "icon": "",//"fa fa-file m--font-danger"
                        },
                        {
                            "text": "Item 5", "icon": "",// "fa fa-file m--font-info"
                        }
                    ]
                }
            ]
        }
        // , "Another Node"
    ];
    var demo5 = function () {
        $("#m_tree_5").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': dm5,
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder m--font-success"
                },
                "file": {
                    "icon": "fa fa-file  m--font-success"
                }
            },
            "state": {"key": "demo2"},
            // "plugins": ["dnd", "state", "types", "checkbox"]
            "checkbox": {
                "keep_selected_style": true,
                "whole_node": false,
                "tie_selection": false
            },
            "plugins": ["state", "types", "checkbox"]
        });
    }

    var demo6 = function () {
        $("#m_tree_6").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': {
                    'url': function (node) {
                        return 'inc/api/jstree/ajax_data.php';
                    },
                    'data': function (node) {
                        return {'parent': node.id};
                    }
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder m--font-brand"
                },
                "file": {
                    "icon": "fa fa-file  m--font-brand"
                }
            },
            "state": {"key": "demo3"},
            "plugins": ["dnd", "state", "types"]
        });
    }

    return {
        //main function to initiate the module
        init: function () {

            // demo1();
            // demo2();
            // demo3();
            // demo4();

            // cc(dm5);
            dm5 = treeNodes2;
            demo5();
            barChartInit('COLUMBUS SOUTH');
            $('#m_tree_5').on("select_node.jstree", function (e, data) {
                if (getNodesByText(data.node.text).length > 0) {
                    barChartInit(data.node);
                }
            });

            // demo6();
        }
    };
}();

var treeData;
var treeNodes2;

function floorTreeInit() {

    // var P1 = "SELECT *";
    // var P2 = "FROM MESM_FloorMaps";
    // var P3 = "ORDER BY idUnitParent";
    // var P4 = "";
    // var url = "/XMII/Illuminator?QueryTemplate=OEEM/QUERIES/get_Table&Param.1=" + P1 + "&Param.2=" + P2 + "&Param.3=" + P3 + "&Param.4=" + P4 + "&Content-Type=text/xml";

    // if (mockServer) {
    url = 'assets/app/js/MESM_FloorMaps.xml';
    // }

    //ss(url);
    getData(url, function (data) {
        treeData = [];
        treeNodes = new Array(data.length);
        treeNodes2 = new Array(data.length);
        var np = [];
        $.each(data, function (i, _data) {
            treeData.push({
                unitName: _data['unitName'],
                recordID: _data['recordID'],
                unitType: _data['unitType'],
                idUnitParent: _data['idUnitParent'],
                nameParent: '',
                oeeStatus: _data['oeeStatus'],
            });
            np[_data['recordID']] = _data['unitName'];
            var _icon = "";

            // treeNodes[i] = new sap.ui.commons.TreeNode("floorTree_" + i, {
            //     text: _data['unitName'],
            //     icon: _icon,
            //     expanded: true
            // });
            // function creatTreeNode(id, text, icon, selected, disabled, opened) {
            treeNodes2[i] = creatTreeNode(_data['unitName'], _data['unitName'], _icon, false, false, true, []);
            // floorTree.addNode(treeNodes[i]);

        });
        $.each(treeData, function (i, _treeData) {
            treeData[i].nameParent = np[treeData[i].idUnitParent];
        });
        // cc(treeData);
        // cc(treeNodes2);
        // $.each(treeNodes, function (i, m) {
        //     $.each(treeNodes, function (j, n) {
        //         if (i != j) {
        //             if (treeData[j]['idUnitParent'] == treeData[i]['recordID']) {
        //                 m.addNode(n);
        //             }
        //             if (treeData[i]['idUnitParent'] == treeData[j]['recordID']) {
        //                 n.addNode(m);
        //             }
        //         }
        //     });
        // });


        for (var t = 6; t >= 3; t--) {
            $.each(treeNodes2, function (i, m) {
                // cc(m);
                $.each(treeNodes2, function (j, n) {
                    if (i != j) {
                        if (treeData[j]['idUnitParent'] == treeData[i]['recordID'] && treeData[i]['unitType'] == t) {

                            addNode(treeNodes2, m, n);
                        }
                        if (treeData[i]['idUnitParent'] == treeData[j]['recordID'] && treeData[j]['unitType'] == t) {
                            addNode(treeNodes2, n, m);
                        }
                    }
                });
            });
        }


        // cc(treeNodes2);

        Treeview.init();

        // Treeview.demo5();
    });


}

function addNode(l, m, n) {
    if (n == undefined) return;
    // function creatTreeNode(id, text, icon, selected, disabled, opened, children) {
    // cc(m);
    // cc(n);
    // cc(m.children);
    m.children.push(n);
    // const index = l.indexOf(n);
    delete l[l.indexOf(n)];


}

function creatTreeNode(id, text, icon, selected, disabled, opened, children) {
    return {
        id: id,
        text: text,
        icon: icon,
        state: {
            selected: selected,
            disabled: disabled,
            opened: opened,
        },
        children: children,
    }
}

function getNodesByText(text) {
    // cc(text);
    var nodes = [];
    $.each(treeData, function (i, _treeData) {
        if (_treeData.nameParent == text) {
            nodes.push(_treeData.unitName)
        }
    });
    return nodes;
}

function findParent(node) {
    var parent = '';

    $.each(treeData, function (i, _treeData) {
        if (_treeData.unitName == node) {
            parent = _treeData.nameParent;
            return false;
        }
    });
    return parent;
}

function ScreenSize() {
    var a = 100;
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var sx = w.innerWidth || e.clientWidth || g.clientWidth;
    var sy = w.innerHeight || e.clientHeight || g.clientHeight;
    return {
        x: sx,
        y: sy
    }
}

function barChartInit(chartRoot) {
    // cc(chartRoot);
    var _title = chartRoot.text;
    var _subtitle = '';
    var _series = [];
    var _drilldown = [];
    //ss(_title);
    barChart = new Highcharts.chart('fmBarChart', {

        chart: {

            height: 400,
            type: 'column',
            events: {
                redraw: function () {
                },
                drilldown: function (e) {
                    console.log('drilldown', e);
                    isDrilldown = true;
                    if (!e.seriesOptions) {
                        var chart = this;
                        pn = e.point.name;
                        // 							lastTitle.push(BarChart.options.title['text']);
                        chart.title.update({
                            text: e.point.name
                        });


                        var nodes = getNodesByText(pn);
                        if (nodes.length == 0) {
                            return;
                        }

                        oeeData = [];
                        availabilityData = [];
                        performanceData = [];
                        qualityData = [];
                        $.each(nodes, function (i, child) {
                            oeeData.push({
                                name: child,
                                y: 60 + Math.round((Math.random() * 40)),
                                drilldown: true
                            });
                            availabilityData.push({
                                name: child,
                                y: 60 + Math.round((Math.random() * 40)),
                                drilldown: true
                            });
                            performanceData.push({
                                name: child,
                                y: 60 + Math.round((Math.random() * 40)),
                                drilldown: true
                            });
                            qualityData.push({
                                name: child,
                                y: 60 + Math.round((Math.random() * 40)),
                                drilldown: true
                            });
                        });

                        // if (true || nodes.getNodes()[0].getNodes().length == 0) {
                        if (getNodesByText(nodes[0]).length == 0) {
                            // 			colors: [ '#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1' ]

                            var OEE = {
                                name: 'OEE',
                                colorByPoint: false,
                                color: '#7cb5ec',
                                data: oeeData,
                            };
                            var Availability = {
                                name: 'Availability',
                                colorByPoint: false,
                                color: '#434348',
                                data: availabilityData,
                            };
                            var Performance = {
                                name: 'Performance',
                                colorByPoint: false,
                                color: '#90ed7d',
                                data: performanceData,
                            };
                            var Quality = {
                                name: 'Quality',
                                colorByPoint: false,
                                color: '#f7a35c',
                                data: qualityData,
                            };
                            // 									setTimeout(function() {
                            // 										chart.hideLoading();
                            chart.addSingleSeriesAsDrilldown(e.point, OEE);
                            chart.addSingleSeriesAsDrilldown(e.point, Availability);
                            chart.addSingleSeriesAsDrilldown(e.point, Performance);
                            chart.addSingleSeriesAsDrilldown(e.point, Quality);
                            chart.applyDrilldown();
                        } else {
                            var OEE = {
                                name: 'OEE',
                                colorByPoint: true,
                                data: oeeData,
                            };
                            chart.addSingleSeriesAsDrilldown(e.point, OEE);
                            chart.applyDrilldown();

                        }
                    }
                },
                drillup: function (e) {

                    // console.log('drillup', e);
                    // 						lastTitle = oeeChart.options.title['text'];
                    var chart = this;
                    // 						cc('drillup');
                    // 						cc(e);
                    // 						cc(findParent(e.seriesOptions.data[0].name));

                    // 						var tt = lastTitle.pop();
                    // 						ss(tt);
                    // cc(e);
                    // cc(e.seriesOptions);
                    // cc(e.seriesOptions.data);

                    // cc('e.seriesOptions.data ' + e.seriesOptions.data[0].name);
                    // cc(e.seriesOptions.data[0].name);
                    // cc(e.seriesOptions.data[0].name);
                    // cc(getNodesByText.seriesOptions.data[0].name);
                    chart.setTitle(
                        {
                            text: findParent(e.seriesOptions.data[0].name),
                        }
                    );
                    isDrilldown = false;
                    // 						ss(oeeChart.series.length);
                    // 						oeeChart.series[0].remove(true);
                    // 						setTimeout(function() {
                    // 							// 							chart.hideLoading();
                    // // 							chart.addSeriesAsDrilldown(e.point, series);
                    // 						}, 1000);

                }
            }
        },
        credits: {
            enabled: false,
            href: 'http://www.rtsperfectplant.com/',
            position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
            },

            style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
            },

            text: 'RTS Consulting Inc.'
        },
        // 			xAxis : {
        // 				categories : []
        // 			},
        xAxis: {
            type: 'category'
        },
        yAxis: {
            max: 100,
            title: {
                text: 'yAxis',
                enabled: false,
            }
        },

        exporting: {
            enabled: false
        },

        title: {
            text: _title,
        },
        // 			subtitle : {
        // 				text : 'Click the columns to view versions. Source: <a href="http://rtsautomation.com">rtsautomation.com</a>.'
        // 			},

        subtitle: {
            text: '',
        },

        legend: {
            align: "right",
            // 					backgroundColor: undefined
            // 					borderColor: "#999999"
            // 					borderRadius: 0
            // 					borderWidth: 0
            enabled: false,
            // 					floating: false
            // 					itemDistance: 20
            // 					itemHiddenStyle: { "color": "#cccccc" }
            // 					itemHoverStyle: { "color": "#000000" }
            // 					itemMarginBottom: 0
            // 					itemMarginTop: 0
            // 					itemStyle: { "color": "#333333", "cursor": "pointer", "fontSize": "12px", "fontWeight": "bold" }
            // 					itemWidth: undefined
            // 					labelFormat: "{name}"
            // 					labelFormatter: undefined
            // 					layout: "horizontal"
            // 					lineHeight: 16
            // 					margin: 12
            // 					maxHeight: undefined
            // 					navigation: {…}
            // 					padding: 8
            // 					reversed: false
            // 					rtl: false
            // 					shadow: false
            // 					squareSymbol: true
            // 					style: undefined
            // 					symbolHeight: undefined
            // 					symbolPadding: 5
            // 					symbolRadius: undefined
            // 					symbolWidth: undefined
            // 					title: {…}
            // 					useHTML: false
            verticalAlign: "center",
            // 					width: undefined
            // 					x: 0
            // 					y: 0
        },
        series: [],
        drilldown: {
            series: []
        },

        lang: {
//                    drillUpText: " << Back to {series.name}"
            drillUpText: " << Back"
        },
        plotOptions: {
            column: {
                // 					stacking : 'normal',
                pointPadding: 0,
                borderWidth: 0
            },
            series: {
                colorByPoint: true,
                dataLabels: {
                    enabled: false
                }
            }
        },
    });
    // 		lastTitle = _title;

    // 		oeeChartReady = false;
    // 		oeeChart.subtitle.update({
    // 			text : 'data retrieval ...'
    // 		});
    // 		oeeChartReady = true;
    // 		return;
    // 		cc('0');
    // 		cc(oeeChart);
    // 		return;

    // 		drilldownseries = oeeChart.options.drilldown.series;


    var aOEE = [];
    var aAvailability = [];
    var aPerformance = [];
    var aQuality = [];

    // 		$.each(drilldownseries, function(i, _drilldownseries) {
    // 			drilldownseries.pop();
    // 		});
    // 		cc('1');
    // 		cc(oeeChart);
    // 		chartSeriesDatas0 = [];
    // 		chartSeriesDatas1 = [];
    // 		chartSeriesDatas2 = [];
    // 		chartSeriesDatas3 = [];
    $.each(chartRoot.children, function (i, Node) {
        // cc('each(chartRoot.children');
        // cc(Node);

        var a = 60 + Math.round((Math.random() * 40)),
            p = 60 + Math.round((Math.random() * 40)),
            q = 60 + Math.round((Math.random() * 40));
        aAvailability.push({
            name: Node,
            y: a,
            drilldown: true,
        });
        aPerformance.push({
            name: Node,
            y: p,
            drilldown: true,
        });
        aQuality.push({
            name: Node,
            y: q,
            drilldown: true,
        });
        aOEE.push({
            name: Node,
            y: Math.round(a * p * q / 100) / 100,
            drilldown: true,
        });
    });

    // cc('tt ' + barChart.title.textStr);
    // cc(barChart);
    // if (getNodesByText[getNodesByText(barChart.title.textStr)[0]].length == 0) {
    // }

    // cc(barChart.title.textStr);
    var n = getNodesByText(barChart.title.textStr);

    if (getNodesByText(getNodesByText(barChart.title.textStr)[0]).length != 0) {

        barChart.addSeries({
            name: 'OEE',
            colorByPoint: true,
            data: aOEE
        });
    } else {
        // colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
        barChart.addSeries({
            name: 'OEE',
            color: '#7cb5ec',
            colorByPoint: false,
            data: aOEE
        });
        barChart.addSeries({
            name: 'Availability',
            color: '#434348',
            colorByPoint: false,
            data: aAvailability
        });
        barChart.addSeries({
            name: 'Performanc',
            color: '#90ed7d',
            colorByPoint: false,
            data: aPerformance
        });
        barChart.addSeries({
            name: 'Quality',
            color: '#f7a35c',
            colorByPoint: false,
            data: aQuality
        });
    }
    // 		oeeChart.series.isDirty = true;
    // 		oeeChart.redraw();

    // 		cc('99');
    // 		cc(BarChart);
    ChartType = 'BAR';
    lineChart = null;
    chartReady = true;
    // 		return;

    // 		oeeChart.series[1].setData(chartSeriesDatas1);
    // 		oeeChart.series[2].setData(chartSeriesDatas2);
    // 		oeeChart.series[3].setData(chartSeriesDatas3);
    // 		oeeChartDataLoad(chartRoot);

}


function cc(obj) {
    console.log(obj);
}
