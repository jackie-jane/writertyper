import api from './ApiConfig';

export const readAllAuthors = async () => {
  const res = await api.get('/authors');
  return res.data;
}

export const readOneAuthor = async (id) => {
  const res = await api.get(`/authors/${id}`);
  return res.data;
}

export const readAllTextByAuthor = async (authorId) => {
  const res = await api.get(`/authors/${authorId}/texts`);
  return res.data;
}

export const readOneByAuthor = async (authorId, textId) => {
  const res = await api.get(`/authors/${authorId}/texts/${textId}`);
  return res.data;
}

export const deleteAuthor = async (authorId) => {
  const res = await api.delete(`/authors/${authorId}`)
  return res.data;
}

export const createAuthor = async (author) => {
  const res = await api.post('/authors', author);
  return res.data;
}

export const createText = async (authorId, textData) => {
  const resp = await api.post(`/authors/${authorId}/texts`, { text: textData });
  console.log(textData)
  return resp.data;
}

export const deleteText = async (authorId, textId) => {
  const resp = await api.delete(`/authors/${authorId}/texts/${textId}`);
}

export const editText = async (authorId, textId, textData) => {
  const resp = await api.put(`/authors/${authorId}/texts/${textId}`, { text: textData });
  return resp.data;
}

export const editAuthor = async (authorId, authorData) => {
  const resp = await api.put(`/authors/${authorId}`, { author: authorData });
  return resp.data;
}


