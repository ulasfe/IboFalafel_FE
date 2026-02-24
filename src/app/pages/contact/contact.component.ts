import { Component, signal } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  imports: [GoogleMapsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  phone = signal('+48795012876');
  center: google.maps.LatLngLiteral = { lat: 51.11167867037646, lng: 17.02810998206718 };
  zoom = 16;
  googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJG52qJCzDD0cRD94WalGAhbQ';
   
  currentLang = signal<'pl' | 'en'>('pl');
  markerPosition: google.maps.LatLngLiteral = { lat: 51.11167867037646, lng: 17.02810998206718 };
  
  options: google.maps.MapOptions = {
    disableDefaultUI: true, 
    zoomControl: true,
    scrollwheel: false,
    styles: [{ featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#e8f5e9" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#c8e6c9" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#a5d6a7" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] } ]
  };
}
