function MakeLeague(name) {
    return {
      name,
      list: [],
      makeplayer:makeplayer,
      displayplayers,
      removeplayers,
    };
  }

  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  
  var id = generateID();
  
 
  function makeplayer(name, position,age, club, images) {
    var data = {
    name,
    position,
    age,
    club,
    images,
    id: id(),
    }
    this.list.push(data);
    return data
  }

  var Team1 = MakeLeague('FIRST LEAGUE')
  
  
  Team1.makeplayer('Hugo loris','Goalkeeper',30,'Tottenham',['https://fff.twic.pics/https://media.fff.fr/uploads/images/18a65071725f72d79db6a64805e9d61c.png?twic=v1/focus=1162x604/cover=380x296','http://lactusport.fr/wp-content/uploads/2019/05/7794067797_hugo-lloris-avec-les-bleus-le-10-juillet-2018-a-saint-petersbourg.jpg'])
  Team1.makeplayer('G. Vicario','Goalkeeper',27,'Tottenham',['https://www.thesun.co.uk/wp-content/uploads/2023/06/1512297b-6039-4894-a867-21171d06e194.jpg?w=960','https://www.footballdatabase.eu/images/photos/players/a_297/297145.jpg'])
  Team1.makeplayer('Cristian Romero','Central defender',25,'Tottenham',['https://www.footballdatabase.eu/images/photos/players/a_304/304280.jpg','https://i.guim.co.uk/img/media/d0a9a2ee409bb34a9f8e92a37cb6431c2ef64853/861_312_1839_1103/master/1839.jpg?width=620&dpr=2&s=none'])
  Team1.makeplayer(' Eric Dier','Central defender',29,'Tottenham',['https://www.footballdatabase.eu/images/photos/players/a_129/129332.jpg','https://i.guim.co.uk/img/media/716dd7b4fff0ee8e57832114574c07f1020c1c9c/0_76_2553_1533/master/2553.jpg?width=620&dpr=2&s=none'])
  Team1.makeplayer(' Ashley Phillips','Central Defender',18,'Tottenham',['https://cdn.vox-cdn.com/thumbor/MlaPvDS0I3YxpGTE7EAG9mUW9Co=/0x0:2569x3365/1220x813/filters:focal(1186x546:1596x956):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72516397/1249720904.0.jpg','https://www.thesun.co.uk/wp-content/uploads/2023/07/OQ-OFF-PLATFORM-PHILLIPS-SPURS-1.jpg?w=820&quality=44'])
  Team1.makeplayer(' BEN DAVIES','Defender',30,'Tottenham',['https://e0.365dm.com/22/04/2048x1152/skysports-ben-davies-tottenham_5732145.jpg?20220408150303','https://static.independent.co.uk/2023/02/20/12/b740f9632412ca8c1c10a63dd49705c0Y29udGVudHNlYXJjaGFwaSwxNjc2OTc5NDk2-2.71054085.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp'])
  Team1.makeplayer(' MICKY VAN','Defender',22,'Tottenham',['https://assets.bundesliga.com/player/dfl-obj-j01khm-dfl-clu-000003-dfl-sea-0001k7-body.png','https://www.daveockop.com/wp-content/uploads/2023/06/Micky-van-de-Ven-Wolfsburg.webp'])
  Team1.makeplayer(' OLIVER SKIPP','Central',23,'Tottenham',['https://www.footballdatabase.eu/images/photos/players/a_308/308636.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsCXYYYY6uFirsIUTh-C1djeHdC_RtpppctVhpldqg4o5hCaDKGwgkjdRbo2XKklQUrY&usqp=CAU'])
  Team1.makeplayer(' HARVEY WHITE','Central',22,'Tottenham',['https://www.footballdatabase.eu/images/photos/players/a_364/364887.jpg','https://www.footballdatabase.eu/images/photos/players/2020-2021/a_364/364887.jpg'])
  
  
  Team1.makeplayer('AARON RAM','Goalkeeper',25,'Arsenal',['https://e0.365dm.com/21/08/768x432/skysports-ramsdale-arsenal_5484905.jpg?20210820185626','https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/08/21/3114975144.jpeg'])
  Team1.makeplayer('DAVID RAYA','Goalkeeper',28,'Arsenal',['https://e0.365dm.com/23/02/2048x1152/skysports-david-raya-brentford_6052925.jpg?20230210145620','https://res.cloudinary.com/brentford-fc/image/upload/f_auto,q_auto:best,f_auto,c_fill,ar_1:1,g_north/David_Raya_02_lwsgch.png'])
  Team1.makeplayer(' OMAR REKIK','Defender',21,'Arsenal',['https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/303848.png&w=350&h=254','https://www.footballdatabase.eu/images/photos/players/2021-2022/a_365/365474.jpg'])
  Team1.makeplayer(' WILLIAM SAL','Defender',22,'Arsenal',['https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MicrosoftTeams-image%20%2831%29_0.png?auto=webp&itok=zY0rjgVn','https://e0.365dm.com/23/04/2048x1152/skysports-wiliam-saliba-arsenal_6127299.jpg?20230420105353'])
  Team1.makeplayer(' TAKEHIRO TOMI','Defender',24,'Arsenal',['https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MicrosoftTeams-image%20%2832%29_0.png?auto=webp&itok=i6UFe3mR','https://dailypost.ng/wp-content/uploads/2021/12/Takehiro-Tomiyasu-scaled.jpeg'])
  Team1.makeplayer(' HARVEY WHITE','Defender',22,'Arsenal',['https://www.footballdatabase.eu/images/photos/players/a_364/364887.jpg','https://www.footballdatabase.eu/images/photos/players/2020-2021/a_364/364887.jpg'])
  Team1.makeplayer(' BUKAYO SAKA','Central',23,'Arsenal',['https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Headshot_Saka_1510x850_0.jpg?auto=webp&itok=yZpptHcr','https://www.arsenal.com/sites/default/files/shorthand/stories/R7nKRzpKMp/2023-05-15T13%3A02%3A04.201Z/assets/x0FLXAhH2V/gettyimages-1488192786_enhanced-750x500.jpg'])
  
  
  
  
  
  function display(player) {
    var id = player.id;
    $("#team").append(`
    <div class = player id = player${id}>
     <h2 class = title id = title${id}>${player.name}</h2>
     <img class = image id = image${id} src=${player.images[0]} alt = ${player.images[1]} />
     <p class = club id = club${id}>${player.club}</p>
     <p class = pos id = pos${id}>${player.position}</p>
     <p class = age id = age${id}>${player.age}</p>
     <button class= "remove" id ="btn${id}" "> remove </button>
    </div>
    `)
    $(`#btn${id}`).on('click',function(){
        console.log('clicked');
        Team1.removeplayers(id)
    })
    
  }
  function displayplayers() {
    $("#team").empty();
    for (var i = 0; i < this.list.length; i++) {
      display(this.list[i]);
    }
  }
  
  Team1.displayplayers();
  
 
  function removeplayers(id) {
    console.log(Team1.list)
    Team1.list = Team1.list.filter(function(item, index) {
      return item.id !== id;
    });
    Team1.displayplayers()
 }

 function sortByclub() {
  Team1.list.sort(function (a, b) {
    return a.club - b.club;
  });

  Team1.displayplayers();
}

function sortByposition() {
  Team1.list
    .sort(function (a, b) {
      return a.position - b.position;
    })
    .reverse();
  Team1.displayplayers();
}

$(".image").click(function () {
    var id = this.id;
    console.log(id);
    var src = this.src;
    var alt = this.alt;
    $(`#${id}`).attr("src", alt);
    $(`#${id}`).attr("alt", src);
  });


$("#club").on("click", sortByclub);

$("select").on("change", function () {
  var value = $(this).val();
  console.log(value);
  var filtered = Team1.list.filter(function (item) {
    return item.club === value;
  });
  $("#team").empty();
  filtered.forEach(function (item) {
    display(item);
  });
});

$("#bts").on("click", function () {
  var value = $(".input").val();
  console.log(value);
  var filtered = Team1.list.filter(function (item) {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  $("#team").empty();
  filtered.forEach(function (item) {
    display(item);
  });
});
  