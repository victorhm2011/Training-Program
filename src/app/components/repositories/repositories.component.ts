import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/Repository';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories:Repository[]

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
  }

}
