import { Component, Input } from '@angular/core';
import { ILabel } from '../../../interfaces/index';

@Component({
  selector: 'app-label-container',
  templateUrl: './label-container.component.html',
  styleUrls: ['./label-container.component.scss']
})


export class LabelContainerComponent {
    @Input() labels: ILabel[];
}
