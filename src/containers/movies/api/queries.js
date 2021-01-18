import { gql } from 'apollo-boost';

export const GET_MOVIES = gql`
    query {
        getMovies {
            id
            character
            release_date
            vote_count
            vote_average
            title
            overview
            popularity
            poster_path
        }
    }
`;

export const GET_TV_SHOWS = gql`
    query {
        getTVShows {
            original_name
            popularity
            character
            poster_path
            overview
        }
    }
`;

export const GET_DANCE_PICTURES = gql`
    query {
        getDancePictures {
            path
        }
    }
`;

export const GET_ACTOR = gql`
    query {
        getActor {
            birthday
            known_for_department
            name
            biography
            popularity
            profile_path
            homepage
            profiles {
                file_path
            }
        }
    }
`;

export const GET_VIDEOS = gql `
query getVideos($id:Int!) {
    getVideo(
    id:$id
    ){
        id
        site
        size
        key
    }
  }`




