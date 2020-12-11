import { accentStore } from '@this/data/accentStore';
import lowerCase from 'lodash/lowerCase';
import { get } from 'svelte/store';
import type { AudioPlayer } from './AudioPlayer';

export interface Options {
  audioPlayer: AudioPlayer;
}

export class WordAudioPlayer {
  public constructor(private readonly options: Options) {}

  public async play(word: string) {
    const accent = get(accentStore);
    await this.options.audioPlayer.play(`audio/${accent}/${lowerCase(word)}.mp3`);
  }
}
