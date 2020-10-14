import { Injectable } from '@angular/core';

import { Missionary } from '../models/missionary';

@Injectable({
  providedIn: 'root'
})
export class MissionaryService {
  missionaries: Missionary[] = [
    {
      "_id": 1,
      "profilePic": "../../assets/images/profilePics/01/missionary1.jpg",
      "name": "Sam and Margaret Bennet",
      "continent": "Europe",
      "country": "Ukraine",
      "bio": "Lorem Ipsum"
    },{
      "_id": 2,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Peter Mangioli",
      "continent": "Africa",
      "country": "Zambia",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 3,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Mahmoud Malawi",
      "continent": "Africa",
      "country": "Mozambique",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 4,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Markus Jobe",
      "continent": "Asia",
      "country": "Syria",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 5,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Paul and Erin Anderson",
      "continent": "Middle East",
      "country": "Israel",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 6,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Jane Bortras",
      "continent": "Asia",
      "country": "Vietnam",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 7,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Joshua and Laura Gladstein",
      "continent": "Africa",
      "country": "Sudan",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 8,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Hamish and Corrine McFadden",
      "continent": "Middle East",
      "country": "Iraq",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 9,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Matt and Josephine Hurley",
      "continent": "Asia",
      "country": "Russia",
      "bio": "Lorem Ipsum"
    },
    {
      "_id": 10,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Tim and Angela Neuman",
      "continent": "Africa",
      "country": "Ethiopia",
      "bio": "Lorem Ipsum"
    }
  ]
  constructor() { }
}
