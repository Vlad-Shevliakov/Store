import React from 'react'
import classes from './Dots.scss'

// function Dot (props) {
//     return (
//       <span style={{
//         display: 'inline-block',
//         height: '8px',
//         width: '8px',
//         borderRadius: '4px',
//         backgroundColor: 'white',
//         margin: '7px 5px',
//         opacity: props.selected ? '1' : '0.3',
//         transitionDuration: '300ms'
//       }} />
//     )
//   }
  
//   export default function IndicatorDots (props) {
    
  
//     if (props.total < 2) {
//       // Hide dots when there is only one dot.
//       return <div style={wrapperStyle} />
//     } else {
//       return (
//         <div style={wrapperStyle}>{
//           Array.apply(null, Array(props.total)).map((x, i) => {
//             return <Dot key={i} selected={props.index === i} />
//           })
//         }</div>
//       )
//     }
//   }

const Dots = props => {

    const { total } = props

    if (total < 2) {
        return <div className={classes.DotWrap} />
    }

    return (
        <div className={classes.DotWrap}>
            {
                Array(total).map((dot, ind) => {
                    return (
                        <span 
                            key={ind}
                            className={classes.Dot}
                            selected={props.index === ind}
                            style={{opacity: props.selected ? '1' : '0.3',}} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Dots