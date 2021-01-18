import {
  dance
  // eslint-disable-next-line import/no-unresolved
} from 'containers/movies/moviesContainer';
import { compose } from 'lodash/fp';
import Dance from './index';
  
export default compose(dance)(Dance);
  
