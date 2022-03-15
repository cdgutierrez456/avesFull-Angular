import { Component, OnInit } from '@angular/core';
import { BirdService } from '../../services/bird.service';
import { Form, NgForm } from '@angular/forms';
import { Bird } from '../../models/bird';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css'],
  providers: [BirdService]
})
export class BirdComponent implements OnInit {

  constructor(public birdService: BirdService) { }

  ngOnInit(): void {
    this.getBirds();
  }

  getBirds() {
    this.birdService.getBirds().subscribe(
      res => {
        this.birdService.birds = res;
      },
      err => console.error(err)
    )
  }

  addBirds(form: NgForm) {
    if (form.value._id) {
      this.birdService.updateBird(form.value).subscribe(
        res => {
          console.log(res)
        },
        err => console.error(err)
      )
    } else {
      this.birdService.createBird({
        common_name: form.value.common_name,
        scientific_name: form.value.scientific_name,
        tont_zonas: {
          cod_zona: form.value.cod_zona,
          zone_name: form.value.zone_name
        }
      }).subscribe(
        res => {
          this.getBirds();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  deleteBird(id: any) {
    const res = confirm('¿Seguro de eliminar el ave?')
    if(res) {
      this.birdService.deleteBird(id).subscribe(
        (res) => {
          this.getBirds()
        },
        err => console.error(err)
      )
    }
  }

  editBird(bird: Bird) {
    this.birdService.selectedBird = bird;
  }

  searchBird(valueName: Form) {
    console.log(valueName)
  }

  searchBirdByZone(zoneName: Form) {
    console.log(zoneName)
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
