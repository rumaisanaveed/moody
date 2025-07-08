export interface IEmojiList {
  selectedEmojiId: number | null;
  handleSelectEmoji: (id: number) => void;
}
