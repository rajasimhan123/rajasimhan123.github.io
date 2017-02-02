/**
 * Directive 
 *
 * @name searchpokemon
 *
 * The `searchpokemon` directive provides the search functionality for pokemon which includes a label 'Search Pokemon' and the text box for search text
 *
 *
 *Example : <searchpokemon></searchpokemon>
 * 
 */
app.directive("searchpokemon", function() {
    return {
        template : "Search Pokemon : <input type='text' ng-model='searchText' />"
    };
});


/**
 * Directive 
 *
 * @name trRow
 * 
 * 
 *
 * The `trRow` directive provides the basic details of the pokemon like id name and image  *
 *
 * Example : <tr tr-row></tr>
 *
 * 
 */

app.directive('trRow', function () {
    return {
        template: '<td width ="20%" ng-bind="pokemon.id"></td><td width ="40%" ng-bind="pokemon.ename"</td> <td width ="40%"><img ng-src="images/thm/{{pokemon.id}}{{pokemon.flatName}}.png" alt="{{pokemon.ename}}" /></td>'
    };
});
