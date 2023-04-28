import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Guess } from 'src/app/models';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})


export class AnswerComponent implements OnInit{

  board!: Guess

  @Output()
  gameStart = new Subject<Guess>()

  ngOnInit(): void {
    this.board = this.setBoard()
    this.gameStart.next(this.board)
  }


  private setBoard(): Guess{
    const COLORS: ('R' | 'B' | 'G' | 'Y' | 'O' | 'P')[] = ['R', 'B', 'G', 'Y', 'O', 'P'];
    for(let i = 0; i < 4; i++){
      const randomIndex = Math.floor(Math.random() * COLORS.length);
      this.board[`color${i+1}` as keyof Guess] = COLORS[randomIndex];
      COLORS.splice(randomIndex, 1);
    }
    return this.board;
  }



  private randNum(size=5): number{
    return Math.floor((Math.random()*6))

  }
}

