import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {
  servicios = [
    {
      titulo: 'Desarrollo móvil Android',
      descripcion: 'Aplicaciones nativas o híbridas para dispositivos Android, adaptadas a tus necesidades reales.',
      imagen: '/desarrolloMovil.png'
    },
    {
      titulo: 'Desarrollo web',
      descripcion: 'Aplicaciones web modernas, escalables y seguras para automatizar procesos y conectar con tus clientes.',
      imagen: '/desarrolloWeb.png'
    },
    {
      titulo: 'ERP\'s personalizados',
      descripcion: 'Sistemas integrales para controlar inventarios, ventas, clientes y operaciones internas.',
      imagen: '/erp.png'
    },
    {
      titulo: 'Diseño de páginas web',
      descripcion: 'Sitios visuales, responsivos y personalizados para mostrar tu negocio con estilo profesional.',
      imagen: '/web.png'
    },
    {
      titulo: 'Menús de comida online',
      descripcion: 'Plataformas para mostrar platillos, precios y recibir pedidos desde cualquier dispositivo.',
      imagen: '/menu.png'
    },
    {
      titulo: 'Catálogos digitales',
      descripcion: 'Presentación visual de productos con filtros, categorías y experiencia de navegación fluida.',
      imagen: '/catalogo.png'
    }
  ];


}
