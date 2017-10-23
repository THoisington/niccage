$(document).ready(function () {
//var currFrame = 0;
var indexArray = [];
var json = {"images": [
    {
      "id": 0,
      "link": "https://i.kinja-img.com/gawker-media/image/upload/s--2wKOFE_v--/c_scale,fl_progressive,q_80,w_800/iwpzjy3ggdpapoagr8av.jpg"
    },
    {
      "id": 1,
      "link": "http://cdn1-www.craveonline.com/assets/uploads/2014/10/Nicolas-Cage-Con-Air.jpg"
    },
    {
      "id": 2,
      "link": "https://i.ytimg.com/vi/JrQkgLLL9XQ/hqdefault.jpg"
    },
    {
      "id": 3,
      "link": "http://gazettereview.com/wp-content/uploads/2016/12/cage.jpg"
    },
    {
      "id": 4,
      "link": "http://horrorgeeklife.com/wp-content/uploads/2016/09/bees.jpg"
    },
    {
      "id": 5,
      "link": "plum.jpg"
    },
    {
      "id": 6,
      "link": "http://i44.tinypic.com/a3dq8g.jpg"
    },
    {
      "id": 7,
      "link": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5NjQ2NzQxMl5BMl5BanBnXkFtZTgwNDk0MjE3MjI@._CR423,133,680,680_UX402_UY402._SY201_SX201_AL_.jpg"
    },
    {
      "id": 8,
      "link": "http://uproxx.files.wordpress.com/2016/11/nic-cage-three-films-seven-days.jpg"
    },
    {
      "id": 9,
      "link": "https://heavyeditorial.files.wordpress.com/2017/07/cage-e1500868011569.jpg"
    }
  ]
};

initial();
restart();


function initial(){
  var indexCtr = 0;
  for(var i= 0; i<json.images.length; i++){
    indexArray.push(i);
  }
  indexArray = shuffle(indexArray);

  $('.frame').each(function(){
    var link = json.images[indexArray[indexCtr]].link;
    var id = json.images[indexArray[indexCtr]].id;
    $(this).css('background-image', 'url(' + link + ')');
    $(this).attr("data-id",id);
    indexCtr++;
  });
}

function cycle(subArray){
  var index = 0;
  var notOnScreen = subArray.slice();

  function timeout(){
    setTimeout(function () {
        if(index === notOnScreen.length){
          notOnScreen = indexArray.slice();

          $('.frame').each(function(){
            var removeIndex = notOnScreen.indexOf(parseInt($(this).attr('data-id')));
            notOnScreen.splice(removeIndex,1);
          });
          index = 0;
          notOnScreen = shuffle(notOnScreen);
        }

        currFrame = Math.floor(Math.random() * (($('.frame').length)- 0 + 1)) + 0;

        var link = json.images[notOnScreen[index]].link;
        var id = json.images[notOnScreen[index]].id;
        $(".frame").eq(currFrame).css('background-image', 'url(' + link + ')');
        $(".frame").eq(currFrame).attr("data-id",id);

        index++;
        //currFrame = (currFrame + 1) % 6;
        timeout();
    }, 3000);
  }

  timeout();
}

function restart(){
  // Index Array without the indexes of the images currently on screen
  var notOnScreen = indexArray.slice();
  $('.frame').each(function(){
    var removeIndex = notOnScreen.indexOf(parseInt($(this).attr('data-id')));
    notOnScreen.splice(removeIndex,1);
  });

  cycle(notOnScreen);
}

}); //end of jquery


function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// function cycle(subArray){
//   var index = 0;
//   function timeout() {
//     var time = setTimeout(function () {
//         if(index === subArray.length){
//           clearTimeout(time);
//         }
//
//         var link = json.images[subArray[index]].link;
//         var id = json.images[indexArray[indexCtr]].id;
//         $(".frame").eq(currFrame).css('background-image', 'url(' + link + ')');
//         $(".frame").eq(currFrame).attr("data-id",id);
//
//         index++;
//         currFrame = (currFrame + 1) % 6;
//         timeout();
//     }, 1000);
//   }
// }
//
// function restart(){
//   // Index Array without the indexes of the images currently on screen
//   var notOnScreen = indexArray;
//   $('.frame').each(function(){
//     var removeIndex = notOnScreen.indexOf($(this).data("idee"));
//     notOnScreen.splice(removeIndex,1);
//   });
//   cycle(notOnScreen);
//   restart();
// }
