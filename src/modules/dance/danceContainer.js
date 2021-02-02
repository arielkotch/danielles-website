import {
  dance,danceVideos
  // eslint-disable-next-line import/no-unresolved
} from 'containers/movies/moviesContainer';
import { compose } from 'lodash/fp';
import Dance from './index';
  
export default compose(dance,danceVideos)(Dance);
  
