import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CoronaStatsService } from '../service/corona-stats.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-corona-stats-country',
  templateUrl: './corona-stats-country.component.html',
  styleUrls: ['./corona-stats-country.component.css']
})
export class CoronaStatsCountryComponent implements OnInit {
  //list:any[];
  @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;
  chart:[];
  constructor(private _service: CoronaStatsService) { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    this.drawGraph();
  }


  activeCases(confirmed:number,death:number,recovered:number){
    return confirmed-(death+recovered);
  }

  drawGraph():void{
    this._service.getStats()
    .subscribe(res=>{
      //console.log(res);
      
      let dates = res.map(res=>String(res.Date).substring(0,10))
      let activeCases = res.map(res=> this.activeCases(res.Confirmed,res.Deaths,res.Recovered) )
      console.log(dates,activeCases)
     
      this.chart = new Chart('canvas',{
        type:'line',
        data:{
          labels:dates,
          datasets:[
            {
              data:activeCases,
              borderColor: '#3cba9f',
              fill:false

            },
            
          ]
        },
        options:{
          legend:{
            display:false
          },
          maintainAspectRatio: false,
          responsive: true,
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              display:true
            }]
          }
        }
      })







    })
  }
}
