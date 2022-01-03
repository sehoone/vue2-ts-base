/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Data processing class, can be configured according to the project
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description: Process configuration before request
   */
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: RequestOptions
  ) => AxiosRequestConfig;

  /**
   * @description: Request successfully processed
   */
  transformRequestHook?: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => any;

  /**
   * @description: requestCatchHook
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<unknown>;

  /**
   * @description: request Interceptors
   */
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions
  ) => AxiosRequestConfig;

  /**
   * @description: response Interceptors
   */
  responseInterceptors?: (
    res: AxiosResponse<unknown>
  ) => AxiosResponse<unknown>;

  /**
   * @description: response InterceptorsCatch(인터셉터에서 exception이 발생했을때 처리)
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
