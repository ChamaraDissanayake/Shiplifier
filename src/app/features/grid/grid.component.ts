import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Box } from '../../shared/models/box';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [CommonModule]
})
export class GridComponent {
  boxes: Box[] = Array(9).fill({ clicked: false, order: -1 });
  clickOrder: number[] = [];
  private currentOrder: number = 0;

  onBoxClick(index: number): void {
    if (!this.boxes[index].clicked) {
      this.boxes[index] = { clicked: true, order: this.currentOrder++ };
      this.clickOrder.push(index);
    }
  }

  onReset(): void {
    let delay: number = 0;
    this.clickOrder.forEach((index) => {
      setTimeout(() => {
        const boxElement = document.querySelectorAll('.box')[index] as HTMLElement;
        if (boxElement) {
          boxElement.classList.add('resetting');
          setTimeout(() => {
            boxElement.classList.remove('resetting');
            this.boxes[index] = { clicked: false, order: -1 };
          }, 1000); // Match the duration of unfillBox animation
        }
      }, delay);
      delay += 500; // Adjust delay for each box reset
    });
    this.clickOrder = [];
    this.currentOrder = 0;
  }

}
