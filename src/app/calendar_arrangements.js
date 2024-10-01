import { NEXT_MONTH_BUTTON_SELECTOR } from "./templates_and_constants";
import { PREVIOUS_MONTH_BUTTON_SELECTOR } from "./templates_and_constants";
import { DateArrangements } from "./date_arrangements";
import { CalendarRendering } from "./calendar_rendering";

export class CalendarArrangements {
    static changeMonthListener() {
        const nextMonthButton = document.querySelector(NEXT_MONTH_BUTTON_SELECTOR)
        const prevoiusMonthButton = document.querySelector(PREVIOUS_MONTH_BUTTON_SELECTOR)
        prevoiusMonthButton.addEventListener('click', () => {
            DateArrangements.date.setMonth(DateArrangements.month() - 1)
            CalendarRendering.runMonthRender(DateArrangements.month(), DateArrangements.year())
        })
        nextMonthButton.addEventListener('click', () => {
            DateArrangements.date.setMonth(DateArrangements.month() + 1)
            CalendarRendering.runMonthRender(DateArrangements.month(), DateArrangements.year())
        })
    }
}