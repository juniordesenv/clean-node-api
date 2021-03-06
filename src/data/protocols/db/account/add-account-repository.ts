import { AddAccountParams } from '~/domain/usecases/account/addAccount';
import { AccountModel } from '~/domain/models';

export interface AddAccountRepository {
  add(accountData: AddAccountParams): Promise<AccountModel>
}
