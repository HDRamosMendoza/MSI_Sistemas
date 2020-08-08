var config = {
    content: [{
        type: 'row',
        content:
        [
            {
                type: 'component',
                componentName: 'testDashboardC1',
                componentState:
                { 
                    color: '#FCFCFC',
                    label: 'Gráfico E',
                    text: 'Gráfico E'
                },
                title: '<strong>MSI - Visor de Seguridad Ciudadana</strong>',
                tooltip: 'MSI - Visor de Seguridad Ciudadana'
            },{
                type: 'column',
                content:[
                    {
                        type: 'stack',
                        content: [
                            {
                                type: 'component',
                                componentName: 'testDashboardA2',
                                componentState:
                                { 
                                    label: 'Gráfico A2',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A2'
                                },
                                title: '<strong>Gráfico A2</strong>',
                                tooltip: 'Gráfico A2 - Estadístico',
                            }
                        ]
                    },{
                        type: 'stack',
                        content: [
                            {
                                type: 'component',
                                componentName: 'testDashboard6',
                                componentState: 
                                {
                                    color: '#FCFCFC',
                                    label: 'Gráfico H',
                                    text: 'Gráfico H'
                                },
                                title: '<strong>Gráfico H</strong>',
                                tooltip: 'Gráfico H - Estadístico',
                            },{
                                type: 'component',
                                componentName: 'testDashboard5',
                                componentState:
                                {
                                    color: '#FCFCFC',
                                    label: 'Gráfico G',
                                    text: 'Gráfico G'
                                },
                                title: '<strong>Gráfico G</strong>',
                                tooltip: 'Gráfico G - Estadístico',
                            }
                        ]
                    },{
                        type: 'stack',
                        content: [
                            {
                                type: 'component',
                                componentName: 'testDashboardA3',
                                componentState:
                                { 
                                    label: 'Gráfico A3',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A3'
                                },
                                title: '<strong>Gráfico A3</strong>',
                                tooltip: 'Gráfico A3 - Estadístico',
                            },{
                                type: 'component',
                                componentName: 'testDashboardA1',
                                componentState:
                                { 
                                    label: 'Gráfico A1',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A1'
                                },
                                title: '<strong>Gráfico A1</strong>',
                                tooltip: 'Gráfico A1 - Estadístico'
                            }
                        ]
                    },{
                        type: 'row',
                        content: [
                            {
                                type: 'stack',
                                content: [
                                    {
                                        type: 'component',
                                        componentName: 'testDashboard21',
                                        componentState:
                                        { 
                                            label: 'Gráfico C',
                                            color: '#FCFCFC',
                                            text: 'Gráfico C'
                                        },
                                        title: '<strong>Gráfico C</strong>',
                                        tooltip: 'Gráfico C - Estadístico',
                                    },{
                                        type: 'component',
                                        componentName: 'testDashboard7',
                                        componentState:
                                        { 
                                            label: 'Gráfico I',
                                            color: '#FCFCFC',
                                            text: 'Gráfico I'
                                        },
                                        cssClass: 'highlight',
                                        title: '<strong>Gráfico I</strong>',
                                        tooltip: 'Gráfico I - Estadístico',
                                    },{
                                        type: 'component',
                                        componentName: 'testDashboard4',
                                        componentState:
                                        { 
                                            color: '#FCFCFC',
                                            label: 'Gráfico F',
                                            text: 'Gráfico F'
                                        },
                                        title: '<strong>Gráfico F</strong>',
                                        tooltip: 'Gráfico F - Estadístico',
                                    }
                                ]
                            },{
                                type: 'component',
                                componentName: 'testDashboardB2',
                                componentState:
                                { 
                                    label: 'Gráfico D',
                                    color: '#FCFCFC',
                                    text: 'Gráfico D'
                                },
                                title: '<strong>Gráfico D</strong>',
                                tooltip: 'Gráfico D - Estadístico',
                            }
                        ]
                    }
                ]
            }
        ]
    }]
};

var myLayout = new GoldenLayout( config );

var myLayout, savedState = localStorage.getItem('savedState');

if( savedState !== null ) {
    myLayout = new GoldenLayout( JSON.parse( savedState ) );
} else {
    myLayout = new GoldenLayout( config );
}

myLayout.on( 'stateChanged', function(){
    var state = JSON.stringify( myLayout.toConfig() );
    localStorage.setItem( 'savedState', state );
});

// Persistent component
var persistentComponent = function( container, componentState) {
    //container.getElement().html( '<h2>' + componentState.label + '</h2>' );

    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    
    // Create the input
    var input = $( '<input type="text" />' );

    // Set the initial / saved state
    if( componentState.label ) {
        input.val( componentState.label );
    }

    // Store state updates
    input.on( 'change', function(){
        container.setState
        (
            {
                label: input.val()
            }
        );
    }); 

    // Append it to the DOM
    container.getElement()
        .append('<h2>I\'ll be saved to localStorage</h2>', input)
        .css('background-color', componentState.color);
    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponentA1 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement().append('<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }
    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvasA1" style="width: 60%;">\
                        <canvas id="chart-0_A1"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);
    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponentA2 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement().append('<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }
    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvasA2" style="width:50%; height: 100% !important">\
                        <canvas id="canvas_A2"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);
    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponentA3 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement().append('<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }
    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvasA3" style="width:50%; height: 100% !important">\
                        <canvas id="LineA3"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);
    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponent21 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvas-holder21" style="width:100%; height: 100% !important">\
                        <canvas id="chart-area21"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponentB2 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvas-holderB2" style="width:100%; height: 100% !important">\
                        <canvas id="canvasB2"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponentC1 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('\
            <div id="map" style="width:100%; height: 100% !important"></div>\
            <div class="aside-layout">\
                <section>\
                    <div class="aside-button">\
                            <div class="btn-tab" name="ÍNDICE DE ASALTOS Y ROBOS" onclick="_changeButton(this,1)" id="DefultButton">ASALTO Y ROBO</div>\
                            <div class="btn-tab" name="ÍNDICE DE ACCIDENTES" onclick="_changeButton(this,2)">ACCIDENTE</div>\
                            <div class="btn-tab" name="ÍNDICE DE APOYO POR SEGURIDAD" onclick="_changeButton(this,3)">SEGURIDAD</div>\
                    </div>\
                    <div class="aside-name"></div>\
                    <div class="aside-title">VISTA</div>\
                    <div class="aside-time" id="time"></div>\
                    <div class="aside-message">Zoom a las incidencias</div>\
                </section>\
                <section>\
                    <div class="aside-sector">\
                        <div>Incidencia</div>\
                        <div class="aside-number">47</div>\
                        <div class="aside-alert">ÚLTIMOS 60</div>\
                        <div class="aside-alert">MINUTOS</div>\
                    </div>\
                    <div class="aside-sector">\
                        <div>Sector I</div>\
                        <div style="width:100%; height: 100% !important">\
                            <canvas id="chart-Prueba1"></canvas>\
                        </div>\
                    </div>\
                    <div class="aside-sector">\
                        <div>Sector II</div>\
                        <div style="width:100%; height: 100% !important">\
                            <canvas id="chart-Prueba2"></canvas>\
                        </div>\
                    </div>\
                    <div class="aside-sector">\
                        <div>Sector III</div>\
                        <div style="width:100%; height: 100% !important">\
                            <canvas id="chart-Prueba3"></canvas>\
                        </div>\
                    </div>\
                    <div class="aside-sector">\
                        <div>Sector VI</div>\
                        <div style="width:100%; height: 100% !important">\
                            <canvas id="chart-Prueba4"></canvas>\
                        </div>\
                    </div>\
                    <div class="aside-sector">\
                        <div>Sector V</div>\
                        <div style="width:100%; height: 100% !important">\
                            <canvas id="chart-Prueba5"></canvas>\
                        </div>\
                    <div>\
                </section>\
            </div>\
        ')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponent4 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="canvas-holder4" style="width:70%; height: 100% !important">\
                        <canvas id="chart-area4"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}


    // Persistent component
var persistentComponent5 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div id="container5" style="width:50%; height: 100% !important">\
                        <canvas id="canvas5"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponent6 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center>\
                    <div style="width:50%; height: 100% !important">\
                        <canvas id="canvas6"></canvas>\
                    </div>\
                <center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}

// Persistent component
var persistentComponent7 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    // Append it to the DOM
    container.getElement()
        .append('<center><div id="canvas-holder7" style="width:70%; height:100%">\
                    <canvas id="chart-area7"></canvas></div></center>')
        .css('background-color', componentState.color);

    //container.getElement().css('background-color', componentState.color);
}



// Register component
//myLayout.registerComponent( 'testDashboard', persistentComponent);
myLayout.registerComponent( 'testDashboardA1', persistentComponentA1);
myLayout.registerComponent( 'testDashboardA2', persistentComponentA2);
myLayout.registerComponent( 'testDashboardA3', persistentComponentA3);
myLayout.registerComponent( 'testDashboard21', persistentComponent21);
myLayout.registerComponent( 'testDashboardB2', persistentComponentB2);
myLayout.registerComponent( 'testDashboardC1', persistentComponentC1);
myLayout.registerComponent( 'testDashboard4', persistentComponent4);
myLayout.registerComponent( 'testDashboard5', persistentComponent5);
myLayout.registerComponent( 'testDashboard6', persistentComponent6);
myLayout.registerComponent( 'testDashboard7', persistentComponent7);


// Item Created
myLayout.on( 'itemCreated', function( item ){

  if(item.config.cssClass){
    /*
    console.log(item.config.cssClass);
    item.element.addClass( item.config.cssClass);
    */
  }
});

myLayout.on( 'stackCreated', function( stack ){
    stack.header.controlsContainer
        .find( '.lm_close' ) //get the close icon
        .off( 'click' ) //unbind the current click handler
        .click(function(){
            //add your own
            if(confirm('really close this?')) 
            {
                stack.remove();
            }
        });
});

// Tab Created
myLayout.on( 'tabCreated', function( tab ){

    // Tooltip
    tab.element.attr('title', tab.contentItem.config.tooltip);

    // 
    tab.closeElement.off('click').click(
        function(){
            if( confirm( 'really close this?' ) ) {
                tab.contentItem.remove();
            }
        }
    );
});

myLayout.init();