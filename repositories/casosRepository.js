import { v4 as uuidv4 } from 'uuid';

const cases = [];

const findAll = () => cases;

const findById = (id) => cases.find((c) => c.id === id);

const create = (data) => {
  const newCase = { ...data, id: uuidv4() };; //cria casos com uuidv4()
  cases.push(newCase);
  return newCase;
};

const update = (id, data) => {
  const index = cases.findIndex((c) => c.id === id);
  if (index === -1) return null;
  cases[index] = { ...data, id };
  return cases[index];
};

const patch = (id, partialData) => {
  const index = cases.findIndex((c) => c.id === id);
  if (index === -1) return null;
  cases[index] = { ...cases[index], ...partialData };
  return cases[index];
};

const remove = (id) => {
  const index = cases.findIndex((c) => c.id === id);
  if (index === -1) return false;
  cases.splice(index, 1);
  return true;
};

export { findAll, findById, create, update, patch, remove };