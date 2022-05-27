import { useState, useCallback, useRef, useEffect } from 'react'

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>();

    const activeHttpRequest = useRef([] as any)

    const sendRequest = useCallback(async (url: string, method: 'GET' | 'POST', body: any, headers?: any): Promise<void> => {
        setIsLoading(true)

        const httpAbortController: AbortController = new AbortController()
        activeHttpRequest.current.push(httpAbortController)

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortController.signal
            })

            const responseData = await response.json()

            activeHttpRequest.current = activeHttpRequest.current.filter(requestContoler => requestContoler !== httpAbortController)

            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setIsLoading(false)
            return responseData
        } catch (err: any) {
            setError(err.message)
            setIsLoading(false)
            throw err
        }
    }, [])

    const clearError = () => {
        setError(null)
    }

    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortController => abortController.abort())
        }
    }, [])
    return { isLoading, error, sendRequest, clearError }
}