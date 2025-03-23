class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.map((alarm) => alarm.time).includes(time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        }) 
        
    }

    removeClock(time) {
        while (this.alarmCollection.map((alarm) => alarm.time).includes(time)) {
          this.alarmCollection.splice(this.alarmCollection.findIndex((alarm) => alarm.time === time), 1);
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          })
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}