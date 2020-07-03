var config = {
    content: [{
        type: 'row',
        content:
        [
            {
                type: 'column',
                content:[{
                    type: 'component',
                    componentName: 'testDashboard',
                    componentState: { label: 'Gráfico A' }
                },{
                    type: 'component',
                    componentName: 'testDashboard',
                    componentState: { label: 'Gráfico B' }
                }]
            },{
                type: 'component',
                componentName: 'testDashboard',
                componentState: { label: 'Gráfico C' }
            },{
                type: 'column',
                content:
                [
                    {
                        type: 'component',
                        componentName: 'testDashboard',
                        componentState: { label: 'Gráfico D' }
                    },{
                        type: 'component',
                        componentName: 'testDashboard',
                        componentState: { label: 'Gráfico E' }
                    },{
                        type: 'component',
                        componentName: 'testDashboard',
                        componentState: { label: 'Gráfico F' }
                    },{
                        type: 'component',
                        componentName: 'testDashboard',
                        componentState: { label: 'Gráfico G' }
                    }
                ]
            }
        ]
    }]
};

var myLayout = new GoldenLayout( config );

myLayout.registerComponent( 'testDashboard', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

myLayout.init();