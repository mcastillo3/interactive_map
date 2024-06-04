import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private elementRef: ElementRef, private dataService: DataService) {}

  ngAfterViewInit() {
    const svg = this.elementRef.nativeElement.querySelector('svg');
    const paths = svg.querySelectorAll('path');

    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('mouseenter', this.highlightCountry.bind(this));
      path.addEventListener('mouseleave', this.resetHighlight.bind(this));
    });
  }

  highlightCountry(event: MouseEvent) {
    const element = event.target as SVGPathElement;
    const id = element.id;
    const target = document.getElementById(id);
    target!.style.fill = '#92DEF8';
    this.dataService.setHighlightedCountry(id);
  }

  resetHighlight(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    target.style.fill = '';
    this.dataService.setHighlightedCountry('');
  }
}
