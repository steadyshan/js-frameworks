import { Component } from '@angular/core';
interface todoItem {
  id:string;
  summary:string;
  detail:string;
  history?:string[];
  status?:string;
  dateAdded:string ;
  dateUpdated?:string;
}
@Component({
  selector: 'app-misc-design-specs',
  templateUrl: './misc-design-specs.component.html',
  styleUrls: ['./misc-design-specs.component.css']
})

export class MiscDesignSpecsComponent {
  toDoItemList:todoItem[] = [
    { 
      id: 'loginBackend',
      summary: 'login styling and integration',
      detail: 'TBD',
      dateAdded:'08-29-2023'
          },
          { 
            id: 'meetingcalendar',
            summary: 'Calendar',
            detail: 'TBD',
            dateAdded:'08-29-2023'
                }
  ];
  ngOnInit() {
    const backToTopButton = document.getElementById("backToTopBtn");
    if (backToTopButton) {
      function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
      }
      function toggleBackToTopButton() {
        if (backToTopButton ) {
          if (backToTopButton &&window.scrollY > 200) {
              backToTopButton.style.display = "block";
          } else {
              backToTopButton.style.display = "none";
          }
        }
      }

      backToTopButton.addEventListener("click", scrollToTop);
    }
  }
  
  /*
 

    // Function to scroll smoothly to the top
   

    // Show/hide the "Back to Top" button based on scroll position
    

    // Attach click event to "Back to Top" button

    // Listen for scroll events to show/hide the button
    window.addEventListener("scroll", toggleBackToTopButton);
}
}
 

   
*/

}
