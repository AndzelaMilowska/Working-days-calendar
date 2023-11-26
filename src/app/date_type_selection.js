import { DATE_TYPE_CLASSES } from "./templates_and_constants";
import { DATE_SELECTOR } from "./templates_and_constants";
import { DATE_STYLE_CLASSES } from "./templates_and_constants";

export class DateTypeSelection {
    static dateTypeClass
    static selectWorkingDays() {
        const daysInMonthArray = Object.values(document.querySelectorAll(DATE_SELECTOR))
        daysInMonthArray.forEach((clickedElement, clickedIndex) => clickedElement.addEventListener('click', () => {
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

                daysInMonthArray.forEach(element => {
                    element.addEventListener('click', () => {
                        // removeEventListener('mouseover')
                    })
                })

            }))
        }))
    }

    // day.classList.add(DATE_STYLE_CLASSES.daysOff);
    // console.log(`clicked: ${day.getAttribute('index')}`)

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
}

/*
    static selectWorkingDays() {
        const daysInMonthArray = document.querySelectorAll(DATE_SELECTOR)
        daysInMonthArray.forEach(day => day.addEventListener('click', () => {
            day.classList.add(WORKING_DAYS_STYLE_CLASS);
            console.log(`clicked: ${day}`)
        }))
    }
    */