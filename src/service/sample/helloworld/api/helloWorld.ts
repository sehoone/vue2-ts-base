import { defHttp, defHttpOpt } from '@/utils/http/axios';
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
/**
 * @description: getHellowTextOpt
 * defHttpOpt(axois request config 재정의)
 */
export const getHellowTextOpt = (): Promise<HellowModel> => {
  return defHttpOpt({ timeout: 200 * 1000 }).get<HellowModel>({
    url: Api.GetHellowWorld,
  });
};
