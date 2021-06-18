import { PicDescr, ImageElement } from './image.list'

export class PlanesImageList {
 sort: string = 'asc'
 bulkImageList:PicDescr[] = [
    {  fullFileName: `assets/all-images/religion/mahadev/unsignedShivVeena12272020.jpeg`, 
    description: 
     `<ul><li>Watching a Lord Shiv song an YouTube, I chanced upon the original sketch that inspired me to draw this</li>
     <li>Actually, if I am guessing right this is based on the famous tele-serial 'Devon Ke Dev Mahadev' and 'Shivji' here is Mohit Raina</li>
     <li>So face accuracy, kindly condone under 'artist's license'</li>
     <li>One that I took a long time over - probably started Dec 1st weel 2020, Shared publicly on Dec 27 2020</li></ul>`}
 ]
 public allImageList:ImageElement[]  =  [
    { 
        folder:'planes',
        theme:'Sketches of Aircraft. Ships and Cars are also part of this, since at this point (June 18 2021) I dont have so many of the latter',
        themeSummary: `My first steps, my first love in this passion for sketching these are planes which I started drawing as a kid. It `,
        files: [
            { fullFileName:   `assets/all-images/planes/mix-gen-plane-sept-2020.jpeg`, 
            description: `<ul><li>The One that started it ALL!!</li>
            <li>Began revisit to my mothballed hobby with this, I think Sept 9 2020</li>
            <li>Had a DC-10, Boeing 777-X and 737 (note radar hump before tail) in mind, so.. merged them into this</li></ul> ` },
            , { fullFileName: 
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
               

            }
         ]
        }
        ]
    }