import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: any[];
  searchType: number;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.dataService.getLatestArts(10, 0).subscribe((data) => {
      this.articles = data.articles;
    });

    this.searchType = 0;
  }

  setType(t) {
    this.searchType = t;
  }

}
