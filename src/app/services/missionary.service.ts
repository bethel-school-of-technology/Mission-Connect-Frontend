import { Injectable } from '@angular/core';

import { Missionary } from '../models/missionary';

@Injectable({
  providedIn: 'root'
})
export class MissionaryService {
  missionaries: Missionary[] = [
    {
      "_id": 1,
      "profilePic": "../../assets/images/profilePics/01/missionary01.jpg",
      "name": "Sam and Margaret Bennet",
      "continent": "Europe",
      "country": "Ukraine",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 2,
      "profilePic": "../../assets/images/profilePics/02/missionary02.jpg",
      "name": "Peter Mangioli",
      "continent": "Africa",
      "country": "Zambia",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 3,
      "profilePic": "../../assets/images/profilePics/03/missionary03.jpg",
      "name": "Mahmoud Malawi",
      "continent": "Africa",
      "country": "Mozambique",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 4,
      "profilePic": "../../assets/images/profilePics/04/missionary04.jpg",
      "name": "Markus Jobe",
      "continent": "Asia",
      "country": "Syria",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 5,
      "profilePic": "../../assets/images/profilePics/05/missionary05.jpg",
      "name": "Paul and Erin Anderson",
      "continent": "Middle East",
      "country": "Israel",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 6,
      "profilePic": "../../assets/images/profilePics/06/missionary06.jpg",
      "name": "Jane Bortras",
      "continent": "Asia",
      "country": "Vietnam",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 7,
      "profilePic": "../../assets/images/profilePics/07/missionary07.jpg",
      "name": "Joshua and Laura Gladstein",
      "continent": "Africa",
      "country": "Sudan",
      "bio": "Lorem Ipsum"
    }, {
      "_id": 8,
      "profilePic": "../../assets/images/profilePics/08/missionary08.jpg",
      "name": "Hamish and Corrine McFadden",
      "continent": "Middle East",
      "country": "Iraq",
      "bio": "Lorem Ipsum"
    }, {
      "_id": 9,
      "profilePic": "../../assets/images/profilePics/09/missionary09.jpg",
      "name": "Matt and Josephine Hurley",
      "continent": "Asia",
      "country": "Russia",
      "bio": "Lorem Ipsum"
    }, 
    {
      "_id": 10,
      "profilePic": "../../assets/images/profilePics/10/missionary10  .jpg",
      "name": "Tim and Angela Neuman",
      "continent": "Africa",
      "country": "Ethiopia",
      "bio": "Lorem Ipsum"
    }
  ];
    constructor() { }
}
