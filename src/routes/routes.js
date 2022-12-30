export const routes = {
    LOGIN : {
        path : 'login'
    },

    SIGN_IN : {
        path: 'sign-in'
    },

    HOME : {
        path: ''
    },

    TRANSACTIONS : {
        history : {
            path: 'transactions-history'
        },
        add:{
            path:'add-transaction'
        }
    },

    CATEGORIES: {
        general: {
          path: 'categories'
        },
        add:{
           path: 'add-category'
        }
    },

    PROFILE: {
        change: {
            path: 'change-profile'
        }
    }
}