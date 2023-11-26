import { DATE_TYPE_CLASSES } from "./templates_and_constants";
import { DATE_SELECTOR } from "./templates_and_constants";
import { DATE_STYLE_CLASSES } from "./templates_and_constants";

export class DateTypeSelection {
    static dateTypeClass
    static selectWorkingDays() {
        const daysInMonthArray = document.querySelectorAll(DATE_SELECTOR)
        daysInMonthArray.forEach(day => day.addEventListener('click', () => {
            day.classList.add(WORKING_DAYS_STYLE_CLASS);
            console.log(`clicked: ${day}`)
        }))
    }

    /*
    !! element.classList.remove("my-class");
    !! element.classList.add("my-class");
    Event listener click 
Event listener hover
Hover value for i < hover &  i > clicked value  {add high importance class style }
Else
{remove high importance style class}
    */
}