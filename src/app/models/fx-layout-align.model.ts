export type fxLayoutAlignHorizontal = '' | 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export type fxLayoutAlignVertical =
  | ''
  | 'start'
  | 'center'
  | 'end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

export class FxLayoutAlignModel {
  horizontal: fxLayoutAlignHorizontal;
  vertical: fxLayoutAlignVertical;
  constructor() {
    this.horizontal = '';
    this.vertical = '';
  }
}
