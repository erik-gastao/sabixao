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
  IonButton,
  IonIcon,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonText,
  IonFab,
  IonFabButton,
  ToastController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, logOut, refresh, people } from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';
import { SalasService } from '../../services/salas.service';
import { Sala } from '../../models/models';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.page.html',
  styleUrls: ['./lista-salas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge,
    IonRefresher,
    IonRefresherContent,
    IonSpinner,
    IonText,
    IonFab,
    IonFabButton,
    CommonModule,
    FormsModule
  ]
})
export class ListaSalasPage implements OnInit {
  salas: Sala[] = [];
  loading = false;
  userName = '';

  constructor(
    private authService: AuthService,
    private salasService: SalasService,
    private router: Router,
    private toastController: ToastController
  ) {
    addIcons({ add, logOut, refresh, people });
  }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    this.userName = user.name;
    this.loadSalas();
  }

  loadSalas(event?: any) {
    this.loading = !event;

    const user = this.authService.getCurrentUser();
    const creatorId = user?.id;

    // CHAMADA AO BACKEND: GET /api/salas?creatorId=xxx
    this.salasService.getSalas(creatorId).subscribe({
      next: (salas) => {
        this.salas = salas;
        this.loading = false;
        if (event) {
          event.target.complete();
        }
      },
      error: async (error) => {
        this.loading = false;
        if (event) {
          event.target.complete();
        }
        await this.showToast('Erro ao carregar salas', 'danger');
        console.error(error);
      }
    });
  }

  goToCreateSala() {
    this.router.navigate(['/criar-sala']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      draft: 'medium',
      waiting: 'warning',
      running: 'success',
      finished: 'danger'
    };
    return colors[status] || 'medium';
  }

  getStatusText(status: string): string {
    const texts: Record<string, string> = {
      draft: 'Rascunho',
      waiting: 'Aguardando',
      running: 'Em andamento',
      finished: 'Finalizada'
    };
    return texts[status] || status;
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

