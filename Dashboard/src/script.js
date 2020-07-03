var config = {
    content: [{
        type: 'row',
        content:[
        {
            type: 'component',
            componentName: 'testDashboard',
            componentState: { label: 'Gráfico A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testDashboard',
                componentState: { label: 'Gráfico B' }
            },{
                type: 'component',
                componentName: 'testDashboard',
                componentState: { label: 'Gráfico C' }
            }]
        },{
            type: 'component',
            componentName: 'testDashboard',
            componentState: { label: 'Gráfico D' }
        }]
    }]
};

var myLayout = new GoldenLayout( config );

myLayout.registerComponent( 'testDashboard', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

myLayout.init();