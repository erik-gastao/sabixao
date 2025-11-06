import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaSalasPage } from './lista-salas.page';

describe('ListaSalasPage', () => {
  let component: ListaSalasPage;
  let fixture: ComponentFixture<ListaSalasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
