import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {

  constructor() { }

  visitExternalLink(topHeadline) {
    window.open(topHeadline.url, "_blank");
  }
}
