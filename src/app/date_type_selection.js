
import { DATE_SELECTOR } from "./templates_and_constants";
import { DATE_STYLE_CLASSES } from "./templates_and_constants";
import { DateTypeSetter } from "./set_date_type";

export class DateTypeSelection {
    static selectWorkingDays() {
        let findWorkingDays = () => document.querySelectorAll(`.${DateTypeSetter.dateType}-temp`)
        const calendarTable = document.querySelector('.calendar-table')
        const daysInMonthArray = Object.values(document.querySelectorAll(DATE_SELECTOR))

        //empty-cells
        daysInMonthArray.forEach((element) => {
            if(element.innerHTML=='') {
                element.classList.add(`empty-cells`)
            }
        })

        //mousedown event
        daysInMonthArray.forEach((element, index) => element.parentElement.addEventListener('mousedown', (e) => {
            element.setAttribute('isClicked', index)
        }))

        //mouseover event
        daysInMonthArray.forEach((date, index) => date.parentElement.addEventListener('mouseover', (e) => {
            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) {
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                let clickedIndex = Number(clickedDay[0].getAttribute('isClicked'))
                if (index >= clickedIndex) {
                    daysInMonthArray.forEach(element => {
                        element.classList.remove(`${DateTypeSetter.dateType}-temp`);
                    })
                    daysInMonthArray.slice(clickedIndex, index + 1).forEach(element => {
                        element.classList.add(`${DateTypeSetter.dateType}-temp`);
                    })
                    daysInMonthArray.slice(index + 1, 34).forEach(element => {
                        element.classList.remove(`${DateTypeSetter.dateType}-temp`);
                    })
                }

                if (index <= clickedIndex) {
                    daysInMonthArray.forEach(element => {
                        element.classList.remove(`${DateTypeSetter.dateType}-temp`);
                    })
                    daysInMonthArray.slice(index, clickedIndex + 1).forEach(element => {
                        element.classList.add(`${DateTypeSetter.dateType}-temp`);
                    })
                    daysInMonthArray.slice(0, index).forEach(element => {
                        element.classList.remove(`${DateTypeSetter.dateType}-temp`);
                    })
                }
            }
        }))

        //mouseleave event
        calendarTable.addEventListener('mouseleave', () => {
            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) {
                const workingDays = findWorkingDays()
                workingDays.forEach(day => day.classList.remove(`${DateTypeSetter.dateType}-temp`))
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                clickedDay[0].removeAttribute('isClicked')
            }
        })

        //mouseup event
        daysInMonthArray.forEach((element) => element.parentElement.addEventListener('mouseup', (event) => {
            if (element.hasAttribute('isClicked')) {
                element.classList.add(`${DateTypeSetter.dateType}-temp`)
            }

            if (daysInMonthArray.some((day) => day.hasAttribute('isClicked'))) { 
                const workingDays = findWorkingDays()
                workingDays.forEach(day => day.classList.remove(DATE_STYLE_CLASSES.daysOff))
                workingDays.forEach(day => day.classList.remove(DATE_STYLE_CLASSES.weekends))
                workingDays.forEach(day => day.classList.remove(DATE_STYLE_CLASSES.workingDays))
                workingDays.forEach(day => day.classList.replace(`${DateTypeSetter.dateType}-temp`, `${DateTypeSetter.dateType}`))
                const clickedDay = daysInMonthArray.filter(day => day.hasAttribute('isClicked'))
                clickedDay[0].removeAttribute('isClicked')
            }
        }))
    }
}
