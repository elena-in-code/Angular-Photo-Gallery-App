import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}

const IMAGES =[
	{"id": 1, "category":"boats", "caption": "Purple Sunset", "url": "assets/img/boat_01.jpeg"},
	{"id": 2, "category": "boats", "caption": "On the way", "url": "assets/img/boat_02.jpeg"},
	{"id": 3, "category": "boats", "caption": "View from a above", "url": "assets/img/boat_03.jpeg"},
	{"id": 4, "category": "boats", "caption": "Pirate Style", "url": "assets/img/boat_04.jpeg"},
	{"id": 5, "category": "boats", "caption": "Perfect Parking Spot", "url": "assets/img/boat_05.jpeg"},
	{"id": 6, "category": "camping", "caption": "Night Sky", "url": "assets/img/camping_01.jpeg"},
	{"id": 7, "category": "camping", "caption": "View from inside the tent", "url": "assets/img/camping_02.jpeg"},
	{"id": 8, "category": "camping", "caption": "Starting the fire", "url": "assets/img/camping_03.jpeg"},
	{"id": 9, "category": "camping", "caption": "In the woods", "url": "assets/img/camping_04.jpeg"},
	{"id": 10, "category": "camping", "caption": "Mountains", "url": "assets/img/camping_05.jpeg"},
	{"id": 11, "category": "camping", "caption": "Camping is sharing", "url": "assets/img/camping_06.jpeg"},
	{"id": 12, "category": "camping", "caption": "Camping with Style", "url": "assets/img/camping_07.jpeg"},
	{"id": 13, "category": "library", "caption": "My Kind of Wall", "url": "assets/img/library_01.jpeg"},
	{"id": 14, "category": "library", "caption": "Open Book", "url": "assets/img/library_02.jpeg"},
	{"id": 15, "category": "library", "caption": "My favorite pillow", "url": "assets/img/library_03.jpeg"},
	{"id": 16, "category": "library", "caption": "Books all over", "url": "assets/img/library_04.jpeg"},
	{"id": 17, "category": "library", "caption": "Books all over", "url": "assets/img/library_05.jpeg"},
]