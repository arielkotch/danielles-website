const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const axios = require('axios');
const AWS = require('aws-sdk');
const app = express();
const DANIELLE_ID = '1179260';
const dotenv = require('dotenv');
dotenv.config();

AWS.config.update({ accessKeyId: process.env.aws_access_key_id
  , secretAccessKey: process.env.aws_secret_access_key
  , region: 'us-east-2' });
const s3 = new AWS.S3();
const port = process.env.PORT || 4000;


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

const tmdb = `https://api.themoviedb.org/3/person/${DANIELLE_ID}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`;
const actorDetails = `https://api.themoviedb.org/3/person/${DANIELLE_ID}?api_key=${process.env.API_KEY}&language=en-US`;
const root = {
  getMovie: async ({ id }) => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`,
    );
    return data;
  },
  getDancePictures: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/dance/pictures/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: process.env.AWS_PREFIX + Key
    }))
  },
  getActingPictures: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/acting/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: process.env.AWS_PREFIX + Key
    }))
  },
  getDanceVideos: async () => {
    const data = await getAWSObjects({ key: 'daniellekotch/dance/videos/' })
    return data.Contents.filter(({ Size }) => Size > 0).map(({ LastModified,Key }) => ({
      lastModified: LastModified,
      key: Key,
      url: process.env.AWS_PREFIX + Key
    }))
  },
  getVideo: async ({ id }) => {
    const { data: { results } } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`,
    );
    return results;
  },
  getMovies: async () => {
    const {
      data: { cast },
    } = await axios.get(tmdb);
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`,
    );
    console.log(res.data.genres)

    
    return cast;
  },
  getTVShows: async () => {
    const {
      data: { cast },
    } = await axios.get(
      `https://api.themoviedb.org/3/person/${DANIELLE_ID}/tv_credits?api_key=${process.env.API_KEY}&language=en-US`,
    );
    return cast;
  },
  getActor: async () => {
    const { data } = await axios.get(actorDetails);
    const {
      data: { profiles },
    } = await axios.get(
      `https://api.themoviedb.org/3/person/${DANIELLE_ID}/images?api_key=${process.env.API_KEY}`,
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

app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));
