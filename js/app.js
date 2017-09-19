var initialCats = [

  {
      clickCount:0,
      name : 'Havanese',
      imgSrc:'img/havanese.jpg',
      nickname : ['Tabtabs','T-Bone','Mr.T']
  },
  {
      clickCount:0,
      name : 'Cutie',
      imgSrc:'img/cutie.jpg',
      nickname : ['Tabtabs','T-Bone','Mr.T']
  },
  {
      clickCount:0,
      name : 'Golden',
      imgSrc:'img/golden.jpg',
      nickname : ['Tabtabs','T-Bone','Mr.T']
  },
  {
      clickCount:0,
      name : 'Norbert',
      imgSrc:'img/norbert.jpg',
      nickname : ['Tabtabs','T-Bone','Mr.T']
   }

];



var Cat = function(data){

  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc= ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nickname);

  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if(clicks <10)title = 'Newborn';
    else if(clicks<50) title = 'Infant';
    else if(clicks<100) title = 'Child';
    else if(clicks<200) title = 'Teen';
    else if(clicks<500) title = 'Adult';
    else title = 'Ninja';
    return title;
  },this);
}
var viewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem)
{
  self.catList.push(new Cat(catItem))
});
  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };
  this.setCat = function(clickedCat){
    // console.log("Hello");
    self.currentCat(clickedCat);
  //  console.log(self.currentCat(clickedCat).clickCount());
  };
};

ko.applyBindings(new viewModel());
