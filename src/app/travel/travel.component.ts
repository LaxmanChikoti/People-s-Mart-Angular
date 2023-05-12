import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

travles:any;

  ngOnInit(): void {
   
    
    this.travles=[{'pid':'203','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'204','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'205','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'206','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'207','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'208','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'209','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'210','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'211','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'212','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'213','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'214','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'215','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'216','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'217','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'218','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'219','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'220','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'221','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'222','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''},
    {'pid':'223','pname':'','pdescription':'','pcid':'','pprice':'','pimg':''}
  ]

  }


  }

