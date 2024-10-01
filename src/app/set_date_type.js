import { DATE_STYLE_CLASSES } from "./templates_and_constants";
export class DateTypeSetter {
    static dateType = DATE_STYLE_CLASSES.workingDays
    static setDateType () {
        let dateTypeButtons = document.querySelectorAll('.date-type_button')
        dateTypeButtons.forEach(button => button.addEventListener('click', () => {
            this.dateType = DATE_STYLE_CLASSES[button.getAttribute('date-type')]
            console.log(this.dateType)
        }))
    }
}