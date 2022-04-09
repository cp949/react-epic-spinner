import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;

    * {
        box-sizing: border-box;
    }

    .spring-spinner-part {
        overflow: hidden;
        height: calc(${(props) => props.size}px / 2);
        width: ${(props) => props.size}px;
    }
    .spring-spinner-part.bottom {
        transform: rotate(180deg) scale(-1, 1);
    }
    .spring-spinner-rotator {
        width: ${(props) => props.size}px;
        height: ${(props) => props.size}px;
        border: calc(${(props) => props.size}px / 7) solid transparent;
        border-right-color: ${(props) => props.color};
        border-top-color: ${(props) => props.color};
        border-radius: 50%;
        box-sizing: border-box;
        animation: spring-spinner-animation ${(props) => props.animationDuration}ms ease-in-out infinite;
        transform: rotate(-200deg);
    }
    @keyframes spring-spinner-animation {
        0% {
            border-width: calc(${(props) => props.size}px / 7);
        }
        25% {
            border-width: calc(${(props) => props.size}px / 23.33);
        }
        50% {
            transform: rotate(115deg);
            border-width: calc(${(props) => props.size}px / 7);
        }
        75% {
            border-width: calc(${(props) => props.size}px / 23.33);
        }
        100% {
            border-width: calc(${(props) => props.size}px / 7);
        }
    }
`

type Props = DefaultSpinnerProps

const SpringSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 3000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('spring-spinner', className)}
            style={style}
        >
            <div className="spring-spinner-part top">
                <div className="spring-spinner-rotator" />
            </div>
            <div className="spring-spinner-part bottom">
                <div className="spring-spinner-rotator" />
            </div>
        </Comp>
    )
}

export default SpringSpinner
