import { DATE_TYPE_CLASSES } from "./templates_and_constants";
import { DATE_SELECTOR } from "./templates_and_constants";
import { DATE_STYLE_CLASSES } from "./templates_and_constants";


export class DateTypeSelection {
    static dateTypeClass
    static selectWorkingDays() {
        let findWorkingDays = () => document.querySelectorAll(`.${DATE_STYLE_CLASSES.workingDaysTemporary}`)
        const calendarTable = document.querySelector('.calendar-table')
        const daysInMonthArray = Object.values(document.querySelectorAll(DATE_SELECTOR))
        //mousedown event
        daysInMonthArray.forEach((element, index) => element.addEventListener('mousedown', (e) => {
            e.target.setAttribute('isClicked', index)

        }))

        //mouseover event
        daysInMonthArray.forEach((date, index) => date.addEventListener('mouseover', (e) => {
            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) {
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                let clickedIndex = Number(clickedDay[0].getAttribute('isClicked'))
                if (index >= clickedIndex) {
                    daysInMonthArray.forEach(element => {
                        element.classList.remove(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                    daysInMonthArray.slice(clickedIndex, index + 1).forEach(element => {
                        element.classList.add(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                    daysInMonthArray.slice(index + 1, 34).forEach(element => {
                        element.classList.remove(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                }

                if (index <= clickedIndex) {
                    daysInMonthArray.forEach(element => {
                        element.classList.remove(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                    daysInMonthArray.slice(index, clickedIndex + 1).forEach(element => {
                        element.classList.add(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                    daysInMonthArray.slice(0, index).forEach(element => {
                        element.classList.remove(DATE_STYLE_CLASSES.workingDaysTemporary);
                    })
                }

            }
        }))

        //mouseleave event
        calendarTable.addEventListener('mouseleave', () => {
            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) {
                const workingDays = findWorkingDays()
                workingDays.forEach(day => day.classList.remove(DATE_STYLE_CLASSES.workingDaysTemporary))
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                clickedDay[0].removeAttribute('isClicked')
            }
        })

        //mouseup event
        daysInMonthArray.forEach((element) => element.addEventListener('mouseup', () => {
            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) { 
                const workingDays = findWorkingDays()
                workingDays.forEach(day => day.classList.replace(DATE_STYLE_CLASSES.workingDaysTemporary, DATE_STYLE_CLASSES.workingDays))
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                clickedDay[0].removeAttribute('isClicked')
            }
        }))
    }
}
