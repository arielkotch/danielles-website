import {
  movies,
  actor,
  tvShows
// eslint-disable-next-line import/no-unresolved
} from 'containers/movies/moviesContainer';
import { compose } from 'lodash/fp';
import Acting from './index';

export default compose(movies, actor, tvShows)(Acting);
