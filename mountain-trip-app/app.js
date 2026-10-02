
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


/* ---- release hardening: rich source content + GitHub-backed shared threads ---- */
var ISSUE_BY_DEST={jackson:4,parkcity:5,tahoe:6,girdwood:7,bozeman:8,durango:9,hoodriver:10,leavenworth:11,asheville:12,smokies:13,stowe:14,vegas:15};

var RICH={
jackson:{
  stay:"Stay in downtown Jackson if you want to walk Town Square, bars and restaurants; Teton Village is the ski-in/ski-out alternative; Wilson is the quieter Teton Pass option.",
  bars:["Million Dollar Cowboy Bar","Snake River Brewing","The Bird","Bin22","Mangy Moose"],
  food:["Snake River Grill","Wild Sage","Pinky G's Pizzeria","The Bunnery"],
  do:["JHMR tram to Rendezvous summit","Snake River float or whitewater","Taggart & Bradley Lakes","Teton Park Road ski / skate","National Elk Refuge sleigh ride","Cascade Canyon via Jenny Lake","Snow King gondola & Cowboy Coaster"],
  fish:["Snake River — native fine-spotted cutthroat","South Fork of the Snake","Flat Creek — trophy cutthroat Aug 1–Oct 31","Gros Ventre River"],
  ski:["Jackson Hole Mountain Resort — 4,139 ft vertical","Grand Targhee — powder-heavy western slope","Snow King — walkable town hill"],
  watch:"Highest-cost option on the list; November and late April–May can be shoulder-season quiet."
},
parkcity:{
  stay:"Old Town is the easiest group base: Main Street, Town Lift and free buses. Canyons Village and Deer Valley have deep condo inventory; SLC is the lower-cost alternative.",
  bars:["No Name Saloon","High West Saloon","The Spur Bar & Grill","Boneyard Saloon & Wine Dive","Downstairs"],
  food:["Riverhorse on Main","Handle","High West Saloon","Collie's Sports Bar & Grill"],
  do:["Snowbird tram to Hidden Peak","Alta–Snowbird combo day","Main Street bar crawl","Utah Olympic Park","Cecret Lake / Albion Basin","Park City mountain biking","Strawberry Reservoir ice fishing"],
  fish:["Middle Provo — year-round tailwater","Weber River","Lower Provo","Strawberry Reservoir"],
  ski:["Park City Mountain — 7,300 acres","Snowbird — steep, deep, long season","Alta — skiers only, classic powder"],
  watch:"Little Cottonwood powder mornings can turn a 45-minute drive into two hours; SR-210 can close for avalanche control."
},
tahoe:{
  stay:"Truckee is the best all-around base. Tahoe City is the lakefront alternative; Incline Village puts you close to Mt. Rose. Pick one shore and avoid driving the whole lake.",
  bars:["Moody's Bistro Bar & Beats","FiftyFifty Brewing Co.","Alibi Ale Works","Bar of America","Truckee Tavern & Grill"],
  food:["Trokay","Stella","Casa Baeza","Burger Me"],
  do:["Palisades aerial tram to High Camp","Emerald Bay & Vikingsholm","Mt. Rose Highway overlook","Tahoe Meadows snowshoe / ski","Downtown Truckee brewery crawl","Stateline casinos","Flume Trail MTB","Kayak / SUP Lake Tahoe"],
  fish:["Truckee River — wild rainbows and browns","Little Truckee tailwater","Pyramid Lake — Lahontan cutthroat","Lake Tahoe charters"],
  ski:["Palisades Tahoe","Northstar California","Heavenly"],
  watch:"Weekend Bay Area traffic and I-80 storm closures can wreck schedules; choose one shore and stay disciplined."
},
girdwood:{
  stay:"Girdwood is the mountain base; Anchorage is better for a bigger bar night; Cooper Landing is the fishing-first alternative on the Kenai.",
  bars:["Girdwood Brewing Company","Sitzmark Bar & Grill","Chair 5","Double Musky Inn bar","Aurora Bar at Hotel Alyeska"],
  food:["Jack Sprat","Double Musky Inn","Chair 5","Seven Glaciers"],
  do:["Alyeska Aerial Tram","Kenai River float trip","Russian River sockeye fishing","Heli- or cat-skiing","Alaska Railroad","Whittier tunnel & Prince William Sound","Eklutna Lake"],
  fish:["Upper Kenai River — trophy wild rainbows","Russian River / Kenai confluence","Bird Creek coho","Ship Creek in Anchorage"],
  ski:["Alyeska Resort","Arctic Valley","Hilltop"],
  watch:"Coastal weather is volatile: rain at the base and avalanche-control closures on the Seward Highway are real trip risks."
},
bozeman:{
  stay:"Downtown Bozeman is the easiest social base. Bridger Canyon is the cabin play; Big Sky is the ski-in/ski-out resort alternative.",
  bars:["Rocking R Bar","The Crystal Bar","Bar IX","The Molly Brown","Bridger Brewing"],
  food:["Montana Ale Works","Open Range","Plonk","Bridger Brewing"],
  do:["Float the Madison or Yellowstone","Bridger Bowl ridge laps","Big Sky Lone Peak tram","Chico Hot Springs","Norris Hot Springs","Yellowstone Lamar Valley wildlife drive","Hyalite Canyon","Sacagawea Peak hike"],
  fish:["Madison River","Gallatin River","Yellowstone River","East Gallatin River"],
  ski:["Bridger Bowl — locals' nonprofit hill","Big Sky Resort — 5,850 acres"],
  watch:"Bozeman is much pricier than it used to be, and US-191 to Big Sky can be slow and icy in storms."
},
durango:{
  stay:"Base downtown if you want Main Avenue on foot. Cabins up the Animas Valley trade walkability for scenery. Telluride and Ouray are excellent side-trip bases.",
  bars:["Diamond Belle Saloon","Steamworks Brewing","Ska Brewing","El Moro Spirits & Tavern","Animas Brewing"],
  food:["El Moro Spirits & Tavern","Carver Brewing Co.","Steamworks Brewing","The Bookcase & Barber"],
  do:["Durango & Silverton Narrow Gauge Railroad","Million Dollar Highway","Ouray Hot Springs","Ouray Ice Park","Silverton Mountain guided day","Drift the San Juan","Fall aspen drives","Jeep the Alpine Loop"],
  fish:["San Juan River quality waters","Animas River through town","Dolores River","Piedra River"],
  ski:["Purgatory Resort","Silverton Mountain","Telluride Ski Resort"],
  watch:"DRO has limited nonstop service, and winter storms can close US-550's high passes with little warning."
},
hoodriver:{
  stay:"Hood River gives you walkable taprooms and restaurants. Government Camp is the ski-village choice; Welches / Rhododendron is forest-cabin country.",
  bars:["pFriem Family Brewers","Double Mountain Brewery & Cidery","Full Sail Brew Pub","Ferment Brewing Company","Working Hands Fermentation"],
  food:["Solstice Wood Fire Pizza","Celilo Restaurant & Bar","Broder Øst","Lake Taco"],
  do:["Ski Timberline / Meadows / Skibowl","Palmer Snowfield summer skiing","Columbia Gorge waterfalls","Hood River brewery crawl","Fruit Loop","Lower Deschutes fishing","Deschutes rafting","Windsurf / kiteboard the Gorge"],
  fish:["Lower Deschutes — wild redsides","Sandy River winter steelhead","Hood River steelhead / salmon","Lost Lake"],
  ski:["Timberline Lodge & Ski Area","Mt. Hood Meadows","Mt. Hood Skibowl"],
  watch:"Natural-snow dependence matters; low-snow years can delay openings and shorten the season."
},
leavenworth:{
  stay:"Downtown Leavenworth is the walkable beer-hall base. Icicle Road and Lake Wenatchee have the big-cabin inventory; Snoqualmie Pass is the ski-in alternative.",
  bars:["München Haus","Icicle Brewing","Blewett Brewing","Doghaus Brewery","Stein"],
  food:["Andreas Keller","Mozart's","Rhein Haus","Visconti's"],
  do:["Ski Stevens Pass","Night ski Snoqualmie","Enchantments / Colchuck Lake","Float the Yakima","Leavenworth beer-hall night","Snoqualmie Falls","Rattlesnake Ledge / Mount Si","Icicle Canyon climbing"],
  fish:["Upper Yakima River","Wenatchee River","Icicle Creek","Middle Fork Snoqualmie"],
  ski:["Stevens Pass","Mission Ridge","The Summit at Snoqualmie"],
  watch:"Oktoberfest and Christmastown weekends are packed and expensive; US-2 and I-90 can close for hours in storms."
},
asheville:{
  stay:"Downtown / South Slope is the walkable brewery base. Black Mountain and Brevard are the cabin-and-trout alternatives.",
  bars:["Burial Beer Co.","Wicked Weed Brewpub","Highland Brewing","Green Man Brewery","Sierra Nevada Mills River"],
  food:["Cúrate","Chai Pani","Burial Forestry Camp","Wicked Weed Brewpub"],
  do:["Blue Ridge Parkway to Mount Mitchell","South Slope brewery crawl","Sierra Nevada Mills River","Looking Glass Rock & Falls","Delayed Harvest fly fishing","Graveyard Fields","French Broad float","Bent Creek / Pisgah MTB"],
  fish:["Davidson River","Tuckasegee Delayed Harvest","Nantahala Delayed Harvest","South Mills River"],
  ski:["Cataloochee Ski Area","Sugar Mountain","Beech Mountain Resort"],
  watch:"This is a beer / food / fishing trip first. Natural snow is unreliable and the meaningful ski hills are small and far from Asheville."
},
smokies:{
  stay:"Gatlinburg is the walkable strip; Townsend is the quieter cabin base; Cherokee is the trout-water alternative.",
  bars:["Gatlinburg Brewing Company","Smoky Mountain Brewery","Sugarlands Distilling Co.","Ole Smoky"],
  food:["The Peddler Steakhouse","The Greenbrier Restaurant","Howard's Restaurant"],
  do:["Kuwohi tower & Newfound Gap","Alum Cave Trail to Mount Le Conte","Cades Cove","Guided fly fishing","Moonshine tasting crawl","Waterfall hikes","Oconaluftee elk","Little River tubing"],
  fish:["Little River","Abrams Creek","Oconaluftee River","Cherokee Enterprise Waters"],
  ski:["Ober Gatlinburg","Cataloochee Ski Area"],
  watch:"October and holiday traffic can be brutal; the strip is touristy rather than a true ski-town nightlife scene."
},
stowe:{
  stay:"Stowe village is picturesque and walkable in the center, but Mountain Road lodging spreads out. Waterbury is cheaper; Burlington adds a college-city night out.",
  bars:["The Alchemist Stowe","von Trapp Brewing & Bierhall","The Matterhorn","Doc Ponds","Prohibition Pig (Waterbury)"],
  food:["Plate","Piecasso","American Flatbread"],
  do:["Ski Stowe Front Four","Mount Mansfield hike","Craft beer trail","Smugglers' Notch drive","Stowe Recreation Path","Mount Mansfield toll road / gondola","VT-100 foliage drives","Mad River Glen"],
  fish:["Lamoille River","Little River / Winooski","Mad River","Battenkill"],
  ski:["Stowe Mountain Resort","Sugarbush","Smugglers' Notch","Mad River Glen"],
  watch:"Mud season can close high trails, and November stick season is a gray in-between period."
},
vegas:{
  stay:"Stay on the Strip for nightlife, Summerlin / Red Rock for easier mountain access, or Mount Charleston village if you want a quiet pine-forest night.",
  bars:["Able Baker Brewing","CraftHaus","Tenaya Creek Brewery","Big Dog's Brewing","The Tavern at The Retreat on Charleston Peak"],
  food:["Canyon Restaurant at The Retreat on Charleston Peak"],
  do:["Lee Canyon ski day","Charleston Peak via South Loop","Cathedral Rock Trail","Bristlecone pines","Snow play at Foxtail / Lee Meadows","Red Rock Canyon scenic drive","Lake Mead / Willow Beach fishing","Strip & Fremont nightlife"],
  fish:["Lake Mohave / Willow Beach","Lake Mead","Cold Creek Pond","Las Vegas urban ponds"],
  ski:["Lee Canyon"],
  watch:"This is a Vegas trip with a mountain attached: skiing is small, trout rivers are absent, and the mountain has almost no nightlife."
}
};

function richList(title,items){
  return '<div class="rich-block"><h4>'+title+'</h4><div class="rich-chips">'+items.map(function(x){return '<span>'+esc(x)+'</span>'}).join("")+'</div></div>';
}
function persistentThreadHtml(d){
  var n=ISSUE_BY_DEST[d.id];
  return '<div class="shared-panel destination-thread"><div><div class="eyebrow">PERSISTENT DESTINATION THREAD</div><h4>Shared '+esc(d.name)+' comments</h4><p>Everyone can read the same thread. Open GitHub to post, edit or delete your own comments.</p></div><a class="primary shared-link" target="_blank" rel="noopener" href="https://github.com/chrisjdaniels24research-dot/Paris-guide/issues/'+n+'">Open thread ↗</a></div><div class="shared-comments" id="sharedComments-'+d.id+'"><p class="muted">Loading shared comments…</p></div>';
}
function loadSharedComments(d){
  var el=qs("#sharedComments-"+d.id);if(!el)return;
  fetch("https://api.github.com/repos/chrisjdaniels24research-dot/Paris-guide/issues/"+ISSUE_BY_DEST[d.id]+"/comments",{headers:{"Accept":"application/vnd.github+json"}})
    .then(function(r){if(!r.ok)throw new Error("GitHub "+r.status);return r.json()})
    .then(function(rows){
      el.innerHTML=rows.length?rows.slice(-12).reverse().map(function(c){return '<div class="comment shared"><b>'+esc(c.user&&c.user.login||"GitHub user")+'</b><p>'+esc(String(c.body||"").slice(0,1200))+'</p><small>'+new Date(c.created_at).toLocaleString()+' · <a target="_blank" rel="noopener" href="'+c.html_url+'">open ↗</a></small></div>'}).join(""):'<p class="muted">No shared comments yet — start the thread.</p>';
    }).catch(function(){el.innerHTML='<p class="muted">Shared comments could not load right now. The GitHub thread still works.</p>'});
}

var _richOpenDetail=window.openDetail;
window.openDetail=function(id){
  _richOpenDetail(id);
  var d=DESTS.find(function(x){return x.id===id}),r=RICH[id]; if(!d||!r)return;
  var body=qs("#detailContent .detail-body");if(!body)return;
  var anchor=Array.from(body.querySelectorAll("h3")).find(function(h){return h.textContent==="What do you think?"});
  var panel=document.createElement("div");panel.className="source-rich";
  panel.innerHTML='<h3>How to do '+esc(d.name)+'</h3><p class="stay-note">'+esc(r.stay)+'</p>'+
    richList("Bars & breweries",r.bars)+richList("Restaurants",r.food)+richList("Things to do",r.do)+richList("Fishing",r.fish)+richList("Skiing",r.ski)+
    '<div class="watchout"><b>Watch-out</b><span>'+esc(r.watch)+'</span></div>'+persistentThreadHtml(d);
  if(anchor)body.insertBefore(panel,anchor);else body.prepend(panel);
  rebuildLocalComments(d);
  rebuildHousing(d);
  loadSharedComments(d);
};

function rebuildLocalComments(d){
  var box=qs("#comments");if(!box)return;var comments=S.comments[d.id]||[];
  box.innerHTML=comments.length?comments.map(function(c,i){return '<div class="comment"><b>'+esc(c.name)+'</b><p>'+esc(c.text)+'</p><small>'+new Date(c.ts).toLocaleString()+'</small>'+(c.name===S.profile?'<div class="item-actions"><button class="danger-mini" data-del-comment="'+i+'">Delete</button></div>':'')+'</div>'}).join(""):'<p class="muted">No quick comments on this device.</p>';
  qsa("[data-del-comment]").forEach(function(b){b.onclick=function(){var i=Number(b.dataset.delComment);if(!confirm("Delete this local comment?"))return;S.comments[d.id].splice(i,1);save();window.openDetail(d.id)}});
}
function rebuildHousing(d){
  var list=qs("#housingList");if(!list)return;
  var arr=S.housing[d.id]||[];
  if(!arr.length)return;
  qsa("#housingList .housing-card").forEach(function(card,i){
    if(i===0)return;
    var idx=i-1;
    var actions=card.querySelector(".housing-actions");
    if(actions&&arr[idx])actions.insertAdjacentHTML("beforeend",'<button class="danger-mini" data-del-housing="'+idx+'">Delete</button>');
  });
  qsa("[data-del-housing]").forEach(function(b){b.onclick=function(){var i=Number(b.dataset.delHousing);if(!confirm("Remove this housing option?"))return;S.housing[d.id].splice(i,1);save();window.openDetail(d.id);renderTrip()}});
}
function renderBoard(){
  var list=qs("#boardList");if(!list)return;
  list.innerHTML=S.board.length?S.board.map(function(m,i){
    return '<div class="board-message"><div class="face">'+initials(m.name)+'</div><div class="board-bubble"><div><b>'+esc(m.name)+'</b><time>'+new Date(m.ts).toLocaleString()+'</time></div><p>'+esc(m.text)+'</p>'+(m.name===S.profile?'<div class="item-actions"><button class="danger-mini" data-del-board="'+i+'">Delete</button></div>':'')+'</div></div>'
  }).join(""):'<div class="board-empty">No quick notes on this device.</div>';
  qsa("[data-del-board]").forEach(function(b){b.onclick=function(){var i=Number(b.dataset.delBoard);if(!confirm("Delete this quick note?"))return;S.board.splice(i,1);save();renderBoard()}});
}
function availabilityText(){
  var a=(S.availability[S.profile]||[]).slice().sort();
  if(!a.length)return S.profile+" has not marked any 2026 availability yet.";
  return S.profile+" — 2026 mountain-trip availability:\n"+a.map(function(x){var d=new Date(x+"T12:00:00");var lw=longWeekendFor(x);return "• "+d.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"})+(lw?" — "+lw.name:"")}).join("\n");
}
if(qs("#copyAvailability"))qs("#copyAvailability").onclick=function(){
  var t=availabilityText();
  navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(function(){alert("Availability copied. Paste it into the shared GitHub availability thread.")}).catch(function(){prompt("Copy this availability:",t)}):prompt("Copy this availability:",t);
};

/* show shared group-chat comments inside the Group page */
function loadSharedGroupChat(){
  var board=qs("#boardList");if(!board||qs("#sharedGroupReadback"))return;
  var wrap=document.createElement("div");wrap.id="sharedGroupReadback";wrap.className="shared-group-readback";wrap.innerHTML='<div class="eyebrow">LATEST SHARED CHAT</div><p class="muted">Loading from GitHub…</p>';
  board.parentNode.insertBefore(wrap,board);
  fetch("https://api.github.com/repos/chrisjdaniels24research-dot/Paris-guide/issues/2/comments",{headers:{"Accept":"application/vnd.github+json"}})
   .then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(rows){
     wrap.innerHTML='<div class="eyebrow">LATEST SHARED CHAT</div>'+(rows.length?rows.slice(-10).reverse().map(function(c){return '<div class="comment shared"><b>'+esc(c.user&&c.user.login||"GitHub user")+'</b><p>'+esc(String(c.body||"").slice(0,800))+'</p><small><a target="_blank" href="'+c.html_url+'">open / edit / delete ↗</a></small></div>'}).join(""):'<p class="muted">No shared messages yet.</p>');
   }).catch(function(){wrap.innerHTML='<div class="eyebrow">LATEST SHARED CHAT</div><p class="muted">Could not load GitHub comments. Use Open shared chat above.</p>'});
}
var _releaseRenderGroup=renderGroup;
renderGroup=function(){_releaseRenderGroup();loadSharedGroupChat();};


/* ---- real destination photo galleries + final interaction hardening ---- */
function gallerySearchTerm(d){
  var q={
    jackson:"Grand Teton Jackson Wyoming",
    parkcity:"Park City Utah Wasatch",
    tahoe:"Lake Tahoe Truckee Sierra Nevada",
    girdwood:"Girdwood Alaska Alyeska Chugach",
    bozeman:"Bozeman Montana Bridger Mountains",
    durango:"Durango Colorado San Juan Mountains",
    hoodriver:"Hood River Oregon Mount Hood",
    leavenworth:"Leavenworth Washington Cascades",
    asheville:"Asheville North Carolina Blue Ridge Mountains",
    smokies:"Gatlinburg Great Smoky Mountains",
    stowe:"Stowe Vermont Green Mountains",
    vegas:"Mount Charleston Nevada Spring Mountains"
  };
  return q[d.id]||d.name+" "+d.range;
}
galleryHtml=function(d){
  return '<h3>Photos</h3><div id="commonsGallery-'+d.id+'" class="commons-gallery"><div class="gallery-loading">Loading real destination photos…</div></div><div class="gallery-actions"><a class="text-btn" target="_blank" rel="noopener" href="'+imageSearch(gallerySearchTerm(d))+'">See more photos ↗</a></div>';
}
function loadCommonsGallery(d){
  var el=qs("#commonsGallery-"+d.id);if(!el)return;
  var url="https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch="+encodeURIComponent(gallerySearchTerm(d))+"&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url%7Cmime%7Cextmetadata&iiurlwidth=900&format=json&origin=*";
  fetch(url).then(function(r){if(!r.ok)throw new Error("commons");return r.json()}).then(function(data){
    var pages=Object.values(data.query&&data.query.pages||{}).filter(function(p){
      var ii=p.imageinfo&&p.imageinfo[0];return ii&&ii.thumburl&&/^image\/(jpeg|png|webp)/.test(ii.mime||"");
    }).slice(0,8);
    if(!pages.length)throw new Error("empty");
    el.innerHTML=pages.map(function(p,i){
      var ii=p.imageinfo[0],title=String(p.title||"").replace(/^File:/,"");
      return '<a class="commons-photo '+(i===0?"wide":"")+'" target="_blank" rel="noopener" href="'+ii.descriptionurl+'"><img loading="lazy" src="'+ii.thumburl+'" alt="'+esc(title)+'"><span>'+esc(title.replace(/\.[^.]+$/,""))+'</span></a>';
    }).join("");
  }).catch(function(){
    el.innerHTML='<div class="commons-photo wide fallback" style="background-image:url(\''+d.photo+'\')"><span>'+esc(d.name)+'</span></div><p class="muted">Wikimedia gallery unavailable right now. Use “See more photos.”</p>';
  });
}
var _galleryOpen=window.openDetail;
window.openDetail=function(id){
  _galleryOpen(id);
  var d=DESTS.find(function(x){return x.id===id});if(!d)return;
  loadCommonsGallery(d);

  /* Destination vote buttons toggle off when the active choice is tapped again. */
  qsa("#detailContent [data-vote]").forEach(function(b){
    b.onclick=function(){
      S.votes[d.id]=S.votes[d.id]||{};
      var next=(S.votes[d.id][S.profile]===b.dataset.vote)?"":b.dataset.vote;
      if(next)S.votes[d.id][S.profile]=next;else delete S.votes[d.id][S.profile];
      S.activity.unshift({text:S.profile+(next?" voted "+b.textContent.trim():" cleared a vote")+" on "+d.name,ts:Date.now()});
      save();window.openDetail(d.id);renderAll();
    };
  });

  /* Validate pasted housing URLs and keep arbitrary schemes out of the page. */
  var add=qs("#saveHousing");
  if(add)add.onclick=function(){
    var raw=qs("#hUrl").value.trim(),u;
    try{u=new URL(raw)}catch(e){alert("Paste a full http(s) listing URL.");return}
    if(!/^https?:$/.test(u.protocol)){alert("Use an http(s) listing URL.");return}
    S.housing[d.id]=S.housing[d.id]||[];
    S.housing[d.id].push({name:qs("#hName").value.trim()||"Group housing option",url:u.href,total:qs("#hTotal").value,people:qs("#hPeople").value,beds:qs("#hBeds").value,note:qs("#hNote").value.trim()});
    S.activity.unshift({text:S.profile+" added a housing option in "+d.name,ts:Date.now()});
    save();window.openDetail(d.id);renderTrip();renderGroup();
  };
};

function refreshSharedGroupChat(){
  var old=qs("#sharedGroupReadback");if(old)old.remove();
  loadSharedGroupChat();
}
var groupPanel=qs(".comment-board .shared-panel");
if(groupPanel&&!qs("#refreshSharedChat")){
  var rb=document.createElement("button");rb.id="refreshSharedChat";rb.className="secondary";rb.textContent="Refresh";
  rb.onclick=refreshSharedGroupChat;groupPanel.appendChild(rb);
}

/* Explicitly label browser-only notes so nobody mistakes them for shared state. */
var localHead=Array.from(document.querySelectorAll(".detail-body h3")).find(function(h){return h.textContent==="Comments"});
if(localHead)localHead.textContent="Quick notes on this device";


/* ---- final link/readback polish ---- */
richList=function(title,items){
  return '<div class="rich-block"><h4>'+title+'</h4><div class="rich-chips">'+items.map(function(x){
    var mapLike=/Bars|Restaurants/i.test(title);
    var href=mapLike?gm(x):gs(x+" official");
    return '<a target="_blank" rel="noopener" href="'+href+'">'+esc(x)+' ↗</a>';
  }).join("")+'</div></div>';
}
function appleMaps(q){return "https://maps.apple.com/?q="+encodeURIComponent(q)}
var _linkPolishOpen=window.openDetail;
window.openDetail=function(id){
  _linkPolishOpen(id);
  var d=DESTS.find(function(x){return x.id===id});if(!d)return;
  var body=qs("#detailContent .detail-body");
  if(body&&!qs("#iosLinks-"+id)){
    var links=document.createElement("div");links.id="iosLinks-"+id;links.className="ios-quick-links";
    links.innerHTML='<a class="pill" target="_blank" rel="noopener" href="'+appleMaps(d.name+" "+d.state)+'"> Apple Maps</a>'+
      '<a class="pill" target="_blank" rel="noopener" href="'+gs("Vrbo "+d.name+" "+d.state)+'">Vrbo ↗</a>'+
      '<a class="pill" target="_blank" rel="noopener" href="'+gs("hotels "+d.name+" "+d.state)+'">Hotels ↗</a>'+
      '<a class="pill" target="_blank" rel="noopener" href="'+gs(d.name+" "+d.state+" events 2026")+'">Events ↗</a>';
    var stats=body.querySelector(".stats");if(stats)stats.insertAdjacentElement("afterend",links);else body.prepend(links);
  }
  var h=Array.from(body?body.querySelectorAll("h3"):[]).find(function(x){return x.textContent==="Comments"});
  if(h)h.textContent="Quick notes on this device";
};

function loadSharedAvailability(){
  var host=qs("#longWeekendList");if(!host||qs("#sharedAvailabilityReadback"))return;
  var el=document.createElement("div");el.id="sharedAvailabilityReadback";el.className="shared-availability-readback";
  el.innerHTML='<div class="eyebrow">SHARED AVAILABILITY POSTS</div><p class="muted">Loading from GitHub…</p>';
  host.parentNode.insertBefore(el,host);
  fetch("https://api.github.com/repos/chrisjdaniels24research-dot/Paris-guide/issues/3/comments",{headers:{"Accept":"application/vnd.github+json"}})
   .then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(rows){
     el.innerHTML='<div class="eyebrow">SHARED AVAILABILITY POSTS</div>'+(rows.length?rows.slice(-8).reverse().map(function(c){return '<div class="comment shared"><b>'+esc(c.user&&c.user.login||"GitHub user")+'</b><p>'+esc(String(c.body||"").slice(0,1200))+'</p><small><a target="_blank" rel="noopener" href="'+c.html_url+'">open / edit / delete ↗</a></small></div>'}).join(""):'<p class="muted">No shared availability posts yet.</p>');
   }).catch(function(){el.innerHTML='<div class="eyebrow">SHARED AVAILABILITY POSTS</div><p class="muted">Could not load posts. Use “Open shared availability” above.</p>'});
}
var _availabilityRenderGroup=renderGroup;
renderGroup=function(){_availabilityRenderGroup();loadSharedAvailability();};

/* ---- share control ---- */
if(qs("#shareApp"))qs("#shareApp").onclick=function(){
  var url=location.href.split("#")[0],data={title:"Mountain Trip",text:"Help us pick the mountain trip — vote, check dates, compare chalets and drop comments.",url:url};
  if(navigator.share){navigator.share(data).catch(function(){})}
  else if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(function(){alert("App link copied.")})}
  else prompt("Copy this link:",url);
};


/* ---- empty-state polish ---- */
var _emptyStateRenderGroup=renderGroup;
renderGroup=function(){
  _emptyStateRenderGroup();
  var positive=DESTS.reduce(function(n,d){return n+likes(d)},0);
  if(!positive){
    var first=qs("#awards .award-card");
    if(first&&/Group favorite/.test(first.textContent)){
      first.querySelector("h4").textContent="Group voting not started";
      var p=first.querySelector("p");if(p)p.textContent="Nobody has cast a positive destination vote yet.";
    }
    var summary=qs("#groupSummary");
    if(summary&&!qs("#voteEmptyNote")){
      summary.insertAdjacentHTML("afterbegin",'<div id="voteEmptyNote" class="empty-note">No destination votes yet. Rankings will become meaningful as the group votes.</div>');
    }
  }
};
renderGroup();
