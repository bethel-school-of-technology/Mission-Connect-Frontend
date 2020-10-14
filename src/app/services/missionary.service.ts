import { Injectable } from '@angular/core';

import { Missionary } from '../models/missionary';

@Injectable({
  providedIn: 'root'
})
export class MissionaryService {
  missionaries: Missionary[] = [
    {
      "_id": 1,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Sam and Margaret Bennet",
      "continent": "Europe",
      "country": "Ukraine"
    },{
      "_id": 2,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Peter Mangioli",
      "continent": "Africa",
      "country": "Zambia"
    },{
      "_id": 3,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Mahmoud Malawi",
      "continent": "Africa",
      "country": "Mozambique"
    },{
      "_id": 4,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Markus Jobe",
      "continent": "Asia",
      "country": "Syria"
    },{
      "_id": 5,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Paul and Erin Anderson",
      "continent": "Middle East",
      "country": "Israel"
    },{
      "_id": 6,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Jane Bortras",
      "continent": "Asia",
      "country": "Vietnam"
    },{
      "_id": 7,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Joshua and Laura Gladstein",
      "continent": "Africa",
      "country": "Sudan"
    },{
      "_id": 8,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Hamish and Corrine McFadden",
      "continent": "Middle East",
      "country": "Iraq"
    },{
      "_id": 9,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Matt and Josephine Hurley",
      "continent": "Asia",
      "country": "Russia"
    },{
      "_id": 10,
      "profilePic": "http://placeimg.com/640/480/people",
      "name": "Tim and Angela Neuman",
      "continent": "Africa",
      "country": "Ethiopia"
    }
  ]
  constructor() { }
}
