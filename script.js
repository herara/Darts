var score = 0
$("[class^='cir']").click(function(evt){
  // console.log(this)
  var num = $(this).attr("data-label")
  console.log(num)
  score += parseInt(num*10)
  updateGame()

})


// -------按R重新開始------

function updateGame(){
  $(".score").text("Score:"+ score)
}

function resetGame(){
  score = 0
  updateGame()
  $(".spot").remove()
  $(".target").removeClass("moving")
}

$(window).keydown(function(evt){
  console.log(evt.key)
  if (evt.key=="r"){
   resetGame()

  }
 
  // -------按k變換moving模式 ------
   if (evt.key=="k"){
   $(".target").toggleClass("moving")
  
  }
})


$(window).mousemove(function(evt){  $(".mouseText").text(evt.pageX+","+evt.pageY)
  $(".mouseSymbol")
    .css("left" ,evt.pageX+"px")
    .css("top" ,evt.pageY+"px")
 })                                 
                                  
$(".target").click(function(evt){
  var spot = $("<div class=spot ><div>")
  spot.css("left",evt.pageX- $(this).offset().left+"px")
      .css("top" ,evt.pageY- $(this).offset().top+"px") 
 $(".target").append(spot)
  console.log(spot)
})