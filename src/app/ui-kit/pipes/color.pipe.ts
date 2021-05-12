import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  colors = {
    niagara: '#07A39D', // primary color
    fern: '#5BBA5E', // success color
    tangerine: '#F18F01', // warning color
    carnation: '#FA6969', // danger color
    downriver: '#0A2540',
    cinder: '#151720',
    'cape-cod': '#353636',
    nobel: '#B3B3B3',
    'gray-chateau': '#9CA6B1',
    'black-squeeze': '#F3F7FB',
    'dove-gray': '#666666',
    'catskill-white': '#F7F9FB',
    'mine-shaft': '#3E3E3E',
    silver: '#C1C1C1',
    'cloud-burst': '#213951',
    mercury: '#E5E5E5',
    'swans-down': '#DBEEED',
  };

  transform(value: string): string {
    return this.colors[value] || value;
  }
}
