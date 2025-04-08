import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <header>
        <h1>Product Catalog</h1>
      </header>
      
      <main>
        <router-outlet></router-outlet>
      </main>
      
      <footer>
        <p>&copy; 2025 Product Catalog App</p>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Catalog';
}
