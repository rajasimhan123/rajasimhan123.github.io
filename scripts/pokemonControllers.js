/**
* This file contains all the controllers for this project 
* 
*  
*  
*/


app.controller('mainController', function($scope, $http,pokeFactory,pokemonService) {

	//Fetching the pokemon details from json using factory method
	pokeFactory.fetchPokemonDetails().then(function(response){
		$scope.pokemons = response.data;
		for(var i=0; i<$scope.pokemons.length;i++)
		{
				if($scope.pokemons[i].hasOwnProperty('flatName')){
					$scope.pokemons[i].ename=$scope.pokemons[i].flatName;
				}
		}
	});
	//Fetching the pokemon type 
	pokeFactory.fetchPokemonTypes().then(function(response){$scope.types = response.data;});
	//Fetching the pokemon skills 
	pokeFactory.fetchPokemonSkills().then(function(response){$scope.skills = response.data;});
	
  

  // Retrieving the specific Pokemon details 
  $scope.open = function(pokemon){
      if ($scope.isOpen(pokemon)){
          $scope.opened = undefined;
      } else {
          $scope.openedPokemon = pokemon;
          $scope.skill = pokemonService.selectVal($scope.skills,pokemon.id,'id');
          $scope.type = pokemonService.selectVal($scope.skills,$scope.skill.type,'cname');
      }        
  };
  
  $scope.isOpen = function(pokemon){
      return $scope.openedPokemon === pokemon;
  };
  
  $scope.anyPokemonOpen = function() {
      return $scope.openedPokemon !== undefined;
  };
  
  $scope.close = function() {
      $scope.openedPokemon = undefined;
  };
 
});

app.controller('ItemController',function ItemController($scope) {
});
