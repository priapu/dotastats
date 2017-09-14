import { Component, OnInit } from '@angular/core';
import { OpendotaService } from '../opendota.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  profile = {}
  loaded = false

  constructor(private OpendotaService: OpendotaService) { }

  ngOnInit() {
    this.OpendotaService.getProfile().subscribe(result =>
      {
        this.profile = result
        this.loaded = true
      }
    );
  }

}
