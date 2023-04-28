import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Guess } from 'src/app/models';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit{
    // create forgroup variables
    form!: FormGroup
    guessArray!: FormArray
    board!: Guess

    @Output()
    onGuess = new Subject<Guess>()

    // instantiate form builder
    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
      this.form = this.createForm()
    }

    makeGuess(){
      const guess = this.form.value
      console.info("your Guess", guess)
    }

    private setBoard(): Guess{
      
      this.board.color1=
      this.board.color2=
      this.board.color3=
      this.board.color4=
      return this.board
    }

    private createForm(): FormGroup{
      return this.fb.group({
        color1: this.fb.control<string>('',[Validators.required]),
        color2: this.fb.control<string>('',[Validators.required]),
        color3: this.fb.control<string>('',[Validators.required]),
        color4: this.fb.control<string>('',[Validators.required])
      })
    }

}
