import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'loading-overlay',
  imports: [NgIf, MatProgressSpinnerModule],
  template: `
    <div *ngIf="isLoading" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="w-fit rounded-xl bg-black/10 p-4">
        <mat-spinner [diameter]="40"></mat-spinner>
      </div>
    </div>
  `,
})
export class LoadingOverlayComponent {
  @Input() isLoading: boolean = false;
}
