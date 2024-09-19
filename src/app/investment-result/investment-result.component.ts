import { Component, input, Input } from '@angular/core';
import { InvestmentOutput } from '../investment-output.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input() results?: InvestmentOutput[];
}
