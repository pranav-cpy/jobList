import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    text;
    finalList;
    tempList=[];
  transform(items: any[], filterObj): any[] {
    this.finalList =[]; this.tempList =[];
    if(!items) return [];
    if(!filterObj) return items;
    this.text = filterObj.text.toLowerCase();
    this.finalList = items;
    if(this.text.length >0 ){
        this.finalList = this.finalList.filter( it => {
                  return it.jobTitle.toLowerCase().includes(this.text);
                });
    }
    if(filterObj.full && !filterObj.all){
        let data = this.finalList.filter( it => {
            return it.type === 1;
          });
        this.tempList = [...this.tempList,...data]
    }
    if(filterObj.part && !filterObj.all){
        let data = this.finalList.filter( it => {
            return it.type === 2;
          });
        this.tempList = [...this.tempList,...data]
    }
    if(filterObj.freelance && !filterObj.all){
        let data = this.finalList.filter( it => {
            return it.type === 3;
          });
        this.tempList = [...this.tempList,...data]
    }
    if(!filterObj.all){
        this.finalList = this.tempList
    }
    if(filterObj.isAdvanced){
        this.finalList = this.finalList.filter( it => {
            return filterObj.locations.includes(it.location);
          });
          console.log(filterObj.locations , "location filter",this.finalList)
          if(filterObj.expLevel !== 0){
            this.finalList = this.finalList.filter( it => {
                return it.expLevel == filterObj.expLevel;
              });
        }
    }

    
    console.log("final list", this.finalList)
    return this.finalList;
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
   }
}