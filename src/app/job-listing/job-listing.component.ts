import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {
  filterObj = {
    text:'',
    all:true,
    full:false,
    part:false,
    freelance: false,
    isAdvanced:false,
    locations:[],
    expLevel:0,
    selectedLocations: [],
  }
  dropdownList = [];
  filterPipeObject=null;
  dropdownSettings:IDropdownSettings;

  jobs= [
    {logoText:'GO', jobTitle:'Front End Developer',companyName:'Google Inc',location:'Bangalore',expLevel:1,skills:['Angular','HTML','CSS'],type:1},
    {logoText:'AM', jobTitle:'Back End Developer',companyName:'Amazon',location:'Trivandrum',expLevel:2,skills:['Node'],type:1},
    {logoText:'GO', jobTitle:'Front End Developer',companyName:'Google Inc',location:'Bangalore',expLevel:2,skills:['React','HTML'],type:2},
    {logoText:'AM', jobTitle:'Back End Developer',companyName:'Amazon',location:'Pune',expLevel:3,skills:['Node','Java','Python'],type:2},
    {logoText:'AM', jobTitle:'DevOps Engineer',companyName:'Amazon',location:'Bangalore',expLevel:4,skills:['AWS'],type:1},
    {logoText:'GO', jobTitle:'Front End Developer',companyName:'Google Inc',location:'Pune',expLevel:2,skills:['Angular','HTML','CSS'],type:1},
    {logoText:'AP', jobTitle:'Front End Developer',companyName:'Apple',location:'Bangalore',expLevel:3,skills:['React','HTML','CSS'],type:3},
    {logoText:'AP', jobTitle:'Back End Developer',companyName:'Apple',location:'Pune',expLevel:4,skills:['Python'],type:1},
    {logoText:'CS', jobTitle:'Front End Developer',companyName:'Cisco',location:'Mumbai',expLevel:3,skills:['Angular','Java','HTML'],type:3},
    {logoText:'CS', jobTitle:'Front End Developer',companyName:'Cisco',location:'Mumbai',expLevel:4,skills:['React','Java','HTML'],type:1},
    {logoText:'CS', jobTitle:'DevOps Engineer',companyName:'Cisco',location:'Bangalore',expLevel:2,skills:['Angular','Java','HTML'],type:3},
    {logoText:'GO', jobTitle:'Back End Developer',companyName:'Google Inc',location:'Trivandrum',expLevel:3,skills:['Azure'],type:2},
  ]

  expData =[{expLevel:1, text:"0-2 years"}, {expLevel:2, text:"2-5 years"},{expLevel:3, text:"5-10 years"},{expLevel:4, text:"10+ years"}]
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangalore' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Trivandrum' },
      { item_id: 5, item_text: 'Pune' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  filterJobs(){
    console.log(this.filterObj)
    let locArray=[]
    this.filterObj.selectedLocations.forEach(item=>{
      locArray.push(item.item_text)
    })
    this.filterObj.locations = locArray;
    console.log(locArray)
    this.filterPipeObject = JSON.parse(JSON.stringify(this.filterObj))
  }
}
