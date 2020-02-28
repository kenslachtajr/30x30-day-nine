import { async, TestBed } from '@angular/core/testing';
import { UiLibrariesModule } from './ui-libaries.module';

describe('UiLibrariesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiLibrariesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiLibrariesModule).toBeDefined();
  });
});
