import { Component, OnInit } from '@angular/core';
import { BlogPostComponent } from 'src/app/blog/blogpost.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flutter-1',
  templateUrl: './flutter-1.component.html'
})
export class Flutter1Component extends BlogPostComponent implements OnInit {

  constructor(public titleService: Title) { super(titleService); }

  ngOnInit() {
    this.title = 'Building a QR entry-ticket system using Flutter: Part 1';
    this.date = 'August 1, 2019';
  }

}
