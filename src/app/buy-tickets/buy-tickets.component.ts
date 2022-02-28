import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, FormControl } from '@angular/forms';
import { RandomNumService } from '../random-num.service';

@Component({
  selector: 'lotto-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})

export class BuyTicketsComponent implements OnInit {
  ticketForm = this.fb.group({
    lines: this.fb.array([])
  });
  constructor(private fb: FormBuilder, private RandomNumService: RandomNumService) { }

  get lines() {
    return this.ticketForm.controls["lines"] as FormArray;
  }

  addLine() {
    const lineForm = this.fb.group({
      num1: ['', Validators.required],
      num2: ['', Validators.required],
      num3: ['', Validators.required],
      num4: ['', Validators.required],
      num5: ['', Validators.required],
      num6: ['', Validators.required]
    });

    this.lines.push(lineForm);
  }

  deleteLine(lineIndex: number) {
    this.lines.removeAt(lineIndex);
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.lines);
    }
  }

  randomise(lineIndex: number) {
    var i = 0;
    this.RandomNumService.getrandNums().subscribe({
      next: data => {
        data.forEach(digit => {
          switch (i) {
            case 0:
              this.lines.controls[lineIndex].patchValue({ num1: digit });
              i++;
              break;
            case 1:
              this.lines.controls[lineIndex].patchValue({ num2: digit });
              i++;
              break;
            case 2:
              this.lines.controls[lineIndex].patchValue({ num3: digit });
              i++;
              break;
            case 3:
              this.lines.controls[lineIndex].patchValue({ num4: digit });
              i++;
              break;
            case 4:
              this.lines.controls[lineIndex].patchValue({ num5: digit });
              i++;
              break;
            case 5:
              this.lines.controls[lineIndex].patchValue({ num6: digit });
              i++;
              break;
          }
        })
      }
    });
  }

  validateAllFormFields(formArray: FormArray | FormGroup) {

    Object.keys(formArray.controls).forEach(field => {

      console.log(formArray.value[field]);
      const control = formArray.get(field);
      for (let i = 0; i < 5; i++) {
        console.log("Block statement execution no." + i);
        console.log(formArray.value[field] + " target");
        console.log(formArray.value[i] + " iteration");
        if (formArray.value[field] == formArray.value["num"+i]) {

        }
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ngOnInit(): void {
    this.addLine();
  }

}
