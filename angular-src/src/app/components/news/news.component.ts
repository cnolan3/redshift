import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: any[];
  searchType: String;
  searchVal: String;
  curPage: number;
  numPages: number;
  pageSize: number;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.pageSize = 10;
    this.numPages = 0;
    this.curPage = 1;
    this.dataService.getLatestArts(this.pageSize, 0).subscribe((data) => {
      this.articles = data.articles;

      let a = 0;
      if(!(data.count % this.pageSize))
        a = 1;

      this.numPages = Math.floor(data.count / this.pageSize) - a + 1;
    });

    this.searchType = 'title';
  }

  search() {
    this.dataService.searchArticle(this.searchType, this.searchVal, this.pageSize, 0).subscribe((data) => {
      this.articles = data.articles;

      let a = 0;
      if(!(data.count % this.pageSize))
        a = 1;

      this.numPages = Math.floor(data.count / this.pageSize) - a + 1;
    });
  }

  setType(t) {
    this.searchType = t;
  }

  changePage(change) {
    if((this.curPage + change) > 0 && (this.curPage + change) <= this.numPages) {
      this.curPage += change;
      this.dataService.searchArticle(this.searchType, this.searchVal, this.pageSize, (this.curPage * this.pageSize) - 1).subscribe((data) => {
        this.articles = data.articles;

        let a = 0;
        if(!(data.count % this.pageSize))
          a = 1;

        this.numPages = Math.floor(data.count / this.pageSize) - a + 1;
      });
    }
  }

}
