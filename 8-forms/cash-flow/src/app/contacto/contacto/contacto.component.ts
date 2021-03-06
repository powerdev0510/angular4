import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatosService } from './../../movimientos/datos.service';
import { FormUtils } from './../../shared/form-utils';
import { HttpService } from './../../shared/http.service';

@Component({
  selector: 'cf-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  private formUtils: FormUtils;
  private contactoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private datosService: DatosService) { }

  ngOnInit() {
    this.buildForm();
    this.formUtils = new FormUtils(this.contactoForm);
  }

  buildForm() {
    this.contactoForm = this.formBuilder.group({
      email: [[], Validators.required],
      subject: [[], Validators.required],
      description: [[], Validators.required]
    });
  };

  onSubmit({ value, valid }) {
    this.datosService.saveMensaje$(value).subscribe();
  }

}
