import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  searchType: String;
  searchVal: String;
  stars: any;

  constructor(private dataService: DataService,
              private el: ElementRef) { }

  ngOnInit() {
    this.searchType = 'designation';
    this.searchVal = ' ';

  }

  search($event) {
    this.searchVal = $event.target.value;

    this.dataService.searchStar(this.searchVal, this.searchType).subscribe((data) => {

      console.log(data);

      this.stars = data.hipstars;

    });
  }

  setType(t) {
    this.searchType = t;
  }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#curve');

    let fileCount: number = inputEl.files.length;

    let formData = new FormData();

    if(fileCount > 0) {
      formData.append('curve', inputEl.files.item(0));

      this.dataService.uploadFile(formData).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
