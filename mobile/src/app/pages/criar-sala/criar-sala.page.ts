import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSpinner,
  IonText,
  IonRange,
  ToastController
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { SalasService } from '../../services/salas.service';
import { CreateSalaRequest } from '../../models/models';

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.page.html',
  styleUrls: ['./criar-sala.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    IonText,
    IonRange,
    CommonModule,
    FormsModule
  ]
})
export class CriarSalaPage implements OnInit {
  salaData = {
    name: '',
    maxPlayers: 20
  };
  loading = false;

  constructor(
    private authService: AuthService,
    private salasService: SalasService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  async createSala() {
    if (!this.salaData.name.trim()) {
      await this.showToast('Digite um nome para a sala', 'warning');
      return;
    }

    const user = this.authService.getCurrentUser();
    if (!user) {
      await this.showToast('Usuário não autenticado', 'danger');
      this.router.navigate(['/login']);
      return;
    }

    this.loading = true;

    const request: CreateSalaRequest = {
      name: this.salaData.name,
      maxPlayers: this.salaData.maxPlayers,
      creatorId: user.id
    };

    // CHAMADA AO BACKEND: POST /api/salas
    this.salasService.createSala(request).subscribe({
      next: async (sala) => {
        this.loading = false;
        await this.showToast(`Sala criada com PIN: ${sala.pin}`, 'success');
        this.router.navigate(['/lista-salas']);
      },
      error: async (error) => {
        this.loading = false;
        const message = error.error?.message || 'Erro ao criar sala';
        await this.showToast(message, 'danger');
        console.error(error);
      }
    });
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}

