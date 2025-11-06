import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarSalaPage } from './criar-sala.page';

describe('CriarSalaPage', () => {
  let component: CriarSalaPage;
  let fixture: ComponentFixture<CriarSalaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
