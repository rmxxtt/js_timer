class Timer {
    private startValue: number = 0;
    private readonly stopValue: number = 0;
    private value: number = 0;
    private readonly step: number = 0;
    private readonly timeInterval: number = 0;
    private status: boolean = false;
    private timerHandlerInterval: number = 0;

    public constructor(startValue: number, stopValue: number, step: number, interval?: number | undefined) {
        this.startValue = startValue;
        this.stopValue = stopValue;
        this.step = step;
        this.timeInterval = interval || 1000;
        this.value = startValue;
    }

    public start() {
        if (!this.status) {
            console.log('Таймер включен.');
            console.log(this.value);
            this.status = true;
            this.timerHandlerInterval = setInterval(() => {
                this.update()
            }, this.timeInterval);
        } else {
            console.log('Ошибка: Таймер был запущен ранее.');
        }
    }

    public stop() {
        if (this.status) {
            this.status = false;
            clearInterval(this.timerHandlerInterval);
            console.log('Таймер выключен.');
        } else {
            console.log('Ошибка: Нельзя выключить выключенный таймер.');
        }
    }

    private update() {
        this.value -= this.step;
        console.log(this.value);
        if (this.value <= this.stopValue) {
            this.stop()
        }
    }
}

const t = new Timer(100, 0, 20)
t.start()