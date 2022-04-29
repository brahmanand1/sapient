import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})


// declare var jQuery: any;
export class RouteSixComponent implements OnInit {
  

  constructor() {}

  ngOnInit(): void {}
  onWindowScroll(event: any) {
    console.log(event);
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'box');
    newDiv.setAttribute('width', '200px');
    newDiv.setAttribute('height', '200px');

    let divnumber = $('.div > .box').length + 1;
    newDiv.setAttribute('id', 'divnumber-' + divnumber);

    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.border = '2px solid gray';
    newDiv.style.margin = 'auto';
    newDiv.style.marginTop = '2%';

    let button = document.createElement('button');
    button.setAttribute('id', 'btnid');
    button.innerHTML = 'Click';
    button.style.height = '30px';
    button.style.width = '116px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '80px';
    button.style.marginLeft = '40px';
    // height: 30px;
    // width: 116px;
    // cursor: pointer;
    // margin-top: 80px;
    // margin-left: 40px;
    button.addEventListener('click', () => this.buttonClicked(divnumber));

    newDiv.appendChild(button);

    let parentDiv: any = document.querySelector('.div');
    parentDiv.appendChild(newDiv);
  }

  // onContainerScroll(event:any){
  //   console.log(event);

  // }

  buttonClicked(divnumber: any) {
    console.log(divnumber);
    alert(`Button ${divnumber} is clicked`);
  }
}
