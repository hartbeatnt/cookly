import { promisify } from 'bluebird';
import fs from 'fs';

const readFile = promisify(fs.readFile);

/**
 *
 *  @route /api/ingredients
 *
 *  @method {GET}
 *
 *  DUMMY DATA: FIX LATER
 */
export const fetchIngredients = async (req, res) => {
  try {
    const ingredients = JSON.parse(await readFile('./data/ingredients.json', 'utf8'));
    res.json({
      success: true,
      ingredients,
    });
  } catch (e) {
    res.json({
      success: false,
      err    : e.toString(),
    });
  }
};
