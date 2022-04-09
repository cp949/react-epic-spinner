import styled from '@emotion/styled'
import React from 'react'
import { clsx2, DefaultSpinnerCompProps, DefaultSpinnerProps, useThemeColor } from './util'

type CompProps = DefaultSpinnerCompProps & {
    pixelSize: number
}

const Comp = styled.div<CompProps>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    * {
        box-sizing: border-box;
    }

    .pixel-spinner-inner {
        width: ${(props) => props.pixelSize}px;
        height: ${(props) => props.pixelSize}px;
        background-color: ${(props) => props.color};
        color: ${(props) => props.color};

        box-shadow: ${(props) => props.pixelSize * 1.5}px ${(props) => props.pixelSize * 1.5}px 0 0,
            ${(props) => props.pixelSize * -1.5}px ${(props) => props.pixelSize * -1.5}px 0 0,
            ${(props) => props.pixelSize * 1.5}px ${(props) => props.pixelSize * -1.5}px 0 0,
            ${(props) => props.pixelSize * -1.5}px ${(props) => props.pixelSize * 1.5}px 0 0,
            0 ${(props) => props.pixelSize * 1.5}px 0 0, ${(props) => props.pixelSize * 1.5}px 0 0 0,
            ${(props) => props.pixelSize * -1.5}px 0 0 0, 0 ${(props) => props.pixelSize * -1.5}px 0 0;
        animation: pixel-spinner-animation ${(props) => props.animationDuration}ms linear infinite;
    }

    @keyframes pixel-spinner-animation {
        50% {
            box-shadow: ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * 2}px 0 0,
                ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * -2}px 0 0,
                ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * -2}px 0 0,
                ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * 2}px 0 0,
                0 ${(props) => props.pixelSize}px 0 0, ${(props) => props.pixelSize}px 0 0 0,
                ${(props) => props.pixelSize * -1}px 0 0 0, 0 ${(props) => props.pixelSize * -1}px 0 0;
        }
        75% {
            box-shadow: ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * 2}px 0 0,
                ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * -2}px 0 0,
                ${(props) => props.pixelSize * 2}px ${(props) => props.pixelSize * -2}px 0 0,
                ${(props) => props.pixelSize * -2}px ${(props) => props.pixelSize * 2}px 0 0,
                0 ${(props) => props.pixelSize}px 0 0, ${(props) => props.pixelSize}px 0 0 0,
                ${(props) => props.pixelSize * -1}px 0 0 0, 0 ${(props) => props.pixelSize * -1}px 0 0;
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

type Props = DefaultSpinnerProps

const PixelSpinner = (props: Props) => {
    const color = useThemeColor(props.color)
    const { size = 56, animationDuration = 1500, className = '', style } = props

    return (
        <Comp
            size={size}
            color={color}
            animationDuration={animationDuration}
            className={clsx2('pixel-spinner', className)}
            style={style}
            pixelSize={size / 7}
        >
            <div className="pixel-spinner-inner" />
        </Comp>
    )
}

export default PixelSpinner
