import { graphql } from 'react-apollo';
import { 
  GET_MOVIES, GET_ACTOR, GET_TV_SHOWS, GET_VIDEOS,
} from './api/queries';

export const movies = graphql(GET_MOVIES, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const tvShows = graphql(GET_TV_SHOWS, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const actor = graphql(GET_ACTOR, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const getVideo = (options) => graphql(GET_VIDEOS, {
  options,
  props: ({ data }) => data,
});

