const initialState = {
    device: '',
    loading: false,
};

const userDevice = (state = initialState, action) => {
    switch (action.type) {
        case 'DEVICE.ID':
            return {
                ...state,
                device: action.id
            };
            break;
        default:
            return state;
    }
};

export default userDevice;
