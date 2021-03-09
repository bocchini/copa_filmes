import api from './api';

import repositoy from '../models/movieModel';

interface IMovie {
  id: number;
  titulo: string;
  ano: string;
  nota: number;
  idapi: string;
}

async function getMoviesFromApi() {
  try {
    const dataJson = await api.get('');
    const moviesApi: IMovie[] = dataJson.data;
    for (let index = 0; index < moviesApi.length; index++) {
      const existMovie = await repositoy.findByIdApi(moviesApi[index].id);
      console.log(existMovie);
      if (!existMovie) {
        await repositoy.addMovie({
          idapi: moviesApi[index].id,
          titulo: moviesApi[index].titulo,
          nota: moviesApi[index].nota,
          ano: moviesApi[index].ano,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default getMoviesFromApi;
