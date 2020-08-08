var config = {
    dimensions:{borderWidth:2},
      content: [{
          type: 'row',
          content: [{
              type: 'column',
              width: 61.803,
              content: [{
                  type: 'component',
                  componentName: 'test',
                  title: '1'
              }]
          }, {
              type: 'column',
              width: 38.197,
              content: [{
                  type: 'component',
                  componentName: 'test',
                  height: 61.803,
                  title: '2'
              }, {
                  type: 'row',
                  content: [{
                      type: 'column',
                      width: 61.803,
                      content: [{
                          type: 'row',
                          content: [{
                              type: 'component',
                              componentName: 'test',
                              width: 61.803,
                              title: '3'  
                          }, {
                              type: 'column',
                             content: [{
                              type: 'component',
                              componentName: 'test',
                              height: 61.803,
                              title: '4'
                             },{
                              type: 'row',
                               content:[{
                              type: 'component',
                              componentName: 'test',
                              title: '5'
                             },{
                              type: 'component',
                              componentName: 'test',
                              width: 61.803,
                              title: '6'
                             }]
                             }]
                          }]
                      }, {
                          type: 'component',
                          componentName: 'test',
                          title: '7',
                          height: 38.197,
                      }]
                  }, {
                      type: 'component',
                      componentName: 'test',
                      title: '8',
                      width: 61.803
                  }]
              }]
          }]
      }]
  };