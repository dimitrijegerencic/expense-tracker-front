export const storageKeys = {
    TOKEN: 'user-token'
}


export const reactQueryConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            cacheTime: 1000 * 60 * 30,
            retry: 0
        }
    }
}