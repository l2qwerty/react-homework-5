export const electronicsApi = [
  { id: 1, name: 'laptops' },
  { id: 2, name: 'smartphones' },
];

export const marksApi = [
  { id: 1, mark: 'First' },
  { id: 2, mark: 'Second' },
  { id: 3, mark: 'Third' },
];

export const laptopsApi = [
  {
    id: 1,
    mark: 'First',
    model: '1',
  },
  {
    id: 2,
    mark: 'First',
    model: '12',
  },
  {
    id: 3,
    mark: 'First',
    model: '123',
  },
  {
    id: 4,
    mark: 'Second',
    model: '1234',
  },
  {
    id: 5,
    mark: 'Second',
    model: '12345',
  },
  {
    id: 6,
    mark: 'Third',
    model: '123456',
  },
  {
    id: 7,
    mark: 'Third',
    model: '1234567',
  },
];

export const getMark = (mark) => laptopsApi.filter((e) => e.mark === mark);

export const getModel = (model) => laptopsApi.find((e) => e.model === model);
