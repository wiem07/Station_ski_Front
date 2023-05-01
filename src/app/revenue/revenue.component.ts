import {Component, OnInit, ViewChild} from '@angular/core';
import { RevenueService } from 'app/services/revenue.service';
import { Revenue } from 'app/model/revenue';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  listRevenue: any;
  form: boolean = false;
  revenue!: Revenue;
  closeResult!: string;id: number;


  constructor(private revenueService: RevenueService, private modalService: NgbModal) {
  }

  @ViewChild('mymodal') mymodal: any;
  @ViewChild('modal1') modal1: any;

  ngOnInit(): void {
    this.getAllRevenue();
    this.revenue = {
      amount: null,
      source: null,
      total: null,
      date: null,
      idRevenue: null,

    }
  }

  getAllRevenue() {
    this.revenueService.getAllRevenues().subscribe(res => this.listRevenue = res)
  }

  createRevenue(r: any) {
    this.revenueService.createRevenue(r).subscribe(() => {
      this.getAllRevenue();
      this.form = false;
    });
  }

  updateRevenue(revenue: Revenue) {
    this.revenueService.updateRevenue(revenue).subscribe();
  }

  removeRevenue(id: any) {
    this.revenueService.deleteRevenue(id).subscribe(() => this.getAllRevenue())
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

  closeForm() {

  }

  cancel() {
    this.form = false;
  }

  addRevenue() {

    this.createRevenue(this.revenue);
    this.revenue = {
      amount: null,
      source: null,
      total: null,
      date: null,
      idRevenue: null,
    };
  }
}