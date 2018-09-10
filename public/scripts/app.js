'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.handleVisibility = _this.handleVisibility.bind(_this);
        _this.handleParagraph = _this.handleParagraph.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Toggle, [{
        key: 'handleVisibility',
        value: function handleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'handleParagraph',
        value: function handleParagraph() {
            if (this.state.visibility) {
                return React.createElement(
                    'p',
                    null,
                    ' More Information!!'
                );
            } else {
                return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleVisibility },
                    this.state.visibility ? 'Hide Details' : 'Show Details'
                ),
                this.handleParagraph()
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('app'));

//const appRoot = document.getElementById('app');
// const toggleVisibility=()=>
// {
//     visibility = !visibility;
//     render();
// }
//
// let visibility =false;
// const render=()=>{
//     const template =(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 { visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, these are some details you can  now see.</p>
//                 </div>
//             )}
//         </div>
//     );
//    // ReactDOM.render(template, appRoot);
// }
//
//
// render();
