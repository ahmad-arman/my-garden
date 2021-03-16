'use strict';

// variables //
let ourForm = document.getElementById( 'form' );
let ourTable = document.getElementById( 'table' );
let arrTableHeader = ['#' , 'Image' , 'Name' , 'Season'];
let arrGardenData = [];


//Function //
function Garden ( name , image , season ){
  this.name= name;
  this.image =image;
  this.season= season;
  arrGardenData.push( this );
}
Garden.prototype.renderData = function (){
  let tableRow = document.createElement ( 'tr' );

  let nameTd= document.createElement( 'td' );
  nameTd.textContent = this.name;

  let imageTd= document.createElement( 'td' );
  imageTd.textContent = this.image;

  let seasonTd= document.createElement( 'td' );
  seasonTd.textContent = this.season;

  tableRow.appendChild( nameTd ) ;
  tableRow.appendChild( imageTd ) ;
  tableRow.appendChild( seasonTd ) ;

  ourTable.appendChild( tableRow );

};
function handSubmission( event ){
  event.preventDefault();
  let nameItem = event.target.name.value;
  let imageItem = event.target.image.value ;
  let seasonItem = event.target.season.value;
  tableHeader();


  let ourGardenDate = new Garden ( nameItem , imageItem , seasonItem );
  ourGardenDate.renderData();

  localStorage.setItem( 'GardenData' , JSON.stringify( arrGardenData ) );

  //   console.log( nameItem,imageItem,seasonItem );

}
function tableHeader (){
  let tableRow = document.createElement( 'tr' );

  let th ;
  for ( let index = 0; index < arrTableHeader.length; index++ ) {

    th = document.createElement( 'th' );
    th.textContent = arrTableHeader[index];
    tableRow.appendChild( th );

  }
  ourTable.appendChild( tableRow );
}

function checkLS (){
  if ( localStorage.getItem( 'GardenData' ) ) {
    arrGardenData = JSON.parse( localStorage.getItem( 'GardenData' ) );
    tableHeader();
    saveData();

  }
}
function saveData(){
  for ( let index = 0; index < arrGardenData.length; index++ ) {

    let tableRow = document.createElement ( 'tr' );

    let nameTd= document.createElement( 'td' );
    nameTd.textContent = arrGardenData[index].name;

    let imageTd= document.createElement( 'td' );
    imageTd.textContent = arrGardenData[index].image;

    let seasonTd= document.createElement( 'td' );
    seasonTd.textContent = arrGardenData[index].season;

    tableRow.appendChild( nameTd ) ;
    tableRow.appendChild( imageTd ) ;
    tableRow.appendChild( seasonTd ) ;

    ourTable.appendChild( tableRow );

  }
}

// our Function calls and add listener event //
ourForm.addEventListener( 'submit' ,handSubmission );
checkLS ();



