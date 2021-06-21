
import { PicDescr, ImageElement } from './image.list'
enum PicsIndex  {
    aumkarGaneshSept2020Final,
    AumGaShivParKashiVishwCTLightNov172020Final,
    unsignedShivVeena12272020,
    ShreeSiddhivinayakQ42020,
    DeviMaaMay13182021,
    MixGenPlaneSept2020,
};
export class DattavatarImageList {
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
        folder:'dattavatar',
        theme:'Lord Dattatreya and Lineage, Sikh Gurus',
        themeSummary:
        `A section devoted to sketches on Guru's of Lord Dattatreya lineage and Sikh Gurus<br/>
            Before anything else, there are likely to be maybe a couple of sketches of Shirdi Sai, because I have many of them. So these warrant a separate folder
        `,
        files: [{  fullFileName: `assets/all-images/religion/dattavatar/unsigned3DattaGuru12292020.jpeg`, 
                   description: '<ul><li>Using a format of which a copy is in my home in Mumbai - this format is probably one of the oldest renditions</li><li>Released on Shree Datta Jayanti Dec 29 2020</li> </ul>' },
                {  
                    fullFileName: `assets/all-images/religion/dattavatar/UnsignedWIPShreepadVallabhFeb-4-2021.jpeg`, 
                    description: `
                    <ul><li>Second in the lineage. Shreepad Vallabh drawn Feb 4 2021</li></ul>
                    ` },
                    {  
                        fullFileName: `assets/all-images/religion/dattavatar/unsigned4NarasimhaSaraswatiJan152021.jpeg`, 
                        description: `
                        <ul>
                        <li>Shree Nrusimha (Narasimha) Saraswati 3rd - Drawn approximately on jayanti which was on Jan 15 2021</li>
                        </ul>
                        ` },
                        {  
                            fullFileName: `assets/all-images/religion/dattavatar/unsigned5SwamiSamartha12312020.jpeg`, 
                            description: `
                            <ul>
                            <li> Shee Swami Samartha - Dec 31 2020</li>
                            </ul>
                            ` },,
                            {  
                                fullFileName: `assets/all-images/religion/dattavatar/unsigned6ShirdiSaiNov2020.jpeg`, 
                                description: `
                                <ul>
                                <li> One of the first of <em><strong>numerous</strong></em> sketches of Shirdi Sai, one nearing a close resemblance</li>
                                <li>November 2020</li>
                                </ul>
                                ` },,
                                {  
                                    fullFileName: `assets/all-images/religion/dattavatar/unsigned7SaiSmilingNov2020.jpeg`, 
                                    description: `
                                    <ul>
                                    <li> Also Nov 2020, one of my favorite Shirdi Sai Themes, one I call 'Santa Claus Baba'</li>
                                    </ul>
                                    ` },,
                                    {  
                                        fullFileName: `assets/all-images/religion/dattavatar/unsigned8GuruNanakji11302020.jpeg`, 
                                        description: `
                                        <ul>
                                        <li> Guru Nanak Nov 11 2020 (Jayanti)</li>
                                        </ul>
                                        ` },
                    { fullFileName: `assets/all-images/religion/dattavatar/unsigned9GuruGobindSinghji12312020.jpeg`, 
                    description:  `
                    <ul>
                    <li> Guru Gobind Singh Dec 31 2020 (Jayanti)</li>
                    </ul>
                    ` },
              ]
       }
 
   ];
 }
