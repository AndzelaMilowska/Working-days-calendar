import { CALENDAR_TABLE_SELECTOR } from "./templates_and_constants";
import { CALENDAR_TABLE_ROWS_SELECTOR } from "./templates_and_constants";
import { rowLayout } from "./templates_and_constants";
import { dateCellLayout } from "./templates_and_constants";
import { DateArrangements } from "./date_arrangements";
import { CALENDAR_TABLE_ROWS_CLASS } from "./templates_and_constants";
import { CURRENT_MONTH_SELECTOR } from "./templates_and_constants";
import { MONTHS } from "./templates_and_constants";

export class CalendarRendering {
    static calendarTable = document.querySelector(CALENDAR_TABLE_SELECTOR)
    static currentMonth = document.querySelector(CURRENT_MONTH_SELECTOR)

    static renderMonth (monthDataArray, year, month){ 
        this.calendarTable.innerHTML = rowLayout(CALENDAR_TABLE_ROWS_CLASS)
        let rows = document.querySelectorAll(CALENDAR_TABLE_ROWS_SELECTOR)

        monthDataArray.forEach(day => {
            if (new Date(year, month, day).getDay() === 1) {
                this.calendarTable.innerHTML += rowLayout(CALENDAR_TABLE_ROWS_CLASS);
                rows = document.querySelectorAll(CALENDAR_TABLE_ROWS_SELECTOR)
            }
            rows[rows.length - 1].innerHTML += dateCellLayout(day);
        })
    }

    static setMonthHeader(month) {
        this.currentMonth.innerHTML = MONTHS[month]
    }

    static runMonthRender(month, year) {
        CalendarRendering.setMonthHeader(month)

        DateArrangements.createMonthCellsArray(DateArrangements.getDayOfTheMonth(1), DateArrangements.daysInMonth(year, month))
        CalendarRendering.renderMonth(DateArrangements.monthCellsArray, year, month)
    }
}

//
