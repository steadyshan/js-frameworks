import { PicDescr, ImageElement } from './image.list'

export class PlanesImageList {
 sort: string = 'asc'
 bulkImageList:PicDescr[] = []
 public allImageList:ImageElement[]  =  [
    { 
        folder:'planes',
        theme:'Sketches of Aircraft. Ships and Cars* ',
        themeSummary: `My first steps, my first love in this passion for sketching these are planes which I started drawing as a kid. <br/>
                       * At this point, due to few items, this includes 'non-rail' modes of transport but will branch off each as and when the need comes up `,
        files: [
            // /Users/shantanu/Documents/GitHub/js-frameworks/Angular_lte_4/shan-cms-template/src/assets/all-images/ships/QueenElizabethApril10-1620222_1.jpeg
            ,
            { 
                fullFileName:   `assets/all-images/planes/AI707BabaBirthdayDedicate07192022.jpeg`, 
                evolution: `<b>Dedicated to my Dad who got me started on this hobby of mine (rest in description)<br/>`,
                evolutionDate: `07-19-2022`,
                rating: 1,
                description: `<ul><li>This one for my Dad on his birthday anniversary (07/19).. </li>
                <li>he is the one who drew a plane for me when I was a kid, showing me how to draw</li></ul> `,
                dateUploaded: '07-19-2022', },
                ,
                { 
                    fullFileName:   `assets/all-images/ships/BismarkJuly152022.jpeg`, 
                    description: `<ul><li>Attempt on Bismark (or Tirpitz) 07-15-2022</li></ul> `,
                    dateUploaded: '07-23-2022', },
               ,
            {
                    fullFileName: 
                `assets/all-images/ships/QueenElizabethApril10-1620222_final.jpeg`, 
                description: `<ul><li>RMS Queen Elizabeth </li>
                <li>RMS Queen Elizabeth 1930s - 1960 </li>
                <li>Drawn mid april 2022</li>
                            </ul> `,
                dateUploaded: '04-19-2022',
                iterations:[
                    {fullFileName: 
                        `assets/all-images/ships/QueenElizabethApril10-1620222_1.jpeg`, 
                        description: `<ul><li>Initial version - not different by much</li>
                        <li>RMS Queen Elizabeth 1930s - 1960 </li>
                                    </ul> `},
                  {  
                 fullFileName: `assets/all-images/ships/QueenElizabethApril10-1620222_final.jpeg`, 
                 description:`<ul><li>
                 <li>RMS Queen Elizabeth 1930s - 1960 </li></li></ul> `}]

            },
            { fullFileName:   `assets/all-images/ships/USNorthCarolinEnterprisCV6BaseJan102022.jpeg`, 
            description: `<ul><li>Tempted to draw a US Battleship - the ship in the foreground started off with USS North Carolina in mind, but... </li>
            <li>Likewise the Aircraft carrier starts with CV6 - WW2 USS Enterprise </li>
            <li>Jan 10 2022/li></ul> `,
            dateUploaded: '01-10-2022' }, { 
                fullFileName: `assets/all-images/mumbai-meri-jaan/MumbaiWaterFrontKashinClassApr42021.jpeg`,
                description: `<ul>
                <li>Starting out D51 INS Rajput - Navy Kashin Class destroyer - but little digressed</li>
                <li>Imaginary scene in front of Gateway of India Taj Timeline</li>
                <li>Repeated in Mumbai and ships theme</li>
                <li>April 4 2021</li>
              </ul>`,
                dateUploaded: '01-15-2022',
                duplicate: true,
              },
            ,
            { 
                fullFileName:   `assets/all-images/planes/mix-gen-plane-sept-2020.jpeg`, 
                evolution: `<b>Generally the first sketch that I drew and shared</b>(after the quick Ganesh one)<br/>`,
                evolutionDate: `09-01-2019`,
                description: `<ul><li>The One that started it ALL!!</li>
            <li>Began revisit to my mothballed hobby with this, I think Sept 9 2020</li>
            <li>Had a DC-10, Boeing 777-X and 737 (note radar hump before tail) in mind, so.. merged them into this</li></ul> ` },
            ,
            {
                    fullFileName: 
                `assets/all-images/planes/blackbirdSept42021.jpeg`, 
                description: `<ul>
                <li>Spontaneousm unplanned sketch attempt for SR-71 blackbird. Sept 2021</li>
                            </ul> `,
               dateUploaded: '12-12-2021'

            }, { fullFileName: 
                `assets/all-images/planes/spitfire-sept-2020.jpeg`, 
                description: `<ul><li>Spitfire attempt  Sept   2020</li>
                <li>In school used to read a lot of Commando comics and would be inspired to draw</li>
                <li>WW2 dogfights with, particularly spitfires was a favorite theme then</li>
                            </ul> ` }, {  
                 fullFileName: `assets/all-images/planes/planes_firefightdc10-sept-2020.jpeg`, 
                 description:`<ul><li>General DC 10 firefighter  Sept   2020</li></ul> `
            },
            {
                    fullFileName: 
                `assets/all-images/planes/Russian-mig-29-su-30-1.jpeg`, 
                description: `<ul><li>..Switching to Q2 2021, and attempts to draw contemprary aircraft</li>
                <li>Something in between a Sukoi Su30 and Mig 29</li>
                            </ul> `,
                iterations:[
                    {fullFileName: 
                        `assets/all-images/planes/Russian-mig-29-su-30-1.jpeg`, 
                        description: `<ul><li>..Switching to Q2 2021, and attempts to draw contemprary aircraft</li>
                        <li>Something in between a Sukoi Su30 and Mig 29</li>
                                    </ul> `},
                  {  
                 fullFileName: `assets/all-images/planes/Russian-mig-29-su-30-2.jpeg`, 
                 description:`<ul><li>Something in between a Sukoi Su30 and Mig 29 start</li></ul> `}]

            },
            {
                    fullFileName: 
                `assets/all-images/planes/su-30-a-1.jpeg`, 
                description: `<ul><li>..Switching to Q2 2021, and attempts to draw contemprary aircraft</li>
                <li>Attempted Su 30</li>
                            </ul> `,
               

            },
            {
                    fullFileName: 
                `assets/all-images/ships/SailingShipPreQ302020.jpg`, 
                description: `<ul><li>Another of my favorite themes as a kid, a full sailed sailing ship - sketch before Qe3 2020</li>
                            </ul> `,
               

            },
            {
                    fullFileName: 
                `assets/all-images/ships/SilveGhostQ1Q22021.jpg`, 
                description: `<ul><li>Around start 2021 - venturing into very rarely visited theme - automobiles * </li>
                                  <li>Appropriate to start this with an attempt at a Rolls - the Silver Ghost
                            </ul> 
                            <br/>* Though I've drawn tanks as a kid`,
               

            },
            {
                    fullFileName: 
                `assets/all-images/ships/ProwlerWIPMay2021.jpg`, 
                description: `<ul><li>A friend of mine bought one of these way back in 2000 - plymouth prowler</li>
                                 <li>Remember his 3 year (then) daughet calling it a 'monster'</li>
                                 <li>(also remember the price gouging of the dealer)</li>
                                 <li>WIP - well, um - technically</li>
                            </ul> `,
               

            },
            {
                    fullFileName:  `assets/all-images/ships/OurAcuraJune21-2021-3-scene.jpeg`, 
                    description: `<ul><li>A most fascinating car - attempt to draw 2011 Acura TL (tech package)</li>
                                     <li>Had this car since Feb 2011 (see date sketched) and the car is still 'maska'</li>
                                     <li>Very very work in progress, June 21 2021 (note Summer Solstice)</li>
                                </ul> `,
                  iterations:[
                    {   
                        fullFileName:  `assets/all-images/ships/OurAcuraJune21-2021-3-scene.jpeg`, 
                        description: `<ul><li>Refresh - added  the background June 23</li>
                                     <li>A most fascinating car - attempt to draw 2011 Acura TL (tech package)</li>
                                     <li>Had this car since Feb 2011 (see date sketched) and the car is still a beast but 
                                     rides like 'maska'(butter)</li>
                                     <li>Very very work in progress, June 21 2021 (note Summer Solstice)</li>
                                     <li>Wheel rerfesh from prev iteration</li>
                                </ul> `,},
                      {   fullFileName:  `assets/all-images/ships/OurAcuraJune21-2021-2.jpeg`, 
                      description: `<ul><li>A most fascinating car - attempt to draw 2011 Acura TL (tech package)</li>
                                       <li>Had this car since Feb 2011 (see date sketched) and the car is still a beast but 
                                       rides like 'maska'(butter)</li>
                                       <li>Very very work in progress, June 21 2021 (note Summer Solstice)</li>
                                       <li>Wheel rerfesh from prev iteration</li>
                                  </ul> `,},
                      {   fullFileName:  `assets/all-images/ships/OurAcuraJune21-2021-1.jpeg`, 
                      description: `<ul><li>A most fascinating car - attempt to draw 2011 Acura TL (tech package)</li>
                                       <li>Had this car since Feb 2011 (see date sketched) and the car is still 'maska'</li>
                                       <li>Very very work in progress, June 21 2021 (note Summer Solstice)</li>
                                  </ul> `,}
                  ] 
    
            },
         ]
        }
        ]
    }