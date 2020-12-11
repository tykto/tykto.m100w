import type { AudioPlayer } from './AudioPlayer';

export interface Options {
  audioPlayer: AudioPlayer;
}

export class TickAudioPlayer {
  public constructor(private readonly options: Options) {}

  public async play() {
    await this.options.audioPlayer.play('audio/tick.mp3');
  }
}
