import { OccurrenceTrackerPage } from './app.po';

describe('occurrence-tracker App', () => {
  let page: OccurrenceTrackerage;

  beforeEach(() => {
    page = new OccurrenceTrackerage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
