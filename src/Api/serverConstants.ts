const BASE_URL = 'http://127.0.0.1:3005';

export const REQUEST_URL = {
  register: `${BASE_URL}/api/user/register`,
  login: `${BASE_URL}/api/user/login`,
  update: `${BASE_URL}/api/user`,
};

export const REQUEST_METOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const RESPONSE_STATUS = {
  OK: 200,
  CREATED: 201,
  FORBIDDEN: 403,
};

export const CONTENT_TYPE_JSON = { 'Content-Type': 'application/json' };