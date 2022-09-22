const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
  ];

  const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
  ];

  const getInfo = [animals,food];

function renderAnimalsTable(arr){
    let TRs = [];
    
    for(let i=0; i<arr.length; i++){

      let TDs = [];
      for(let j=0; j<arr[i].length; j++){
      TDs.push(`<td>${arr[i] [j]}</td>`);

      }

      TRs.push(`<tr>${TDs.join(``)}</tr>`);
    }

     return `<table>${TRs.join(``)}</table>`;
}

function renderTablesOfArray(arrays){
  let tables = [];
  for( let i=0; i<arrays.length; i++){
  tables.push (renderAnimalsTable(arrays[i]));

  }

  return tables.join(`<br>`);
}
 document.write(renderTablesOfArray(getInfo));
