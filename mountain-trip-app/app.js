
const DESTS=[
["jackson","Jackson","Wyoming","Teton Range","JAC","~20 min","The showstopper",4,4,3,3,4,43.4799,-110.7624,"Jan–Mar ski · mid-Sep–mid-Oct fish/hike","Land inside a national park, fish native cutthroat, ski serious vertical and walk to cowboy bars.","Snake River Grill|Pinky G's Pizzeria|The Bunnery","Million Dollar Cowboy Bar|Snake River Brewing|Mangy Moose","Jackson Hole Mountain Resort|Snake River float|National Elk Refuge|Taggart & Bradley Lakes|Snow King","https://www.airbnb.com/s/Jackson--Wyoming/homes","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"],
["parkcity","Park City","Utah","Wasatch Range","SLC","35–45 min","The ski-first trip",4,3,4,3,4,40.6461,-111.4980,"Jan–Mar · late Sep","Fast major-airport access to huge ski terrain, Main Street nightlife and the Middle Provo.","Riverhorse on Main|Handle|High West Saloon","No Name Saloon|The Spur|Boneyard Saloon","Park City Mountain|Snowbird|Alta|Utah Olympic Park|Middle Provo River","https://www.airbnb.com/s/Park-City--Utah/homes","https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=85"],
["tahoe","Truckee / Tahoe","California / Nevada","Sierra Nevada","RNO","~45 min","The cabin trip",3,3,4,4,3,39.3279,-120.1833,"Feb–Mar · late Sep–Oct","Big cabin inventory, deep pines, multiple ski areas, river fishing and Reno or Stateline nightlife.","Moody's Bistro Bar & Beats|Truckee Tavern & Grill|Casa Baeza","Bar of America|FiftyFifty Brewing|Stateline casinos","Palisades Tahoe|Northstar|Heavenly|Emerald Bay|Tahoe Meadows|Pyramid Lake","https://www.airbnb.com/s/Truckee--California/homes","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85"],
["girdwood","Girdwood","Alaska","Chugach Mountains","ANC","50–60 min","The adventure wildcard",4,4,3,3,3,60.9425,-149.1669,"March · late Aug–mid-Sep","Glaciers, huge snowfall, the Seward Highway and world-class Alaska fishing.","Jack Sprat|Double Musky Inn|Chair 5","Girdwood Brewing Company|Sitzmark Bar & Grill","Alyeska Resort|Kenai River|Russian River|Alyeska Tram|Prince William Sound","https://www.airbnb.com/s/Girdwood--Alaska/homes","https://images.unsplash.com/photo-1531176175280-47775777f1c6?auto=format&fit=crop&w=1200&q=85"],
["bozeman","Bozeman","Montana","Bridger Range / Greater Bozeman","BZN","~15 min","The all-rounder",3,4,4,3,4,45.6770,-111.0429,"mid-Sep–early Oct · Mar–early Apr","Easy airport access, famous trout rivers, Bridger Bowl and Big Sky, plus a real Main Street at night.","Montana Ale Works|Open Range|Plonk","Rocking R Bar|The Crystal Bar|Bar IX|Bridger Brewing","Bridger Bowl|Big Sky Resort|Madison River|Gallatin River|Norris Hot Springs|Chico Hot Springs","https://www.airbnb.com/s/Bozeman--Montana/homes","https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=85"],
["durango","Durango","Colorado","San Juan Mountains","DRO","~25 min","The fall-color road trip",4,3,4,3,3,37.2753,-107.8801,"mid-Sep–early Oct · late Jan–Feb","A walkable Western river town under rugged peaks, with Purgatory, the San Juan and the Million Dollar Highway.","El Moro Spirits & Tavern|Steamworks Brewing|Carver Brewing","Diamond Belle Saloon|Ska Brewing|Animas Brewing","Purgatory Resort|Silverton Mountain|Ouray Hot Springs|Million Dollar Highway|San Juan River","https://www.airbnb.com/s/Durango--Colorado/homes","https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85"],
["hoodriver","Hood River","Oregon","Cascade Range / Mount Hood","PDX","~1 hr 15 min","Volcano + Gorge",3,3,3,3,4,45.7054,-121.5215,"late Feb–Mar · mid-May–early Jun","Mount Hood skiing, dense Cascade forest, Gorge waterfalls and a strong brewery scene.","Solstice Wood Fire Pizza|Broder Øst|Lake Taco","pFriem Family Brewers|Double Mountain Brewery|Full Sail Brew Pub","Timberline|Mt. Hood Meadows|Skibowl|Columbia Gorge waterfalls|Lower Deschutes","https://www.airbnb.com/s/Hood-River--Oregon/homes","https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85"],
["leavenworth","Leavenworth","Washington","Cascade Range","SEA","2 hr 45 min–3 hr","Forest + festival town",4,3,4,4,2,47.5962,-120.6615,"March · late Sep–early Oct","Deep forest, granite mountains, cabins, beer halls and Stevens Pass after the longer drive from Seattle.","Andreas Keller|Mozart's|Rhein Haus","München Haus|Icicle Brewing|Blewett Brewing|Stein","Stevens Pass|Mission Ridge|Enchantments|Yakima River|Icicle Canyon","https://www.airbnb.com/s/Leavenworth--Washington/homes","https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"],
["asheville","Asheville","North Carolina","Blue Ridge Mountains","AVL","~20 min","The value + brewery trip",1,3,4,4,4,35.5951,-82.5515,"late Oct–mid-Nov · April","Very easy airport access, hardwood forest, trout options and a real small-city brewery scene.","Curate|White Duck Taco Shop|Chai Pani","South Slope breweries|The Orange Peel","Pisgah National Forest|Blue Ridge Parkway|Davidson River|Mount Mitchell","https://www.airbnb.com/s/Asheville--North-Carolina/homes","https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"],
["smokies","Gatlinburg / Townsend","Tennessee / North Carolina","Great Smoky Mountains","TYS","~1 hr 15 min","The forest cabin trip",1,3,3,4,3,35.7143,-83.5102,"early Nov · late Mar–Apr","Cabins in dense forest, easy hikes and trout streams with a lively tourist strip nearby.","Local smokehouses|Townsend cafes","Gatlinburg bars|Ole Smoky","Great Smoky Mountains NP|Little River|Cades Cove|Clingmans Dome","https://www.airbnb.com/s/Gatlinburg--Tennessee/homes","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"],
["stowe","Stowe","Vermont","Green Mountains","BTV","50–60 min","The classic Northeast ski town",3,2,3,3,3,44.4654,-72.6874,"mid-Sep–early Oct · mid-Jan–mid-Mar","A compact Vermont mountain-town trip with skiing, foliage, breweries and classic New England lodging.","Harrison's|Doc Ponds","The Bench|von Trapp Brewery","Stowe Mountain Resort|Smugglers' Notch|Recreation Path|Fall foliage drives","https://www.airbnb.com/s/Stowe--Vermont/homes","https://images.unsplash.com/photo-1548777123-45e7717f6f96?auto=format&fit=crop&w=1200&q=85"],
["vegas","Las Vegas / Mt. Charleston","Nevada","Spring Mountains","LAS","~1 hr to mountain","Vegas with a mountain attached",2,1,4,1,4,36.2570,-115.6439,"late Jan–Feb · late Sep–mid-Oct","Easy flights, unmatched nightlife, Red Rock and a mountain escape an hour away.","Las Vegas dining","Strip|Fremont Street","Lee Canyon|Charleston Peak|Red Rock Canyon|Willow Beach","https://www.airbnb.com/s/Las-Vegas--Nevada/homes","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"]
].map(function(x){return {id:x[0],name:x[1],state:x[2],range:x[3],airport:x[4],drive:x[5],tagline:x[6],snow:x[7],fishing:x[8],nightlife:x[9],cabins:x[10],access:x[11],lat:x[12],lng:x[13],best:x[14],why:x[15],restaurants:x[16].split("|"),nightlifePlaces:x[17].split("|"),activities:x[18].split("|"),housingSearch:x[19],photo:x[20]};});

function qs(s){return document.querySelector(s)} function qsa(s){return Array.from(document.querySelectorAll(s))}
var S=JSON.parse(localStorage.getItem("mountainTripState")||"{}");
S.profile=S.profile||"You";S.votes=S.votes||{};S.saved=S.saved||[];S.comments=S.comments||{};S.housing=S.housing||{};S.housingVotes=S.housingVotes||{};S.activity=S.activity||[];S.trip=S.trip||{};
function save(){localStorage.setItem("mountainTripState",JSON.stringify(S))}
function word(n){return ["","Limited","Moderate","Strong","Exceptional"][n]||"—"}
function initials(n){return (n||"?").split(/\s+/).map(function(x){return x[0]}).join("").slice(0,2).toUpperCase()}
function esc(s){return String(s||"").replace(/[&<>"']/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]})}
function gm(q){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q)}
function gs(q){return "https://www.google.com/search?q="+encodeURIComponent(q)}
function likes(d){return Object.values(S.votes[d.id]||{}).filter(function(v){return v==="love"||v==="go"}).length}
function interest(d){return Object.values(S.votes[d.id]||{}).reduce(function(a,v){return a+(v==="love"?2:v==="go"?1:v==="no"?-1:0)},0)}
function openSheet(id){qs("#backdrop").classList.add("show");qs("#"+id).classList.add("show")}
function closeSheets(){qs("#backdrop").classList.remove("show");qsa(".sheet").forEach(function(x){x.classList.remove("show")})}
qs("#backdrop").onclick=closeSheets;qs("#closeDetail").onclick=closeSheets;qsa("[data-close-sheet]").forEach(function(b){b.onclick=closeSheets});

function renderDestinations(filter){
  filter=filter||"all";var g=qs("#destinationGrid");g.innerHTML="";
  DESTS.filter(function(d){return filter==="all"||(filter==="snow"&&d.snow>=4)||(filter==="fishing"&&d.fishing>=4)||(filter==="nightlife"&&d.nightlife>=4)||(filter==="cabins"&&d.cabins>=4)||(filter==="access"&&d.access>=4)}).forEach(function(d){
    var e=document.createElement("article");e.className="dest-card";
    e.innerHTML='<div class="photo" style="background-image:url(\''+d.photo+'\')"></div><div class="shade"></div><div class="heart-count">♥ '+likes(d)+'</div><div class="content"><div class="eyebrow">'+d.tagline+'</div><h4>'+d.name+'</h4><div class="sub">'+d.range+' · '+d.airport+' · '+d.drive+'</div><div class="badges"><span class="badge">❄ '+word(d.snow)+'</span><span class="badge">🎣 '+word(d.fishing)+'</span><span class="badge">🍻 '+word(d.nightlife)+'</span></div></div>';
    e.onclick=function(){openDetail(d.id)};g.appendChild(e);
  });
}
function links(title,arr,activity,d){
  var h='<h3>'+title+'</h3><div class="link-grid">';
  arr.forEach(function(x){var u=activity?gs(x+" "+d.name+" tickets booking"):gm(x+" "+d.name);h+='<a class="link-card" target="_blank" rel="noopener" href="'+u+'"><b>'+x+'</b><span>'+(activity?"Info & booking":"Map, hours & directions")+' ↗</span></a>'});return h+'</div>';
}
function houseKey(did,url){return did+"|"+url}
function housingHtml(d){
  var list=[{name:"Search Airbnbs in "+d.name,url:d.housingSearch,total:"",people:"",beds:"",note:"Open Airbnb search, then paste favorites back here."}].concat(S.housing[d.id]||[]);
  return list.map(function(h,i){
    var key=houseKey(d.id,h.url),votes=S.housingVotes[key]||{},fc=Object.values(votes).filter(Boolean).length,per=h.total&&h.people?Math.round(Number(h.total)/Number(h.people)):"";
    return '<div class="housing-card"><h4>'+esc(h.name)+'</h4><div class="housing-meta">'+(h.beds?'<span>'+esc(h.beds)+' beds</span>':'')+(h.people?'<span>sleeps '+esc(h.people)+'</span>':'')+(h.note?'<span>'+esc(h.note)+'</span>':'')+'</div>'+(h.total?'<div class="housing-price">$'+Number(h.total).toLocaleString()+' housing total</div>':'')+(per?'<div class="muted">$'+per+'/person for housing only</div>':'')+'<div class="housing-actions"><a class="pill" target="_blank" rel="noopener" href="'+h.url+'">Open listing ↗</a>'+(i?'<button class="pill '+(votes[S.profile]?"on":"")+'" onclick="toggleFachable(\''+d.id+'\',\''+encodeURIComponent(h.url)+'\')">🏆 Most Fachable Chalet · '+fc+'</button>':'')+'</div></div>';
  }).join("");
}
window.toggleFachable=function(did,enc){var url=decodeURIComponent(enc),k=houseKey(did,url);S.housingVotes[k]=S.housingVotes[k]||{};S.housingVotes[k][S.profile]=!S.housingVotes[k][S.profile];S.activity.unshift({text:S.profile+" voted on Most Fachable Chalet in "+DESTS.find(function(x){return x.id===did}).name,ts:Date.now()});save();openDetail(did);renderGroup();renderTrip()};

window.openDetail=function(id){
  var d=DESTS.find(function(x){return x.id===id});if(!d)return;var current=(S.votes[d.id]||{})[S.profile]||"",comments=S.comments[d.id]||[];
  qs("#detailContent").innerHTML='<div class="detail-hero" style="background-image:url(\''+d.photo+'\')"><div class="detail-title"><div class="eyebrow">'+d.tagline+'</div><h2>'+d.name+'</h2><div>'+d.state+' · '+d.range+'</div></div></div><div class="detail-body">'+
  '<div class="stats"><div class="stat"><b>'+d.airport+'</b><span>gateway airport</span></div><div class="stat"><b>'+d.drive+'</b><span>airport → base</span></div><div class="stat"><b>'+word(d.snow)+'</b><span>snow</span></div><div class="stat"><b>'+word(d.nightlife)+'</b><span>nightlife</span></div></div><p>'+d.why+'</p><p class="muted"><b>Best window:</b> '+d.best+'</p>'+
  '<h3>What do you think?</h3><div class="vote-row"><button class="vote-btn '+(current==="love"?"on":"")+'" data-vote="love">❤️ Love it</button><button class="vote-btn '+(current==="go"?"on":"")+'" data-vote="go">👍 Would go</button><button class="vote-btn '+(current==="meh"?"on":"")+'" data-vote="meh">😐 Neutral</button><button class="vote-btn '+(current==="no"?"on":"")+'" data-vote="no">👎 Pass</button><button class="vote-btn '+(S.saved.includes(d.id)?"on":"")+'" id="saveDest">☆ Save</button></div>'+
  '<h3>Housing</h3><p class="muted">Housing is the only cost tracked. Add actual listings to compare total stay price and housing cost per person.</p><div id="housingList">'+housingHtml(d)+'</div><button class="secondary" id="addHousing">+ Add chalet / Airbnb</button><div id="housingForm" style="display:none;margin-top:12px"><input id="hName" placeholder="Listing name"><input id="hUrl" placeholder="Airbnb / Vrbo / hotel URL"><input id="hTotal" type="number" placeholder="Total housing cost for stay"><input id="hPeople" type="number" placeholder="People splitting housing"><input id="hBeds" placeholder="Beds (optional)"><textarea id="hNote" placeholder="Hot tub, fireplace, walkable, etc."></textarea><button class="primary wide" id="saveHousing">Add to shortlist</button></div>'+
  links("Restaurants",d.restaurants,false,d)+links("Nightlife",d.nightlifePlaces,false,d)+links("Activities",d.activities,true,d)+
  '<h3>Quick links</h3><div class="link-grid"><a class="link-card" target="_blank" href="'+d.housingSearch+'"><b>Airbnb search</b><span>Housing in '+d.name+' ↗</span></a><a class="link-card" target="_blank" href="'+gm("restaurants "+d.name)+'"><b>Restaurants</b><span>Browse the area ↗</span></a><a class="link-card" target="_blank" href="'+gm("bars nightlife "+d.name)+'"><b>Nightlife</b><span>Bars & breweries ↗</span></a><a class="link-card" target="_blank" href="'+gm("things to do "+d.name)+'"><b>Activities</b><span>Things to do ↗</span></a></div>'+
  '<h3>Comments</h3><div class="comment-box"><input id="commentInput" placeholder="Add a comment for the group..."><button class="primary" id="postComment">Post</button></div><div id="comments">'+(comments.length?comments.map(function(c){return '<div class="comment"><b>'+esc(c.name)+'</b><p>'+esc(c.text)+'</p><small>'+new Date(c.ts).toLocaleString()+'</small></div>'}).join(""):'<p class="muted">No comments yet.</p>')+'</div></div>';
  openSheet("detailSheet");
  qsa("#detailContent [data-vote]").forEach(function(b){b.onclick=function(){S.votes[d.id]=S.votes[d.id]||{};S.votes[d.id][S.profile]=b.dataset.vote;S.activity.unshift({text:S.profile+" voted "+b.textContent.trim()+" on "+d.name,ts:Date.now()});save();openDetail(d.id);renderAll()}});
  qs("#saveDest").onclick=function(){S.saved=S.saved.includes(d.id)?S.saved.filter(function(x){return x!==d.id}):S.saved.concat([d.id]);save();openDetail(d.id);renderAll()};
  qs("#addHousing").onclick=function(){qs("#housingForm").style.display="block"};
  qs("#saveHousing").onclick=function(){var url=qs("#hUrl").value.trim();if(!url){alert("Paste the listing URL.");return}S.housing[d.id]=S.housing[d.id]||[];S.housing[d.id].push({name:qs("#hName").value.trim()||"Group housing option",url:url,total:qs("#hTotal").value,people:qs("#hPeople").value,beds:qs("#hBeds").value,note:qs("#hNote").value.trim()});S.activity.unshift({text:S.profile+" added a housing option in "+d.name,ts:Date.now()});save();openDetail(d.id);renderTrip();renderGroup()};
  qs("#postComment").onclick=function(){var t=qs("#commentInput").value.trim();if(!t)return;S.comments[d.id]=S.comments[d.id]||[];S.comments[d.id].unshift({name:S.profile,text:t,ts:Date.now()});S.activity.unshift({text:S.profile+" commented on "+d.name+": "+t.slice(0,70),ts:Date.now()});save();openDetail(d.id);renderGroup()};
};

var map;
function renderMap(){
  if(!map){map=L.map("map",{zoomControl:false}).setView([39.5,-108],4);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap"}).addTo(map);L.control.zoom({position:"topright"}).addTo(map);
    DESTS.forEach(function(d){var n=Math.max(0,likes(d)),size=34+n*5,icon=L.divIcon({className:"",html:'<div class="pin" style="width:'+size+'px;height:'+size+'px">'+(n||"•")+'</div>',iconSize:[size,size],iconAnchor:[size/2,size/2]});L.marker([d.lat,d.lng],{icon:icon}).addTo(map).bindPopup('<b>'+d.name+'</b><br>'+d.tagline+'<br><button onclick="openDetail(\''+d.id+'\')" style="margin-top:8px">View destination</button>')});
  }setTimeout(function(){map.invalidateSize()},120)
}
function renderGroup(){
  var ranked=DESTS.slice().sort(function(a,b){return interest(b)-interest(a)});
  qs("#groupSummary").innerHTML=ranked.map(function(d,i){var voters=Object.entries(S.votes[d.id]||{}).filter(function(x){return x[1]==="love"||x[1]==="go"}).map(function(x){return x[0]});return '<div class="rank-card" onclick="openDetail(\''+d.id+'\')"><div class="rank-num">'+(i+1)+'</div><div class="grow"><h4>'+d.name+'</h4><p>'+likes(d)+' positive votes · '+d.tagline+'</p></div><div class="mini-faces">'+voters.slice(0,5).map(function(n){return '<div class="face">'+initials(n)+'</div>'}).join("")+'</div></div>'}).join("");
  var awards=[];if(ranked[0])awards.push(["❤️","Group favorite",ranked[0].name]);awards.push(["🍻","Nightlife standout",DESTS.slice().sort(function(a,b){return b.nightlife-a.nightlife})[0].name]);
  var fk=null,fc=-1;Object.entries(S.housingVotes).forEach(function(e){var c=Object.values(e[1]).filter(Boolean).length;if(c>fc){fc=c;fk=e[0]}});if(fk&&fc>0){var parts=fk.split("|"),did=parts.shift(),url=parts.join("|"),h=(S.housing[did]||[]).find(function(x){return x.url===url});if(h)awards.unshift(["🏆","Most Fachable Chalet",h.name+" · "+DESTS.find(function(x){return x.id===did}).name])}
  qs("#awards").innerHTML=awards.map(function(a){return '<div class="award-card"><div class="icon">'+a[0]+'</div><h4>'+a[1]+'</h4><p>'+a[2]+'</p></div>'}).join("");
  qs("#activityFeed").innerHTML=S.activity.slice(0,20).map(function(x){return '<div class="feed-item">'+esc(x.text)+'<time>'+new Date(x.ts).toLocaleString()+'</time></div>'}).join("")||'<p class="muted">Votes, comments and housing additions will appear here.</p>'
}
function renderTrip(){
  qs("#chosenDestination").innerHTML='<option value="">Choose destination</option>'+DESTS.map(function(d){return '<option value="'+d.id+'" '+(S.trip.destination===d.id?"selected":"")+'>'+d.name+'</option>'}).join("");qs("#tripDates").value=S.trip.dates||"";qs("#tripNotes").value=S.trip.notes||"";
  var ids=S.saved.length?S.saved:(S.trip.destination?[S.trip.destination]:[]);qs("#tripHousing").innerHTML=ids.map(function(id){var d=DESTS.find(function(x){return x.id===id});return d?'<h4>'+d.name+'</h4>'+housingHtml(d):""}).join("")||'<p class="muted">Save destinations or add housing to see them here.</p>'
}
qs("#saveTrip").onclick=function(){S.trip={destination:qs("#chosenDestination").value,dates:qs("#tripDates").value.trim(),notes:qs("#tripNotes").value.trim()};S.activity.unshift({text:S.profile+" updated the trip board",ts:Date.now()});save();renderGroup();alert("Trip board saved.")};
function showView(id){qsa(".view").forEach(function(v){v.classList.toggle("active",v.id===id)});qsa(".tab").forEach(function(t){t.classList.toggle("active",t.dataset.view===id)});if(id==="mapView")renderMap();if(id==="groupView")renderGroup();if(id==="tripView")renderTrip();scrollTo(0,0)}
qsa("[data-view]").forEach(function(b){b.onclick=function(){showView(b.dataset.view)}});qsa(".filter").forEach(function(b){b.onclick=function(){qsa(".filter").forEach(function(x){x.classList.remove("active")});b.classList.add("active");renderDestinations(b.dataset.filter)}});
qs("#profileBtn").onclick=function(){qs("#profileName").value=S.profile==="You"?"":S.profile;openSheet("profileSheet")};qs("#saveProfile").onclick=function(){S.profile=qs("#profileName").value.trim()||"You";save();qs("#profileBtn").textContent=initials(S.profile);closeSheets();renderAll()};
qs("#compareBtn").onclick=function(){var items=DESTS.filter(function(d){return S.saved.includes(d.id)});qs("#compareContent").innerHTML=items.length?'<div class="compare-table" style="--cols:'+items.length+'">'+[["Destination"].concat(items.map(function(d){return d.name})),["Airport"].concat(items.map(function(d){return d.airport+" · "+d.drive})),["Snow"].concat(items.map(function(d){return word(d.snow)})),["Fishing"].concat(items.map(function(d){return word(d.fishing)})),["Nightlife"].concat(items.map(function(d){return word(d.nightlife)})),["Cabin fit"].concat(items.map(function(d){return word(d.cabins)})),["Best window"].concat(items.map(function(d){return d.best}))].map(function(r){return '<div class="compare-row"><b>'+r[0]+'</b>'+r.slice(1).map(function(x){return '<span>'+x+'</span>'}).join("")+'</div>'}).join("")+'</div>':'<p class="muted">Save two or more destinations to compare them here.</p>';openSheet("compareSheet")};
function renderAll(){renderDestinations((qs(".filter.active")||{}).dataset?qs(".filter.active").dataset.filter:"all");renderGroup();renderTrip();qs("#profileBtn").textContent=initials(S.profile)}
renderAll();if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js").catch(function(){});


/* ---- richer group-planning UX enhancements ---- */
S.board=S.board||[];
S.availability=S.availability||{};
S.calendarMonth=Number.isInteger(S.calendarMonth)?S.calendarMonth:9;

function imageSearch(q){return "https://www.google.com/search?tbm=isch&q="+encodeURIComponent(q)}
function redditSearch(q){return "https://www.google.com/search?q="+encodeURIComponent("site:reddit.com "+q)}
function galleryHtml(d){
  var cards=[
    ["Mountain views",d.name+" "+d.range+" mountains"],
    ["Town & nightlife",d.name+" downtown nightlife"],
    ["Cabins & chalets",d.name+" mountain cabin chalet"],
    ["Skiing",d.name+" ski resort winter"],
    ["Fishing",d.name+" fly fishing river"],
    ["Best things to do",d.name+" best things to do"]
  ];
  return '<h3>Photos & inspiration</h3><div class="photo-link-grid">'+cards.map(function(c,i){
    return '<a class="photo-link-card" target="_blank" rel="noopener" href="'+imageSearch(c[1])+'" style="background-image:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.72)),url(\''+d.photo+'&crop='+(i%2?"entropy":"center")+'\')"><b>'+c[0]+'</b><span>Open gallery ↗</span></a>'
  }).join("")+'</div>';
}
function deepLinksHtml(d){
  var cards=[
    ["Official tourism",gs(d.name+" "+d.state+" official tourism")],
    ["Reddit trip reports",redditSearch(d.name+" trip recommendations")],
    ["Live webcams",gs(d.name+" live webcams ski mountain")],
    ["Events calendar",gs(d.name+" "+d.state+" events calendar 2026")],
    ["Weather & snow",gs(d.name+" weather snow report")],
    ["Fly fishing guides",gs(d.name+" fly fishing guides")],
    ["Ski resorts",gs(d.name+" ski resorts tickets")],
    ["Hot springs / spas",gs(d.name+" hot springs spa")],
    ["Google Maps",gm(d.name+" "+d.state)]
  ];
  return '<h3>Plan deeper</h3><div class="link-grid">'+cards.map(function(c){return '<a class="link-card" target="_blank" rel="noopener" href="'+c[1]+'"><b>'+c[0]+'</b><span>Open ↗</span></a>'}).join("")+'</div>'
}
function fachableLeaderFor(d){
  var best=null,bestCount=-1;
  (S.housing[d.id]||[]).forEach(function(h){
    var c=Object.values(S.housingVotes[houseKey(d.id,h.url)]||{}).filter(Boolean).length;
    if(c>bestCount){best={h:h,count:c};bestCount=c}
  });
  return best;
}
function fachableHtml(d){
  var leader=fachableLeaderFor(d);
  if(leader&&leader.count>0){
    return '<div class="fachable-spotlight"><div class="trophy">🏆</div><div><div class="eyebrow">MOST FACHABLE CHALET</div><h3>'+esc(leader.h.name)+'</h3><p>'+leader.count+' group vote'+(leader.count===1?"":"s")+' · keep voting below.</p></div></div>';
  }
  return '<div class="fachable-spotlight empty"><div class="trophy">🏆</div><div><div class="eyebrow">MOST FACHABLE CHALET</div><h3>No winner yet</h3><p>Add Airbnb/chalet options below. Every listing gets a “Most Fachable Chalet” vote button.</p></div></div>';
}

var _baseOpenDetail=window.openDetail;
window.openDetail=function(id){
  _baseOpenDetail(id);
  var d=DESTS.find(function(x){return x.id===id});if(!d)return;
  var body=qs("#detailContent .detail-body");
  if(body){
    var media=document.createElement("div");media.className="detail-extra";media.innerHTML=galleryHtml(d)+fachableHtml(d);
    var firstHeading=body.querySelector("h3");
    if(firstHeading)body.insertBefore(media,firstHeading);else body.prepend(media);
    var deep=document.createElement("div");deep.className="detail-extra";deep.innerHTML=deepLinksHtml(d);
    var comments=Array.from(body.querySelectorAll("h3")).find(function(h){return h.textContent==="Comments"});
    if(comments)body.insertBefore(deep,comments);else body.appendChild(deep);
  }
};

function renderBoard(){
  var list=qs("#boardList");if(!list)return;
  list.innerHTML=S.board.length?S.board.map(function(m){
    return '<div class="board-message"><div class="face">'+initials(m.name)+'</div><div class="board-bubble"><div><b>'+esc(m.name)+'</b><time>'+new Date(m.ts).toLocaleString()+'</time></div><p>'+esc(m.text)+'</p></div></div>'
  }).join(""):'<div class="board-empty">No messages yet. Start the group chat.</div>';
}
function postBoard(){
  var inp=qs("#boardInput");if(!inp)return;var t=inp.value.trim();if(!t)return;
  S.board.unshift({name:S.profile,text:t,ts:Date.now()});
  S.activity.unshift({text:S.profile+" posted to the group chat",ts:Date.now()});
  inp.value="";save();renderGroup();
}
if(qs("#postBoard"))qs("#postBoard").onclick=postBoard;
if(qs("#boardInput"))qs("#boardInput").addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key==="Enter")postBoard()});

var LONG_WEEKENDS=[
  {name:"New Year's weekend",start:"2026-01-01",end:"2026-01-04",note:"Thu holiday + Fri bridge day"},
  {name:"MLK Day",start:"2026-01-17",end:"2026-01-19",note:"3-day weekend"},
  {name:"Presidents Day",start:"2026-02-14",end:"2026-02-16",note:"3-day weekend"},
  {name:"Memorial Day",start:"2026-05-23",end:"2026-05-25",note:"3-day weekend"},
  {name:"Juneteenth",start:"2026-06-19",end:"2026-06-21",note:"Fri holiday · 3-day weekend"},
  {name:"Independence Day",start:"2026-07-03",end:"2026-07-05",note:"Observed Fri · 3-day weekend"},
  {name:"Labor Day",start:"2026-09-05",end:"2026-09-07",note:"3-day weekend"},
  {name:"Indigenous Peoples' / Columbus Day",start:"2026-10-10",end:"2026-10-12",note:"3-day federal holiday weekend"},
  {name:"Thanksgiving",start:"2026-11-26",end:"2026-11-29",note:"Thu holiday + common Fri off · 4-day window"},
  {name:"Christmas",start:"2026-12-25",end:"2026-12-27",note:"Fri holiday · 3-day weekend"}
];
function ymd(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function dateInRange(key,a,b){return key>=a&&key<=b}
function longWeekendFor(key){return LONG_WEEKENDS.find(function(w){return dateInRange(key,w.start,w.end)})}
function renderCalendar(){
  var grid=qs("#calendarGrid");if(!grid)return;
  var m=S.calendarMonth,year=2026,first=new Date(year,m,1),days=new Date(year,m+1,0).getDate();
  qs("#calendarMonthLabel").textContent=first.toLocaleString(undefined,{month:"long",year:"numeric"});
  var html=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(function(x){return '<div class="cal-dow">'+x+'</div>'}).join("");
  for(var z=0;z<first.getDay();z++)html+='<div class="cal-day blank"></div>';
  var mine=S.availability[S.profile]||[];
  for(var d=1;d<=days;d++){
    var date=new Date(year,m,d),key=ymd(date),lw=longWeekendFor(key),on=mine.includes(key);
    var total=Object.values(S.availability).filter(function(arr){return arr.includes(key)}).length;
    html+='<button class="cal-day '+(lw?"long-weekend ":"")+(on?"available ":"")+'" data-date="'+key+'"><span>'+d+'</span>'+(total?'<em>'+total+' free</em>':'')+(lw?'<i title="'+lw.name+'">★</i>':'')+'</button>';
  }
  grid.innerHTML=html;
  qsa("#calendarGrid [data-date]").forEach(function(b){b.onclick=function(){
    var key=b.dataset.date;S.availability[S.profile]=S.availability[S.profile]||[];
    var arr=S.availability[S.profile],i=arr.indexOf(key);if(i>=0)arr.splice(i,1);else arr.push(key);
    S.activity.unshift({text:S.profile+(i>=0?" removed":" added")+" availability for "+key,ts:Date.now()});
    save();renderCalendar();renderGroup();
  }});
  var nowMonth=m;
  qs("#longWeekendList").innerHTML='<div class="long-weekend-head">Extended weekends in 2026</div>'+LONG_WEEKENDS.map(function(w){
    var s=new Date(w.start+"T12:00:00"),e=new Date(w.end+"T12:00:00"),isMonth=s.getMonth()===nowMonth||e.getMonth()===nowMonth;
    return '<div class="long-weekend-card '+(isMonth?"current":"")+'"><div><b>'+w.name+'</b><span>'+s.toLocaleDateString(undefined,{month:"short",day:"numeric"})+'–'+e.toLocaleDateString(undefined,{month:"short",day:"numeric"})+'</span></div><small>'+w.note+'</small></div>'
  }).join("");
}
if(qs("#prevMonth"))qs("#prevMonth").onclick=function(){S.calendarMonth=(S.calendarMonth+11)%12;save();renderCalendar()};
if(qs("#nextMonth"))qs("#nextMonth").onclick=function(){S.calendarMonth=(S.calendarMonth+1)%12;save();renderCalendar()};

var _baseRenderGroup=renderGroup;
renderGroup=function(){
  _baseRenderGroup();
  renderBoard();
  renderCalendar();
  var awards=qs("#awards");
  if(awards&&!/Most Fachable Chalet/.test(awards.textContent)){
    awards.insertAdjacentHTML("afterbegin",'<div class="award-card fachable-award"><div class="icon">🏆</div><h4>Most Fachable Chalet</h4><p>No winner yet — add chalets inside a destination and vote.</p></div>');
  }
};

if(qs("#detailHome"))qs("#detailHome").onclick=function(){closeSheets();showView("exploreView")};
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeSheets()});
renderGroup();
