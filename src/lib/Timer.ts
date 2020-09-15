export default class Timer {
  period: number;
  callback: () => void;
  intervalId: NodeJS.Timeout | null = null;

  constructor(callback, period = 1000) {
    this.callback = callback;
    this.period = period;
  }

  start() {
    if (!this.active) {
      this.callback();
      this.intervalId = setInterval(this.callback, this.period);
    }
  }

  stop() {
    if (this.active) {
      this.intervalId && clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  get active() {
    return this.intervalId !== null;
  }
}
