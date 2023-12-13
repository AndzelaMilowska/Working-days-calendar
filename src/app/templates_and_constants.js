
export function rowLayout(rowClass) { return `<div class="${rowClass} row w-100 d-inline-flex justify-content-around"></div>` }
export function dateCellLayout(date, number) { return `<div class='date-wrapper col  d-flex justify-content-end user-select-none p-2'> <div class="date rounded-circle d-flex align-items-center justify-content-center" index='${number}' >${date}</div></div>` }
export function convertClassToSelector(className) {return '.' + className}
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const CALENDAR_TABLE_ROWS_CLASS = 'calendar-table__row'
export const CALENDAR_TABLE_SELECTOR = '.calendar-table'
export const CURRENT_MONTH_SELECTOR = '.month-navigation__current-month'
export const NEXT_MONTH_BUTTON_SELECTOR = '.month-navigation__next'
export const PREVIOUS_MONTH_BUTTON_SELECTOR = '.month-navigation__previous'
export const DATE_SELECTOR = '.date'
export const DATE_STYLE_CLASSES = {
    daysOff: "days-off",
    weekends: "weekends",
    workingDays: "working-days",
}

