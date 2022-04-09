import styled from '@emotion/styled'
import React from 'react'
import { generateDiv, clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;

    * {
        box-sizing: border-box;
    }

    .ring {
        border-radius: 50%;
        position: absolute;
        border: calc(${(props) => props.size}px * 0.05) solid transparent;
        border-top-color: ${(props) => props.color};
        border-left-color: ${(props) => props.color};
        animation: semipolar-spinner-animation ${(props) => props.animationDuration}ms infinite;
    }
    .ring:nth-of-type(1) {
        height: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 0);
        width: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 0);
        top: calc(${(props) => props.size}px * 0.1 * 0);
        left: calc(${(props) => props.size}px * 0.1 * 0);
        animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 4);
        z-index: 5;
    }
    .ring:nth-of-type(2) {
        height: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 1);
        width: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 1);
        top: calc(${(props) => props.size}px * 0.1 * 1);
        left: calc(${(props) => props.size}px * 0.1 * 1);
        animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 3);
        z-index: 4;
    }
    .ring:nth-of-type(3) {
        height: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 2);
        width: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 2);
        top: calc(${(props) => props.size}px * 0.1 * 2);
        left: calc(${(props) => props.size}px * 0.1 * 2);
        animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 2);
        z-index: 3;
    }
    .ring:nth-of-type(4) {
        height: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 3);
        width: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 3);
        top: calc(${(props) => props.size}px * 0.1 * 3);
        left: calc(${(props) => props.size}px * 0.1 * 3);
        animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 1);
        z-index: 2;
    }
    .ring:nth-of-type(5) {
        height: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 4);
        width: calc(${(props) => props.size}px - ${(props) => props.size}px * 0.2 * 4);
        top: calc(${(props) => props.size}px * 0.1 * 4);
        left: calc(${(props) => props.size}px * 0.1 * 4);
        animation-delay: calc(${(props) => props.animationDuration}ms * 0.1 * 0);
        z-index: 1;
    }
    @keyframes semipolar-spinner-animation {
        50% {
            transform: rotate(360deg) scale(0.7);
        }
    }
`

type Props = DefaultSpinnerProps

const SemipolarSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 2000, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('semipolar-spinner', className)}
            style={style}
        >
            {generateDiv(5, 'ring')}
        </Comp>
    )
}

export default SemipolarSpinner
