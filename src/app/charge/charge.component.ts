import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Charge } from "../model/charge";
import { ChargeService } from "../services/charge.service";

@Component({
  selector: 'app-charge',
  templateUrl: './charge.component.html',
  styleUrls: ['./charge.component.scss']
})
export class ChargeComponent implements OnInit {

  listCharges: any;
  form: boolean = false;
  charge: Charge = new Charge();
  closeResult! : string;

  constructor(private chargeService: ChargeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCharges();
    this.charge = {
      idCharge: null,
      sommeCharge: null,
      amount: null,
      typeCharge: null
    };
  }

  getAllCharges() {
    this.chargeService.getAllCharges().subscribe(res => this.listCharges = res)
  }

  addCharge(charge: Charge) {
    this.chargeService.addCharge(charge).subscribe(() => {
      this.getAllCharges();
      this.form = false;
    });
  }

  updateCharge(charge: Charge) {
    this.chargeService.updateCharge(charge).subscribe();
  }

  deleteCharge(idCharge: any) {
    this.chargeService.deleteCharge(idCharge).subscribe(() => this.getAllCharges())
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  closeForm(){

  }

  cancel(){
    this.form = false;
  }

  submitForm() {

    if(this.charge.idCharge) {
      this.updateCharge(this.charge);
    } else {
      this.addCharge(this.charge);
    }
    this.modalService.dismissAll();
  }
}
