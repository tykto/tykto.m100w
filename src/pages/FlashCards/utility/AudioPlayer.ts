export class AudioPlayer {
  public async play(url: string) {
    await new Promise((resolve) => {
      const audio = new Audio(url);
      audio.onended = () => resolve(null);
      audio.play();
    });
  }
}
