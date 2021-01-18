const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');
const fs = require('fs');

const app = express();

const API_KEY = 'd0bf8908709bcc882a8e69d21c40685b';

const DANIELLE_ID = '1179260';



const tmdb = `https://api.themoviedb.org/3/person/${DANIELLE_ID}/movie_credits?api_key=${API_KEY}&language=en-US`;
const actorDetails = `https://api.themoviedb.org/3/person/${DANIELLE_ID}?api_key=${API_KEY}&language=en-US`;
const root = {
  getMovie: async ({ id }) => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return data;
  },
  getVideo: async ({ id }) => {
    console.log({ id });
    const { data: { results } } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
    );
    return results;
  },
  getMovies: async () => {
    const {
      data: { cast },
    } = await axios.get(tmdb);
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );
    console.log(res.data.genres)

    
    return cast;
  },
  getTVShows: async () => {
    const {
      data: { cast },
    } = await axios.get(
      `https://api.themoviedb.org/3/person/${DANIELLE_ID}/tv_credits?api_key=${API_KEY}&language=en-US`,
    );
    return cast;
  },
  getDancePictures: async () => {
    const files = fs.readdirSync('/Users/arielkotch/Desktop/danielles-website/assets/dance/photos');
    return files.map((path) => ({ path: `/Users/arielkotch/Desktop/danielles-website/assets/dance/photos/${path}` }));
  },
  getActor: async () => {
    const { data } = await axios.get(actorDetails);
    const {
      data: { profiles },
    } = await axios.get(
      `https://api.themoviedb.org/3/person/${DANIELLE_ID}/images?api_key=${API_KEY}`,
    );
    return {
      ...data,
      profiles,
    };
  },
};

const schema = buildSchema(`
  type Show {
    original_name:String,
    character:String!, 
    poster_path:String!,
    overview:String,
    popularity:Float!
  }
  type Movie {
    id:Int!,
    character: String!,
    release_date: String!,
    vote_count: Int!,
    vote_average: Float!,
    title: String!,
    overview:String!
    genre_ids: [Int],
    popularity: String!,
    poster_path:String
  }
  type Video {
    name:String!
    site: String!
    size: Int!
    key:String!
    id: String!
  }
  type Genre {
    name:String!
  }
  type Image {
    file_path: String!
  }
  type Dance {
    path:String!
  }
  type Query {
    getMovies:[Movie!]!
    getActor:Actor
    getMovie(id:String):Movie
    getTVShows:[Show]
    getVideo(id:Int!): [Video],
    getDancePictures:[Dance]
  }
  type Actor {
    birthday:String
    known_for_department:String
    name:String
    biography:String
    popularity:Float!
    profile_path:String
    homepage:String,
    profiles: [Image!]!
  }
`);

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
