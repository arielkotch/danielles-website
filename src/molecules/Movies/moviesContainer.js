import {
  video
  // eslint-disable-next-line import/no-unresolved
} from 'containers/movies/moviesContainer';
import { compose } from 'lodash/fp';
import Movies from './index';
  
export default compose(video)(Movies);
  
