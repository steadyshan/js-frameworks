
export const TechDetail: any[] = [
    { header:"Overview", key:'overview',
        content: 
        `<h5>Overview</H5>
        <ul><li>An Angular 11(as on ${new Date().toLocaleDateString()}) application by Shantanu Gadkari</li>
        <li>Hosted on Google Firebase</li>
        <li>This is a content management system of sorts intended to host the sketches I have drawn</li>
        <li>The images and the JSON based lists which included these, and the descriptives are .ts files under the 'assets' folder</li>
        <li>The current iteration named <a href='https://art-is-worship.web.app/' target=_blank>https://art-is-worship.web.app/</a></li>
        <li>Previous versions. Initial version was released somewhere in 2021 on the Angular2-4 platform.
        <br/> <a href='https://art-is-worship-v52023.web.app/' target=_blank>https://art-is-worship-v52023.web.app//</a>
        <br/> <a href='https://art-is-worship-and-peace.firebaseapp.com/' target=_blank>https://art-is-worship-and-peace.firebaseapp.com/</a></li></ul>` },
        { header:"History", key:'history',
        content: 
        `<h5>History - sigificant changes in the application * </H5>
        <ul><li><p><strong>May 2023 - mid to end</strong>, began introducing a 'category' layer in the menus.<br/>
        - The number of menus has become large and the right nav bar has had to have scrolling introduced.<br/>
        - Each menu record has a new field called 'tab' which is the name of a category in a many (menu) 2 one (category) mapping<br/>
        - The categories would simulate a tabbed look<br/>
        - When clicking a category, the 'leaf' menus would show - ONLY those menus grouped under this category    </p></li>
        <li>(code 'freeze -  <a href='https://art-is-worship-v52023.web.app/' target=_blank>https://art-is-worship-v52023.web.app//</a>)</li>
        <li>.....</li>
        <li>....</li>
        <li>(code 'freeze -  <a href='https://art-is-worship-v52023.web.app/' target=_blank>https://art-is-worship-v52023.web.app//</a>)</li>
        <li>   *   (not to be confused with changes in the content, like a new category, new field, etc)</li>
        ` },
        { header:"Component Tree", key:'componentTree',
        content: 
        `<h5>Component Tree</H5>
        <ul>
        <li>index.html which encloses app-root Root component<br/> 
        <li>app-root Root component encloses <br/>
          - app-theme-navigation what is as on (as on ${new Date().toLocaleDateString()}) the right navigation bar containing the menus (previously app-side-nav-bar)<br/>
          - router-outlet which is the router based allocation of the viewers and other components
         
        - The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        - Copied at this point, used only in the context of the side nav. (see tabbingContainer later, below)<br/>
        - The menu options have become numerous - will need to widen this component and add scrolling<br/></li>
        <li>SideNavBarComponent<br/> 
        - Previous version of The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        </li>
         <li>AreaSummaryPage<br/>
        - the landing page with the content 'A Journey of Sketches'<br/>
         </li>
        </ul>
        ` }, { header:"Component Summary", key:'componentSummary',
        content: 
        `<h5>Component Summary</H5>
        <ul><li>ThemeNavigationComponent<br/> 
        - The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        - Copied at this point, used only in the context of the side nav. (see tabbingContainer later, below)<br/>
        - The menu options have become numerous - will need to widen this component and add scrolling<br/></li>
        <li>SideNavBarComponent<br/> 
        - Previous version of The theme menu content. Started as a right nav bar kind of design, under a different class SideNavBarComponent (see next)<br/>
        </li>
         <li>AreaSummaryPage<br/>
        - the landing page with the content 'A Journey of Sketches'<br/>
         </li>
        </ul>
        ` },
    { tab:"Special Lists", label:  ' - 2023', child: true, uniqueKey: '', parentKey: 'art', key: 'changers-2023', roles: ['all'] },
    { tab:"Special Lists", label:  'The Best: before 2022', child: false, uniqueKey: '', parentKey: 'art', key: 'showpiece', roles: ['all'] },
    { tab:"Special Lists", label:  '- 2022', child: false, uniqueKey: '', parentKey: 'art', key: 'showpiece-2022', roles: ['all'] },
    { tab:"Special Lists", label:  '- 2023', child: false, uniqueKey: '', parentKey: 'art', key: 'showpiece-2023', roles: ['all'] },
    { tab:"Special Lists", label:  'Latest Uploads', child: false, uniqueKey: '', parentKey: 'art', key: 'latest-uploads', roles: ['relgion', 'all'] },
    { tab:"Gods, Goddesses", label:  'Shree Ganesh: pre Q42021 ', child: false, uniqueKey: '', parentKey: 'art', key: 'shree-ganesh', roles: ['relgion', 'all'], dateUploaded: '12-11-2021' },
    { tab:"Gods, Goddesses", label:  '- Q4 2021 onward', child: true, uniqueKey: '', parentKey: 'Shree Ganesh', key: 'shree-ganesh-gte-q4-2021', roles: ['relgion', 'all'], dateUploaded: '01-31-2023' },
    { tab:"Gods, Goddesses", label:  '- Q1 2023 onward', child: true, uniqueKey: '', parentKey: 'Shree Ganesh', key: 'shree-ganesh-gte-q1-2023', roles: ['relgion', 'all'], dateUploaded: '03-23-2023' },
    { tab:"Gods, Goddesses", label:  'Goddesses', child: false, uniqueKey: '', parentKey: 'art', key: 'devi', roles: ['relgion', 'all'], dateUploaded: '01-29-2023' },
    { tab:"Gods, Goddesses", label:  'Mahadev', child: false, uniqueKey: '', parentKey: 'art', key: 'mahadev', roles: ['relgion', 'all'], dateUploaded: '02-01-2023' },
    { tab:"Gods, Goddesses", label:  'Mahadev and Family', child: false, uniqueKey: '', parentKey: 'art', key: 'mahadev-family', roles: ['relgion', 'all'], dateUploaded: '05-04-2023' },
    { tab:"Gods, Goddesses", label:  'Laxmi, Narayan, Shree Ram, and family, Bajrangbali', child: false, uniqueKey: '', parentKey: 'art', dateUploaded: '02-05-2023', key: 'laxmi-vishnu-hanuman', roles: ['relgion', 'all'] },
    { tab:"Gurus and Mystics", label:  'Spiritual Souls:Datta Lineage, Sikhs, East of India', child: false, uniqueKey: '', parentKey: 'art', dateUploaded: '02-13-2023', key: 'dattavatar', roles: ['relgion', 'all'] },
    { tab:"Gurus and Mystics", label:  'Shree Swami Samartha', child: false, uniqueKey: '', parentKey: 'art', key: 'swami-samartha', roles: ['relgion', 'all'], dateUploaded: '04-24-2023' },
    { tab:"Gurus and Mystics", label:  'Shirdi Sai: to  Q3 2021', child: false, uniqueKey: '', parentKey: 'art', parent: true, key: 'shirdi-sai-q1-q2-2021', roles: ['relgion', 'all'], dateUploaded: '02-07-2023'  },
    { tab:"Gurus and Mystics", label:  '- Q3 2021 - Q1 2022', child: true, uniqueKey: '', parentKey: 'Shirdi Sai', key: 'shirdi-sai-q3-q4-2021', roles: ['relgion', 'all'], dateUploaded: '03-31-2022' },
    { tab:"Gurus and Mystics", label:  '- Q2 Q3 2022', child: true, uniqueKey: '', parentKey: 'Shirdi Sai', key: 'shirdi-sai-q2-q3-2022', roles: ['relgion', 'all'], dateUploaded: '02-07-2023' },
    { tab:"Gurus and Mystics", label:  '- Q3,Q4 2022 Q1 2023', child: true, uniqueKey: '', parentKey: 'Shirdi Sai', key: 'shirdi-sai-q4-2022-q1-2023', roles: ['relgion', 'all'], dateUploaded: '03-02-2023' },
    { tab:"Gurus and Mystics", label:  '- Q2 Q3 2023', child: true, uniqueKey: '', parentKey: 'Shirdi Sai', key: 'shirdi-sai-q2-q3-2023', roles: ['relgion', 'all'], dateUploaded: '05-16-2023' },
    { tab:"Gurus and Mystics", label:  '- Sai Satcharitra', child: true, uniqueKey: '', parentKey: 'Shirdi Sai', key: 'baba-themes-1', roles: ['relgion', 'all'], dateUploaded: '02-28-2022' },
    { tab:"People, Places, Themes", label:  'People', child: false, uniqueKey: '', parentKey: 'art', key: 'people-places', roles: ['nonLiving', 'all'], dateUploaded: '02-02-2023' },
    { tab:"People, Places, Themes", label:  'Places, Scenes and Objects', child: false, uniqueKey: '', parentKey: 'art', key: 'places-scenes-objects', roles: ['nonLiving', 'all'], dateUploaded: '03-02-2023' },
    { tab:"People, Places, Themes", label:  'Misc, Themes', child: false, uniqueKey: '', parentKey: 'art', key: 'themes-misc', roles: ['nonLiving', 'all'], dateUploaded: '05-14-2023' },
    { tab:"Misc", label:  'Anim Unorganized', child: false, uniqueKey: '', parentKey: 'art', key: 'animate-to-be-oragnized1', roles: ['nonLiving', 'all'], dateUploaded: '02-03-2022' },
    { tab:"Transport and Machines", label:  'Rail', child: false, uniqueKey: '', parentKey: 'art', key: 'trains', roles: ['nonLiving', 'all'], dateUploaded: '02-08-2023' },
    { tab:"Transport and Machines", label:  ' - IR WDM2', child: true, uniqueKey: '', parentKey: 'Rail', key: 'trains-ir-alcos', roles: ['nonLiving', 'all'], dateUploaded: '11-28-2022' },
    { tab:"Transport and Machines", label:  ' - IR trains)', child: true, uniqueKey: '', parentKey: 'Rail', key: 'trains-ir-special-trains', roles: ['nonLiving', 'all'], dateUploaded: '02-02-2023' },
    { tab:"Mumbai", label:  'Mumbai Meri Jaan', child: false, uniqueKey: '', parentKey: 'art', key: 'mumbai-meri-jaan', roles: ['nonLiving', 'all'], dateUploaded: '11-28-2022' },
    { tab:"Mumbai", label:  ' - Q1 2023 onward', child: true, uniqueKey: '', parentKey: 'Mumbai Meri Jaan', key: 'mumbai-meri-jaan-2', roles: ['nonLiving', 'all'], dateUploaded: '01-29-2023' },
    { tab:"Transport and Machines", label:  'Aircraft, Ships and Cars', child: false, uniqueKey: '', parentKey: 'art', key: 'planes', roles: ['nonLiving', 'all'], dateUploaded: '02-14-2023' },
    { tab:"Transport and Machines", label:  '- Q2 2023 onward', child: false, uniqueKey: '', parentKey: 'art', key: 'planesQ12023', roles: ['nonLiving', 'all'], dateUploaded: '05-12-2023' }];
