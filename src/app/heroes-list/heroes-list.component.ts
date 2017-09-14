import { Component, OnInit } from '@angular/core';
import { OpendotaService } from '../opendota.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private OpendotaService: OpendotaService) { }

  heroes = []

  ngOnInit() {
  }

  loadHeroes() {
    this.OpendotaService.getHeroes().subscribe(result => this.heroes = result );
  }

}
