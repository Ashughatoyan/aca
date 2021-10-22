function display(id){
  if(document.getElementById(id).style.display === "block"){
    document.getElementById(id).style.display = "none";
    document.getElementById(id+'i').style.transform = "rotate(-90deg)";
  }
  else{
    document.getElementById(id).style.display = "block";
    document.getElementById(id+'i').style.transform = "rotate(0deg)";
  }
}

let display_forlistener = (id) => {
  if(document.getElementById(id+'-table').style.display === "block"){
    document.getElementById(id+'-table').style.display = "none";
    document.getElementById(id+'i').style.transform = "rotate(-90deg)";
  }
  else{
    document.getElementById(id+'-table').style.display = "block";
    document.getElementById(id+'i').style.transform = "rotate(0deg)";
  }
  if(id==='Yerevan'){document.getElementById('Yerevan_info').style.display==='none'?document.getElementById('Yerevan_info').style.display='block':document.getElementById('Yerevan_info').style.display='none'};
}

let Armenia = [{tagName:'ul',title:null,id: 'main_Armenia',children:
  [
    {tagName:'li',title:[true,'Հայաստան','blue','<img src="img/Armenia.png">'],id:'Armenia',onClick:display_forlistener},
    {tagName:'ul',title:null,id:'Armenia-table',className:'tex',children:
      [
       {tagName:'li',title:[true,'Երևան','blue','flag',['fil6',0]],id:'Yerevan',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Yerevan-table',className:'tex',children:[
         {tagName:'li',title:[false,'Աջափնյակ','blue','account_balance']},
         {tagName:'li',title:[false,'Ավան','gray','business'],id:null,className:null,onClick:null,children:null},//this one
         {tagName:'li',title:[false,'Արաբկիր','gray','business']},
         {tagName:'li',title:[false,'Դավթաշեն','gray','business']},
         {tagName:'li',title:[false,'Էրեբունի','gray','business']},
         {tagName:'li',title:[false,'Կենտրոն','gray','business']},
         {tagName:'li',title:[false,'Մալաթիա-Սեբաստիա','gray','business']},
         {tagName:'li',title:[false,'Նոր Նորք','gray','business']},
         {tagName:'li',title:[false,'Նորք-Մարաշ','gray','business']},
         {tagName:'li',title:[false,'Նուբարաշեն','gray','business']},
         {tagName:'li',title:[false,'Շենգավիթ','gray','business']},
         {tagName:'li',title:[false,'Քանաքեռ-Ձեյթուն','gray','business']}
       ]}]},
       {tagName:'li',title:[true,'Արագաձոտնի մարզ','purple','business',['fil1',1]],id:'Aragazotn',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Aragazotn-table',className:'tex',children:[
         {tagName:'li',title:[false,'Աշտարակ','blue','account_balance']},
         {tagName:'li',title:[false,'Աշտարակի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Ապարանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Արագածի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Թալինի շրջան','gray','home_work']},         
       ]}]},
       {tagName:'li',title:[true,'Արարատի մարզ','purple','business',['fil4',0]],id:'Ararat',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Ararat-table',className:'tex',children:[
         {tagName:'li',title:[false,'Արտաշատ','blue','account_balance']},
         {tagName:'li',title:[false,'Արարատի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Արտաշատի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Մասիսի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Արմավիրի մարզ','purple','business',['fil3',1]],id:'Armavir',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Armavir-table',className:'tex',children:[
         {tagName:'li',title:[false,'Արմավիր','blue','account_balance']},
         {tagName:'li',title:[false,'Արմավիր շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Բաղրամյանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Էջմիածնի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Գեղարքունիքի մարզ','purple','business',['fil2',0]],id:'Gexarquniq',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Gexarquniq-table',className:'tex',children:[
         {tagName:'li',title:[false,'Գավառ ','blue','account_balance']},
         {tagName:'li',title:[false,'Կամոյի անվան շրջան ','gray','home_work']},
         {tagName:'li',title:[false,'Կրասնոսելսկի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Մարտունու շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Սևանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Վարդենիսի շրջան','gray','home_work']},         
       ]}]},
       {tagName:'li',title:[true,'Կոտայքի մարզ','purple','business',['fil5',0]],id:'Kotayq',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Kotayq-table',className:'tex',children:[
         {tagName:'li',title:[false,'Հրազդան ','blue','account_balance']},
         {tagName:'li',title:[false,'Գուգարքի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Հրազդան շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Նաիրի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Լոռու մարզ','purple','business',['fil3',2]],id:'Lori',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Lori-table',className:'tex',children:[
         {tagName:'li',title:[false,'Վանաձոր ','blue','account_balance']},
         {tagName:'li',title:[false,'Աշտարակի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Թումանյանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Սպիտակի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Ստեփանավանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Տաշիրի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Շիրակի մարզ','purple','business',['fil5',1]],id:'Shirak',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Shirak-table',className:'tex',children:[
         {tagName:'li',title:[false,'Գյումրի ','blue','account_balance']},
         {tagName:'li',title:[false,'Ախուրյանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Արթիկի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Մարալիկի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Ամասյաի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Աշոցքի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Սյունիքի մարզ','purple','business',['fil1',0]],id:'Syuniq',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Syuniq-table',className:'tex',children:[
         {tagName:'li',title:[false,'Կապան ','blue','account_balance']},
         {tagName:'li',title:[false,'Սիսիանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Գորիսի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Կապանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Մեղրու շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Տավուշի մարզ','purple','business',['fil4',1]],id:'Tavush',onClick:display_forlistener,children:
       [ {tagName:'ul',title:null,id:'Tavush-table',className:'tex',children:[
         {tagName:'li',title:[false,'Իջևան ','blue','account_balance']},
         {tagName:'li',title:[false,'Այրումի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Դիլիջանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Իջևան շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Նոյեմբերյանի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Կողբի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Բերդի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Վայոց Ձորի մարզ','purple','business',['fil3',0]],id:'Vayots_Dzor',onClick:display_forlistener,children:
       [ {tagName:'ul',id:'Vayots_Dzor-table',className:'tex',children:[
         {tagName:'li',title:[false,'Եղեգնաձոր ','blue','account_balance']},
         {tagName:'li',title:[false,'Եղեգնաձորի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'վայքի շրջան','gray','home_work']},
         {tagName:'li',title:[false,'Ջերմուկի շրջան','gray','home_work']}
       ]}]},
       {tagName:'li',title:[true,'Սևան','blue','waves',['fil9',0]],id:'Sevan',onClick:display_forlistener,children:
       [ {tagName:'ul',id:'Sevan-table',className:'tex',children:[
         {tagName:'li',title:[false,'Աղթամար թերակղզի','blue','account_balance']},
         {tagName:'li',title:[false,'ՋՈՒՐ','blue','water_drop']},
       ]}]},
       {tagName:'li',title:[false,'Արծվաշեն','red','extension',['fil18',0]],id:'Artcvashen'},
      ]
    }
  ]
}];

let Artsakh = [{tagName:'ul',title:null,id: 'main_Artsakh',children:
  [
    {tagName:'li',title:[true,'Արցախ','blue','<img src="img/Artsakh.png">'],id:'Arcax',onClick:display_forlistener},
    {tagName:'ul',title:null,id:'Arcax-table',className:'tex',children:
      [
       {tagName:'li',title:[false,'Ստեփանակերտ','blue','flag',['fil9',2]]},
       {tagName:'li',title:[false,'Ասկերանի շրջան','purple','business',['fil14',0]]},
       {tagName:'li',title:[false,'Հադրութի շրջան','purple','business',['fil0',0]]},
       {tagName:'li',title:[false,'Մարտակերտի շրջան','purple','business',['fil0',1]]},
       {tagName:'li',title:[false,'Մարտունու շրջան','purple','business',['fil13',1]]},
       {tagName:'li',title:[false,'Շահումյանի շրջան','purple','business',['fil15',0]]},
       {tagName:'li',title:[false,'Շուշիի շրջան','purple','business',['fil16',0]]},
       {tagName:'li',title:[false,'Բերձորի շրջան','purple','business',['fil12',0]]},
       {tagName:'li',title:[false,'Քարվաճառի շրջան','purple','business',['fil13',0]]},
       {tagName:'li',title:[false,'ՊԲ դիրքեր 1','red','star_rate',['fil15',2]]},
       {tagName:'li',title:[false,'ՊԲ դիրքեր 2','red','star_rate',['fil15',1]]}
      ]
    }
  ]
}];


createwithrecursia(Armenia,(document.getElementById('first')));

createwithrecursia(Artsakh,(document.getElementById('first')));

function createwithrecursia(obj,tag){
  let result;
  obj.forEach(item => {
    let create = document.createElement(item.tagName);
    if(item.id){create.id = item.id};
    if(item.className){create.className = item.className};
    if(item.title){  
      if(item.title[0]){result = '<i class="material-icons texi" style="margin-left:5px;padding-bottom:5px;" id='+item.id+"i"+'>expand_more</i>&nbsp;'}
      else{result = '&nbsp;&nbsp;&nbsp;'};
      result += item.title[1]+'&nbsp;';
      result += '<i class="material-icons icon_'+item.title[2]+'">'+item.title[3]+'</i>';
      create.innerHTML = '<span>'+result+'</span>';
      if(item.title[4]){create.setAttribute('data-classlist',item.title[4])};
    }
    tag.append(create);
    if(item.onClick && item.id){document.querySelector('#'+item.id).addEventListener('click',() => {item.onClick(item.id)},true)};
    if(item.children){createwithrecursia(item.children,document.getElementById(item.id))};
  })
}

const elements = document.getElementsByTagName('li');
for (const el of Array.from(elements)) {
  let fillcolor;
    el.addEventListener("mouseover", (e)=>
      {
        if(el.getAttribute("data-classlist")){
          let arr_from_data = el.getAttribute("data-classlist").split(',');
          fillcolor = document.getElementsByClassName(arr_from_data[0])[arr_from_data[1]].style.fill;
          document.getElementsByClassName(arr_from_data[0])[arr_from_data[1]].style.fill = '#353b48';
          if(arr_from_data[0]==='fil9' && arr_from_data[1]==0){document.getElementsByClassName(arr_from_data[0])[arr_from_data[1]].style.fill = '#0089BC';}
        }
      }, true);

    el.addEventListener("mouseout", (e)=>
      {
        if(el.getAttribute("data-classlist")){
          let arr_from_data = el.getAttribute("data-classlist").split(',');
          document.getElementsByClassName(arr_from_data[0])[arr_from_data[1]].style.fill = fillcolor;
        }
      }, true);
}

let arrof_svg = ['fil0','fil1','fil2','fil3','fil4','fil5','fil6','fil9','fil12','fil13','fil14','fil15','fil16','fil18'];

arrof_svg.forEach(item => 
{const searchcursorstick = document.getElementsByClassName(item);
for (const el of Array.from(searchcursorstick)) {
  el.addEventListener('mousemove', (e)=>{
    document.getElementById('huhu').innerHTML = el.getAttribute('name')
    document.getElementById('huhu').style.display = 'block';
    document.getElementById('huhu').style.top = e.clientY+15+'px';
    document.getElementById('huhu').style.left = e.clientX+15+'px';
  } , false)
    el.addEventListener('mouseout', (e)=>{
    document.getElementById('huhu').style.display = 'none';
  } , false)
}})


