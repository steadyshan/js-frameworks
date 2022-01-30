import { PicDescr, ImageElement } from './image.list'
import { NavratriCLass  } from './navratri.content'
export class DeviImageList {
    sort: string = 'asc'
    bulkImageList:PicDescr[] = []
navratriClass:NavratriCLass = new  NavratriCLass();    
public allImageList:ImageElement[]  =  [
    {   
        folder:'devi', 
        theme:'Durga, Laxmi, Saraswati and Avatars',
    themeSummary:
    ``,
    files: [  ,
      { 
        fullFileName: 
          `assets/all-images/religion/devi/EkviraAai-Q12021-1.jpg`, 
          evolution: `- <b> Most likely  First Devi sketch, and what was more appropriate than the Kuldaivat</b><br/>`,
                evolutionDate: `12-27-2020`,
          description: `<ul><li>Our Family 'Kuldaivat' - Shree Ekvira Aai</li>
          <li>Temple at Karle Caves, Lonavla, Mumbai Pune. Sketched across end 2020-start 2021</li></ul> ` },
          { fullFileName: 
            `assets/all-images/religion/devi/ThreeDevisMahalaxmiTempleQ12021-1.jpg`, 
            description: `<ul><li>Mahalaxmi Temple Mumnbai </li>
            <li>Mahakali, Mahalaxmi, Mahasaraswati -  Sketched  start 2021</li></ul> ` },
           { fullFileName: 
        `assets/all-images/religion/devi/navratri-2020/NavDurgaNavratri2020.png`, 
        description: `<ul><li>An 'unplanned' sketch:</li>
        <li>One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg.</li>
        <li>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.</li>
        <li><em>(Sometimes I keep a good handle on dates)</em></li></ul> `,
        iterations: [
            { fullFileName: 
                `assets/all-images/religion/devi/navratri-2020/NavDurgaNavratri2020.png`, 
                description: `<h5>Navratri 2020</h5>${this.navratriClass.frameText[0]}`},
            { 
              fullFileName:  `assets/all-images/religion/devi/navratri-2020/MaaDurgaLaxmiSaraswatiOctober2020.png`, 
              description: `<h5>Navratri 2020</h5>${this.navratriClass.frameText[1]}` },
            { fullFileName:  `assets/all-images/religion/devi/navratri-2020/1ShailaputriNavratri2020.jpeg`, 
               description: `<h5>1.Shailaputri</h5>${this.navratriClass.frameText[2]}` },
            { fullFileName: 
                `assets/all-images/religion/devi/navratri-2020/2BrahmachariniNavratri2020.jpeg`, 
               description: `<h5>2.Brahmacharini</h5>${this.navratriClass.frameText[3]}` },
             { fullFileName: `assets/all-images/religion/devi/navratri-2020/3ChandraghantaNavratri2020.jpeg`, 
               description: `<h5>3.Chandraghanta</h5>${this.navratriClass.frameText[4]}` },
             { fullFileName: `assets/all-images/religion/devi/navratri-2020/4KushmandaNavratri2020.jpeg`, 
                 description: `<h5>4.Kushmanda</h5>${this.navratriClass.frameText[5]}` },
             { fullFileName: `assets/all-images/religion/devi/navratri-2020/5SkandmataNavratri2020.jpeg`, 
                   description: `<h5>5.Skandmata</h5>${this.navratriClass.frameText[6]}` },
             { fullFileName: `assets/all-images/religion/devi/navratri-2020/6KatyayaniNavratri2020.jpeg`, 
                     description: `<h5>6.Katyayani<</h5>${this.navratriClass.frameText[7]}` },
             { fullFileName: `assets/all-images/religion/devi/navratri-2020/7KalratriNavratri2020.jpeg`, 
                       description: `<h5>7.Kalratri</h5>${this.navratriClass.frameText[8]}` },
              { fullFileName: `assets/all-images/religion/devi/navratri-2020/8MahaGauriNavratri2020.jpeg`, 
                         description: `<h5>8.Mahagauri</h5>${this.navratriClass.frameText[9]}` },
                         { fullFileName: `assets/all-images/religion/devi/navratri-2020/9SiddidhatriNavratri2020.jpeg`, 
                           description: `<h5>9.Siddhidatri</h5>${this.navratriClass.frameText[10]}` }
        ] },
        { fullFileName: 
            `assets/all-images/religion/devi/DeviMaaMay13-18-2021.jpeg`, 
            description: `<ul><li>An 'unplanned' sketch:</li>
            <li>One of my fellow devotees at Shirdi Sai Temple and I keep jesting, joking pulling each others leg.</li>
            <li>She posted the photo, on which this is based, I think, 1st Thursday of May 2021. I took a week and this was ready May 13th.</li>
            <li><em>(Sometimes I keep a good handle on dates)</em></li></ul> ` }
     ]
   },
]
}
/*
navratri-2020/
navratri-2020/
navratri-2020/
navratri-2020/
navratri-2020/
navratri-2020/
navratri-2020/
navratri-2020/MaaDurgaOctober2020.jpeg
navratri-2020/MaaLaxmiOctober2020.jpeg
navratri-2020/MaaSaraswatiOctober2020.jpeg
navratri-2020/NavDurgaNavratri2020-pro.png
navratri-2020/NavDurgaNavratri2020.png
*/