import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Paintings } from '../models/paintings.model';
import { Music } from '../models/music.model';


export class MockApiService implements InMemoryDbService {

  createDb() {
    const paintings: Paintings[] = [
      { id: 1, name: 'Guernica', artistName: 'YAsh', paintingCost: 500000, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', artistImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' },
      { id: 2, name: 'La Vie', artistName: 'Hima', paintingCost: 450000, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', artistImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' },
      { id: 3, name: 'Untitled by Picasso', artistName: 'Dharini', paintingCost: 350000, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', artistImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' },
      { id: 4, name: 'Portrait of Ambroise Vollard', artistName: 'Viren', paintingCost: 400000, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', artistImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' }
    ];

    const music: Music[] = [
      { id: 5, instrumentName: 'Guernica', teacherName: 'YAsh', cost: 500000, instrumentImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', details: 'US', experience: 5 },
      { id: 6, instrumentName: 'La Vie', teacherName: 'Hima', cost: 450000, instrumentImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', details: 'US', experience: 3 },
      { id: 7, instrumentName: 'Untitled by Picasso', teacherName: 'Dharini', cost: 350000, instrumentImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', details: 'Canada', experience: 2 },
      { id: 8, instrumentName: 'Portrait of Ambroise Vollard', teacherName: 'Viren', cost: 400000, instrumentImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg', details: 'Canada', experience: 1 }
    ];
    return { paintings, music };
  }
}
