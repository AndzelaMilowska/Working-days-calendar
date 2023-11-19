// import { Tooltip, Toast, Popover } from 'bootstrap';
import './styles/main.scss'
import { DateArrangements } from './app/date_arrangements';
import { CalendarRendering } from './app/calendar_rendering';
import { CalendarArrangements } from './app/calendar_arrangements';

// DateArrangements.date.setMonth(1)
CalendarRendering.runMonthRender(DateArrangements.month(), DateArrangements.year())
CalendarArrangements.changeMonth()
//plan na teraz
//podziel pliki
//style
//dodaj miesiące i zmiane miesiąca
//style znowu


/*
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
*/

/* 
 -- NOTEPAD --
załozenia: 
1. kalendarz -> z czego składa się kalendarz
dni     --> jaki dzień tygodnia
miesiące  --> kiedy początek
lata

czy kazdy z nich osobno powinien miec web component
*/