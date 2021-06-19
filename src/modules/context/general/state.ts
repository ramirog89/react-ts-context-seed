import { GeneralModel } from '../../models';

export interface IState {
  toastList: GeneralModel.IToast[];
};

export const initialState: IState = {
  toastList: []
}
