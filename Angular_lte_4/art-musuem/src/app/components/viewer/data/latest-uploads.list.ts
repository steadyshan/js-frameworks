
import { PicDescr, ImageElement } from './image.list'
enum PicsIndex  {
    aumkarGaneshSept2020Final,
    AumGaShivParKashiVishwCTLightNov172020Final,
    unsignedShivVeena12272020,
    ShreeSiddhivinayakQ42020,
    DeviMaaMay13182021,
    MixGenPlaneSept2020,
};
export class LatestUploadsImageList { // SwamiSamarthaImageList
 
    bulkImageList:PicDescr[] = [
        {  
            fullFileName: `assets/all-images/religion/dattavatar/Aumkar-Ganesh-sept-2020-final.jpeg`, 
            description: `
               <ul><li>One of my first 'properly, patiently' drawn sketches, Sept 2020</li></ul>
               ` }, 
            {  fullFileName: `assets/all-images/religion/dattavatar-kartik-parvati-mahadev/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
               description: 
               `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citilight, Mumbai
               <br/>Nov 17 2020`},
               {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
               description: 
                `<ul><li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
                <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
                <li>So face accuracy, kindly condone under 'artist's license'</li>
                <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li></ul>`},
    
                { fullFileName: `assets/all-images/religion/dattavatar/ShreeSiddhivinayakQ42020.jpeg`, 
                     description: 'Siddhivinayak Temple, Prabhadevi, Mumbai, India attempt to sketch' },
                { fullFileName: 
                      `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
                      description: `<ul><li>An 'unplanned' sketch:</li>
                      <li>One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg.</li>
                      <li>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.</li>
                      <li><em>(Sometimes I keep a good handle on dates)</em></li></ul> ` },
                      { fullFileName: 
                         `assets/all-images/planes/mix-gen-plane-sept-2020.jpeg`, 
                         description: `<ul><li>The One that started it ALL!!</li>
                         <li>Began revisit to my mothballed hobby with this, I think Sept 9 2020</li>
                         <li>Had a DC-10, Boeing 777-X and 737 (note radar hump before tail) in mind, so.. merged them into this</li></ul> ` },
    ]
    public allImageList:ImageElement[]  =  [
       { 
            folder:'latest-uploads',
            theme:'Latest Uploads',
            themeSummary:
            `Showing latest uploads over a week`,
            files: [ {  fullFileName: `assets/all-images/religion/swami-samartha/SwamiDadarMathJubne8-9-2021.jpeg`, 
            description: `<ul>
                    <li> Attempt to capture Swami's face as per tyhe pictures in the 'Matth' at Shivaji Park, Dadar, Mumbai</li>
                    <li> June 8-9 2021</li>
                             </ul>`,
       },{  fullFileName: `assets/all-images/religion/swami-samartha/Swami-June5-2021-v2.jpeg`, 
                       description: '<ul><li>Using a format of which a copy is in my home in Mumbai - this format is probably one of the oldest renditions</li><li>Released on Shree Datta Jayanti Dec 29 2020</li> </ul>',
                    iterations:[
                        { 
                            fullFileName: `assets/all-images/religion/swami-samartha/Swami-June5-2021-v2.jpeg`,
                            description: '<ul><li>Swami with His cap June 5 2021, sketch still Work in Progress, but felt it ready enough to put up </li></ul>',
                     },{ 
                            fullFileName: `assets/all-images/religion/swami-samartha/Swami-June5-2021.jpeg`,
                            description: '<ul><li>initial iteration</li></ul>'},
                        ] },
                        {  fullFileName: `assets/all-images/religion/shirdi-sai-q1-q2-2021/Milpitas-Baba-with-throne-June6-8-2021-shared.jpeg`, 
                        description: '<ul><li>Using a format of which a copy is in my home in Mumbai - this format is probably one of the oldest renditions</li><li>Released on Shree Datta Jayanti Dec 29 2020</li> </ul>',
                     iterations:[
                         { 
                             fullFileName: `assets/all-images/religion/shirdi-sai-q1-q2-2021/Milpitas-Baba-with-throne-June6-8-2021-shared.jpeg`,
                             description: `<ul><li>With Covid going on Baba at Milpitas is rarely seen with the 'simhasana' throne..</li>
                             <li>This is an attempt to capture how this looks - June 6-8 2021 </li></ul>`,
                      },{ 
                             fullFileName: `assets/all-images/religion/shirdi-sai-q1-q2-2021/Milpitas-Baba-with-throne-June6-8-2021-v2.jpeg`,
                             description: '<ul><li>Before finger refinements</li></ul>'},
                             { 
                                fullFileName: `assets/all-images/religion/shirdi-sai-q1-q2-2021/Milpitas-Baba-with-throne-June6-8-2021-start.jpeg`,
                                description: '<ul><li>initial iteration</li></ul>'}
                         ] }
                   
                  ]
           }
     
       ];
 }
