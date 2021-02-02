const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');
const fs = require('fs');
const AWS = require('aws-sdk');

const app = express();

const API_KEY = 'd0bf8908709bcc882a8e69d21c40685b';

const DANIELLE_ID = '1179260';
const AWS_PREFIX = 'https://daniellekotch.s3.us-east-2.amazonaws.com/'
AWS.config.update({ accessKeyId: 'AKIAJWM3URLKE3KZTQEQ', secretAccessKey: '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', region: 'us-east-2' });
const s3 = new AWS.S3();


const getAWSObjects = ({ key }) => new Promise((resolve, reject) => {
  const params = { Bucket: 'daniellekotch', Prefix: key, Delimiter: '/' };
  s3.listObjects(params, (err, objects) => {
    if (err) {
      reject();
    } else {
      resolve(objects);
    }
  });
})

const tmdb = `https://api.themoviedb.org/3/person/${DANIELLE_ID}/movie_credits?api_key=${API_KEY}&language=en-US`;
const actorDetails = `https://api.themoviedb.org/3/person/${DANIELLE_ID}?api_key=${API_KEY}&language=en-US`;
const root = {
  getMovie: async ({ id }) => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    return data;
  },
  getDancePictures: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/dance/pictures/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: AWS_PREFIX + Key
    }))
  },
  getActingPictures: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/acting/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: AWS_PREFIX + Key
    }))
  },
  getDanceVideos: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/dance/videos/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: AWS_PREFIX + Key
    }))
  },
  getVideo: async ({ id }) => {
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
    id:Int!, 
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
  type Picture {
    key:String!
    lastModified:String!
    url:String!
  }
  type Video {
    key:String!
    lastModified:String!
    url:String!
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
    getDancePictures:[Picture]
    getActingPictures:[Picture]
    getDanceVideos:[Video]
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
