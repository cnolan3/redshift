import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  title: String;
  author: String;
  date: String;
  body: String;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dataService.getArticle(params.id).subscribe((data) => {
        this.title = data.article.title;
        this.author = data.article.author;
        this.date = data.article.date;
        this.body = data.article.body;
      });
    });
  }

}
