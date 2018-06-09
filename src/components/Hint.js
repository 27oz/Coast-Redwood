import React, { Component } from 'react'
// import FloatAffixed from 'react-float-affixed'

class Hint extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldShow: false,
    }
  }

  render() {
    return (
      <div className="hint__container">
        <div
          className="hint__cover"
          onMouseEnter={() => this.setState({ shouldShow: true })}
          onMouseLeave={() => this.setState({ shouldShow: false })}
        >
          <svg
            className="hint__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.115 2.884c-1.676-1.676-3.779-2.288-4.449-1.618l-2.696 2.696c-0.409 0.41-0.766 1.779-0.602 3.164l-8.161 8.161c-0.484 0.484-0.092 1.66 0.876 2.629s2.146 1.359 2.629 0.877l8.161-8.162c1.386 0.164 2.755-0.193 3.164-0.601l2.696-2.697c0.67-0.67 0.058-2.774-1.618-4.449zM8.141 11.039c-0.373-0.372-0.251-1.096 0.269-1.617s1.246-0.643 1.618-0.27c0.372 0.371 0.251 1.097-0.27 1.617-0.521 0.522-1.245 0.643-1.617 0.27zM14.891 5.108c-1.298-1.297-1.623-3.010-1.508-3.125s1.76 0.277 3.059 1.575c1.298 1.298 1.688 2.946 1.575 3.059-0.112 0.112-1.829-0.21-3.126-1.509z" />
          </svg>
        </div>
        {this.state.shouldShow ? (
          <div className="hint__box">
            <p className="hint__text">{this.props.hint}</p>
          </div>
        ) : (
          ' '
        )}
      </div>
    )
  }
}

export default Hint

// (
//   <div
//     className="hint__container"
//     onMouseEnter={() => this.setState({ shouldShow: true })}
//     onMouseLeave={() => this.setState({ shouldShow: false })}
//   >
//     {this.state.shouldShow ? (
//       <div className="hint__box">
//         <p className="hint__text">{this.props.hint}</p>
//       </div>
//     ) : (
//       <span className="hint__text--hidden">?</span>
//     )}
//   </div>
// )

// <div>
//   {(this.state.shouldShow && this.props.hint) || '?'}
// </div>
