const heading = document.querySelector('title');
const JA = document.querySelector('#JA');
const JASummary =document.querySelector('#JASummary');
const JA2 = document.querySelector('#JA2');
const JA2Summary =document.querySelector('#JA2Summary');
const VTMB = document.querySelector('#VTMB');
const VTMBSummary = document.querySelector('#VTMBSummary');
//const image = document.querySelector('#image');
const USER_KEY = '20714e06ad7b1c0ac6b769068d1d29b4';
const cors = 'https://cors-anywhere.herokuapp.com/';
var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/games")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    console.log(this.responseText)
    if(this.status === 200 && this.readyState === 4){
        var data = JSON.parse(this.responseText);
        console.log(data);
      JA.textContent = data[0].name;
      JASummary.textContent = data[0].summary;
      JA2.textContent = data[1].name;
      JA2Summary.textContent = data[1].summary;
      VTMB.textContent = data[2].name;
      VTMBSummary.textContent = data[2].summary;
      }
}
xhr.send('fields *; where id = (8,9,11);')

var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/covers")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        var data1 = JSON.parse(this.responseText);
         console.log(data1);
}
}
xhr.send('fields *; where id = (8,9,11);')
var xhr = new XMLHttpRequest()
xhr.open("POST",cors+"https://api-v3.igdb.com/private/reviews")
xhr.setRequestHeader('user-key',USER_KEY);
xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        var data2 = JSON.parse(this.responseText);
         console.log(data2);
       
        content1.textContent=data2[0].content;
        content2.textContent=data2[1].content;
        content3.textContent=data2[2].content;
        
        
    
}
}
