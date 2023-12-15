export class CalendarExport {
    static exportToPdf() {
        const nextMonthButton = document.querySelector('.save-button')
        nextMonthButton.addEventListener('click', () => {
            window.print();
        })
    }
}