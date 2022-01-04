import { defHttp } from '@/utils/http/axios';
import { HellowModel } from '@/service/sample/helloworld/model/helloWorldModel';

enum Api {
  GetHellowWorld = '/sample/hello',
}

/**
 * @description: getHellowText
 */

export const getHellowText = (): Promise<HellowModel> => {
  return defHttp.get<HellowModel>({ url: Api.GetHellowWorld });
};
