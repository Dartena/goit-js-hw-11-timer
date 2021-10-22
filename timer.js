class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.timerRefs =
        {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`)
        };
        this.timerId = 0;
        this.init();
    }
   
    init() {       
        this.timerId = setInterval(() => {
            let currentDate = Date.now();
            let time = this.targetDate - currentDate;
            if (time <= 200) {
                clearInterval(this.timerId);
            }
            this.timerRefs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
            this.timerRefs.hours.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.timerRefs.mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            this.timerRefs.secs.textContent = Math.floor((time % (1000 * 60)) / 1000);            
       }, 100);
    }
}


const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 22, 2022, 19:30:00')
})