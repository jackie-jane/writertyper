import api from './ApiConfig';

// export const readAllAuthors = async () => {
//   const res = await api.get('/authors');
//   return res.data;
// }

// export const readOneAuthor = async (id) => {
//   const res = await api.get(`/authors/${id}`);
//   return res.data;
// }

// export const readAllTextByAuthor = async (authorId) => {
//   const res = await api.get(`/authors/${authorId}/texts`);
//   return res.data;
// }

// export const readAllOneByAuthor = async (authorId, textId) => {
//   const res = await api.get(`/authors/${authorId}/texts/${textId}`);
//   return res.data;
// }

export const createAuthor = async (author) => {
  const res = await api.post('/authors', author);
  return res.data;
}

export const createText = async (authorId, textData) => {
  const resp = await api.post(`/authors/${authorId}`, { text: textData });
  return resp.data;
}

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
}

export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp;
}

export const addFlavor = async (flavorId, foodId) => {
  const resp = await api.put(`/flavors/${flavorId}/foods/${foodId}`);
  return resp.data;
}