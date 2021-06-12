
import { PicDescr, ImageElement } from './image.list'
enum PicsIndex  {
    aumkarGaneshSept2020Final,
    AumGaShivParKashiVishwCTLightNov172020Final,
    unsignedShivVeena12272020,
    ShreeSiddhivinayakQ42020,
    DeviMaaMay13182021,
    MixGenPlaneSept2020,
};
export class TrainImageList { // SwamiSamarthaImageList
 bulkImageList:PicDescr[] = [
   
]
public allImageList:ImageElement[]  =  [
   { 
     folder:'trains',
     files: [ 
         { fullFileName:`assets/all-images/trains/pre-q3-2020-steamloco.png`, 
            description: `<ul><li>Probably some time in 2015-2016... after school and college</li>
            <li>WP steam loco - see the changes in later versions</li></ul>`},
            { fullFileName:`assets/all-images/trains/steamloco1-sept11-2020.jpeg`, description: '<div>Sept 11 2020</div>' },
            {   fullFileName:`assets/all-images/trains/famous-trains-taj-express-steam-power-sept-oct-2020.jpeg`, 
                description: '<ul><li>Attempt to draw Taj Express - around Q3/Q4 2020</li></ul>',
     },{        fullFileName:`assets/all-images/trains/trains-delhi-agra-taj-exp-steam-sept2020-FINAL.jpeg`, 
                description: '<ul><li>Attempt to draw Taj Express - around Q3/Q4 2020</li></ul>',
                iterations: [
                    {   fullFileName:`assets/all-images/trains/trains-delhi-agra-taj-exp-steam-sept2020-FINAL.jpeg`, 
                    description: `<ul><li>Hypothetical scene attempt to show steam, electric and diesel in one frame</li>
                                <li>Taj express in foreground (WP Steam loco ), Diesel (WDM2 attempt) pulled goods train..<br/>
                                 in the far end, is an old DC electric loco WCM* waiting to be taken to a Rail museum - attached to a diesel shunter </li></ul>`},
                    {   fullFileName:`assets/all-images/trains/trains-delhi-agra-taj-exp-steam-sept2020.jpeg`, 
                    description: '<ul><li>Pre </li></ul>'}
                ]},
            { fullFileName:'assets/all-images/trains/famous-trains-bct-ndls-rajdhani-90s-sept-oct-2020.jpeg', 
                description: '<ul><li>Attempt to draw Mumbai - Delhi Rajdhani -  pre LHB, double diesel days - around Q3/Q4 2020</li></ul>' },
                
            ]
    }, { 
     folder:'trains',
     files: [
     { fileName:`ship1.jpeg`, description: 'test' },
           ]
    }, { 
     folder:'cars',
     files: [{ fileName:`car1.jpeg`, description: 'test' },
     { fileName:`car2.jpeg`, description: 'test' },
           ]
    },
 
   ];
 }
/*famous-trains-bct-ndls-rajdhani-90s-sept-oct-2020.jpeg
famous-trains-taj-express-steam-power-sept-oct-2020.jpeg
pre-q3-2020-steamloco.png
trains-delhi-agra-taj-exp-steam-sept2020-FINAL.jpeg
trains-delhi-agra-taj-exp-steam-sept2020.jpeg
*/