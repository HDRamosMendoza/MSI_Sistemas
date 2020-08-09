/* A1 */
var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

var colorA1 = Chart.helpers.color;
var configA1 = {
    type: 'line',
    data: {
        labels: [ // Date Objects
            newDate(0),
            newDate(1),
            newDate(2),
            newDate(3),
            newDate(4),
            newDate(5),
            newDate(6)
        ],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: colorA1(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: false,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'My Second dataset',
            backgroundColor: colorA1(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            fill: false,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }, {
            label: 'Dataset with point data',
            backgroundColor: colorA1(window.chartColors.green).alpha(0.5).rgbString(),
            borderColor: window.chartColors.green,
            fill: false,
            data: [{
                x: newDateString(0),
                y: randomScalingFactor()
            }, {
                x: newDateString(5),
                y: randomScalingFactor()
            }, {
                x: newDateString(7),
                y: randomScalingFactor()
            }, {
                x: newDateString(15),
                y: randomScalingFactor()
            }],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Chart.js Time Scale'
        },
        legend: {
                position: 'right',
            },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    parser: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll HH:mm'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        },
    }
};

/* A2 */
var lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        yAxisID: 'y-axis-1',
    }, {
        label: 'My Second dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        yAxisID: 'y-axis-2'
    }]
};


/* A3 */

    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var configA3 = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                fill: false,
            }, {
                label: 'My Second dataset',
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            legend: {
                position: 'right',
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        min: 0,
                        max: 100,

                        // forces step size to be 5 units
                        stepSize: 5
                    }
                }]
            }
        }
    };


/* 2 */
var chartColors21 = window.chartColors;

var color21 = Chart.helpers.color;
var config21 = {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                color21(chartColors21.red).alpha(0.5).rgbString(),
                color21(chartColors21.orange).alpha(0.5).rgbString(),
                color21(chartColors21.yellow).alpha(0.5).rgbString(),
                color21(chartColors21.green).alpha(0.5).rgbString(),
                color21(chartColors21.blue).alpha(0.5).rgbString(),
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Polar Area Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            },
            reverse: false
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
};

    /* B2 */

    var randomScalingFactorB2 = function() {
    return Math.round(Math.random() * 100);
};

var colorB2 = Chart.helpers.color;
var configB2 = {
    type: 'radar',
    data: {
        labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: colorB2(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2()
            ]
        }, {
            label: 'My Second dataset',
            backgroundColor: colorB2(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2(),
                randomScalingFactorB2()
            ]
        }]
    },
    options: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};


/* 4 */
var config4 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'left',
        },
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

var configPrueba1 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.white,
                window.chartColors.as
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'White'
        ]
    },
    options: {
        responsive: true,      
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        legend: {
            display: false,
            position: 'left',
        },
        plugins: {
            labels: {
              // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
              render: 'value',
      
              // precision for percentage, default is 0
              precision: 0,
      
              // identifies whether or not labels of value 0 are displayed, default is false
              showZero: true,
      
              // font size, default is defaultFontSize
              fontSize: 14,
      
              // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
              fontColor: '#000000',
      
              // font style, default is defaultFontStyle
              fontStyle: 'normal',
      
              // font family, default is defaultFontFamily
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      
              // draw text shadows under labels, default is false
              textShadow: true,
      
              // text shadow intensity, default is 6
              shadowBlur: 10,
      
              // text shadow X offset, default is 3
              shadowOffsetX: -5,
      
              // text shadow Y offset, default is 3
              shadowOffsetY: 5,
      
              // text shadow color, default is 'rgba(0,0,0,0.3)'
              shadowColor: 'rgba(255,0,0,0.75)',
      
              // draw label in arc, default is false
              // bar chart ignores this
              arc: true,
      
              // position to draw label, available value is 'default', 'border' and 'outside'
              // bar chart ignores this
              // default is 'default'
              position: 'default',
      
              // draw label even it's overlap, default is true
              // bar chart ignores this
              overlap: true,
      
              // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
              showActualPercentages: true,
      
              // set images when `render` is 'image'
              images: [
                {
                  src: 'image.png',
                  width: 16,
                  height: 16
                }
              ],
      
              // add padding when position is `outside`
              // default is 2
              outsidePadding: 4,
      
              // add margin of text when position is `outside` or `border`
              // default is 2
              textMargin: 4
            }
          }

    }
};

/* BAR - Vertical */

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var color = Chart.helpers.color;
var barChartData5 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};


    /* COMBO-BAR-LINE */

    var chartData6 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: window.chartColors.blue,
        borderWidth: 2,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};


/* PIE */
var config7 = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Chart.js Combo Bar Line Chart'
        },
        responsive: true,
        legend: {
            position: 'left',
        },  
        plugins: {
            labels: {
              // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
              render: 'value',
      
              // precision for percentage, default is 0
              precision: 0,
      
              // identifies whether or not labels of value 0 are displayed, default is false
              showZero: true,
      
              // font size, default is defaultFontSize
              fontSize: 14,
      
              // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
              fontColor: '#fff',
      
              // font style, default is defaultFontStyle
              fontStyle: 'normal',
      
              // font family, default is defaultFontFamily
              fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      
              // draw text shadows under labels, default is false
              textShadow: true,
      
              // text shadow intensity, default is 6
              shadowBlur: 10,
      
              // text shadow X offset, default is 3
              shadowOffsetX: -5,
      
              // text shadow Y offset, default is 3
              shadowOffsetY: 5,
      
              // text shadow color, default is 'rgba(0,0,0,0.3)'
              shadowColor: 'rgba(255,0,0,0.75)',
      
              // draw label in arc, default is false
              // bar chart ignores this
              arc: true,
      
              // position to draw label, available value is 'default', 'border' and 'outside'
              // bar chart ignores this
              // default is 'default'
              position: 'default',
      
              // draw label even it's overlap, default is true
              // bar chart ignores this
              overlap: true,
      
              // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
              showActualPercentages: true,
      
              // set images when `render` is 'image'
              images: [
                {
                  src: 'image.png',
                  width: 16,
                  height: 16
                }
              ],
      
              // add padding when position is `outside`
              // default is 2
              outsidePadding: 4,
      
              // add margin of text when position is `outside` or `border`
              // default is 2
              textMargin: 4
            }
          }

    }
};

window.onload = function() {
    /* A1 */
    var ctx = document.getElementById('chart-0_A1');
    window.myLine = new Chart(ctx, configA1);

    /* A2 */
    var ctx = document.getElementById('canvas_A2').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
    /* A3 */
    var ctx = document.getElementById('LineA3').getContext('2d');
    window.myLine = new Chart(ctx, configA3);

    /* 2 */
    var ctx = document.getElementById('chart-area21');
    window.myPolarArea = new Chart(ctx, config21);

    /* B2 */
    var ctx = document.getElementById('canvasB2');
    window.myRadar = new Chart(ctx, configB2);

    /* 4 */
    var ctx = document.getElementById('chart-area4').getContext('2d');
    window.myDoughnut = new Chart(ctx, config4);

    /* PRUEBA SECTOR 1 */
    var ctxPrueba1 = document.getElementById('chart-Prueba1').getContext('2d');
    window.myDoughnutPrueba1 = new Chart(ctxPrueba1, configPrueba1);
    
    var ctxPrueba2 = document.getElementById('chart-Prueba2').getContext('2d');
    window.myDoughnutPrueba2 = new Chart(ctxPrueba2, configPrueba1);

    var ctxPrueba3 = document.getElementById('chart-Prueba3').getContext('2d');
    window.myDoughnutPrueba3 = new Chart(ctxPrueba3, configPrueba1);
    
    var ctxPrueba4 = document.getElementById('chart-Prueba4').getContext('2d');
    window.myDoughnutPrueba4 = new Chart(ctxPrueba4, configPrueba1);

    var ctxPrueba5 = document.getElementById('chart-Prueba5').getContext('2d');
    window.myDoughnutPrueba5 = new Chart(ctxPrueba5, configPrueba1);

    /* 5 BAR Vertical */

    var ctx = document.getElementById('canvas5').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData5,
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Delicuencia'
            }
        }
    });

    /*6*/
    var ctx = document.getElementById('canvas6').getContext('2d');
    window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData6,
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    /* 7 */
    var ctx = document.getElementById('chart-area7').getContext('2d');
    window.myPie = new Chart(ctx, config7);
    var cities = L.layerGroup();


    /* LEAFLET */
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

    var map = L.map('map', {
        center: [-12.099167, -77.034722],
        zoom: 14,
        layers: [grayscale]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);


    /* TIME */
    let _checkTime = function (i) { return (i < 10) ? "0" + i : i; }

    let _startTime = function () {
        var today = new Date(),
            h = _checkTime(today.getHours()),
            m = _checkTime(today.getMinutes()),
            s = _checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () { _startTime(); }, 500);
    }

    _startTime();

    /* Fondo por defecto */
    document.getElementById('DefultButton').click();
};

/* Cambia el fondo según el click */
let _changeButton = function(paramThis, paramButton) {
    document.querySelector(".aside-name").innerHTML = paramThis.getAttribute('name');
    let contentAside = paramThis.parentNode.parentNode.parentNode;
    let contentAsideNodes = paramThis.parentNode.childNodes;
    contentAsideNodes[1].style.borderBottom = "0px solid white";
    contentAsideNodes[1].style.fontWeight = "lighter";
    contentAsideNodes[3].style.borderBottom = "0px solid white";
    contentAsideNodes[3].style.fontWeight = "lighter";
    contentAsideNodes[5].style.borderBottom = "0px solid white";
    contentAsideNodes[5].style.fontWeight = "lighter";
    if(paramButton == 1){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(47,161,213,0.85)";
    } else if(paramButton == 2){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(148,188,55,0.85)";    
    } else if(paramButton == 3){
        paramThis.style.borderBottom = "3px solid white";
        paramThis.style.fontWeight = "bold";
        contentAside.style.backgroundColor = "rgba(247,180,0,0.85)";
    }
};