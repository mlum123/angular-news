import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { Publications } from '../../models/Publications';
import { ExternalLinkService } from '../../services/external-link.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications:Publications;

  constructor(private publicationService:PublicationService, private externalLinkService: ExternalLinkService) { }

  ngOnInit(): void {
    this.publicationService.getPublications().subscribe(publications => {
      this.publications = publications;
    });
  }

  onClick(topHeadline) {
    this.externalLinkService.visitExternalLink(topHeadline);
  }

}
