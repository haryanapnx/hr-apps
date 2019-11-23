const initialState = {
    languge: {
      lang: 'en'
    },
    loading: false
};

const Language = (state = initialState, action) => {
    switch (action.type) {
        case 'DEVICE.LANGUAGE':
            return {
                ...state,
                language: action.lang,
                loading: false
            };
            break;
        default:
            return state;
    }
};

export default Language;
