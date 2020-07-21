class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.hadleVisivilityChange = this.hadleVisivilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    observer.observe(player.media);

    document.addEventListener('visibilitychange', this.hadleVisivilityChange);
  }

  handleIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  hadleVisivilityChange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
