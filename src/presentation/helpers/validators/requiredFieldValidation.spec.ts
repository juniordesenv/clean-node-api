import { RequiredFieldValidation } from './requiredFieldValidation';
import { MissingParamError } from '../../errors';

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validations fails', () => {
    const sut = new RequiredFieldValidation('field');

    const error = sut.validate({ name: 'any_name' });
    expect(error).toEqual(new MissingParamError('field'));
  });

  test('Shouldnot return if validations succeeds', () => {
    const sut = new RequiredFieldValidation('field');

    const error = sut.validate({ field: 'any_field' });
    expect(error).toBeFalsy();
  });
});
