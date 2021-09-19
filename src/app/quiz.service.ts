import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'In which sport is a pommel horse used? ',
      answer: [
        { option: 'Gymnastics', correct: true },
        { option: 'Polo', correct: false },
        { option: 'Swimming', correct: false },
        { option: 'SnowBoarding', correct: false }
      ]
    },
    {
      question: 'In which city is the Camp Nou football stadium? ',
      answer: [
        { option: 'London', correct: false },
        { option: 'Barcelona', correct: true },
        { option: 'Paris', correct: false },
        { option: 'Madrid', correct: false }

      ]
    }
    ,
    {
      question: 'What is the name of the New Zealand national rugby union team? ',
      answer: [
        { option: 'All Blacks', correct: true },
        { option: 'All Reds', correct: false },
        { option: 'All Greens', correct: false },
        { option: 'All Blues', correct: false }
      ]
    },
    {
      question: 'In which athletic event is the fosbury flop technique used? ',
      answer: [
        { option: 'Long Jump', correct: false },
        { option: 'Hurdles', correct: false },
        { option: 'Javelin', correct: false },
        { option: 'High Jump', correct: true }
      ]
    },
    {
      question: 'Which type of tennis court is played on at Wimbledon?',
      answer: [
        { option: 'Carpet', correct: false },
        { option: 'Hard', correct: false },
        { option: 'Clay', correct: false },
        { option: 'Grass', correct: true }
      ]
    },
    {
      question: 'In which sport is a shuttlecock used?',
      answer: [
        { option: 'Hockey', correct: false },
        { option: 'Squash', correct: false },
        { option: 'Badminton', correct: true },
        { option: 'Table Tennis', correct: false }
      ]
    },
    {
      question: 'How wide is each lane in an Olympic size swimming pool? ',
      answer: [
        { option: '2 meters', correct: false },
        { option: '1.5 meter', correct: false },
        { option: '3 meter', correct: false },
        { option: '2.5 meter', correct: true }
      ]
    },
    {
      question: 'In cricket, how many runs does the batsman score if the ball is hit over the boundary without bouncing?',
      answer: [
        { option: '0', correct: false },
        { option: '10', correct: false },
        { option: '4', correct: false },
        { option: '6', correct: true }
      ]
    },
    {
      question: 'In which country were the 2016 Olympics held?',
      answer: [
        { option: 'Sauth Africa', correct: false },
        { option: 'Brazil', correct: true },
        { option: 'Japan', correct: false },
        { option: 'united Kingdom', correct: false }
      ]
    },
    {
      question: 'In which country were the 2016 Olympics held?',
      answer: [
        { option: 'Sauth Africa', correct: false },
        { option: 'Brazil', correct: true },
        { option: 'Japan', correct: false },
        { option: 'united Kingdom', correct: false }
      ]
    }

  ]
  constructor() { }

  getQuizzes() {
    return this.quizzes;
  }
}
