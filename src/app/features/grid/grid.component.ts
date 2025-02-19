import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [CommonModule]
})
export class GridComponent {
  boxes = Array(9).fill({ clicked: false, order: -1 });
  clickOrder: number[] = [];
  private currentOrder = 0;

  onBoxClick(index: number): void {
    if (!this.boxes[index].clicked) {
      this.boxes[index] = { clicked: true, order: this.currentOrder++ };
      this.clickOrder.push(index);
    }
  }

  onReset(): void {
    let delay = 0;
    this.clickOrder.forEach((index) => {
      setTimeout(() => {
        this.boxes[index] = { clicked: false, order: -1 };
      }, delay);
      delay += 300; // Adjust delay for animation
    });
    this.clickOrder = [];
    this.currentOrder = 0;
  }
}
