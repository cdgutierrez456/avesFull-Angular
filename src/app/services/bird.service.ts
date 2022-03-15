import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bird } from '../models/bird';
import { TontZonas } from '../models/tont_zonas';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  URL_API = 'http://localhost:4000/api/birds';

  objTontZonas: TontZonas = {
    cod_zona: '',
    zone_name: '',
  }

  selectedBird: Bird = {
    common_name: '',
    scientific_name: '',
    image: '',
    tont_zonas: this.objTontZonas,
  };

  birds: Bird[] = [];

  constructor(private http: HttpClient) {}

  getBirds() {
    return this.http.get<Bird[]>(this.URL_API);
  }

  getBird(_id: string) {
    return this.http.get(`${this.URL_API}/${_id}`)
  }

  createBird(bird: Bird) {
    return this.http.post(this.URL_API, bird)
  }

  updateBird(bird: Bird) {
    return this.http.put(`${this.URL_API}/${bird._id}`, bird)
  }

  deleteBird(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

}
