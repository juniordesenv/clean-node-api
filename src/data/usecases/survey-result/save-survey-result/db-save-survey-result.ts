import { SurveyResultModel } from '~/domain/models/survey-result';
import { SaveSurveyResultRepository } from '~/data/protocols/db/surveyResult/save-survey-result-repository';
import { SaveSurveyResult, SaveSurveyResultModel } from '~/domain/usecases/survey-result/save-survey-result';

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor(private readonly saveSurveyResultRepository: SaveSurveyResultRepository) {
  }

  async save(data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    return this.saveSurveyResultRepository.save(data);
  }
}