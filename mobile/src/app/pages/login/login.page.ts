import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSpinner,
  ToastController
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSpinner,
    CommonModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {
  credentials: LoginRequest = {
    email: '',
    password: ''
  };
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Verificar se já está logado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/lista-salas']);
    }
  }

  async login() {
    if (!this.credentials.email || !this.credentials.password) {
      await this.showToast('Preencha todos os campos', 'warning');
      return;
    }

    this.loading = true;

    // CHAMADA AO BACKEND: POST /api/auth/login
    this.authService.login(this.credentials).subscribe({
      next: async (response) => {
        this.loading = false;
        await this.showToast(`Bem-vindo, ${response.user.name}!`, 'success');
        this.router.navigate(['/lista-salas']);
      },
      error: async (error) => {
        this.loading = false;
        const message = error.error?.message || 'Erro ao fazer login';
        await this.showToast(message, 'danger');
      }
    });
  }

  useDemo() {
    this.credentials.email = 'demo@sabixao.dev';
    this.credentials.password = '123456';
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}

