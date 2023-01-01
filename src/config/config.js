export const storageKeys = {
    TOKEN: 'user-token'
}


export const queryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 30,
            retry: false
        }
    }
}