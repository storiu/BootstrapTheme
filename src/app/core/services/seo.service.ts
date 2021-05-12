import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
  }

  setMeteTags(meta: { title?: string, description?: string, keywords?: string }): void {
    if (meta.title) {
      this.setTitle(meta.title);
    }
    if (meta.description) {
      this.setDescription(meta.description);
    }
    if (meta.keywords) {
      this.setKeywords(meta.keywords);
    }
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setDescription(description: string): void {
    this.meta.addTag({ name: 'description', content: description });
  }

  setKeywords(keywords: string): void {
    this.meta.addTag({ name: 'keywords', content: keywords });
  }
}
