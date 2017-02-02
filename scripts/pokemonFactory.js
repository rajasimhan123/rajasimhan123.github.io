
/**
 * Factory  
 *
 * @name pokeFactory
 *
 * This pokeFactory contains three factory functions for fetching the details from json objects 
 * function 'fetchPokemonDetails' for getting the basic details of pokemon
 * 
 * function 'fetchPokemonTypes' for getting the types of pokemon  
 * 
 * fucntion 'fetchPokemonSkills' for getting the skills of pokemon
 * 
 *
 *
 *Example : pokeFactory.fetchPokemonDetails()
 * 
 */
app.factory("pokeFactory", ['$http',function($http){  
    var obj = {};
    obj.fetchPokemonDetails = function(){
        return $http.get('data/pokedex.json');
    }
    
    obj.fetchPokemonTypes = function(){
        return $http.get('data/types.json');
    }
    
    obj.fetchPokemonSkills = function(){
        return $http.get('data/skills.json');
    }

 return obj;
}]);
