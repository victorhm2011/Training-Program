import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/Repository';
import { RepositoryService } from 'src/app/services/repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  public page:number;

  repositories:Repository[]

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const userLogin = this.route.snapshot.paramMap.get("userLogin");
    this.repositoryService.getRepositories(userLogin).subscribe(repositories=>{this.repositories=repositories});
  }

}
