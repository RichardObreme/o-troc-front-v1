export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const NAVBAR_RERENDER = 'NAVBAR_RERENDER';

export function actionGetAllCategories() {
  return {
    type: GET_ALL_CATEGORIES,
  };
}

export function actionSaveAllCategories(categoriesArray) {
  return {
    type: SAVE_ALL_CATEGORIES,
    payload: categoriesArray,
  };
}

export function actionCategoriesLoaded(bool) {
  return {
    type: CATEGORIES_LOADED,
    payload: bool,
  };
}

export function actionNavbarRerender(bool) {
  return {
    type: NAVBAR_RERENDER,
    payload: bool,
  };
}
