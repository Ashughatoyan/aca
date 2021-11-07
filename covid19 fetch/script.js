async function async1(){
  let totalconfirmed=0;
  let totaldeaths=0;
  try{let response = await fetch('https://covid19.mathdro.id/api/countries');
    if(response.status>300){throw new Error(response.status)}
      else{fetch('https://covid19.mathdro.id/api/countries')
        .then(response => response.json())
        .then(json => {json.countries.reverse().forEach(async (item,index,array) => {
          try{let seconderesponse = await fetch(item.iso2?'https://covid19.mathdro.id/api/countries/'+item.iso2:'https://covid19.mathdro.id/api/countries/'+item.name)
            if(seconderesponse.status<300){await fetch(item.iso2?'https://covid19.mathdro.id/api/countries/'+item.iso2:'https://covid19.mathdro.id/api/countries/'+item.name)
              .then(response => response.json())
              .then(json => {
                let x = document.createElement('tr');
                x.innerHTML = '<th style="text-align: left;width:200px">'+item.name+' </th><th>'+json.confirmed.value+' </th><th>'+json.deaths.value+'</th>'
                document.querySelector('#fixed').after(x)
                totalconfirmed+=json.confirmed.value;
                totaldeaths+=json.deaths.value;
              })
            } 
            else{throw [new Error(seconderesponse.status),item.name]}
          }
          catch(err){
            let x = document.createElement('tr');
            x.innerHTML = '<th style="text-align: left;width:200px">'+err[1]+' </th><th>Ոչինչ էլ չկա</th><th>'+err[0]+'</th>'
            document.querySelector('#fixed2').after(x)
          }
            if(json.countries.length-1 === index){
              document.querySelector('#conf').innerHTML = totalconfirmed;
              document.querySelector('#dead').innerHTML = totaldeaths;
            }
        })})
      }
    }
  catch(err){console.log('hi')}
}

async1();

async function async2(){
  document.querySelector('#table').innerHTML = "<tr id='fixed' class='fixed'><th>Country</th><th>Confirmed</th><th>Deaths</th><th id='lastupdate' class='lastupdate'>Last update</th></tr>"
  try{let response = fetch('https://covid19.mathdro.id/api/daily/'+document.querySelector('#datepicker').value.replaceAll('/','-'))
    if(response.status>300){throw new Error(response.status)}
    else{fetch('https://covid19.mathdro.id/api/daily/'+document.querySelector('#datepicker').value.replaceAll('/','-'))
      .then(response => response.json())
      .then(json => { json.forEach(item => {
        if(!item.provinceState){
          let x = document.createElement('tr');
          x.innerHTML = '<th style="text-align: left;width:200px">'+item.countryRegion+' </th><th>'+item.confirmed+' </th><th>'+item.deaths+'</th>'
          document.querySelector('#table').append(x)}
        else{
          if(!document.querySelector('#'+item.countryRegion)){
            let x2 = document.createElement('div');
            x2.id = item.countryRegion+'div';
            document.querySelector('#countryregion').append(x2)
            let x1 = document.createElement('table');
            x1.id = item.countryRegion;
            x1.innerHTML = '<tr class="fixed"><th style="text-align: left;width:200px">Provinces of '+item.countryRegion+'</th><th>Confirmed</th><th>Deaths</th></tr>'
            x1.innerHTML += '<tr><th style="text-align: left;width:200px">'+item.provinceState+'</th><th>'+item.confirmed+'</th><th>'+item.deaths+'</th></tr>'
            document.querySelector('#'+item.countryRegion+'div').append(x1)
          }
          else{
            let x = document.createElement('tr');
            x.innerHTML = '<tr><th style="text-align: left;width:200px">'+item.provinceState+'</th><th>'+item.confirmed+'</th><th>'+item.deaths+'</th></tr>';
            document.querySelector('#'+item.countryRegion).append(x);
          }
        }
      })})
    }
  }
  catch(err){console.log('hi2')}
}

/*fetch('https://covid19.mathdro.id/api/countries')
  .then(response => response.json())
  .then((json) => {json.countries.forEach(item => 
    fetch(item.iso2?'https://covid19.mathdro.id/api/countries/'+item.iso2:'https://covid19.mathdro.id/api/countries/'+item.name)
    .then(response => response.json())
    .then(json => {
      let x = document.createElement('tr');
      x.innerHTML = '<th style="text-align: left;width:200px">'+item.name+' </th><th>'+json.confirmed.value+' </th><th>'+json.deaths.value+'</th>'
      document.querySelector('#table').append(x)
    })
    )})*/