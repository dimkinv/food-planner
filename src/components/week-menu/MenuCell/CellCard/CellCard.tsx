import { FC } from 'react';
import './CellCard.scss';

export const CellCard: FC<CellCardProps> = (props) => (
  <div className="cell-card">
    <span>{props.title}</span>
    <button type="button" className='x-button' onClick={props.onCardRemove}></button>
  </div>
)

export type CellCardProps = {
  title: string;
  onCardRemove: () => void;
}
