export const makeActionTypeCreator = (actionType) => ({
    REQUEST: actionType + '_REQUEST',
    SUCCESS: actionType + '_SUCCESS',
    FAILURE: actionType + '_FAILURE'
});

export const FETCH_MOBILES = makeActionTypeCreator('FETCH_MOBILES');
