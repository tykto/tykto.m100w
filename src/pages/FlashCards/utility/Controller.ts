import { groupedWords } from '@this/constants/groupedWords';
import { colourStore } from '@this/data/colourStore';
import shuffle from 'lodash/shuffle';
import { get } from 'svelte/store';
import { countdownStore, disabledStore, intervalHandleStore, progressStore, timeoutHandleStore, wordStore } from '../data/game';
import type { TickAudioPlayer } from './TickAudioPlayer';
import type { WordAudioPlayer } from './WordAudioPlayer';

export interface Options {
  timeLimitSeconds: number;
  onFinishRound: () => undefined | Promise<undefined>;
  tickAudioPlayer: TickAudioPlayer;
  wordAudioPlayer: WordAudioPlayer;
}

export class Controller {
  private words: string[] = [];
  private currentWord = -1;

  public constructor(private readonly options: Options) {}

  public prepareRound() {
    this.currentWord++;

    if (this.currentWord >= this.words.length) {
      this.currentWord = 0;
    }

    if (this.currentWord === 0) {
      this.words = shuffle(groupedWords[get(colourStore)]);
    }

    wordStore.set(this.words[this.currentWord]);
    progressStore.set({ current: this.currentWord + 1, count: this.words.length });
    countdownStore.set(this.options.timeLimitSeconds);
    disabledStore.set(false);
  }

  public startGame() {
    this.prepareRound();
  }

  public startRound() {
    disabledStore.set(true);
    intervalHandleStore.set(setInterval(() => this.tick(), 1000));
    timeoutHandleStore.set(setTimeout(() => this.finishRound(), 1000 * this.options.timeLimitSeconds));
  }

  private async finishRound() {
    clearInterval(get(intervalHandleStore));
    countdownStore.set(0);
    await this.options.wordAudioPlayer.play(this.words[this.currentWord]);
    await this.options.onFinishRound();
  }

  private tick() {
    countdownStore.update((countdown) => {
      if (countdown > 1 && countdown <= 4) {
        this.options.tickAudioPlayer.play();
      }

      return countdown - 1;
    });
  }
}
