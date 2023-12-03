import { DATE_TYPE_CLASSES } from "./templates_and_constants";
import { DATE_SELECTOR } from "./templates_and_constants";
import { DATE_STYLE_CLASSES } from "./templates_and_constants";

export class DateTypeSelection {
    static dateTypeClass
    static selectWorkingDays() {
        let indexOfClickedElement
        //take mouseover out from click event
        //make click event responsible only for returning clicked Index and clicked
        const daysInMonthArray = Object.values(document.querySelectorAll(DATE_SELECTOR))
        daysInMonthArray.forEach((clickedElement, clickedIndex) => clickedElement.addEventListener('click', () => {
            element.setAttribute(isClicked, true)
        }))

            daysInMonthArray.forEach((hoveredElement, hoveredIndex) => {
                function selectActive() {
                    console.log(`Hovered Index is: ${hoveredIndex}`)
                }
                
                if(clicledStatus) {
                    console.log('added')
                    hoveredElement.addEventListener('mouseover', selectActive)
                }
                else {
                    console.log('removed')
                    hoveredElement.removeEventListener('mouseover', selectActive)
                }
                // hoveredElement.removeEventListener('mouseover', selectActive)
                // hoveredElement.addEventListener('mouseover', selectActive)
                
            })
        
       

    }
}


/*

// day.classList.add(DATE_STYLE_CLASSES.daysOff);
// console.log(`clicked: ${day.getAttribute('index')}`)
*/

/*
hover listener 
daj klase tymczasową jeśli:
jeśli hovered value jest większe równe clicked value to:
hovered value jest większa równa klikkniętej wartości i mniejsza równa current hover
lub 
daj klase tymczasową 


!! element.classList.remove("my-class");
!! element.classList.add("my-class");
Event listener click 
Event listener hover
Hover value for i < hover &  i > clicked value  {add high importance class style }
Else
{remove high importance style class}
*/





/*
daysInMonthArray.forEach((hoveredElement, hoveredIndex) => hoveredElement.addEventListener('mouseover', () => {
            if (hoveredIndex >= clickedIndex) {
                daysInMonthArray.forEach(element => {
                    element.classList.remove(DATE_STYLE_CLASSES.daysOff);
                })
                daysInMonthArray.slice(clickedIndex, hoveredIndex+1).forEach(element => {
                    element.classList.add(DATE_STYLE_CLASSES.daysOff);
                })
                daysInMonthArray.slice(hoveredIndex+1, 34).forEach(element => {
                    element.classList.remove(DATE_STYLE_CLASSES.daysOff);
                })
            }

            if (hoveredIndex <= clickedIndex) {
                daysInMonthArray.forEach(element => {
                    element.classList.remove(DATE_STYLE_CLASSES.daysOff);
                })
                daysInMonthArray.slice(hoveredIndex, clickedIndex+1).forEach(element => {
                    element.classList.add(DATE_STYLE_CLASSES.daysOff);
                })
                daysInMonthArray.slice(0, hoveredIndex).forEach(element => {
                    element.classList.remove(DATE_STYLE_CLASSES.daysOff);
                })
            }
            
        }))
*/