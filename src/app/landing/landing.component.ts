import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  showContent = false; // Controla si se muestra el contenido principal

  acceder() {
    this.showContent = true; // Cambia a true al hacer clic
  }
}
