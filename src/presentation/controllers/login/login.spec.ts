import { LoginController } from './login';
import { badRequest } from '../../helpers/httpHelper';
import { MissingParamError } from '../../errors';

const makeSut = () => new LoginController();

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        password: 'any_password',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')));
  });
});
