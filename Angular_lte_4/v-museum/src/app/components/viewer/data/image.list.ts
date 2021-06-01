interface PicDescr {
    fileName:string;
    description:string;
    title?:string;
}
interface ImageElement {
    folder:string;
    theme?:string;
    themeSummary?:string;
    files:PicDescr[];
}
export const allImageList:ImageElement[]  =  [
    { 
     folder:'starters-x',
     theme:'GENERAL, INTRO',
     themeSummary:
     `
      <p>This page attempts to capture my journey from third quarter 2020, when I started sketching, 
         to approx June 2021, when I finally got off my butt to put these up on a website in a sort of 
         orderly manner</p> 
     `,
     files: [{  fileName: `intro-Ganesh.jpg`, 
                description: 'test' },
             {  
                 fileName: `Aumkar-Ganesh-sept-2020-final.jpeg`, 
                 description: `One of my first 'properly, patiently' drawn sketches, Sept 2020
                    ` },
             { fileName: `AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, description: 'test' },
             { fileName: `unsignedShivVeena12272020.jpeg`, description: 'test' },
             { fileName: `ShreeSiddhivinayakQ42020.jpeg`, description: 'test' },
           ]
    },{ 
      folder:'starters',
      files: [{ fileName: `su-30-1.jpeg`, description: 'test' },
      { fileName: `train1.jpeg`, description: 'test' },
      { fileName: `boat1.jpeg`, description: 'test' },
      { fileName: `car1.jpeg`, description: 'test' },
      { fileName: `dc-10-1.jpeg`, description: 'test' },
      { fileName: `train2.jpeg`, description: 'test' },
      { fileName: `ship1.jpeg`, description: 'test' },
      { fileName: `car2.jpeg`, description: 'test' },
            ]
     }, { 
     folder:'planes',
     files: [{ fileName: `su-30-1.jpeg`, description: 'test' },
     { fileName: `dc-10-1.jpeg`, description: 'test' },
     { fileName: 'raptor-1.jpeg', description: 'test' },
     { fileName:'su-57-1.jpeg', description: 'test' },
           ]
    },{ 
     folder:'trains',
     files: [{ fileName:'train1.jpeg', description: 'test' },
            { fileName:`train2.jpeg`, description: 'test' }]
    }, { 
     folder:'ships',
     files: [{ fileName:`boat1.jpeg`, description: '<div>Sample speed boat<br/>this is a test</div>' },
     { fileName:`ship1.jpeg`, description: 'test' },
           ]
    }, { 
     folder:'cars',
     files: [{ fileName:`car1.jpeg`, description: 'test' },
     { fileName:`car2.jpeg`, description: 'test' },
           ]
    },
 
   ];