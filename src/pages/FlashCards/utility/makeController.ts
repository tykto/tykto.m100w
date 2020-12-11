import { AudioPlayer } from './AudioPlayer';
import { Controller } from './Controller';
import { TickAudioPlayer } from './TickAudioPlayer';
import { WordAudioPlayer } from './WordAudioPlayer';

const timeLimitSeconds = 5;

export const makeController = (onFinishRound: () => any) => {
  const audioPlayer = new AudioPlayer();
  const tickAudioPlayer = new TickAudioPlayer({ audioPlayer });
  const wordAudioPlayer = new WordAudioPlayer({ audioPlayer });

  return new Controller({ onFinishRound, timeLimitSeconds, tickAudioPlayer, wordAudioPlayer });
};
