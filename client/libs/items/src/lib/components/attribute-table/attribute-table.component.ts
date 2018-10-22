import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RCAttribute, AttributeType } from '../../models';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'rci-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.scss']
})
export class AttributeTableComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() budget: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<RCAttribute>;
  attributeTypes = AttributeType;

  formGroup: FormGroup;
  get formArray(): FormArray {
    return this.formGroup.get('attributes') as FormArray;
  }

  get remainingBuget(): number {
    const totalCost = this.formArray.value.map(input => input.value * this.getAttributeCost(input.attributeName))
      .reduce((a, b) => a + b, 0);
    return this.budget - totalCost;
  }

  get attributeList(): RCAttribute[] {
    return this.formArray.value.filter(attr => attr.value > 0)
      .map(attr => new RCAttribute({ attribute: attr.attributeName, value: attr.value }));
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['attribute', 'cost', 'budget', 'value'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const attributes = Object.keys(this.attributeTypes).map(attr => new RCAttribute({ attribute: attr }));
    this.dataSource = new MatTableDataSource(attributes);
    this.formGroup = this.fb.group({
      attributes: this.fb.array(attributes.map(attr => this.fb.group({
        attributeName: this.fb.control(attr.attribute, Validators.required),
        value: this.fb.control(null)
      })))
    });
    this.parentForm.setControl('attributes', this.formGroup);
  }

  getAttributeCost(attribute: AttributeType): number {
    attribute = attribute && AttributeType[attribute];
    switch (attribute) {
      default:
        return 1;
    }
  }

  getRemainingAttributeBudget(attribute: AttributeType): number {
    return this.remainingBuget / this.getAttributeCost(attribute);
  }
}
