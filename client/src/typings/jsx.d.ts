import 'react'

declare module 'react' {
    interface HTMLAttributes<T> extends HTMLAttributes, DOMAttribute<T> {
        variant?: 'primary' | 'secondary' | 'caution';
    }
}

declare module 'react' {
    interface HTMLAttributes<T> extends HTMLAttributes, DOMAttribute<T> {
        fontSize?: number
    }
}