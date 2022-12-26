export const CHANGE_CUSTOM_INPUT_USER = 'CHANGE_CUSTOM_INPUT_USER';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const LOGOUT = 'LOGOUT';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const GET_USER_PROFIL = 'GET_USER_PROFIL';
export const SAVE_USER_PROFIL = 'SAVE_USER_PROFIL';
export const SAVE_USER_PICTURE = 'SAVE_USER_PICTURE';
export const PUT_USER_PROFIL = 'PUT_USER_PROFIL';
export const POST_USER_PICTURE = 'POST_USER_PICTURE';
export const GET_USER_OFFERS = 'GET_USER_OFFERS';
export const SAVE_USER_OFFERS = 'SAVE_USER_OFFERS';
export const GET_USER_WISHES = 'GET_USER_WISHES';
export const SAVE_USER_WISHES = 'SAVE_USER_WISHES';
export const GET_USER_HISTORY = 'GET_USER_HISTORY';
export const SAVE_USER_HISTORY = 'SAVE_USER_HISTORY';
export const GET_OTHER_USER_PROFIL = 'GET_OTHER_USER_PROFIL';
export const SAVE_OTHER_USER_PROFIL = 'SAVE_OTHER_USER_PROFIL';
export const DELETE_USER = 'DELETE_USER';
export const CHANGE_REDIRECTION = 'CHANGE_REDIRECTION';

export function actionChangeCustomInputUser(newValue, inputName, parentObject = null) {
  return {
    type: CHANGE_CUSTOM_INPUT_USER,
    payload: {
      newValue,
      inputName,
      parentObject,
    },
  };
}

export function actionCheckLogin() {
  return {
    type: CHECK_LOGIN,
  };
}

export function actionAuthentSuccess(activeSession) {
  return {
    type: AUTHENT_SUCCESS,
    payload: activeSession,
  };
}

export function actionAuthentError() {
  return {
    type: AUTHENT_ERROR,
  };
}

export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

export function actionUserIncscription() {
  return {
    type: USER_INSCRIPTION,
  };
}

export function actionGetUserProfil() {
  return {
    type: GET_USER_PROFIL,
  };
}

export function actionSaveUserProfil(profil) {
  return {
    type: SAVE_USER_PROFIL,
    payload: profil,
  };
}

export function actionSaveUserPicture(picture) {
  return {
    type: SAVE_USER_PICTURE,
    payload: picture,
  };
}

export function actionPutUserProfil() {
  return {
    type: PUT_USER_PROFIL,
  };
}

export function actionPostUserPicture(newPicture) {
  return {
    type: POST_USER_PICTURE,
    payload: newPicture,
  };
}

export function actionGetUserOffers() {
  return {
    type: GET_USER_OFFERS,
  };
}

export function actionSaveUserOffers(arrayDataOffers) {
  return {
    type: SAVE_USER_OFFERS,
    payload: arrayDataOffers,
  };
}

export function actionGetUserWishes() {
  return {
    type: GET_USER_WISHES,
  };
}

export function actionSaveUserWishes(arrayDataWishes) {
  return {
    type: SAVE_USER_WISHES,
    payload: arrayDataWishes,
  };
}

export function actionGetUserHistory() {
  return {
    type: GET_USER_HISTORY,
  };
}

export function actionGetOtherUserProfil(id) {
  return {
    type: GET_OTHER_USER_PROFIL,
    payload: id,
  };
}

export function actionSaveOtherUserProfil(arrayDataUserProfil) {
  return {
    type: SAVE_OTHER_USER_PROFIL,
    payload: arrayDataUserProfil,
  };
}

export function actionDeleteUser() {
  return {
    type: DELETE_USER,
  };
}

export function actionSaveUserHistory(listAnnoucementArray) {
  return {
    type: SAVE_USER_HISTORY,
    payload: listAnnoucementArray,
  };
}

export function actionChangeRedirection(bool, path = '/') {
  return {
    type: CHANGE_REDIRECTION,
    payload: {
      bool,
      path,
    },
  };
}
