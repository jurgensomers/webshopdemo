import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service'; 

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  list:any; 

  constructor(private countriesService:CountriesService) { }

  ngOnInit() {
    this.countriesService.getAll().subscribe(
      data => {this.list = data;}, 
      error => console.log(error));
  }

}
