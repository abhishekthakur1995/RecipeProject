import { Recipe } from './recipe.model'

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Roasted asparagus',
            'Pesto, or to refer to the original dish pesto alla genovese, is a sauce originating in Genoa, the capital city of Liguria, Italy.',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/06/egg-and-asparagus-salad.jpg'),

        new Recipe('Epic Summer Salad',
            'A steak is a meat generally sliced across the muscle fibers, potentially including a bone. Exceptions, in which the meat is sliced parallel to the fibers, include the skirt steak cut from the plate.',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}