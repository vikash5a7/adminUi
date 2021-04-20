import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  pieChartLabels: string[] = ['anuasdbshjd ', 'In-Store Sales', 'Mail Sales', 'hjsdfgjk'];
  pieChartData: number[] = [300, 500, 100, 20];
  pieChartType = 'pie';
  constructor() {}

  ngOnInit() {}
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}