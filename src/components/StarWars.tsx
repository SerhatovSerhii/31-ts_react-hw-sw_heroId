import style from '../css_modules/farGalaxy.module.css';
import { starWarsInfo } from '../utils/constants';

const StarWars = () => {
  return (
    <div className={style.farGalaxy}>{starWarsInfo}</div>
  )
}

export default StarWars