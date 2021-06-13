import { PicDescr, ImageElement } from './image.list'

export class PeoplePlacesImageList {
    sort: string = 'asc'
    public allImageList:ImageElement[]  =  [
        { 
             folder:'people-places',
             theme:'Famous Persons, Themes, places, landmarks',
             themeSummary:
             ``,
             files: [
            {fullFileName: `assets/all-images/people-places/ShivajiJayantiTithi03312021.jpeg`, 
             description: '<p>MAHARAJ!!!! Shiv Jayanti March 31 2021</p>' },
{fullFileName: `assets/all-images/people-places/ShivbaHorseTithiJayanti_wip_03_31_2021-color.jpg`, 
             description: '<p>Maharaj on horseback attempt based on Masunda Lake, Thane statue</p>',
  iterations:[
     {fullFileName: `assets/all-images/people-places/ShivbaHorseTithiJayanti_wip_03_31_2021-color.jpg`, 
     description: `<ul><li>Maharaj on horseback </li><li>Attempt based on Masunda Lake, Thane statue.</li>
                    <li>Color pencil attempt - Shiv jayanti 3/31/2021</li>
                    <li><em>(Still WIP technically)</em></li></ul>`},

     {fullFileName: `assets/all-images/people-places/ShivbaHorseTithiJayanti_wip_03_31_2021.jpeg`, 
     description: `<ul><li>Maharaj on horseback </li><li>Black and white</li></ul>`}
  ] },
{fullFileName: `assets/all-images/people-places/UnsignedWIPPtBhimsenJoshiJan242021.jpeg`, 
             description: `<ul><li>BHARAT RATNA Pt. Bhimsen Joshi </li>
                              <li>Sketched on Jan 24 2021 His 10th death anniversary</li>
                              <li>BIG FAN OF HIS... Also his centennial anniversay is this (DOB. Feb 4 2022)</li></ul>`,
                              iterations:[
                                 {fullFileName: `assets/all-images/people-places/UnsignedWIPPtBhimsenJoshiJan242021.jpeg`, 
                                 description: `<ul><li>BHARAT RATNA Pt. Bhimsen Joshi </li>
                                 <li>Sketched on Jan 24 2021 His 10th death anniversary</li>
                                 <li>BIG FAN OF HIS... Also his centennial anniversay is this (DOB. Feb 4 2022)</li></ul>`},
                            
                                 {fullFileName: `assets/all-images/people-places/UnsignedPortraitPtBhimsenJoshiJan242021.jpeg`, 
                                 description: `<ul><li>Close up/li></ul>`}
                              ] },
{fullFileName: `assets/all-images/people-places/UnsignedWIPActressNutanAttemptJan2021.jpeg`, 
             description: '<p>Attempt to sketch Nutan Jan 2021</p>' },
{fullFileName: `assets/all-images/people-places/UnsignedWIPBalasaheb_NetajiJan232021.jpeg`, 
             description: '<p>Bal Thackeray and Netaji attempt - their birth anniv Jan 23 2021</p>' }
             ]
          },
     ]
}