import { apiEnd } from "../data/confg.json";

export const getSingleURL = (endpoint) => `${apiEnd}${endpoint}/`;

export const getMultipleURL = (endpoint, offset, limit) =>
  `${apiEnd}${endpoint}/?offset=${offset}&limit=${limit}`;
