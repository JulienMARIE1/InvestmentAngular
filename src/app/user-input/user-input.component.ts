import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = 0.0;
  annualInvestment = 0.0;
  expectedReturn = 0.0;
  duration = 0;
  @Output() calculate = new EventEmitter<InvestmentInput>();
  onCalculate(){
    console.log(this.initialInvestment + " " + this.annualInvestment + " " + this.expectedReturn + " " + this.duration);
    this.calculate.emit({
      initialInvestment : this.initialInvestment,
      duration : this.duration,
      expectedReturn : this.expectedReturn,
      annualInvestment : this.annualInvestment
    });
  }
}
