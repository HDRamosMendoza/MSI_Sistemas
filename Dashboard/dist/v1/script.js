var config = {
    content: [{
        type: 'row',
        content:
        [
            {
                type: 'column',
                content:
                [
                    {
                        type: 'stack',
                        content: [
                            {
                                componentName: 'testDashboardA1',
                                componentState:
                                { 
                                    label: 'Gráfico A1',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A1'
                                },
                                title: '<strong>Gráfico A1</strong>',
                                tooltip: 'Gráfico A1 - Estadístico',
                                type: 'component'
                            },{
                                
                                componentName: 'testDashboardA2',
                                componentState:
                                { 
                                    label: 'Gráfico A2',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A2'
                                },
                                title: '<strong>Gráfico A2</strong>',
                                tooltip: 'Gráfico A2 - Estadístico',
                                type: 'component'
                            },{
                                
                                componentName: 'testDashboardA3',
                                componentState:
                                { 
                                    label: 'Gráfico A3',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A3'
                                },
                                title: '<strong>Gráfico A3</strong>',
                                tooltip: 'Gráfico A3 - Estadístico',
                                type: 'component'
                            }
                        ]
                    },{
                        type: 'stack',
                        content: [
                            {
                                componentName: 'testDashboard21',
                                componentState:
                                { 
                                    label: 'Gráfico C',
                                    color: '#FCFCFC',
                                    text: 'Gráfico C'
                                },
                                title: '<strong>Gráfico C</strong>',
                                tooltip: 'Gráfico C - Estadístico',
                                type: 'component'
                            },{
                                componentName: 'testDashboardB2',
                                componentState:
                                { 
                                    label: 'Gráfico D',
                                    color: '#FCFCFC',
                                    text: 'Gráfico D'
                                },
                                title: '<strong>Gráfico D</strong>',
                                tooltip: 'Gráfico D - Estadístico',
                                type: 'component'
                            }
                        ]
                    }
                ]
            },{
                type: 'component',
                componentName: 'testDashboardC1',
                componentState:
                { 
                    color: '#FCFCFC',
                    label: 'Gráfico E',
                    text: 'Gráfico E'
                },
                title: '<strong>Gráfico E</strong>',
                tooltip: 'Gráfico E - Estadístico'
            },{
                type: 'column',
                content:
                [
                    {
                        componentName: 'testDashboard4',
                        componentState:
                        { 
                            color: '#FCFCFC',
                            label: 'Gráfico F',
                            text: 'Gráfico F'
                        },
                        title: '<strong>Gráfico F</strong>',
                        tooltip: 'Gráfico F - Estadístico',
                        type: 'component'
                    },{
                        componentName: 'testDashboard5',
                        componentState:
                        {
                            color: '#FCFCFC',
                            label: 'Gráfico G',
                            text: 'Gráfico G'
                            
                        },
                        title: '<strong>Gráfico G</strong>',
                        tooltip: 'Gráfico G - Estadístico',
                        type: 'component'
                    },{
                        componentName: 'testDashboard6',
                        componentState: 
                        {
                            color: '#FCFCFC',
                            label: 'Gráfico H',
                            text: 'Gráfico H'
                        },
                        title: '<strong>Gráfico H</strong>',
                        tooltip: 'Gráfico H - Estadístico',
                        type: 'component'
                    },{
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
                        type: 'component'
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
                    <div id="canvasA1" style="width: 90%;">\
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
                    <div id="canvasA2" style="width:100%; height: 100% !important">\
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
                    <div id="canvasA3" style="width:100%; height: 100% !important">\
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
        .append('<div id="map" style="width:100%; height: 100% !important"></div>')
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
                    <div id="container5" style="width:75%; height: 100% !important">\
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
                    <div style="width:70%; height: 100% !important">\
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

