import axios from 'axios';
import { throttledGetDataFromApi } from './index';

const sampleResponseData = [
  {
    id: 1,
    text: 'qui et atque',
  },
  {
    id: 2,
    text: 'facilis',
  },
  {
    id: 3,
    text: 'facilis aut consequatur',
  },
];

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const createAxiosInstance = jest.spyOn(axios, 'create');
    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({});

    await throttledGetDataFromApi('users');

    jest.runAllTimers();

    expect(createAxiosInstance.mock.calls[0]?.[0]).toStrictEqual({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const apiEndpoint = 'users';
    const axiosGetMock = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValue({});

    await throttledGetDataFromApi(apiEndpoint);

    jest.runAllTimers();

    expect(axiosGetMock.mock.calls[0]?.[0]).toBe(apiEndpoint);
  });

  test('should return response data', async () => {
    const apiUrl = 'users';

    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValue({ data: sampleResponseData });

    const apiResult = await throttledGetDataFromApi(apiUrl);

    jest.runAllTimers();

    expect(apiResult).toStrictEqual(sampleResponseData);
  });
});
