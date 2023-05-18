import classNames from 'classnames';
import styles from './Divider.module.scss';

interface Props {
  position: string;
}

export const Divider: React.FC<Props> = ({ position }) => {
  return (
    <div className={
      classNames({
        [styles.dividerStart] : position === 'start',
        [styles.dividerCenter] : position === 'center',
      })
    } />
  )
}
