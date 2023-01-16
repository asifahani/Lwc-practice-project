import { LightningElement } from 'lwc';

export default class Example extends LightningElement {

}


let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]
  cars.foreach(function(cars){
    console.log(cars.type);
  });