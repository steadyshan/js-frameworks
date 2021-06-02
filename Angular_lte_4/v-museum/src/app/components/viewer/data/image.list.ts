interface PicDescr {
       fullFileName?:string;
       fileName?:string;
       description:string;
       title?:string;
   }
   interface ImageElement {
       folder:string;
       theme?:string;
       themeSummary?:string;
       files:PicDescr[];
   }
   const bulkImageList:PicDescr[] = [
       {  
           fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
           description: `
              <p>One of my first 'properly, patiently' drawn sketches, Sept 2020</p>
              ` }, 
           {  fullFileName: `assets/all-images/religion/shree-ganesh-kartik-parvati-mahadev/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
              description: 
              `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citilight, Mumbai
              <br/>Nov 17 2020`},
              {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
              description: 
               'test' },
   ]
   export const allImageList:ImageElement[]  =  [
       { 
        folder:'starters-x',
        theme:'INTRODUCING IT: A Journey',
        themeSummary:
        `
         <p>This page attempts to capture my journey from third quarter 2020, when I started sketching, 
            to approx June 2021, when I finally got off my butt to put these up on a website in a sort of 
            orderly manner</p>
         <p>Picked up, generally where I left off, modes of transports, then moving to drawing Shree Ganesh, Shirdi Sai, Lord Shiva
          and the Goddesses. Structures. Famous personalities. so on...</p>
          <p> Hope you like these and get some pleasure out of watching, just as I have gotten a joy of drawing and sharing..</p> 
        `,
        files: [{  fullFileName: `assets/all-images/religion/shree-ganesh/intro-Ganesh.jpg`, 
                   description: '<p>Quick Sketch Memorial Day weekend 2021</p>' },
                bulkImageList[0],
                bulkImageList[1],
                bulkImageList[2],
               
                { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, description: 'test' },
                { fullFileName: 
                       `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
                       description: `<p>An 'unplanned' sketch:<br/>
                                   One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg. </p>
                                   <p>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.
                                   <em>(Sometimes I keep a good handle on dates)</em></p> ` },
              ]
       },
       { 
           folder:'shree-ganesh',
           theme:'Shree Ganesh',
           themeSummary:
           ``,
           files: [{  fullFileName: `assets/all-images/religion/shree-ganesh/intro-Ganesh.jpg`, 
                      description: '<p>Quick Sketch Memorial Day weekend 2021</p>' },
                   {  
                       fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
                       description: `
                          <p>One of my first 'properly, patiently' drawn sketches, Sept 2020</p>
                          ` },
                   { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, 
                       description: 'Siddhivinayak Temple, Prabhadevi attempt to sketch' },
                 ]
          },
          { 
              folder:'devi',
              theme:'Durga, Laxmi, Saraswati and Avatars',
              themeSummary:
              ``,
              files: [   { fullFileName: 
               `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
               description: `<p>An 'unplanned' sketch:<br/>
                           One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg. </p>
                           <p>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.
                           <em>(Sometimes I keep a good handle on dates)</em></p> ` },
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
        folder:'photo-planes',
        files: [{ fullFileName: `assets/all-images/photo-planes/su-30-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/dc-10-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/raptor-1.jpeg`, description: 'test' },
        { fullFileName: `assets/all-images/photo-planes/su-57-1.jpeg`, description: 'test' },
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