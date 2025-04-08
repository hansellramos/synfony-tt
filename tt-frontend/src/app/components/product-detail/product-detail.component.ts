import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    
    if (!id || isNaN(+id)) {
      this.error = 'Invalid product ID';
      this.loading = false;
      return;
    }

    this.productService.getProduct(+id).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error loading product. Please try again later.';
        this.loading = false;
        console.error('Error fetching product:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
