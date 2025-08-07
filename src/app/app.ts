import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/hero";
import { Servicios } from "./servicios/servicios";
import { Contacto } from "./contacto/contacto";
import { Footer } from "./footer/footer";
import { Nosotros } from "./nosotros/nosotros";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Servicios, Contacto, Footer, Nosotros],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('web');
}
