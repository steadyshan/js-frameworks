
import { PicDescr, ImageElement } from './image.list'

export class GaneshGTEQ42021ImageList {
 sort: string = 'asc'
 bulkImageList:PicDescr[] = [
    {  
        fullFileName: `assets/all-images/religion/shree-ganesh/Aumkar-Ganesh-sept-2020-final.jpeg`, 
        description: `
           <ul><li>One of my first 'properly, patiently' drawn sketches, Sept 2020</li></ul>
           ` }, 
        {  fullFileName: `assets/all-images/religion/mahadev-family/AumGaShivParKashiVishwCTLightNov172020Final.jpeg`, 
           description: 
           `Attempt to sketch <em>based on</em> the sculpture overlooking the main shivling room Kashi Vishweshwar Temple Citilight, Mumbai
           <br/>Nov 17 2020`},
           {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
           description: 
            `<ul><li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
            <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
            <li>So face accuracy, kindly condone under 'artist's license'</li>
            <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li></ul>`},

            { fullFileName: `assets/all-images/religion/shree-ganesh/ShreeSiddhivinayakQ42020.jpeg`, 
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
        folder:'shree-ganesh-gte-q4-2021',
        theme:'Shree Ganesh',
        themeSummary:
        `Vigneshwar, Aumkar, Gamapati, Vignahartha - The Lord Ganesh, remover of Obstacles.`,
        files: [{fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSmilingDec1221.jpeg`, 
        description: '<p>Quick Sketch Memorial Day weekend 2021</p>',
        dateUploaded: '12-11-2021',
        iterations:[
            { 
                fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSmilingDec1221.jpeg`,
                description: '<ul><li>initial iteration - color outline</li></ul>',
         },{ 
                fullFileName: `assets/all-images/religion/shree-ganesh-gte-q4-2021/GaneshSmilingDec1221-n1.jpeg`,
                description: `<ul><li>fill up Shree's body color</li></ul>`},
            ] 
        },],
    },
   ];
 }
