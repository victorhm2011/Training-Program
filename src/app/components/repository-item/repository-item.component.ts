import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/Repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.css']
})
export class RepositoryItemComponent implements OnInit {

  @Input() repositoryInput: Repository;

  constructor(private repositoryService: RepositoryService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  setClasses(){
    let clases = {
      repositoryContainer: true,
    }
    return clases;
  }

}
