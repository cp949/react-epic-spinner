import { useTheme } from '@mui/material'
import React, { CSSProperties } from 'react'

export function clsx(c1: string, c2?: string | null) {
    if (c2) {
        return c1 + ' ' + c2
    }
    return c1
}

export function clsx2(c1: string, c2?: string | null) {
    return clsx(clsx('EpicSpinner-root', c1), c2)
}

export function generateDiv(count: number, className?: string | ((i: number) => string)) {
    if (typeof className === 'string' || typeof className === 'undefined') {
        return Array.from({ length: count }).map((_, i) => <div key={i} className={className} />)
    }
    return Array.from({ length: count }).map((_, i) => <div key={i} className={className(i)} />)
}

export type SpinnerColor = 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | string

export type DefaultSpinnerProps = {
    size?: number
    className?: string
    style?: CSSProperties
    animationDuration?: number
    color?: SpinnerColor
}

export type DefaultSpinnerCompProps = {
    size: number
    color: string
    animationDuration: number
}

export function useThemeColor(color?: SpinnerColor | null): string {
    const theme = useTheme()
    if (!color) return theme.palette.primary.main

    if (color === 'primary') return theme.palette.primary.main
    if (color === 'secondary') return theme.palette.secondary.main
    if (color === 'textPrimary') return theme.palette.text.primary
    if (color === 'textSecondary') return theme.palette.text.secondary
    if (color === 'error') return theme.palette.error.main
    return color
}
