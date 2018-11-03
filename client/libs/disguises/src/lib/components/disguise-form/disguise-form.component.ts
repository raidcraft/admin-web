import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Disguise, MineSkin } from '../../models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DisguisesService } from '../../services';
import { take } from 'rxjs/operators';

@Component({
  selector: 'faldoria-disguise-form',
  templateUrl: './disguise-form.component.html',
  styleUrls: ['./disguise-form.component.css']
})
export class DisguiseFormComponent implements OnInit {

  @Input() disguise = new Disguise();
  @Output() save = new EventEmitter<Disguise>();

  formGroup: FormGroup;
  loading = false;

  get playerName(): FormControl {
    return this.formGroup.get('skin_owner_name') as FormControl;
  }

  constructor(private fb: FormBuilder, private disguises: DisguisesService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      alias: this.fb.control(this.disguise.alias, Validators.required),
      description: this.fb.control(this.disguise.description),
      skin_owner_name: this.fb.control(this.disguise.skin_owner_name),
      skin_owner: this.fb.control({
        value: this.disguise.skin_owner,
        // disabled: true
      }),
      skin_texture: this.fb.control({
        value: this.disguise.skin_texture,
        // disabled: true
      }, Validators.required),
      skin_signature: this.fb.control({
        value: this.disguise.skin_signature,
        // disabled: true
      }, Validators.required),
      skin_url: this.fb.control({
        value: this.disguise.skin_url,
        // disabled: true
      }),
      mineskin_id: this.fb.control(null)
    });
  }

  saveSkin() {
    this.save.emit(new Disguise(this.formGroup.value));
  }

  generateSkin() {
    this.loading = true;
    this.disguises.generateSkin(this.playerName.value)
      .pipe(take(1))
      .subscribe(skin => {
        this.formGroup.patchValue({
          skin_texture: skin.texture,
          skin_signature: skin.signature,
          skin_url: skin.textureUrl,
          skin_owner: skin.uuid,
          mineskin_id: skin.id
        });
        this.disguise.skin = skin;
        this.loading = false;
      }, error => {
        console.error(error);
        this.playerName.setErrors({
          generation: error.error.error
        })
        this.loading = false;
      });
  }

  getError() {
    if (this.playerName.hasError('required')) {
      return this.playerName.getError('required');
    } else if (this.playerName.hasError('generation')) {
      return this.playerName.getError('generation');
    }
    return 'Es ist ein Fehler aufgetreten.';
  }
}
