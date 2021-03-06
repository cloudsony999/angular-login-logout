import { Component, OnInit } from '@angular/core';
import { HelloWordService } from '../hello-word.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  id:string;
  message: string;

  constructor(private helloWorldService: HelloWordService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.helloWorldService().subscribe( (result) => {
      this.id=result.id;
      this.message = result.content;
    });
  }

}
