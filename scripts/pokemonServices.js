
/**
 * Service  
 *
 * @name pokemonService
 *
 * This pokemonService is responsible for matching the value of a particular object and getting the object from the array .
 *
 *
 *Example : pokemonService.selectVal($scope.skills,pokemon.id,'id')
 * 
 */


app.service('pokemonService', function() {
    this.selectVal = function (arr,id,value) {
    	for(var i=0; i < arr.length; i++){
       	  if(id == arr[i][value]){
       		 return arr[i];
       	  }
         }
        return ;
    }
});

