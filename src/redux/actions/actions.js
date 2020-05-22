export const makeActionCreator = (actionType) => ({
    request: (args) => ({ args, type: actionType.REQUEST }),
    success: (data) => ({ data, type: actionType.SUCCESS }),
    failure: (error) => ({ error, type: actionType.FAILURE })
})
