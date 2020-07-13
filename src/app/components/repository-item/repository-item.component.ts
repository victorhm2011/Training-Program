import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/Repository';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repositoryInput: Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
