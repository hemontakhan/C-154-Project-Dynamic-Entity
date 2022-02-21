AFRAME.registerComponent('coin',{
init:function(){
    for(var i=1;i <= 10;i++){
        
        var id = `Coin${i}`

        var posX = Math.floor(Math.random()* 100 + -50)
        var posY = Math.floor(Math.random()* 5 +5)
        var posz = math.floor(Math.random()*60 + -40)
      
        var position = {x: posX ,y : posY , z: posz}
          
        this.createCoins(id,position)

    }
},
createCoins: function(id,position){
 var islandEntity = document.querySelector('#oceanic-island')
 var coinEl = document.createElement('a-entity')

 coinEl.setAttribute(id,'id')
 coinEl.setAttribute(position,'position')
 coinEl.setAttribute('material','color','#ff9100')

 coinEl.setAttribute('geometry',{primitive:'circle', radius:'1'})

 coinEl.setAttribute('animation',{
     property : 'rotation',
     to:'0 360 0',
     loop: 'true',
     dur:1000
 })

 islandEntity.appendChild(coinEl)

}


})