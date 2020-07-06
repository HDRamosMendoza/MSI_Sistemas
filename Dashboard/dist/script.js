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
                                componentName: 'testDashboard',
                                componentState:
                                { 
                                    label: 'Gráfico A',
                                    color: '#FCFCFC',
                                    text: 'Gráfico A'
                                },
                                title: 'Gráfico A',
                                tooltip: 'Gráfico A - Estadístico',
                                type: 'component'
                            },{
                                
                                componentName: 'testDashboard',
                                componentState:
                                { 
                                    label: 'Gráfico B',
                                    color: '#FCFCFC',
                                    text: 'Gráfico B'
                                },
                                title: 'Gráfico B',
                                tooltip: 'Gráfico B - Estadístico',
                                type: 'component'
                            }
                        ]
                    },{
                        type: 'stack',
                        content: [
                            {
                                componentName: 'testDashboard',
                                componentState:
                                { 
                                    label: 'Gráfico C',
                                    color: '#FCFCFC',
                                    text: 'Gráfico C'
                                },
                                title: 'Gráfico C',
                                tooltip: 'Gráfico C - Estadístico',
                                type: 'component'
                            },{
                                componentName: 'testDashboard',
                                componentState:
                                { 
                                    label: 'Gráfico D',
                                    color: '#FCFCFC',
                                    text: 'Gráfico D'
                                },
                                title: 'Gráfico D',
                                tooltip: 'Gráfico D - Estadístico',
                                type: 'component'
                            }
                        ]
                    }
                ]
            },{
                componentName: 'testDashboard',
                componentState:
                { 
                    color: '#FCFCFC',
                    label: 'Gráfico E',
                    text: 'Gráfico E'
                },
                title: 'Gráfico E',
                tooltip: 'Gráfico E - Estadístico',
                type: 'component'
            },{
                type: 'column',
                content:
                [
                    {
                        componentName: 'testDashboard',
                        componentState:
                        { 
                            color: '#FCFCFC',
                            label: 'Gráfico F',
                            text: 'Gráfico F'
                        },
                        title: 'Gráfico F',
                        tooltip: 'Gráfico F - Estadístico',
                        type: 'component'
                    },{
                        componentName: 'testDashboard',
                        componentState:
                        {
                            color: '#FCFCFC',
                            label: 'Gráfico G',
                            text: 'Gráfico G'
                            
                        },
                        title: 'Gráfico G',
                        tooltip: 'Gráfico G - Estadístico',
                        type: 'component'
                    },{
                        componentName: 'testDashboard',
                        componentState: 
                        {
                            color: '#FCFCFC',
                            label: 'Gráfico H',
                            text: 'Gráfico H'
                        },
                        title: 'Gráfico H',
                        tooltip: 'Gráfico H - Estadístico',
                        type: 'component'
                    },{
                        componentName: 'testDashboard2',
                        componentState:
                        { 
                            label: 'Gráfico I',
                            color: '#FCFCFC',
                            text: 'Gráfico I'
                        },
                        cssClass: 'highlight',
                        title: 'Gráfico I',
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
var persistentComponent1 = function( container, componentState) {
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
var persistentComponent2 = function( container, componentState) {
    //Check for localStorage
    if( !typeof window.localStorage ) {
        container.getElement()
            .append(  '<h2 class="err">Your browser doesn\'t support localStorage.</h2>');
        return;
    }

    //container.getElement().css('background-color', componentState.color);
}

// Register component
myLayout.registerComponent( 'testDashboard', persistentComponent1);
myLayout.registerComponent( 'testDashboard2', persistentComponent2);

// Item Created
myLayout.on( 'itemCreated', function( item ){

  if(item.config.cssClass){
    console.log(item.config.cssClass);
    item.element.addClass( item.config.cssClass );
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