// eslint-disable-next-line import/no-unresolved
import { actor } from 'containers/movies/moviesContainer';
import { compose } from 'lodash/fp';
import Home from './index';

export default compose(actor)(Home);
