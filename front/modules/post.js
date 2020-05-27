const initialState = {
    isLogin: false,
    user: {
        id: "aaa",
    },
};

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const loginAction = {
    type: LOG_IN,
    data: {
        user: {
            id: "bbb",
        },
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLogin: true,
                user: {
                    id: data.user.id,
                },
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLogin: false,
                user: {
                    id: "로그아웃됨",
                },
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
