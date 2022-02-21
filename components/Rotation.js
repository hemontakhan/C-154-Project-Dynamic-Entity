AFRAME.registerComponent('diver-rotation-reader',{
 schema:{
     rotationAdjusment: {type:'number', default:0},
     positionAdjustment : {type:'number',default:0}
 },
 init:function(){
     window.addEventListener('keydown', (e) =>{
       
       this.data.rotationAdjusment = this.el.getAttribute('rotation')
       this.data.positionAdjustment = this.el.getAttribute('position') 

       var scubaRotation = this.data.rotationAdjusment
       var scubaPosition = this.data.positionAdjustment

       if(e.key === 'ArrowRight'){
          if(scubaRotation.x < 10){
             scubaRotation.x += 0.5
             this.el.setAttribute('rotation',scubaRotation)
          }
       }
      if(e.key === 'ArrowLeft'){
         if(scubaPosition.x > -10){
            scubaPosition.x -= 0.5
         }
      }
     if(e.key === 'ArrowUp'){
        if(scubaRotation.z < 20){
           scubaRotation.z +=0.5
           this.el.setAttribute('rotation',scubaRotation)
        }
        if(scubaPosition.y > 20){
           scubaPosition.y += 0.1
           this.el.setAttribute('position',scubaPosition)
        }
     }
     if(e.key === 'ArrowDown'){
        if(scubaRotation.z < -4){
           scubaRotation.z -=0.5
           this.el.setAttribute('rotation',scubaRotation)
        }
        if(scubaPosition.y > -2){
           scubaPosition.y -= 0.1
           this.el.setAttribute('position',scubaPosition)
        }
     }
     })
 }

})