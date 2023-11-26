import { CALENDAR_TABLE_SELECTOR } from "./templates_and_constants";
import { rowLayout } from "./templates_and_constants";
import { dateCellLayout } from "./templates_and_constants";
import { convertClassToSelector } from "./templates_and_constants";
import { CALENDAR_TABLE_ROWS_CLASS } from "./templates_and_constants";
import { CURRENT_MONTH_SELECTOR } from "./templates_and_constants";
import { MONTHS } from "./templates_and_constants";
import { CalendarArrangements } from "./calendar_arrangements";
import { DateArrangements } from "./date_arrangements";
import { DateTypeSelection } from "./date_type_selection";

export class CalendarRendering {
    static calendarTable = document.querySelector(CALENDAR_TABLE_SELECTOR)
    static currentMonth = document.querySelector(CURRENT_MONTH_SELECTOR)

    static renderMonth (monthDataArray, year, month){ 
        this.calendarTable.innerHTML = rowLayout(CALENDAR_TABLE_ROWS_CLASS)
        let rows = document.querySelectorAll(convertClassToSelector(CALENDAR_TABLE_ROWS_CLASS))

        monthDataArray.forEach((day, index) => {
            if (new Date(year, month, day).getDay() === 1) {
                this.calendarTable.innerHTML += rowLayout(CALENDAR_TABLE_ROWS_CLASS);
                rows = document.querySelectorAll(convertClassToSelector(CALENDAR_TABLE_ROWS_CLASS))
            }
            rows[rows.length - 1].innerHTML += dateCellLayout(day, index);
        })
    }

    static setMonthHeader(month) {
        this.currentMonth.innerHTML = MONTHS[month]
    }

    static runMonthRender(month, year) {
        CalendarRendering.setMonthHeader(month)

        DateArrangements.createMonthCellsArray(DateArrangements.getDayOfTheMonth(1), DateArrangements.daysInMonth(year, month))
        CalendarRendering.renderMonth(DateArrangements.monthCellsArray, year, month)
        DateTypeSelection.selectWorkingDays()
    }
}

//
