import { graphql } from 'react-apollo';
import { 
  GET_MOVIES, GET_ACTOR, GET_TV_SHOWS, GET_VIDEOS,GET_DANCE_PICTURES,GET_DANCE_VIDEOS, 
  GET_ACTING_PICTURES
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

export const dance = graphql(GET_DANCE_PICTURES, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const danceVideos = graphql(GET_DANCE_VIDEOS, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const actingPictures = graphql(GET_ACTING_PICTURES, {
  options: () => ({}),
  props: ({ data }) => data,
});

export const video = graphql(GET_VIDEOS,{
  skip: ({ id }) => (!id),
  options: ({ id }) => ({ variables: { id } }),
  props: ({ data }) => (data)
});
