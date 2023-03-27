'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(
                    n,
                    k,
                    d.get
                        ? d
                        : {
                              enumerable: true,
                              get: function () {
                                  return e[k];
                              },
                          }
                );
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/ _interopNamespace(React);

function _extends() {
    _extends = Object.assign
        ? Object.assign.bind()
        : function (target) {
              for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                          target[key] = source[key];
                      }
                  }
              }
              return target;
          };
    return _extends.apply(this, arguments);
}

const SvgAboutPhone = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 6.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        })
    );
};
const ForwardRef$4J = /*#__PURE__*/ React.forwardRef(SvgAboutPhone);

const SvgAccessibility = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.18 5.272a.75.75 0 0 0-.36 1.456c1.944.48 3.597.793 5.18.935v4.29l-.744 5.954a.75.75 0 1 0 1.488.186L11.506 12h.988l.762 6.093a.75.75 0 0 0 1.488-.186L14 11.955V7.65c1.564-.147 3.221-.457 5.173-.92a.75.75 0 0 0-.346-1.46c-2.773.659-4.854.98-6.894.98-2.038.001-4.073-.317-6.754-.978Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4I = /*#__PURE__*/ React.forwardRef(SvgAccessibility);

const SvgActivity = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.017 7.25c.29.007.55.18.668.445l3.279 7.377 1.34-3.35A.75.75 0 0 1 16 11.25h2a.75.75 0 0 1 0 1.5h-1.492l-1.812 4.529a.75.75 0 0 1-1.381.026L9.96 9.757l-1.29 2.578a.75.75 0 0 1-.67.415H6a.75.75 0 0 1 0-1.5h1.536L9.33 7.665a.75.75 0 0 1 .688-.415Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4H = /*#__PURE__*/ React.forwardRef(SvgActivity);

const SvgAirplaneModeOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm16.684 20.307-1.887-2.565a2.029 2.029 0 0 1-.402-1.204v-2.143l-6.18-6.18-4.65 2.633c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.565c-.681.926.433 2.07 1.532 1.572l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.572Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4G = /*#__PURE__*/ React.forwardRef(SvgAirplaneModeOff);

const SvgAirplaneMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm16.684 20.306-1.887-2.564a2.029 2.029 0 0 1-.402-1.204v-2.6c0-.599.536-1.084 1.198-1.084H19.8c1.203 0 1.655-1.428.635-2.006l-4.914-2.784c-.7-.396-1.126-1.092-1.126-1.84V4.395a2.395 2.395 0 0 0-4.79 0v1.829c0 .748-.426 1.444-1.126 1.84l-4.914 2.784c-1.02.578-.568 2.006.635 2.006h4.207c.662 0 1.198.486 1.198 1.085v2.599c0 .428-.14.847-.402 1.204l-1.887 2.564c-.681.927.433 2.071 1.532 1.573l2.08-.943a2.619 2.619 0 0 1 2.143 0l2.081.943c1.098.498 2.213-.646 1.532-1.573Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4F = /*#__PURE__*/ React.forwardRef(SvgAirplaneMode);

const SvgAmbulance = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2 2 2 0 1 0-4 0h-2Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6 3h4a4 4 0 0 1 4 4v12H9a2 2 0 0 0-3.996-.125A4.002 4.002 0 0 1 2 15V7a4 4 0 0 1 4-4Zm.75 5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4E = /*#__PURE__*/ React.forwardRef(SvgAmbulance);

const SvgAppsCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 7,
            cy: 7,
            r: 3,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 17,
            cy: 17,
            r: 3,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 7,
            cy: 17,
            r: 3,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 17,
            cy: 7,
            r: 3,
            fill: 'currentColor',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4D = /*#__PURE__*/ React.forwardRef(SvgAppsCircle);

const SvgAppsDoubleCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm4-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4C = /*#__PURE__*/ React.forwardRef(SvgAppsDoubleCircle);

const SvgAppsRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z',
        })
    );
};
const ForwardRef$4B = /*#__PURE__*/ React.forwardRef(SvgAppsRectangle);

const SvgAppsTripleRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm0 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4A = /*#__PURE__*/ React.forwardRef(SvgAppsTripleRectangle);

const SvgArrowBackCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.53 6.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13a2.25 2.25 0 0 1 0 4.5H8a.75.75 0 0 0 0 1.5h5a3.75 3.75 0 1 0 0-7.5H9.81l.72-.72a.75.75 0 0 0 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4z = /*#__PURE__*/ React.forwardRef(SvgArrowBackCircle);

const SvgArrowBackRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.53 6.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H13a2.25 2.25 0 0 1 0 4.5H8a.75.75 0 0 0 0 1.5h5a3.75 3.75 0 1 0 0-7.5H9.81l.72-.72a.75.75 0 0 0 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4y = /*#__PURE__*/ React.forwardRef(SvgArrowBackRectangle);

const SvgArrowBack = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2l-2.2-1.65H15a3.25 3.25 0 1 1 0 6.5H5a.75.75 0 0 0 0 1.5h10a4.75 4.75 0 1 0 0-9.5H7.25l2.2-1.65a.75.75 0 0 0 .15-1.05Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.6 4.55a.75.75 0 0 0-1.05-.15l-4 3a.75.75 0 0 0 0 1.2l4 3a.75.75 0 1 0 .9-1.2L6.213 8 9.45 5.6a.75.75 0 0 0 .15-1.05Z',
        })
    );
};
const ForwardRef$4x = /*#__PURE__*/ React.forwardRef(SvgArrowBack);

const SvgArrowDownCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 16.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4w = /*#__PURE__*/ React.forwardRef(SvgArrowDownCircle);

const SvgArrowDownRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 16.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8a.75.75 0 0 0-1.5 0v6.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4v = /*#__PURE__*/ React.forwardRef(SvgArrowDownRectangle);

const SvgArrowDown = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 18.53a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.468 3.5 3.472-3.5a.75.75 0 1 1 1.06 1.06l-4 4Z',
        })
    );
};
const ForwardRef$4u = /*#__PURE__*/ React.forwardRef(SvgArrowDown);

const SvgArrowDropDown = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15.518 7H8.482C6.94 7 5.977 8.674 6.755 10.008l3.517 6.03c.772 1.323 2.684 1.323 3.456 0l3.518-6.03C18.023 8.674 17.061 7 15.518 7Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4t = /*#__PURE__*/ React.forwardRef(SvgArrowDropDown);

const SvgArrowDropLeft = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 15.518V8.482c0-1.544-1.675-2.505-3.008-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4s = /*#__PURE__*/ React.forwardRef(SvgArrowDropLeft);

const SvgArrowDropRight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518C8.674 18.023 7 17.061 7 15.518Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4r = /*#__PURE__*/ React.forwardRef(SvgArrowDropRight);

const SvgArrowDropUp = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M8.482 17.015h7.036c1.543 0 2.505-1.674 1.727-3.007l-3.517-6.031c-.772-1.323-2.684-1.323-3.456 0l-3.517 6.03c-.778 1.334.184 3.008 1.727 3.008Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4q = /*#__PURE__*/ React.forwardRef(SvgArrowDropUp);

const SvgArrowLeftCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.47 12.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4p = /*#__PURE__*/ React.forwardRef(SvgArrowLeftCircle);

const SvgArrowLeftRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.47 12.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 0 1.5H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4o = /*#__PURE__*/ React.forwardRef(SvgArrowLeftRectangle);

const SvgArrowLeft = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.47 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H7.81l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-3.5 3.468 3.5 3.472a.75.75 0 1 1-1.06 1.06l-4-4Z',
        })
    );
};
const ForwardRef$4n = /*#__PURE__*/ React.forwardRef(SvgArrowLeft);

const SvgArrowMoveCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h8.38l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4m = /*#__PURE__*/ React.forwardRef(SvgArrowMoveCircle);

const SvgArrowMoveRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.53 18.53a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v8.38l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.47 12.53a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h8.38l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4l = /*#__PURE__*/ React.forwardRef(SvgArrowMoveRectangle);

const SvgArrowMove = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.25 12a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72h14.38l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.53 21.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4.81L9.53 6.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v14.38l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4k = /*#__PURE__*/ React.forwardRef(SvgArrowMove);

const SvgArrowReturnCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H11a2.25 2.25 0 0 0 0 4.5h5a.75.75 0 0 1 0 1.5h-5a3.75 3.75 0 1 1 0-7.5h3.19l-.72-.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4j = /*#__PURE__*/ React.forwardRef(SvgArrowReturnCircle);

const SvgArrowReturnRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H11a2.25 2.25 0 0 0 0 4.5h5a.75.75 0 0 1 0 1.5h-5a3.75 3.75 0 1 1 0-7.5h3.19l-.72-.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4i = /*#__PURE__*/ React.forwardRef(SvgArrowReturnRectangle);

const SvgArrowReturn = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2l2.2-1.65H9a3.25 3.25 0 1 0 0 6.5h10a.75.75 0 0 1 0 1.5H9a4.75 4.75 0 1 1 0-9.5h7.75l-2.2-1.65a.75.75 0 0 1-.15-1.05Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14.4 4.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 1 1-.9-1.2L17.787 8 14.55 5.6a.75.75 0 0 1-.15-1.05Z',
        })
    );
};
const ForwardRef$4h = /*#__PURE__*/ React.forwardRef(SvgArrowReturn);

const SvgArrowRightCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.53 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4g = /*#__PURE__*/ React.forwardRef(SvgArrowRightCircle);

const SvgArrowRightRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.53 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4f = /*#__PURE__*/ React.forwardRef(SvgArrowRightRectangle);

const SvgArrowRight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.53 12.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H6a.75.75 0 0 0 0 1.5h10.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.53 11.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l3.5-3.468-3.5-3.472a.75.75 0 0 1 1.06-1.06l4 4Z',
        })
    );
};
const ForwardRef$4e = /*#__PURE__*/ React.forwardRef(SvgArrowRight);

const SvgArrowSortCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163Zm3.426 9.386A.75.75 0 0 1 13.25 16V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-.817.163Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4d = /*#__PURE__*/ React.forwardRef(SvgArrowSortCircle);

const SvgArrowSortRectangleHalf = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.287 7.307A.75.75 0 0 1 10.75 8v8a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163Zm3.426 9.386A.75.75 0 0 1 13.25 16V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-.817.163Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4c = /*#__PURE__*/ React.forwardRef(SvgArrowSortRectangleHalf);

const SvgArrowSortRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V16a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06l2-2Zm7.06 9.06a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V8a.75.75 0 0 1 1.5 0v6.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4b = /*#__PURE__*/ React.forwardRef(SvgArrowSortRectangle);

const SvgArrowSort = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.47 5.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 7.81V18a.75.75 0 0 1-1.5 0V7.81L5.53 9.53a.75.75 0 0 1-1.06-1.06l3-3Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.53 18.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6a.75.75 0 0 1 1.5 0v10.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$4a = /*#__PURE__*/ React.forwardRef(SvgArrowSort);

const SvgArrowThickDown = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 5v8h1.796a1 1 0 0 1 .753 1.659l-4.044 4.62a2 2 0 0 1-3.01 0L6.45 14.66c-.565-.649-.105-1.66.754-1.66H9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$49 = /*#__PURE__*/ React.forwardRef(SvgArrowThickDown);

const SvgArrowThickLeft = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19 9h-8V7.204a1 1 0 0 0-1.659-.753l-4.62 4.044a2 2 0 0 0 0 3.01l4.62 4.044c.647.565 1.659.106 1.659-.753V15h8a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$48 = /*#__PURE__*/ React.forwardRef(SvgArrowThickLeft);

const SvgArrowThickRight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.519 9h8V7.204a1 1 0 0 1 1.658-.753l4.621 4.044a2 2 0 0 1 0 3.01l-4.62 4.044c-.648.565-1.66.106-1.66-.753V15h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$47 = /*#__PURE__*/ React.forwardRef(SvgArrowThickRight);

const SvgArrowThickUp = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 19v-8H7.204a1 1 0 0 1-.753-1.659l4.044-4.62a2 2 0 0 1 3.01 0l4.044 4.62c.566.647.106 1.659-.753 1.659H15v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$46 = /*#__PURE__*/ React.forwardRef(SvgArrowThickUp);

const SvgArrowTransferCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.693 10.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817Zm-9.386 3.426A.75.75 0 0 1 8 13.25h8a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1-.163-.817Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$45 = /*#__PURE__*/ React.forwardRef(SvgArrowTransferCircle);

const SvgArrowTransferRectangleHalf = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.693 10.287a.75.75 0 0 1-.693.463H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 .163.817Zm-9.386 3.426A.75.75 0 0 1 8 13.25h8a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1-.163-.817Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$44 = /*#__PURE__*/ React.forwardRef(SvgArrowTransferRectangleHalf);

const SvgArrowTransferRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.53 8.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H8a.75.75 0 0 1 0-1.5h6.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2Zm-9.06 7.06a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72H16a.75.75 0 0 1 0 1.5H9.81l.72.72a.75.75 0 1 1-1.06 1.06l-2-2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$43 = /*#__PURE__*/ React.forwardRef(SvgArrowTransferRectangle);

const SvgArrowTransfer = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.53 7.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H6a.75.75 0 0 1 0-1.5h10.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.47 16.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H18a.75.75 0 0 1 0 1.5H7.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$42 = /*#__PURE__*/ React.forwardRef(SvgArrowTransfer);

const SvgArrowUpCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$41 = /*#__PURE__*/ React.forwardRef(SvgArrowUpCircle);

const SvgArrowUpRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06-1.06l3-3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$40 = /*#__PURE__*/ React.forwardRef(SvgArrowUpRectangle);

const SvgArrowUp = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M11.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-3.468-3.5-3.472 3.5a.75.75 0 1 1-1.06-1.06l4-4Z',
        })
    );
};
const ForwardRef$3$ = /*#__PURE__*/ React.forwardRef(SvgArrowUp);

const SvgAutoRotation = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 2.984a.75.75 0 0 1 1.06 0l7.071 7.071a2.75 2.75 0 0 1 0 3.89l-2.962 2.962h1.018a.75.75 0 0 1 0 1.5h-1.829a1.75 1.75 0 0 1-1.75-1.75v-1.829a.75.75 0 0 1 1.5 0v1.018l2.963-2.962a1.25 1.25 0 0 0 0-1.768l-7.072-7.071a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.593 6.343a.75.75 0 0 1 .75-.75h1.829c.966 0 1.75.784 1.75 1.75v1.829a.75.75 0 0 1-1.5 0V8.154l-2.963 2.962a1.25 1.25 0 0 0 0 1.768l7.071 7.071a.75.75 0 1 1-1.06 1.06l-7.072-7.07a2.75 2.75 0 0 1 0-3.89l2.963-2.962H6.343a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3_ = /*#__PURE__*/ React.forwardRef(SvgAutoRotation);

const SvgAuto = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 7.25a.75.75 0 0 1 .67.415l4 8a.75.75 0 1 1-1.34.67l-1.294-2.586-.036.001H9.964L8.67 16.334a.75.75 0 1 1-1.342-.67l4-8A.75.75 0 0 1 12 7.25Zm-1.287 5h2.573L12 9.677l-1.287 2.573Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3Z = /*#__PURE__*/ React.forwardRef(SvgAuto);

const SvgBatteryAlert = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3Y = /*#__PURE__*/ React.forwardRef(SvgBatteryAlert);

const SvgBatteryChargingFull = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 10.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3X = /*#__PURE__*/ React.forwardRef(SvgBatteryChargingFull);

const SvgBatteryCharging = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm9.11 13.161.908-1.108 3.185-3.89c.318-.386.904-.028.751.46l-.878 2.814c-.095.305.118.62.419.62h1.063c.379 0 .582.477.332.782l-4.093 4.997c-.318.388-.904.029-.751-.46l.878-2.813c.095-.305-.118-.62-.419-.62H9.442c-.379 0-.582-.477-.332-.782Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3W = /*#__PURE__*/ React.forwardRef(SvgBatteryCharging);

const SvgBatteryHorizontalCharging = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm8.11 12.129.908-.887 3.185-3.11c.318-.31.904-.024.751.367l-.878 2.25c-.095.245.118.497.419.497h1.063c.379 0 .582.381.332.625L9.797 15.87c-.318.31-.904.023-.751-.368l.878-2.25c.095-.245-.118-.497-.419-.497H8.442c-.379 0-.582-.381-.332-.625Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3V = /*#__PURE__*/ React.forwardRef(SvgBatteryHorizontalCharging);

const SvgBatteryHorizontalFull = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.494 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07ZM22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3U = /*#__PURE__*/ React.forwardRef(SvgBatteryHorizontalFull);

const SvgBatteryHorizontalLowbet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 16V8a2 2 0 0 0-2-2H7.06l11.805 11.804A2 2 0 0 0 20 16Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4.925 6 16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.925Z',
        })
    );
};
const ForwardRef$3T = /*#__PURE__*/ React.forwardRef(SvgBatteryHorizontalLowbet);

const SvgBatteryHorizontalSavingMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-11-1a.75.75 0 0 1 .75.75v2.25H14a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H8a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3S = /*#__PURE__*/ React.forwardRef(SvgBatteryHorizontalSavingMode);

const SvgBatteryHorizontal = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M23 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3R = /*#__PURE__*/ React.forwardRef(SvgBatteryHorizontal);

const SvgBatteryLowbet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M8 22h8a2 2 0 0 0 2-2v-2L6 6v14a2 2 0 0 0 2 2Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3Q = /*#__PURE__*/ React.forwardRef(SvgBatteryLowbet);

const SvgBatterySavingMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3P = /*#__PURE__*/ React.forwardRef(SvgBatterySavingMode);

const SvgBattery = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3O = /*#__PURE__*/ React.forwardRef(SvgBattery);

const SvgBloodPlus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3N = /*#__PURE__*/ React.forwardRef(SvgBloodPlus);

const SvgBlood = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 14.111c0-4.649 4.63-9.233 6.845-11.16a1.743 1.743 0 0 1 2.31 0C15.371 4.877 20 9.461 20 14.11 20 18 16.97 22 12 22c-4.97 0-8-4-8-7.889Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.264 19.049a.75.75 0 0 1 .593-.88c1.747-.34 2.934-1.735 3.287-3.33a.75.75 0 0 1 1.464.323c-.46 2.081-2.038 4.007-4.464 4.48a.75.75 0 0 1-.88-.593Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3M = /*#__PURE__*/ React.forwardRef(SvgBlood);

const SvgBluetoothConnected = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .02-.4l-3.33-2.776ZM11.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L13.352 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8l-3.33 2.776c-1.14.95-2.871.14-2.871-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L10.648 12 5.584 8.624a.75.75 0 1 1 .832-1.248L11.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.33-2.776a.25.25 0 0 0-.02-.4l-3.72-2.48Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.414 10.586 19.828 12l-1.414 1.414L17 12l1.414-1.414Zm-12.828 0L7 12l-1.414 1.414L4.172 12l1.414-1.414Z',
        })
    );
};
const ForwardRef$3L = /*#__PURE__*/ React.forwardRef(SvgBluetoothConnected);

const SvgBluetoothOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.16 4.943a.25.25 0 0 0-.41.192V10.6l3.72-2.48a.25.25 0 0 0 .021-.4l-3.33-2.776ZM9.25 10.6V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8L11.353 12l3.95 2.633a1.75 1.75 0 0 1 .15 2.8L12.12 20.21c-1.14.95-2.87.14-2.87-1.344v-5.463l-4.834 3.222a.75.75 0 0 1-.832-1.248L8.648 12 3.584 8.624a.75.75 0 0 1 .832-1.248L9.25 10.6Zm1.5 2.803v5.463a.25.25 0 0 0 .41.192l3.331-2.776a.25.25 0 0 0-.021-.4l-3.72-2.48Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.282 8.155a.75.75 0 0 1 1.059.074A5.73 5.73 0 0 1 20.75 12a5.732 5.732 0 0 1-1.464 3.834.75.75 0 0 1-1.118-1A4.232 4.232 0 0 0 19.25 12a4.23 4.23 0 0 0-1.041-2.787.75.75 0 0 1 .073-1.058Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3K = /*#__PURE__*/ React.forwardRef(SvgBluetoothOff);

const SvgBluetooth = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 10.31v1.288l-5.666 3.778a.75.75 0 0 0 .832 1.248L11.25 13.4v5.464c0 1.484 1.73 2.294 2.87 1.344l3.834-3.194-1.065-1.066-3.729 3.108a.25.25 0 0 1-.41-.192V12.4l.354-.236-1.854-1.854Zm7.274 5.153.012.012a1.34 1.34 0 0 0-.012-.012Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm14.377 11.317-1.081-1.082 3.174-2.116a.25.25 0 0 0 .021-.4L13.16 4.943a.25.25 0 0 0-.41.192V9.69l-1.5-1.5V5.135c0-1.484 1.73-2.294 2.87-1.344l3.331 2.776a1.75 1.75 0 0 1-.15 2.8l-2.924 1.95Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3J = /*#__PURE__*/ React.forwardRef(SvgBluetooth);

const SvgCallHospital = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1.25-7a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V7.75h2.5V9a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0v1.25h-2.5V5Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 20.222V18.91a2 2 0 0 0-1.257-1.857l-1.479-.592a2 2 0 0 0-2.531.963l-.066.132s-2.223-.445-4-2.223c-1.778-1.777-2.223-4-2.223-4l.132-.066a2 2 0 0 0 .963-2.531l-.592-1.479A2 2 0 0 0 5.09 6H3.778C2.796 6 2 6.796 2 7.778 2 15.633 8.368 22 16.222 22c.982 0 1.778-.796 1.778-1.778Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3I = /*#__PURE__*/ React.forwardRef(SvgCallHospital);

const SvgCameraOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.126 6.5H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5l-12.874-9ZM12 16.5a3 3 0 0 1-1.283-5.712l3.99 4.007A3 3 0 0 1 12 16.5Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-1.725-1.726A4.98 4.98 0 0 0 21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a4.91 4.91 0 0 0-.422.018L3.53 2.47ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3H = /*#__PURE__*/ React.forwardRef(SvgCameraOff);

const SvgCameraSwitch = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 13.853v-2.118c0-1.462-1.244-2.647-2.778-2.647h-.07C13.906 8.175 13.036 7.5 12 7.5s-1.905.675-2.152 1.588h-.07C8.244 9.088 7 10.273 7 11.735v2.118C7 15.315 8.244 16.5 9.778 16.5h4.444c1.534 0 2.778-1.185 2.778-2.647Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 4c0-.942.782-1.806 1.83-1.69 4.877.537 8.67 4.67 8.67 9.69a.75.75 0 0 1-1.5 0 8.251 8.251 0 0 0-7.334-8.2.118.118 0 0 0-.101.037.226.226 0 0 0-.065.163v.5a.75.75 0 0 1-1.5 0V4ZM3 11.25a.75.75 0 0 1 .75.75 8.251 8.251 0 0 0 7.334 8.2.118.118 0 0 0 .101-.037.226.226 0 0 0 .065-.163v-.5a.75.75 0 0 1 1.5 0v.5c0 .942-.782 1.806-1.83 1.69-4.877-.538-8.67-4.67-8.67-9.69a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z',
        })
    );
};
const ForwardRef$3G = /*#__PURE__*/ React.forwardRef(SvgCameraSwitch);

const SvgCamera = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 15.5v-4a5 5 0 0 0-5-5h-.126a4.002 4.002 0 0 0-7.748 0H8a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        })
    );
};
const ForwardRef$3F = /*#__PURE__*/ React.forwardRef(SvgCamera);

const SvgCapsuleOpen = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 13.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 11 12 11s1.5 1.395 1.5 2.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.071 6.828 7.243 4A3 3 0 0 0 3 8.242l2.829 2.829 4.242-4.243Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.929 6.828 16.757 4A3 3 0 0 1 21 8.242l-2.829 2.829-4.242-4.243Z',
        })
    );
};
const ForwardRef$3E = /*#__PURE__*/ React.forwardRef(SvgCapsuleOpen);

const SvgCapsule = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.558 4.792a6.117 6.117 0 0 1 8.65 8.65l-5.766 5.767a6.117 6.117 0 1 1-8.65-8.65l5.766-5.767Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.42 6.52a.75.75 0 0 1 1.06 0 3.75 3.75 0 0 1 0 5.303.75.75 0 1 1-1.06-1.06 2.25 2.25 0 0 0 0-3.182.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4.792 10.558a6.117 6.117 0 0 0 8.65 8.65l2.883-2.883-8.65-8.65-2.883 2.883Z',
        })
    );
};
const ForwardRef$3D = /*#__PURE__*/ React.forwardRef(SvgCapsule);

const SvgCardiogram = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10 8.25a.75.75 0 0 1 .624.334L14 13.648l1.376-2.064A.75.75 0 0 1 16 11.25h5a.75.75 0 0 1 0 1.5h-4.599l-1.777 2.666a.75.75 0 0 1-1.248 0L10 10.352l-1.376 2.064A.75.75 0 0 1 8 12.75H3a.75.75 0 0 1 0-1.5h4.599l1.777-2.666A.75.75 0 0 1 10 8.25Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3C = /*#__PURE__*/ React.forwardRef(SvgCardiogram);

const SvgCast = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 7v9a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.25 19a.75.75 0 0 1 .75-.75A2.75 2.75 0 0 1 4.75 21a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 21a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.25 11a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 2 11.75a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3B = /*#__PURE__*/ React.forwardRef(SvgCast);

const SvgClipboardActivity = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M8 4a2 2 0 0 1 2-2h4a2 2 0 1 1 0 4h-4a2 2 0 0 1-2-2Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.12 10.26a.75.75 0 0 1 .55.405l1.536 3.069 1.264-1.264a.75.75 0 0 1 .53-.22h2a.75.75 0 0 1 0 1.5h-1.69l-1.78 1.78a.75.75 0 0 1-1.2-.195l-1.536-3.069L9.53 13.53a.75.75 0 0 1-.53.22H7a.75.75 0 0 1 0-1.5h1.69l1.78-1.78a.75.75 0 0 1 .65-.21Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3A = /*#__PURE__*/ React.forwardRef(SvgClipboardActivity);

const SvgClipboardAdd = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3z = /*#__PURE__*/ React.forwardRef(SvgClipboardAdd);

const SvgClipboardCheck = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3y = /*#__PURE__*/ React.forwardRef(SvgClipboardCheck);

const SvgClipboardDelete = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.652 11.349a.75.75 0 0 1 0 1.06L13.06 14l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 15.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 12.939l1.591-1.59a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3x = /*#__PURE__*/ React.forwardRef(SvgClipboardDelete);

const SvgClipboardDownload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm12.75 15.19.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 15.53a.75.75 0 0 1 1.06-1.06l.72.72V11a.75.75 0 1 1 1.5 0v4.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3w = /*#__PURE__*/ React.forwardRef(SvgClipboardDownload);

const SvgClipboardFavourite = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm12.265 11.917-.265.265-.265-.265a1.875 1.875 0 1 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.857a1.875 1.875 0 1 0-2.652-2.651Z',
        })
    );
};
const ForwardRef$3v = /*#__PURE__*/ React.forwardRef(SvgClipboardFavourite);

const SvgClipboardList = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 10a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        })
    );
};
const ForwardRef$3u = /*#__PURE__*/ React.forwardRef(SvgClipboardList);

const SvgClipboardMinus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.75 14a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3t = /*#__PURE__*/ React.forwardRef(SvgClipboardMinus);

const SvgClipboardSearch = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 13a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 13Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3s = /*#__PURE__*/ React.forwardRef(SvgClipboardSearch);

const SvgClipboardUpload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm12.75 12.396.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 12.056a.75.75 0 1 0 1.06 1.06l.72-.72v4.19a.75.75 0 0 0 1.5 0v-4.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3r = /*#__PURE__*/ React.forwardRef(SvgClipboardUpload);

const SvgClipboard = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 18V8a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('rect', {
            width: 8,
            height: 4,
            x: 8,
            y: 2,
            fill: 'currentColor',
            rx: 2,
        })
    );
};
const ForwardRef$3q = /*#__PURE__*/ React.forwardRef(SvgClipboard);

const SvgColorInversion = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 13.111C21 8.201 15.375 2 12 2v20c4.97 0 9-3.98 9-8.889Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 13.111C3 8.201 8.625 2 12 2v20c-4.97 0-9-3.98-9-8.889Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3p = /*#__PURE__*/ React.forwardRef(SvgColorInversion);

const SvgComputer = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 18v3.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V18h-1.5Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.25 15a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3o = /*#__PURE__*/ React.forwardRef(SvgComputer);

const SvgDarkMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2v20Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2v20Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3n = /*#__PURE__*/ React.forwardRef(SvgDarkMode);

const SvgDevices = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6 4h12a2 2 0 0 1 1.998 1.916H14.9a2 2 0 0 0-2 2V17H4V6a2 2 0 0 1 2-2Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9Zm-1 8H3.5a1.5 1.5 0 0 0 0 3H13v-3Z',
        })
    );
};
const ForwardRef$3m = /*#__PURE__*/ React.forwardRef(SvgDevices);

const SvgDigitalHealth = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm5.852 15.246 3.719 4.599c1.245 1.54 3.613 1.54 4.858 0l3.72-4.598A3.82 3.82 0 0 0 19 12.845v-.173C19 10.644 17.338 9 15.288 9a3.73 3.73 0 0 0-2.625 1.076L12 10.73l-.663-.655A3.733 3.733 0 0 0 8.712 9C6.662 9 5 10.644 5 12.672v.173c0 .873.3 1.72.852 2.401Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3l = /*#__PURE__*/ React.forwardRef(SvgDigitalHealth);

const SvgDirectionDownDoubleCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.4 8.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm0 5a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3k = /*#__PURE__*/ React.forwardRef(SvgDirectionDownDoubleCircle);

const SvgDirectionDownDoubleRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.4 7.55a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Zm0 5a.75.75 0 0 1 1.05-.15l2.8 2.1a1.25 1.25 0 0 0 1.5 0l2.8-2.1a.75.75 0 0 1 .9 1.2l-2.8 2.1a2.75 2.75 0 0 1-3.3 0l-2.8-2.1a.75.75 0 0 1-.15-1.05Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3j = /*#__PURE__*/ React.forwardRef(SvgDirectionDownDoubleRectangle);

const SvgDirectionDownDouble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.414 6.532a.75.75 0 0 1 1.055-.118L12 10.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.414 12.531a.75.75 0 0 1 1.055-.117L12 16.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.055Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3i = /*#__PURE__*/ React.forwardRef(SvgDirectionDownDouble);

const SvgDirectionDown = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.414 9.532a.75.75 0 0 1 1.055-.118L12 13.04l4.532-3.626a.75.75 0 1 1 .936 1.172l-5 4a.75.75 0 0 1-.937 0l-5-4a.75.75 0 0 1-.117-1.054Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3h = /*#__PURE__*/ React.forwardRef(SvgDirectionDown);

const SvgDirectionLeftDoubleCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Zm-5 0a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3g = /*#__PURE__*/ React.forwardRef(SvgDirectionLeftDoubleCircle);

const SvgDirectionLeftDoubleRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Zm-5 0a.75.75 0 0 1 .15 1.05l-2.1 2.8a1.25 1.25 0 0 0 0 1.5l2.1 2.8a.75.75 0 1 1-1.2.9l-2.1-2.8a2.75 2.75 0 0 1 0-3.3l2.1-2.8a.75.75 0 0 1 1.05-.15Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3f = /*#__PURE__*/ React.forwardRef(SvgDirectionLeftDoubleRectangle);

const SvgDirectionLeftDouble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.468 6.414a.75.75 0 0 1 .118 1.055L13.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.054-.117Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.469 6.414a.75.75 0 0 1 .117 1.055L7.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3e = /*#__PURE__*/ React.forwardRef(SvgDirectionLeftDouble);

const SvgDirectionLeft = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.469 6.414a.75.75 0 0 1 .117 1.055L10.96 12l3.626 4.532a.75.75 0 1 1-1.172.936l-4-5a.75.75 0 0 1 0-.937l4-5a.75.75 0 0 1 1.055-.117Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3d = /*#__PURE__*/ React.forwardRef(SvgDirectionLeft);

const SvgDirectionRightDoubleCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm5 0a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3c = /*#__PURE__*/ React.forwardRef(SvgDirectionRightDoubleCircle);

const SvgDirectionRightDoubleRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.55 16.6a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Zm5 0a.75.75 0 0 1-.15-1.05l2.1-2.8a1.25 1.25 0 0 0 0-1.5l-2.1-2.8a.75.75 0 0 1 1.2-.9l2.1 2.8a2.75 2.75 0 0 1 0 3.3l-2.1 2.8a.75.75 0 0 1-1.05.15Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$3b = /*#__PURE__*/ React.forwardRef(SvgDirectionRightDoubleRectangle);

const SvgDirectionRightDouble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.532 6.414a.75.75 0 0 0-.118 1.055L10.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.531 6.414a.75.75 0 0 0-.117 1.055L16.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.055-.117Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3a = /*#__PURE__*/ React.forwardRef(SvgDirectionRightDouble);

const SvgDirectionRight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.532 6.414a.75.75 0 0 0-.118 1.055L13.04 12l-3.626 4.532a.75.75 0 1 0 1.172.936l4-5a.75.75 0 0 0 0-.937l-4-5a.75.75 0 0 0-1.054-.117Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$39 = /*#__PURE__*/ React.forwardRef(SvgDirectionRight);

const SvgDirectionUpDoubleCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.6 15.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm0-5a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$38 = /*#__PURE__*/ React.forwardRef(SvgDirectionUpDoubleCircle);

const SvgDirectionUpDoubleRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.6 15.45a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Zm0-5a.75.75 0 0 1-1.05.15l-2.8-2.1a1.25 1.25 0 0 0-1.5 0l-2.8 2.1a.75.75 0 1 1-.9-1.2l2.8-2.1a2.75 2.75 0 0 1 3.3 0l2.8 2.1a.75.75 0 0 1 .15 1.05Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$37 = /*#__PURE__*/ React.forwardRef(SvgDirectionUpDoubleRectangle);

const SvgDirectionUpDouble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.414 17.468a.75.75 0 0 0 1.055.118L12 13.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.054Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.414 11.469a.75.75 0 0 0 1.055.117L12 7.96l4.532 3.626a.75.75 0 1 0 .936-1.172l-5-4a.75.75 0 0 0-.937 0l-5 4a.75.75 0 0 0-.117 1.055Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$36 = /*#__PURE__*/ React.forwardRef(SvgDirectionUpDouble);

const SvgDirectionUp = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.586 14.469a.75.75 0 0 1-1.054.117L12 10.96l-4.531 3.626a.75.75 0 1 1-.937-1.172l5-4a.75.75 0 0 1 .937 0l5 4a.75.75 0 0 1 .117 1.055Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$35 = /*#__PURE__*/ React.forwardRef(SvgDirectionUp);

const SvgDna = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6.341 2C7.165 4.33 9.387 6 12 6h.341A6.003 6.003 0 0 0 18 2H6.341ZM12 18a6.002 6.002 0 0 0-5.659 4H18a6.003 6.003 0 0 0-5.659-4H12Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.868 13.259a6.026 6.026 0 0 0 0-2.518.948.948 0 0 1-.128.009H6.577a.94.94 0 0 1-.105-.006 6.024 6.024 0 0 0 0 2.512.94.94 0 0 1 .105-.006H17.74c.043 0 .086.003.128.009Zm-.534 1.491H7.007a6 6 0 0 0 5.164 3.248 6 6 0 0 0 5.163-3.248ZM12.17 6.002a6 6 0 0 1 5.163 3.248H7.007a6 6 0 0 1 5.164-3.248Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$34 = /*#__PURE__*/ React.forwardRef(SvgDna);

const SvgDoNotDisturb = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$33 = /*#__PURE__*/ React.forwardRef(SvgDoNotDisturb);

const SvgDownloadCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.47 10.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72V1a.75.75 0 0 0-1.5 0v12.19l-2.72-2.72a.75.75 0 0 0-1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$32 = /*#__PURE__*/ React.forwardRef(SvgDownloadCircle);

const SvgDownloadRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 9h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.47 11.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V3a.75.75 0 0 0-1.5 0v10.19l-1.72-1.72a.75.75 0 0 0-1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$31 = /*#__PURE__*/ React.forwardRef(SvgDownloadRectangle);

const SvgDribbble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 12c0 4.48 2.945 8.27 7.004 9.543A9.994 9.994 0 0 0 12 22a9.975 9.975 0 0 0 7.465-3.346A9.962 9.962 0 0 0 22 12a10.008 10.008 0 0 0-5.065-8.7A9.954 9.954 0 0 0 12 2a9.96 9.96 0 0 0-6.455 2.362A9.978 9.978 0 0 0 2 12Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M11.106 9.799a31.134 31.134 0 0 0-.833 1.886 16.783 16.783 0 0 0-3.742-.42c-1.566 0-3.086.215-4.53.62A10.186 10.186 0 0 0 2.1 13.42a15.249 15.249 0 0 1 4.431-.655c1.1 0 2.173.117 3.21.34A31.574 31.574 0 0 0 8.077 21.2a9.939 9.939 0 0 0 1.471.496c.17-2.867.738-5.622 1.646-8.206 3.132 1.004 5.853 2.994 7.829 5.628a10.035 10.035 0 0 0 1.005-1.155c-2.122-2.726-4.997-4.8-8.3-5.877.232-.566.48-1.123.745-1.67a16.731 16.731 0 0 0 6.227 1.196 16.8 16.8 0 0 0 3.275-.32 9.981 9.981 0 0 0-.216-1.487 15.3 15.3 0 0 1-3.059.307 15.24 15.24 0 0 1-5.536-1.036 29.234 29.234 0 0 1 4.018-5.631 9.996 9.996 0 0 0-1.387-.7 30.758 30.758 0 0 0-4.005 5.717 16.047 16.047 0 0 1-5.537-4.647 10.044 10.044 0 0 0-1.16.953 17.557 17.557 0 0 0 6.013 5.03Z',
        })
    );
};
const ForwardRef$30 = /*#__PURE__*/ React.forwardRef(SvgDribbble);

const SvgDrive = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm2 16 3 5 2.778-5L12 8.4 9 3 2 16Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm19 21 3-5H7.778L5 21h14Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 16 15 3H9l3 5.4 4.222 7.6H22Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2$ = /*#__PURE__*/ React.forwardRef(SvgDrive);

const SvgExchangeRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.47 6.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 16 9.75h-6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 1 10 8.25h4.19l-.72-.72a.75.75 0 0 1 0-1.06Zm-2.94 11.06a.75.75 0 0 1-1.06 0l-2-2A.75.75 0 0 1 8 14.25h6c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 14 15.75H9.81l.72.72a.75.75 0 0 1 0 1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2_ = /*#__PURE__*/ React.forwardRef(SvgExchangeRectangle);

const SvgExchange = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.47 3.47a.75.75 0 0 1 1.06 0l3 3A.75.75 0 0 1 20 7.75H9A4.25 4.25 0 0 0 4.75 12v1a.75.75 0 0 1-1.5 0v-1A5.75 5.75 0 0 1 9 6.25h9.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.53 20.53a.75.75 0 0 1-1.06 0l-3-3A.75.75 0 0 1 4 16.25h11A4.25 4.25 0 0 0 19.25 12v-1a.75.75 0 0 1 1.5 0v1A5.75 5.75 0 0 1 15 17.75H5.81l1.72 1.72a.75.75 0 0 1 0 1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2Z = /*#__PURE__*/ React.forwardRef(SvgExchange);

const SvgEyeDropper = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm16.607 3.414-2.121 2.122 2.828 2.828 2.121-2.121a2 2 0 1 0-2.828-2.829Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm8.586 11.435 5.9-5.9 2.828 2.829-5.9 5.9a4 4 0 0 1-2.828 1.17H7.414v-1.17a4 4 0 0 1 1.172-2.83Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.198 9.308 13.54 5.652a.75.75 0 0 1 1.06-1.061l3.658 3.657a.75.75 0 1 1-1.061 1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7.737 20.131c0 1.377-.836 1.87-1.868 1.87S4 21.506 4 20.13c0-1.375 1.869-3.114 1.869-3.114s1.868 1.739 1.868 3.114Z',
        })
    );
};
const ForwardRef$2Y = /*#__PURE__*/ React.forwardRef(SvgEyeDropper);

const SvgEye = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.102 10.086a2.487 2.487 0 0 1 0 3.828C17.45 15.324 14.883 17 12 17s-5.45-1.675-7.102-3.086a2.487 2.487 0 0 1 0-3.828C6.55 8.676 9.117 7 12 7s5.45 1.675 7.102 3.086Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM2.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm19.06 0a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm-16.5 12.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm13.94 0a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2X = /*#__PURE__*/ React.forwardRef(SvgEye);

const SvgFacebookSquare = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 7h-2.5a4 4 0 0 0-4 4v2H7v3h3.5v6h3v-6H17v-3h-3.5v-2a1 1 0 0 1 1-1H17V7Z',
        })
    );
};
const ForwardRef$2W = /*#__PURE__*/ React.forwardRef(SvgFacebookSquare);

const SvgFacebook = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 3h-3a5 5 0 0 0-5 5v13h4V8a1 1 0 0 1 1-1h3V3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 14h12v-4H6v4Z',
        })
    );
};
const ForwardRef$2V = /*#__PURE__*/ React.forwardRef(SvgFacebook);

const SvgFigma = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 3h3a3 3 0 1 1 0 6h-3V3Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 15,
            cy: 12,
            r: 3,
            fill: 'currentColor',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2U = /*#__PURE__*/ React.forwardRef(SvgFigma);

const SvgFilterBigCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.25 8A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8Zm0 8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm-3-8a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2T = /*#__PURE__*/ React.forwardRef(SvgFilterBigCircle);

const SvgFilterSmallCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm15 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-7 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75Zm-8 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2S = /*#__PURE__*/ React.forwardRef(SvgFilterSmallCircle);

const SvgFingerPrint = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 7.25A2.75 2.75 0 0 0 9.25 10v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 0 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10a4.25 4.25 0 0 1 8.5 0v6.515a6.75 6.75 0 0 1-1.977 4.773l-.243.242a.75.75 0 1 1-1.06-1.06l.242-.243a5.25 5.25 0 0 0 1.538-3.712V10A2.75 2.75 0 0 0 12 7.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 3.75A6.25 6.25 0 0 0 5.75 10v7a.75.75 0 0 1-1.5 0v-7a7.75 7.75 0 1 1 15.5 0v7a.75.75 0 0 1-1.5 0v-7A6.25 6.25 0 0 0 12 3.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2R = /*#__PURE__*/ React.forwardRef(SvgFingerPrint);

const SvgFiverr = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 3h-4a5 5 0 0 0-5 5v2H4v4h3v7h4v-7h5v7h4V10h-9V8a1 1 0 0 1 1-1h4V3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 14v-4h-4v11h4v-7Z',
        })
    );
};
const ForwardRef$2Q = /*#__PURE__*/ React.forwardRef(SvgFiverr);

const SvgFlashAuto = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 13.5 12 2v8.5h5L8 22v-8.5H3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.5 1.25a.75.75 0 0 1 .692.462l2.5 6a.75.75 0 0 1-1.384.576l-.641-1.538h-2.334l-.64 1.538a.75.75 0 0 1-1.385-.576l2.5-6a.75.75 0 0 1 .692-.462Zm-.542 4h1.084l-.542-1.3-.542 1.3Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2P = /*#__PURE__*/ React.forwardRef(SvgFlashAuto);

const SvgFlashLight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17.143 2H6.857A.857.857 0 0 0 6 2.857a5.144 5.144 0 0 0 3 4.677V19a3 3 0 1 0 6 0V7.534c1.77-.813 3-2.601 3-4.677A.857.857 0 0 0 17.143 2Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 8.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2O = /*#__PURE__*/ React.forwardRef(SvgFlashLight);

const SvgFlashOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14.5 10.5H19l-2.5 3L10 7l4-5v8.5h.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10 13.5H5l3.732-4.768 6.536 6.537L10 22v-8.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2N = /*#__PURE__*/ React.forwardRef(SvgFlashOff);

const SvgFlash = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 13.5 14 2v8.5h5L10 22v-8.5H5Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2M = /*#__PURE__*/ React.forwardRef(SvgFlash);

const SvgGiveBlood = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 8.056c0-1.984 1.685-3.943 2.868-5.075a1.621 1.621 0 0 1 2.264 0C20.315 4.113 22 6.072 22 8.056 22 10 20.485 12 18 12c-2.485 0-4-2-4-3.944Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2L = /*#__PURE__*/ React.forwardRef(SvgGiveBlood);

const SvgGivePill = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 8h6v3a3 3 0 1 1-6 0V8Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2K = /*#__PURE__*/ React.forwardRef(SvgGivePill);

const SvgGmail = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 3H6a4 4 0 0 0-4 4l7.501 6.001a4 4 0 0 0 4.998 0L22 7a4 4 0 0 0-4-4Z',
        })
    );
};
const ForwardRef$2J = /*#__PURE__*/ React.forwardRef(SvgGmail);

const SvgGooglePlus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M19.25 14a.75.75 0 0 0 1.5 0v-1.25H22a.75.75 0 0 0 0-1.5h-1.25V10a.75.75 0 0 0-1.5 0v1.25H18a.75.75 0 0 0 0 1.5h1.25V14Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 19a7 7 0 0 0 7-7v-.037c-.003-.585-.51-1.013-1.095-1.013H10.05a1.05 1.05 0 1 0 0 2.1h3.737A4.902 4.902 0 0 1 4.1 12a4.9 4.9 0 0 1 7.55-4.123c.487.314 1.147.326 1.557-.084.41-.41.414-1.083-.052-1.427A7 7 0 1 0 9 19Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2I = /*#__PURE__*/ React.forwardRef(SvgGooglePlus);

const SvgGoogle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 13.5v-3h9.888c.074.49.112.99.112 1.5 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.969 9.969 0 0 1 7.071 2.929L16.95 7.05a7 7 0 1 0 1.89 6.45H12Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 13.5v-3h9.888a10.08 10.08 0 0 1 0 3H12Z',
        })
    );
};
const ForwardRef$2H = /*#__PURE__*/ React.forwardRef(SvgGoogle);

const SvgGpsOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 20A8 8 0 0 1 6.898 5.837l11.264 11.265A7.983 7.983 0 0 1 12 20Zm0-5a3 3 0 0 1-1.524-5.584l4.109 4.108A2.998 2.998 0 0 1 12 15Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 12a3 3 0 0 0-4.524-2.585l4.109 4.109c.264-.447.415-.968.415-1.524Z',
        })
    );
};
const ForwardRef$2G = /*#__PURE__*/ React.forwardRef(SvgGpsOff);

const SvgGps = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM22.75 12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$2F = /*#__PURE__*/ React.forwardRef(SvgGps);

const SvgGraphicEq = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25Zm8 0a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M4 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 4 9.25Zm16 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2E = /*#__PURE__*/ React.forwardRef(SvgGraphicEq);

const SvgHangout = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22c4.97 0 9-6.03 9-11a9 9 0 1 0-9 9v2Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Zm-6 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1.5 1.5 0 0 1-.78 1.317c-.364.198-.72-.153-.72-.567a.75.75 0 0 0-.75-.75.75.75 0 0 1-.75-.75V10Z',
        })
    );
};
const ForwardRef$2D = /*#__PURE__*/ React.forwardRef(SvgHangout);

const SvgHealthCare = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16.459 2.946 16 3.402l-.459-.456a3.258 3.258 0 0 0-4.59 0 3.217 3.217 0 0 0 0 4.566l4.13 4.11c.508.504 1.33.504 1.837 0l4.131-4.11a3.217 3.217 0 0 0 0-4.566 3.258 3.258 0 0 0-4.59 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 10H2v9l4.31 2.155A8 8 0 0 0 9.89 22H18a2 2 0 1 0 0-4h-1.584c-.931 0-1.85-.217-2.683-.633l-2.714-1.721a1.911 1.911 0 0 0-.757-2.906L4 10Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2C = /*#__PURE__*/ React.forwardRef(SvgHealthCare);

const SvgHeart = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.765 4.702 12 5.524l-.765-.822c-2.113-2.27-5.538-2.27-7.65 0-2.113 2.27-2.113 5.95 0 8.22l6.885 7.397a2.06 2.06 0 0 0 3.06 0l6.886-7.397c2.112-2.27 2.112-5.95 0-8.22-2.113-2.27-5.538-2.27-7.651 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2B = /*#__PURE__*/ React.forwardRef(SvgHeart);

const SvgHoney = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 3.5 16.5 6v5L12 13.5 7.5 11V6L12 3.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm7.5 11 4.5 2.5v5L7.5 21 3 18.5v-5L7.5 11Zm9 0 4.5 2.5v5L16.5 21 12 18.5v-5l4.5-2.5Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2A = /*#__PURE__*/ React.forwardRef(SvgHoney);

const SvgHospitalBed = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20.75 14H2v4h20.75v-2a2 2 0 0 0-2-2ZM22 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 3.75a.75.75 0 0 1 .75.75v1.25h1.5V4.5a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0V7.25h-1.5V8.5a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM2 8.25a.75.75 0 0 1 .75.75v8.25H22a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-3.25H2.75V22a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 2 8.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 12v2h5v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z',
        })
    );
};
const ForwardRef$2z = /*#__PURE__*/ React.forwardRef(SvgHospitalBed);

const SvgHospitalPanel = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 7.25a.75.75 0 0 1 .75.75v3.25h6.5V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25h-6.5V16a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2y = /*#__PURE__*/ React.forwardRef(SvgHospitalPanel);

const SvgHospital = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 6v16h16V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 17v5h6v-5a3 3 0 1 0-6 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 4.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V11a.75.75 0 0 1-1.5 0V8.75H9a.75.75 0 0 1 0-1.5h2.25V5a.75.75 0 0 1 .75-.75ZM2.25 22a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2x = /*#__PURE__*/ React.forwardRef(SvgHospital);

const SvgHotspotOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.6 5.55a.75.75 0 0 1-.15 1.05 9.235 9.235 0 0 0-3.7 7.4 9.219 9.219 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.719 10.719 0 0 1 1.25 14c0-3.517 1.69-6.64 4.3-8.6a.75.75 0 0 1 1.05.15Zm2.916 2.935a.75.75 0 0 1-.249 1.031A5.246 5.246 0 0 0 6.75 14a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 14a6.747 6.747 0 0 1 3.235-5.764.75.75 0 0 1 1.031.25ZM12 12.75A1.25 1.25 0 1 0 13.25 14a.75.75 0 0 1 1.5 0A2.75 2.75 0 1 1 12 11.25a.75.75 0 0 1 0 1.5Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 4.75a9.231 9.231 0 0 0-3.15.55.75.75 0 0 1-.51-1.41A10.732 10.732 0 0 1 12 3.25c5.937 0 10.75 4.813 10.75 10.75 0 1.284-.226 2.517-.64 3.66a.75.75 0 1 1-1.41-.51c.356-.982.55-2.043.55-3.15A9.25 9.25 0 0 0 12 4.75ZM11.25 8a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 18.75 14a.75.75 0 1 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2w = /*#__PURE__*/ React.forwardRef(SvgHotspotOff);

const SvgHotspot = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 8.75a5.25 5.25 0 0 0-3.712 8.962.75.75 0 0 1-1.061 1.061 6.75 6.75 0 1 1 9.546 0 .75.75 0 0 1-1.06-1.06A5.25 5.25 0 0 0 12 8.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 4.75A9.25 9.25 0 0 0 2.75 14a9.219 9.219 0 0 0 2.71 6.54.75.75 0 0 1-1.061 1.061A10.719 10.719 0 0 1 1.25 14C1.25 8.063 6.063 3.25 12 3.25S22.75 8.063 22.75 14c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 14 9.25 9.25 0 0 0 12 4.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2v = /*#__PURE__*/ React.forwardRef(SvgHotspot);

const SvgInCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2a.75.75 0 0 1 0-1.5h12.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2u = /*#__PURE__*/ React.forwardRef(SvgInCircle);

const SvgInRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 3h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H21a.75.75 0 0 0 0-1.5H10.81l1.72-1.72a.75.75 0 0 0 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2t = /*#__PURE__*/ React.forwardRef(SvgInRectangle);

const SvgInjection = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.371 14.917a.75.75 0 0 1-.024 1.06l-5.83 5.566a.75.75 0 0 1-1.035-1.085l5.829-5.565a.75.75 0 0 1 1.06.024Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.905 2.47a.75.75 0 0 1 1.06 0l1.401 1.4.014.014a.95.95 0 0 1 .013.014l1.4 1.4a.75.75 0 1 1-1.06 1.06l-.884-.883-2.297 2.298a.75.75 0 0 1-1.061-1.06l2.298-2.299-.884-.884a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.485 6.535 8.3 11.721a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263l1.65-.236a2 2 0 0 0 1.131-.566l5.186-5.185a2 2 0 0 0 0-2.828l-1.414-1.415a2 2 0 0 0-2.829 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm9.761 16.765 1.65-.236a2 2 0 0 0 1.131-.565l3.772-3.771-7.071-1.415-.943.943a2 2 0 0 0-.566 1.131l-.236 1.65a2 2 0 0 0 2.263 2.263Z',
        })
    );
};
const ForwardRef$2s = /*#__PURE__*/ React.forwardRef(SvgInjection);

const SvgInstagram = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 18,
            cy: 6,
            r: 1,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2r = /*#__PURE__*/ React.forwardRef(SvgInstagram);

const SvgLaptop = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10H4V6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z',
        })
    );
};
const ForwardRef$2q = /*#__PURE__*/ React.forwardRef(SvgLaptop);

const SvgLightMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm9.31-12.625a.75.75 0 0 1-.275 1.025l-1.732 1a.75.75 0 1 1-.75-1.3l1.732-1a.75.75 0 0 1 1.025.275Zm-15.589 9a.75.75 0 0 1-.274 1.025l-1.732 1a.75.75 0 0 1-.75-1.3l1.732-1a.75.75 0 0 1 1.024.275Zm-3.031-9a.75.75 0 0 1 1.025-.275l1.732 1a.75.75 0 1 1-.75 1.3l-1.732-1a.75.75 0 0 1-.275-1.025Zm15.589 9a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 0 1-.75 1.3l-1.732-1a.75.75 0 0 1-.274-1.025Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2p = /*#__PURE__*/ React.forwardRef(SvgLightMode);

const SvgLinkedln = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 4,
            cy: 4,
            r: 2,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 8.5h4V22H2V8.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13 8.5H9V22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-8-5.659V8.5Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2o = /*#__PURE__*/ React.forwardRef(SvgLinkedln);

const SvgLocationHospital = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 9.889c0 4.649-4.63 9.233-6.845 11.16-.67.584-1.64.584-2.31 0C8.629 19.123 4 14.539 4 9.89 4 6 7.03 2 12 2c4.97 0 8 4 8 7.889Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1.25-7a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2n = /*#__PURE__*/ React.forwardRef(SvgLocationHospital);

const SvgLocation = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 10.889C21 15.799 15.375 22 12 22s-9-6.202-9-11.111C3 5.979 7.03 2 12 2s9 3.98 9 8.889Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$2m = /*#__PURE__*/ React.forwardRef(SvgLocation);

const SvgLock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 7a3.25 3.25 0 0 1 6.5 0H16c.256 0 .507.024.75.07V7a4.75 4.75 0 1 0-9.5 0v.07A4.02 4.02 0 0 1 8 7h.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        })
    );
};
const ForwardRef$2l = /*#__PURE__*/ React.forwardRef(SvgLock);

const SvgMask = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M20 6.75c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V8a2.75 2.75 0 1 1 5.5 0v4A4.75 4.75 0 0 1 18 16.75v-1.5A3.25 3.25 0 0 0 21.25 12V8c0-.69-.56-1.25-1.25-1.25Zm-16 0c.69 0 1.25.56 1.25 1.25v3a.75.75 0 0 0 1.5 0V8a2.75 2.75 0 0 0-5.5 0v4A4.75 4.75 0 0 0 6 16.75v-1.5A3.25 3.25 0 0 1 2.75 12V8c0-.69.56-1.25 1.25-1.25Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.876 7.224a4.75 4.75 0 0 1 4.248 0l4.211 2.105a.75.75 0 0 1 .415.671v5.127a4.75 4.75 0 0 1-1.71 3.649l-.719.6a6.75 6.75 0 0 1-8.642 0l-.72-.6a4.75 4.75 0 0 1-1.709-3.65V10a.75.75 0 0 1 .415-.67l4.21-2.106Z',
        })
    );
};
const ForwardRef$2k = /*#__PURE__*/ React.forwardRef(SvgMask);

const SvgMaximizeCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 3.75a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4.81l-9.72 9.72a.75.75 0 1 1-1.06-1.06l9.72-9.72H16Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2j = /*#__PURE__*/ React.forwardRef(SvgMaximizeCircle);

const SvgMaximizeRectangleDoted = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 12h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10 2h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 7a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8.81l-5.72 5.72a.75.75 0 1 1-1.06-1.06l5.72-5.72H12a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2i = /*#__PURE__*/ React.forwardRef(SvgMaximizeRectangleDoted);

const SvgMaximizeRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 5h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15 2.25h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.81l-9.72 9.72a.75.75 0 1 1-1.06-1.06l9.72-9.72H15a.75.75 0 0 1 0-1.5Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2h = /*#__PURE__*/ React.forwardRef(SvgMaximizeRectangle);

const SvgMedicalBook = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 2H7a3 3 0 0 0-3 3v14h16V5a3 3 0 0 0-3-3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 5.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V12a.75.75 0 0 1-1.5 0V9.75H9a.75.75 0 0 1 0-1.5h2.25V6a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 16H7a3 3 0 1 0 0 6h10a3 3 0 0 0 3-3v-3Z',
        })
    );
};
const ForwardRef$2g = /*#__PURE__*/ React.forwardRef(SvgMedicalBook);

const SvgMedicalInformation = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 18v-8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 10.25a.75.75 0 0 1 .75.75v2.25H11a.75.75 0 0 1 0 1.5H8.75V17a.75.75 0 0 1-1.5 0v-2.25H5a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75ZM19.75 12a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Zm-2 4a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10 5a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0V5Z',
        })
    );
};
const ForwardRef$2f = /*#__PURE__*/ React.forwardRef(SvgMedicalInformation);

const SvgMedicalService = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11 2.75A2.25 2.25 0 0 0 8.75 5v2a.75.75 0 0 1-1.5 0V5A3.75 3.75 0 0 1 11 1.25h2A3.75 3.75 0 0 1 16.75 5v2a.75.75 0 0 1-1.5 0V5A2.25 2.25 0 0 0 13 2.75h-2Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 10.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2e = /*#__PURE__*/ React.forwardRef(SvgMedicalService);

const SvgMenuCircleHorizontal = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 16.75,
            cy: 12.25,
            r: 1.25,
            fill: 'currentColor',
            opacity: 0.4,
            transform: 'rotate(90 16.75 12.25)',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 11.75,
            cy: 12.25,
            r: 1.25,
            fill: 'currentColor',
            transform: 'rotate(90 11.75 12.25)',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 6.75,
            cy: 12.25,
            r: 1.25,
            fill: 'currentColor',
            opacity: 0.4,
            transform: 'rotate(90 6.75 12.25)',
        })
    );
};
const ForwardRef$2d = /*#__PURE__*/ React.forwardRef(SvgMenuCircleHorizontal);

const SvgMenuCircleVertical = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12.25,
            cy: 7.25,
            r: 1.25,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12.25,
            cy: 12.25,
            r: 1.25,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12.25,
            cy: 17.25,
            r: 1.25,
            fill: 'currentColor',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2c = /*#__PURE__*/ React.forwardRef(SvgMenuCircleVertical);

const SvgMenuHome = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.046 4.046 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2b = /*#__PURE__*/ React.forwardRef(SvgMenuHome);

const SvgMenuLineHorizontalHalf = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 8A.75.75 0 0 1 7 7.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$2a = /*#__PURE__*/ React.forwardRef(SvgMenuLineHorizontalHalf);

const SvgMenuLineHorizontal = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 8A.75.75 0 0 1 7 7.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 12a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 16a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$29 = /*#__PURE__*/ React.forwardRef(SvgMenuLineHorizontal);

const SvgMenuLineVerticalHalf = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 11.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm8-5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$28 = /*#__PURE__*/ React.forwardRef(SvgMenuLineVerticalHalf);

const SvgMenuLineVertical = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 8 9.25Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$27 = /*#__PURE__*/ React.forwardRef(SvgMenuLineVertical);

const SvgMenuUser = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm0-5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75Zm2 10a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 7,
            cy: 8,
            r: 3,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 7,
            cy: 15.5,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 5,
            ry: 3.5,
        })
    );
};
const ForwardRef$26 = /*#__PURE__*/ React.forwardRef(SvgMenuUser);

const SvgMessenger = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.151 1.146l4.356-.726A9.96 9.96 0 0 0 12 22Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10 9-4 6 4-3 4 3 4-6-4 3-4-3Z',
        })
    );
};
const ForwardRef$25 = /*#__PURE__*/ React.forwardRef(SvgMessenger);

const SvgMinimizeCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 11,
            cy: 13,
            r: 8,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15 13.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v3.19l9.72-9.72a.75.75 0 1 1 1.06 1.06l-9.72 9.72H15Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$24 = /*#__PURE__*/ React.forwardRef(SvgMinimizeCircle);

const SvgMinimizeRectangleDoted = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 22H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 12h-2a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.81 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-5.72 5.72Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$23 = /*#__PURE__*/ React.forwardRef(SvgMinimizeRectangleDoted);

const SvgMinimizeRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6.625 5.375h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M21.155 2.845a.75.75 0 0 1 0 1.06l-9.72 9.72h4.19a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l9.72-9.72a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$22 = /*#__PURE__*/ React.forwardRef(SvgMinimizeRectangle);

const SvgMobileDataOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 18.172a1.27 1.27 0 0 0 .134-.117l1.586-1.585a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.53a.75.75 0 1 1 1.06-1.06l1.586 1.585c.043.043.087.082.134.117V8a.75.75 0 0 1 1.5 0v10.172Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.47 3.47a.75.75 0 0 1 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.75 13.69V5.828c.047.035.091.074.134.117L18.47 7.53a.75.75 0 1 0 1.06-1.061l-1.585-1.586a2.75 2.75 0 0 0-3.89 0L12.47 6.47a.75.75 0 0 0 1.06 1.06l1.586-1.585a1.22 1.22 0 0 1 .134-.117v6.362l1.5 1.5Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$21 = /*#__PURE__*/ React.forwardRef(SvgMobileDataOff);

const SvgMobileData = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 18.172a1.27 1.27 0 0 0 .134-.116l1.586-1.586a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L4.47 17.531a.75.75 0 1 1 1.06-1.061l1.586 1.586c.043.042.087.081.134.116V10a.75.75 0 0 1 1.5 0v8.172Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.25 5.828a1.259 1.259 0 0 0-.134.117L13.53 7.53a.75.75 0 1 1-1.06-1.061l1.585-1.586a2.75 2.75 0 0 1 3.89 0L19.53 6.47a.75.75 0 0 1-1.06 1.06l-1.586-1.585a1.26 1.26 0 0 0-.134-.117V14a.75.75 0 0 1-1.5 0V5.828Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$20 = /*#__PURE__*/ React.forwardRef(SvgMobileData);

const SvgMobile = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.25 19a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1$ = /*#__PURE__*/ React.forwardRef(SvgMobile);

const SvgMusicOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 9.298a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75Zm8.5-3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10.514 10.042 4.743-1.897A2 2 0 0 1 18 10.002v-5a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 8 8.756v5a4 4 0 0 1 2.514-3.714ZM18 16.048a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15.257 8.145A2 2 0 0 1 18 10.002v-5a2 2 0 0 0-2.743-1.857l-4.742 1.897a4 4 0 0 0-2.216 2.196l2.636 2.636 4.322-1.729ZM18 16.048a3 3 0 0 0-3.787-2.896l3.683 3.683c.068-.25.104-.515.104-.787Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1_ = /*#__PURE__*/ React.forwardRef(SvgMusicOff);

const SvgMusic = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.75 9.298a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-.75-.75Zm8.5-3a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm11.514 10.042 4.743-1.897A2 2 0 0 1 19 10.002v-5a2 2 0 0 0-2.743-1.857l-4.743 1.897A4 4 0 0 0 9 8.756v5a4 4 0 0 1 2.514-3.714ZM19 16.048a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM10.5 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1Z = /*#__PURE__*/ React.forwardRef(SvgMusic);

const SvgNetflix = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 20V9.5L4 3v17h5ZM20 3h-5v10l5 7V3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 3h5l11 17h-5L4 3Z',
        })
    );
};
const ForwardRef$1Y = /*#__PURE__*/ React.forwardRef(SvgNetflix);

const SvgNextArrow = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518C4.674 18.023 3 17.061 3 15.518Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M11 15.518V8.482c0-1.544 1.674-2.505 3.008-1.728l6.03 3.518c1.323.772 1.323 2.684 0 3.455l-6.03 3.518c-1.334.778-3.008-.184-3.008-1.727Z',
        })
    );
};
const ForwardRef$1X = /*#__PURE__*/ React.forwardRef(SvgNextArrow);

const SvgNightMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.328 14.869A9.197 9.197 0 0 1 9.525 3 9.201 9.201 0 0 0 3 11.803 9.197 9.197 0 0 0 12.197 21 9.201 9.201 0 0 0 21 14.475a9.196 9.196 0 0 1-2.672.394Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1W = /*#__PURE__*/ React.forwardRef(SvgNightMode);

const SvgNotificationOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4.847 9.194c.391-3.454 3.232-6.058 6.607-6.058 3.376 0 6.217 2.604 6.608 6.058l.36 3.182c.09.791.41 1.536.92 2.135 1.08 1.272.203 3.262-1.437 3.262h-12.9c-1.642 0-2.518-1.99-1.438-3.262.51-.6.83-1.344.92-2.134l.36-3.183Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M11.454 21.954c1.448 0 2.68-.872 3.137-2.09a.523.523 0 0 0-.523-.523H8.841a.523.523 0 0 0-.523.522c.457 1.219 1.689 2.091 3.136 2.091Zm6.969-9.577-.36-3.183c-.392-3.454-3.232-6.058-6.608-6.058-2.433 0-4.384 1.14-5.32 2.72L18.03 17.751c1.468 0 2.392-1.969 1.312-3.24a3.99 3.99 0 0 1-.92-2.134Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.491 2.32a.784.784 0 0 0 0 1.11l18.818 18.817a.784.784 0 0 0 1.11-1.108L2.598 2.32a.784.784 0 0 0-1.108 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1V = /*#__PURE__*/ React.forwardRef(SvgNotificationOff);

const SvgNotificationWithCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.68 9.794C6.054 6.491 8.77 4 12 4c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22c1.385 0 2.563-.835 3-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5c.437 1.165 1.615 2 3 2Zm8-17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$1U = /*#__PURE__*/ React.forwardRef(SvgNotificationWithCircle);

const SvgNotification = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.68 8.794C6.054 5.491 8.77 3 12 3c3.23 0 5.946 2.49 6.32 5.794l.345 3.044a3.82 3.82 0 0 0 .88 2.042c1.033 1.216.194 3.12-1.375 3.12H5.83c-1.57 0-2.408-1.904-1.375-3.12a3.816 3.816 0 0 0 .88-2.042l.345-3.044Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 21c1.385 0 2.563-.835 3-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5c.437 1.165 1.615 2 3 2Z',
        })
    );
};
const ForwardRef$1T = /*#__PURE__*/ React.forwardRef(SvgNotification);

const SvgOutCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H8a.75.75 0 0 1 0-1.5h12.19l-2.72-2.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1S = /*#__PURE__*/ React.forwardRef(SvgOutCircle);

const SvgOutRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 3h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1R = /*#__PURE__*/ React.forwardRef(SvgOutRectangle);

const SvgPayoneer = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1Q = /*#__PURE__*/ React.forwardRef(SvgPayoneer);

const SvgPaypal = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.7 18H7l2-5h4a5 5 0 0 0 4.703-6.703A5.002 5.002 0 0 1 16 16h-4l-2 5H5.5l1.2-3Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13 3H8.5L3 18h4l2-5h4a5 5 0 0 0 0-10Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1P = /*#__PURE__*/ React.forwardRef(SvgPaypal);

const SvgPhoneLock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 13.75c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0v-2a2.75 2.75 0 1 1 5.5 0v2a.75.75 0 0 1-1.5 0v-2c0-.69-.56-1.25-1.25-1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 16h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z',
        })
    );
};
const ForwardRef$1O = /*#__PURE__*/ React.forwardRef(SvgPhoneLock);

const SvgPillTablet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 2h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4V2Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4V2H8Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        })
    );
};
const ForwardRef$1N = /*#__PURE__*/ React.forwardRef(SvgPillTablet);

const SvgPillsCapsule = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 4a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-8Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$1M = /*#__PURE__*/ React.forwardRef(SvgPillsCapsule);

const SvgPills = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 15a7 7 0 0 0-7.938-6.938 7 7 0 1 1 7.875 7.875A7.07 7.07 0 0 0 16 15Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.95 13.95a7 7 0 0 0 0-9.9l-6 6a6.978 6.978 0 0 1 1.988 5.887 6.97 6.97 0 0 0 4.012-1.987Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 22a7 7 0 0 0 7-7H2a7 7 0 0 0 7 7Z',
        })
    );
};
const ForwardRef$1L = /*#__PURE__*/ React.forwardRef(SvgPills);

const SvgPinterestCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 7.75a4.25 4.25 0 0 0-3.682 6.374.75.75 0 1 1-1.298.752 5.75 5.75 0 1 1 3.652 2.72L9.594 21.69a.75.75 0 0 1-1.45-.382l2.63-10a.75.75 0 0 1 1.451.382l-1.171 4.453A4.25 4.25 0 1 0 12 7.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1K = /*#__PURE__*/ React.forwardRef(SvgPinterestCircle);

const SvgPinterest = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123L9.165 21.15c-.204.634-.91.99-1.577.797-.667-.193-1.043-.864-.84-1.498l4.043-12.571c.204-.634.91-.99 1.577-.797.667.193 1.043.864.84 1.498l-1.914 5.95c.23.028.466.042.705.042 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 4.4c-3.045 0-5.474 2.297-5.474 5.086 0 .185.01.368.032.548.064.558-.178 1.14-.692 1.367-.76.337-1.661-.033-1.786-.854A7.064 7.064 0 0 1 4 9.486C4 5.33 7.603 2 12 2s8 3.331 8 7.486c0 4.154-3.603 7.485-8 7.485a8.58 8.58 0 0 1-1.45-.123l.745-2.318c.23.027.466.041.705.041 3.045 0 5.474-2.297 5.474-5.085 0-2.789-2.43-5.086-5.474-5.086Z',
        })
    );
};
const ForwardRef$1J = /*#__PURE__*/ React.forwardRef(SvgPinterest);

const SvgPlaster = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M11.831 9.34a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 0 1 0 1.414l-2.49 2.49a1 1 0 0 1-1.415 0L9.34 13.246a1 1 0 0 1 0-1.414l2.491-2.49Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.712 5.813a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-9.899 9.9a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 1 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1I = /*#__PURE__*/ React.forwardRef(SvgPlaster);

const SvgPreviousArrow = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21.03 15.518V8.482c0-1.544-1.674-2.505-3.007-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.03 15.518V8.482c0-1.544-1.674-2.505-3.007-1.728l-6.03 3.518c-1.324.772-1.324 2.684 0 3.455l6.03 3.518c1.333.778 3.008-.184 3.008-1.727Z',
        })
    );
};
const ForwardRef$1H = /*#__PURE__*/ React.forwardRef(SvgPreviousArrow);

const SvgQrScan = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7 5.75c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V7A2.75 2.75 0 0 1 7 4.25h10A2.75 2.75 0 0 1 19.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25H7Zm10 12.5c.69 0 1.25-.56 1.25-1.25v-1a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17v-1a.75.75 0 0 1 1.5 0v1c0 .69.56 1.25 1.25 1.25h10Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.25 12a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1G = /*#__PURE__*/ React.forwardRef(SvgQrScan);

const SvgRedoCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.465 6.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-.565.727l-1.965.5a.75.75 0 1 1-.37-1.454l.833-.212a3.25 3.25 0 1 0 1 3.252.75.75 0 1 1 1.452.374A4.752 4.752 0 0 1 7.25 12a4.75 4.75 0 0 1 7.465-3.898V7.5a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1F = /*#__PURE__*/ React.forwardRef(SvgRedoCircle);

const SvgRedoRectangleLeft = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1E = /*#__PURE__*/ React.forwardRef(SvgRedoRectangleLeft);

const SvgRedoRectangleRight = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.465 6.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-.565.727l-1.965.5a.75.75 0 1 1-.37-1.454l.833-.212a3.25 3.25 0 1 0 1 3.252.75.75 0 1 1 1.452.374A4.752 4.752 0 0 1 7.25 12a4.75 4.75 0 0 1 7.465-3.898V7.5a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1D = /*#__PURE__*/ React.forwardRef(SvgRedoRectangleRight);

const SvgRedo = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 3.75A8.25 8.25 0 1 0 20.25 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25a9.723 9.723 0 0 1 7.046 3.01V3a.75.75 0 1 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h2.99a8.233 8.233 0 0 0-6.365-3Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.114 6.75V3a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.421a.75.75 0 0 1 0-1.5h3.67Z',
        })
    );
};
const ForwardRef$1C = /*#__PURE__*/ React.forwardRef(SvgRedo);

const SvgReloadCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.066.93A4.497 4.497 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917 0 .345.048.678.138.995a.75.75 0 1 1-1.443.41A5.13 5.13 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417.433 0 .856.045 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974Zm3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417a6.16 6.16 0 0 1-1.262-.131l.173.437a.75.75 0 1 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.497 4.497 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917a3.63 3.63 0 0 0-.138-.995.75.75 0 0 1 .516-.927Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1B = /*#__PURE__*/ React.forwardRef(SvgReloadCircle);

const SvgReloadRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.509 5.303a.75.75 0 0 1 .974.42l.795 2.002a.75.75 0 0 1-1.066.93A4.497 4.497 0 0 0 12 8.084c-2.397 0-4.25 1.802-4.25 3.917 0 .345.048.678.138.995a.75.75 0 1 1-1.443.41A5.13 5.13 0 0 1 6.25 12c0-3.04 2.624-5.417 5.75-5.417.433 0 .856.045 1.262.131l-.173-.437a.75.75 0 0 1 .42-.974Zm3.12 4.776a.75.75 0 0 1 .926.516c.127.449.195.92.195 1.405 0 3.04-2.624 5.417-5.75 5.417a6.16 6.16 0 0 1-1.262-.131l.173.437a.75.75 0 1 1-1.394.554l-.795-2.002a.75.75 0 0 1 1.066-.93 4.497 4.497 0 0 0 2.212.572c2.397 0 4.25-1.802 4.25-3.917a3.63 3.63 0 0 0-.138-.995.75.75 0 0 1 .516-.927Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1A = /*#__PURE__*/ React.forwardRef(SvgReloadRectangle);

const SvgReload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.554 7.35a.75.75 0 0 1 1.025.274 8.75 8.75 0 0 1-10.27 12.703l.535 1.406a.75.75 0 1 1-1.402.534l-1.178-3.09a.75.75 0 0 1 1.08-.915 7.25 7.25 0 0 0 9.937-9.886.75.75 0 0 1 .273-1.025Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.59 1.3a.75.75 0 0 1 .968.433l1.178 3.09a.75.75 0 0 1-1.08.915 7.25 7.25 0 0 0-9.937 9.886.75.75 0 1 1-1.298.752 8.75 8.75 0 0 1 10.27-12.703l-.535-1.406a.75.75 0 0 1 .434-.968Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1z = /*#__PURE__*/ React.forwardRef(SvgReload);

const SvgRestart = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1y = /*#__PURE__*/ React.forwardRef(SvgRestart);

const SvgRotateLock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.75 9a1.25 1.25 0 1 1 2.5 0v1H14c.265 0 .518.052.75.145V9a2.75 2.75 0 1 0-5.5 0v1.145c.232-.093.485-.145.75-.145h.75V9Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 10h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 2.75a9.25 9.25 0 1 0 8.289 13.36.75.75 0 1 1 1.343.668A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12a.75.75 0 0 1-.987.711l-3-1a.75.75 0 0 1 .474-1.422l1.953.65A9.251 9.251 0 0 0 12 2.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1x = /*#__PURE__*/ React.forwardRef(SvgRotateLock);

const SvgScreenRotate = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.46 11.47a2 2 0 0 1 0-2.829l3.18-3.182a2 2 0 0 1 2.829 0l7.07 7.07a2 2 0 0 1 0 2.83L15.36 18.54a2 2 0 0 1-2.829 0l-7.07-7.072Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.269 3.057a.75.75 0 0 1 .897-.566 9.768 9.768 0 0 1 6.823 5.725l.371-.607a.75.75 0 1 1 1.28.782l-1.223 2a.75.75 0 0 1-1.371-.225 8.263 8.263 0 0 0-6.212-6.212.75.75 0 0 1-.565-.897ZM3.345 13.26a.75.75 0 0 1 .61.574 8.263 8.263 0 0 0 6.211 6.211.75.75 0 1 1-.332 1.463 9.768 9.768 0 0 1-6.822-5.725l-.372.608a.75.75 0 1 1-1.28-.782l1.223-2a.75.75 0 0 1 .762-.35Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1w = /*#__PURE__*/ React.forwardRef(SvgScreenRotate);

const SvgScreenshot = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.25 5A2.75 2.75 0 0 1 5 2.25h4a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V5Zm19.5 14A2.75 2.75 0 0 1 19 21.75h-4a.75.75 0 0 1 0-1.5h4c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 1.5 0v4Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1v = /*#__PURE__*/ React.forwardRef(SvgScreenshot);

const SvgSdStorage = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 18V6a4 4 0 0 0-4-4h-5.343a4 4 0 0 0-2.829 1.172L5.172 5.828A4 4 0 0 0 4 8.657V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm-3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1u = /*#__PURE__*/ React.forwardRef(SvgSdStorage);

const SvgSecurity = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.376 2.722 5.378 4.943c-1.446.643-2.4 2.082-2.308 3.661.36 6.174 2.168 8.892 6.866 12.073a3.685 3.685 0 0 0 4.129 0c4.712-3.197 6.456-5.954 6.847-12.052.102-1.59-.854-3.043-2.31-3.69l-4.977-2.213a4 4 0 0 0-3.25 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 9.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1t = /*#__PURE__*/ React.forwardRef(SvgSecurity);

const SvgSetting = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.848 4h-1.697c-.937 0-1.696.716-1.696 1.6a1.333 1.333 0 0 1-1.97 1.17l-.09-.048c-.812-.442-1.85-.18-2.319.585l-.848 1.386c-.469.765-.19 1.744.62 2.186.89.483.89 1.759 0 2.242-.81.442-1.089 1.42-.62 2.186l.848 1.386c.469.765 1.507 1.027 2.318.585l.09-.049c.889-.483 1.97.16 1.97 1.171 0 .884.76 1.6 1.697 1.6h1.697c.938 0 1.697-.716 1.697-1.6a1.333 1.333 0 0 1 1.97-1.17l.09.049c.812.441 1.85.18 2.319-.586l.848-1.386c.469-.765.19-1.744-.62-2.186a1.277 1.277 0 0 1 0-2.242c.81-.442 1.089-1.42.62-2.186l-.848-1.386c-.469-.765-1.507-1.027-2.318-.585l-.09.049a1.333 1.333 0 0 1-1.97-1.171c0-.884-.76-1.6-1.697-1.6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$1s = /*#__PURE__*/ React.forwardRef(SvgSetting);

const SvgShutDown = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1r = /*#__PURE__*/ React.forwardRef(SvgShutDown);

const SvgSignalCellulerBad = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M17.856 20H4.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C17.802 3.339 20 4.28 20 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.47 15.47a.75.75 0 0 1 1.06 0L20 16.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L21.06 18l1.47 1.47a.75.75 0 1 1-1.06 1.06L20 19.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L18.94 18l-1.47-1.47a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1q = /*#__PURE__*/ React.forwardRef(SvgSignalCellulerBad);

const SvgSignalCellulerLine = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M21 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15 7.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1p = /*#__PURE__*/ React.forwardRef(SvgSignalCellulerLine);

const SvgSignalCellulerNoInternetDashed = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M20 3.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14 7.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 11.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm20.53.22a.75.75 0 0 1 0 1.06L21.06 18l1.47 1.47a.75.75 0 1 1-1.06 1.06L20 19.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L18.94 18l-1.47-1.47a.75.75 0 1 1 1.06-1.06L20 16.94l1.47-1.47a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1o = /*#__PURE__*/ React.forwardRef(SvgSignalCellulerNoInternetDashed);

const SvgSignalCellulerNoInternet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18 11.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1n = /*#__PURE__*/ React.forwardRef(SvgSignalCellulerNoInternet);

const SvgSignalCellulerOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 2.339 21 3.28 21 5.067v11.87c0 1.14-.96 2.063-2.144 2.063Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596L9.979 9.98 18.856 19Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1m = /*#__PURE__*/ React.forwardRef(SvgSignalCellulerOff);

const SvgSignalCelluler = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.856 20H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 3.339 21 4.28 21 6.067v11.87c0 1.14-.96 2.063-2.144 2.063Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1l = /*#__PURE__*/ React.forwardRef(SvgSignalCelluler);

const SvgSimCard = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 18V6a4 4 0 0 1 4-4h5.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 20 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 18a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1k = /*#__PURE__*/ React.forwardRef(SvgSimCard);

const SvgSkype = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 12a8 8 0 0 0 8.958 7.943 5 5 0 1 0 6.986-6.986 8 8 0 0 0-8.9-8.9 5 5 0 1 0-6.986 6.986A8.08 8.08 0 0 0 4 12Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 10a2.75 2.75 0 0 1 2.75-2.75h1A2.75 2.75 0 0 1 15.25 10a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-1a1.25 1.25 0 1 0 0 2.5h1a2.75 2.75 0 1 1 0 5.5h-1A2.75 2.75 0 0 1 8.75 14a.75.75 0 0 1 1.5 0c0 .69.56 1.25 1.25 1.25h1a1.25 1.25 0 1 0 0-2.5h-1A2.75 2.75 0 0 1 8.75 10Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1j = /*#__PURE__*/ React.forwardRef(SvgSkype);

const SvgSlack = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.63 4.236a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21.842 9.236a2 2 0 0 1-2 2h-2v-2a2 2 0 1 1 4 0ZM16.63 19.862a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM7.319 4.138a2 2 0 0 0 2 2h2v-2a2 2 0 1 0-4 0Zm-5.17 10.499a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7.29 14.637a2 2 0 1 1 4 0v5.225a2 2 0 0 1-4 0v-5.225Zm2.13-7.401a2 2 0 1 1 0 4H4.148a2 2 0 1 1 0-4h5.27Zm10.422 5.401a2 2 0 0 1 0 4H14.63a2 2 0 0 1 0-4h5.212Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$1i = /*#__PURE__*/ React.forwardRef(SvgSlack);

const SvgSnapchat = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 17c-1.102 0-1.844 0-2.365.589-.608.687-1.279 1.411-2.197 1.411h-.771a2 2 0 0 0-1.2.4l-1.067.8a4 4 0 0 1-4.8 0l-1.067-.8a2 2 0 0 0-1.2-.4h-.771c-.918 0-1.59-.724-2.197-1.411C3.845 17 3.102 17 2 17l2.4-1.8A4 4 0 0 0 6 12v-.5h-.5a1.5 1.5 0 0 1 0-3H6V8a6 6 0 0 1 12 0v.5h.5a1.5 1.5 0 0 1 0 3H18v.5a4 4 0 0 0 1.6 3.2L22 17Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.5 11.5H6v-3h-.5a1.5 1.5 0 0 0 0 3Zm13-3H18v3h.5a1.5 1.5 0 0 0 0-3Z',
        })
    );
};
const ForwardRef$1h = /*#__PURE__*/ React.forwardRef(SvgSnapchat);

const SvgSpotify = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.546 9.124c-2.184-.122-4.16.13-5.267.572a.75.75 0 0 1-.557-1.392c1.393-.558 3.616-.806 5.907-.678 2.302.129 4.8.644 6.735 1.718a.75.75 0 1 1-.728 1.312c-1.665-.925-3.916-1.41-6.09-1.532ZM11 12.312c-1.907-.06-3.548.185-4.285.407a.75.75 0 0 1-.431-1.437c.93-.28 2.738-.533 4.764-.469 2.027.064 4.37.45 6.315 1.531a.75.75 0 1 1-.728 1.312c-1.654-.92-3.729-1.283-5.635-1.344Zm4.635 4.344c-3.361-1.868-7.367-1.403-8.92-.937a.75.75 0 0 1-.431-1.437c1.78-.534 6.24-1.07 10.08 1.063a.75.75 0 1 1-.729 1.31Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1g = /*#__PURE__*/ React.forwardRef(SvgSpotify);

const SvgSpringNotesAdd = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1f = /*#__PURE__*/ React.forwardRef(SvgSpringNotesAdd);

const SvgSpringNotesCheck = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 10.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1e = /*#__PURE__*/ React.forwardRef(SvgSpringNotesCheck);

const SvgSpringNotesDelete = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.652 10.349a.75.75 0 0 1 0 1.06L13.06 13l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 11.939l1.591-1.59a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1d = /*#__PURE__*/ React.forwardRef(SvgSpringNotesDelete);

const SvgSpringNotesDownload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm11.25 14.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V10a.75.75 0 1 0-1.5 0v4.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1c = /*#__PURE__*/ React.forwardRef(SvgSpringNotesDownload);

const SvgSpringNotesEditAdd = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 7.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V14a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V8a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1b = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditAdd);

const SvgSpringNotesEditCheck = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 8.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1a = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditCheck);

const SvgSpringNotesEditDelete = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M14.652 9.349a.75.75 0 0 1 0 1.06L13.06 12l1.59 1.591a.75.75 0 1 1-1.06 1.06L12 13.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06L12 10.939l1.591-1.59a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$19 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditDelete);

const SvgSpringNotesEditDownload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm11.25 12.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.293a.75.75 0 0 0-1.06-1.06l-.72.72V9a.75.75 0 0 0-1.5 0v3.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$18 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditDownload);

const SvgSpringNotesEditFavourite = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Zm-6.662-1.939-.265.265-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 0 0-2.652-2.652Z',
        })
    );
};
const ForwardRef$17 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditFavourite);

const SvgSpringNotesEditMinus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.75 11a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$16 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditMinus);

const SvgSpringNotesEditSearch = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.75 11a3.25 3.25 0 1 1 1.544 2.767l-.764.763a.75.75 0 0 1-1.06-1.06l.763-.764A3.235 3.235 0 0 1 8.75 11ZM12 9.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$15 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditSearch);

const SvgSpringNotesEditUpload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm11.25 10.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v3.19a.75.75 0 0 1-1.5 0v-3.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$14 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEditUpload);

const SvgSpringNotesEdit = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        })
    );
};
const ForwardRef$13 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesEdit);

const SvgSpringNotesFavourite = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.265 10.674 12 10.94l-.265-.265a1.875 1.875 0 0 0-2.652 2.652l1.856 1.856a1.5 1.5 0 0 0 2.122 0l1.856-1.856a1.875 1.875 0 1 0-2.652-2.652Z',
        })
    );
};
const ForwardRef$12 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesFavourite);

const SvgSpringNotesList = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.75 13a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm0-4a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm0 8a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M8.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        })
    );
};
const ForwardRef$11 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesList);

const SvgSpringNotesRemove = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.75 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$10 = /*#__PURE__*/ React.forwardRef(SvgSpringNotesRemove);

const SvgSpringNotesSearch = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 13a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 8.25 13Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$$ = /*#__PURE__*/ React.forwardRef(SvgSpringNotesSearch);

const SvgSpringNotesUpload = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm12.75 11.81.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 11.47a.75.75 0 0 0 1.06 1.06l.72-.72V16a.75.75 0 1 0 1.5 0v-4.19Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$_ = /*#__PURE__*/ React.forwardRef(SvgSpringNotesUpload);

const SvgSpringNotesWriteEdit = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Zm8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M19.143 12.49a1.674 1.674 0 0 1 2.367 2.367l-5.015 5.015a.997.997 0 0 1-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.627-2.197a.993.993 0 0 1 .255-.434l5.015-5.015Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.75 9a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .75.75Zm-2 4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Zm-4 4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$Z = /*#__PURE__*/ React.forwardRef(SvgSpringNotesWriteEdit);

const SvgSpringNotes = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-8 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 7.5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M6.25 9A.75.75 0 0 1 7 8.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9Zm0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$Y = /*#__PURE__*/ React.forwardRef(SvgSpringNotes);

const SvgStandbyMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
        })
    );
};
const ForwardRef$X = /*#__PURE__*/ React.forwardRef(SvgStandbyMode);

const SvgStethoscope = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17.25 10.75a2 2 0 0 0-2 2v5.5a4.5 4.5 0 1 1-9 0V13a.75.75 0 0 1 1.5 0v5.25a3 3 0 1 0 6 0v-5.5a3.5 3.5 0 1 1 7 0V14a.75.75 0 0 1-1.5 0v-1.25a2 2 0 0 0-2-2Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.25 2.354A2.751 2.751 0 0 0 1.25 5v3a5.75 5.75 0 0 0 11.5 0V5a2.75 2.75 0 0 0-2-2.646V4c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1V2.354Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm-6 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$W = /*#__PURE__*/ React.forwardRef(SvgStethoscope);

const SvgStorage = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2a4 4 0 0 1 4 4v6H2V6a4 4 0 0 1 4-4h12Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 22a4 4 0 0 1-4-4v-6h20v6a4 4 0 0 1-4 4H6Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18 5.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V6a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-4 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$V = /*#__PURE__*/ React.forwardRef(SvgStorage);

const SvgSwitch = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 6a6 6 0 0 1 0 12H8A6 6 0 0 1 8 6h8Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z',
        })
    );
};
const ForwardRef$U = /*#__PURE__*/ React.forwardRef(SvgSwitch);

const SvgSyrup = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 3.5A1.5 1.5 0 0 1 8.5 2h7a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 7 3.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 12.14a4 4 0 0 1 1.781-3.327l.328-.22A2 2 0 0 0 9 6.93V5h6v1.93a2 2 0 0 0 .89 1.664l.329.219A4 4 0 0 1 18 12.14V18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5.86Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$T = /*#__PURE__*/ React.forwardRef(SvgSyrup);

const SvgTablet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',
        })
    );
};
const ForwardRef$S = /*#__PURE__*/ React.forwardRef(SvgTablet);

const SvgTaskCheck = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 18V6a4 4 0 0 1 4-4h7l7 7v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 5V2l7 7h-3a4 4 0 0 1-4-4Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.494 11.436a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$R = /*#__PURE__*/ React.forwardRef(SvgTaskCheck);

const SvgTelegram = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm2.896 10.796 15.39-6.65a1 1 0 0 1 1.383 1.074l-2.104 13.276a1 1 0 0 1-1.714.53l-3.453-3.657a2 2 0 0 1-.125-2.6L14.71 9.63c.14-.18-.081-.416-.27-.289l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'm19.411 4.379-4.762 4.953a.192.192 0 0 0-.208.01l-4.847 3.252a4 4 0 0 1-2.8.637l-3.644-.527c-.998-.144-1.18-1.508-.254-1.908l15.39-6.65a.994.994 0 0 1 1.125.233Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$Q = /*#__PURE__*/ React.forwardRef(SvgTelegram);

const SvgTestTube = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm12.889 6.142 4.97 4.97-9.112 9.11a3.514 3.514 0 1 1-4.97-4.97l9.112-9.11Zm4.141-2.485a2.343 2.343 0 1 1 3.313 3.313l-.828.828-3.313-3.313.828-.828Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12.474 3.242a1.757 1.757 0 0 1 2.485 0l5.798 5.798a1.757 1.757 0 0 1-2.485 2.485l-5.798-5.798a1.757 1.757 0 0 1 0-2.485Zm-8.696 12.01a3.514 3.514 0 1 0 4.97 4.97l6.225-6.225-8.946-.994-2.25 2.25Z',
        })
    );
};
const ForwardRef$P = /*#__PURE__*/ React.forwardRef(SvgTestTube);

const SvgThermometer = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm9.69 10.174 6.316-6.317a2.925 2.925 0 0 1 4.137 4.137l-6.317 6.316a1.95 1.95 0 0 1-1.103.552l-1.126.161a1.95 1.95 0 0 0-1.103.552l-4.997 4.997a1.463 1.463 0 1 1-2.069-2.069l4.997-4.997a1.95 1.95 0 0 0 .552-1.103l.16-1.126a1.95 1.95 0 0 1 .552-1.103Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M5.497 20.572a1.463 1.463 0 1 1-2.069-2.069l2.499-2.498 2.068 2.068-2.498 2.499Z',
        })
    );
};
const ForwardRef$O = /*#__PURE__*/ React.forwardRef(SvgThermometer);

const SvgTiktok = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10 21a6 6 0 0 0 6-6V8.197c.883.51 1.907.803 3 .803h1V6h-1a3 3 0 0 1-3-3h-3v12a3 3 0 1 1-3-3V9a6 6 0 0 0 0 12Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 3a3 3 0 0 0 3 3h1v3h-1a5.972 5.972 0 0 1-3-.803V3Z',
        })
    );
};
const ForwardRef$N = /*#__PURE__*/ React.forwardRef(SvgTiktok);

const SvgTooth = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20.263 4.24c-2.423-2.288-4.944-1.367-6.869-.003a2.43 2.43 0 0 1-2.793.006c-1.933-1.356-4.464-2.27-6.865-.004C-1.258 8.953 5.85 20.862 8.42 20.862c2.554 0 .7-7.295 3.58-7.387 2.88.092 1.026 7.387 3.58 7.387 2.57 0 9.678-11.909 4.683-16.623Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3.736 4.24c2.4-2.266 4.932-1.353 6.864.003.419.294.91.44 1.4.438v8.794c-2.88.091-1.026 7.387-3.58 7.387-2.57 0-9.678-11.909-4.684-16.623Z',
        })
    );
};
const ForwardRef$M = /*#__PURE__*/ React.forwardRef(SvgTooth);

const SvgTransfusion = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M8 14.9c0-4.072 3.837-8.089 5.83-9.9a1.724 1.724 0 0 1 2.34 0C18.164 6.81 22 10.827 22 14.9c0 3.5-2.65 7.1-7 7.1s-7-3.6-7-7.1Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6.81 3.067C5.06 4.75 2 8.197 2 11.689 2 14.8 4.272 18 8 18c.234 0 .462-.012.683-.037A7.316 7.316 0 0 1 8 14.9c0-3.115 2.246-6.199 4.194-8.287-.973-1.47-2.146-2.72-3.004-3.546a1.7 1.7 0 0 0-2.38 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M15.264 19.143a.75.75 0 0 1 .594-.879c1.277-.247 2.15-1.26 2.41-2.427a.75.75 0 0 1 1.464.326c-.369 1.658-1.637 3.196-3.59 3.574a.75.75 0 0 1-.878-.594Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$L = /*#__PURE__*/ React.forwardRef(SvgTransfusion);

const SvgTwitterPlus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 3.5V2h4v5h4v4h-4v5a2 2 0 0 0 2 2h4v4h-4a6 6 0 0 1-6-6v-5H5V7h.5A3.5 3.5 0 0 0 9 3.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9 3.5V2h4v5H5.5A3.5 3.5 0 0 0 9 3.5Z',
        })
    );
};
const ForwardRef$K = /*#__PURE__*/ React.forwardRef(SvgTwitterPlus);

const SvgTwitterSparrow = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15.286 4c-2.104 0-3.81 1.79-3.81 4 0 .334.04.658.113.968-2.023 0-5.07-.409-7.615-2.958-.338-.34-.962-.113-.938.366.377 7.687 3.669 9.929 5.364 10.068-1.095 1.082-2.685 1.935-4.285 2.318-.422.101-.527.564-.114.698 1.145.372 2.784.516 3.666.54 6.241 0 11.314-5.253 11.427-11.778.819-.533 1.344-1.69 1.639-2.51.071-.199-.256-.431-.451-.35-.613.255-1.39.315-2.052.1C17.532 4.569 16.472 4 15.286 4Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$J = /*#__PURE__*/ React.forwardRef(SvgTwitterSparrow);

const SvgTwitter = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 4v13a5 5 0 0 0 5 5h5a2 2 0 1 0 0-4h-4a2 2 0 0 1-2-2v-4h6a2 2 0 1 0 0-4h-6V4a2 2 0 1 0-4 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 8h-6v4h6a2 2 0 1 0 0-4Z',
        })
    );
};
const ForwardRef$I = /*#__PURE__*/ React.forwardRef(SvgTwitter);

const SvgUndoCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$H = /*#__PURE__*/ React.forwardRef(SvgUndoCircle);

const SvgUndo = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 3.75A8.25 8.25 0 1 1 3.75 12a.75.75 0 0 0-1.5 0c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25a9.722 9.722 0 0 0-7.046 3.01V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5h-2.99a8.233 8.233 0 0 1 6.365-3Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4.954 6.75V3a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h4.421a.75.75 0 0 0 0-1.5H4.954Z',
        })
    );
};
const ForwardRef$G = /*#__PURE__*/ React.forwardRef(SvgUndo);

const SvgUnlock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M9.85 4.562A3.25 3.25 0 0 1 15.25 7H16c.256 0 .507.024.75.07V7a4.75 4.75 0 0 0-7.892-3.562.75.75 0 1 0 .993 1.124Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        })
    );
};
const ForwardRef$F = /*#__PURE__*/ React.forwardRef(SvgUnlock);

const SvgUploadCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M7.47 6.53a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V16a.75.75 0 0 1-1.5 0V3.81L8.53 6.53a.75.75 0 0 1-1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$E = /*#__PURE__*/ React.forwardRef(SvgUploadCircle);

const SvgUploadRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 9h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.47 6.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V15a.75.75 0 0 1-1.5 0V4.81L9.53 6.53a.75.75 0 0 1-1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$D = /*#__PURE__*/ React.forwardRef(SvgUploadRectangle);

const SvgUsb = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 3.25a.75.75 0 0 1 .75.75v6.96l4.33-1.444a.25.25 0 0 0 .17-.237V6a.75.75 0 0 1 1.5 0v3.28a1.75 1.75 0 0 1-1.197 1.66l-4.803 1.6V19a.75.75 0 0 1-1.5 0v-4.46l-4.803-1.6a1.75 1.75 0 0 1-1.197-1.66V8a.75.75 0 0 1 1.5 0v3.28a.25.25 0 0 0 .17.236l4.33 1.443V4a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10.2 3.4 1-1.333a1 1 0 0 1 1.6 0l1 1.333A1 1 0 0 1 13 5h-2a1 1 0 0 1-.8-1.6ZM19.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z',
        })
    );
};
const ForwardRef$C = /*#__PURE__*/ React.forwardRef(SvgUsb);

const SvgUserAdd = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 10,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 10,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.25 13a.75.75 0 0 0 1.5 0v-1.25H21a.75.75 0 0 0 0-1.5h-1.25V9a.75.75 0 0 0-1.5 0v1.25H17a.75.75 0 0 0 0 1.5h1.25V13Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$B = /*#__PURE__*/ React.forwardRef(SvgUserAdd);

const SvgUserBlock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 10,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 10,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M19 14a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 19 14Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$A = /*#__PURE__*/ React.forwardRef(SvgUserBlock);

const SvgUserCircleAdd = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 11 8)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.75 16a.75.75 0 0 0-1.5 0v1.25H16a.75.75 0 0 0 0 1.5h1.25V20a.75.75 0 0 0 1.5 0v-1.25H20a.75.75 0 0 0 0-1.5h-1.25V16Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$z = /*#__PURE__*/ React.forwardRef(SvgUserCircleAdd);

const SvgUserCircleBlock = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 9,
            fill: 'currentColor',
            opacity: 0.4,
            transform: 'matrix(1 0 0 -1 11 11)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 11 8)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18 21a3 3 0 0 0 2.482-4.686l-4.168 4.168a3.016 3.016 0 0 1-.796-.796l4.168-4.168A3 3 0 1 0 18 21Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$y = /*#__PURE__*/ React.forwardRef(SvgUserCircleBlock);

const SvgUserCircleMinus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 9,
            fill: 'currentColor',
            opacity: 0.4,
            transform: 'matrix(1 0 0 -1 11 11)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.87 13.75c-1.072.003-2.137.296-3.563.934a.75.75 0 1 1-.614-1.368c1.52-.681 2.805-1.062 4.172-1.066 1.361-.004 2.73.367 4.418 1.056a.75.75 0 1 1-.566 1.388c-1.612-.657-2.77-.947-3.848-.944Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 11 8)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M20.502 18a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$x = /*#__PURE__*/ React.forwardRef(SvgUserCircleMinus);

const SvgUserCircleRemove = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 25',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 9,
            fill: 'currentColor',
            opacity: 0.4,
            transform: 'matrix(1 0 0 -1 11 11.757)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M10.87 14.507c-1.072.003-2.137.295-3.563.934a.75.75 0 1 1-.614-1.369c1.52-.68 2.805-1.062 4.172-1.065 1.361-.004 2.73.366 4.418 1.055a.75.75 0 1 1-.566 1.389c-1.612-.658-2.77-.947-3.848-.944Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 11 8.757)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.884 20.7a.75.75 0 0 0 1.06-1.06l-.883-.884.884-.883a.75.75 0 0 0-1.061-1.06l-.884.883-.884-.884a.75.75 0 1 0-1.06 1.06l.883.884-.884.885a.75.75 0 1 0 1.061 1.06l.884-.884.884.884Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$w = /*#__PURE__*/ React.forwardRef(SvgUserCircleRemove);

const SvgUserCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M22 12a9.976 9.976 0 0 1-3.441 7.549A9.961 9.961 0 0 1 12 22a9.961 9.961 0 0 1-6.559-2.451A9.977 9.977 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.559 19.549a7.003 7.003 0 0 0-13.118 0A9.961 9.961 0 0 0 12 22a9.96 9.96 0 0 0 6.559-2.451Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 12 10)',
        })
    );
};
const ForwardRef$v = /*#__PURE__*/ React.forwardRef(SvgUserCircle);

const SvgUserCommunity = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 6,
            cy: 4,
            r: 2,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 6,
            cy: 8,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 3,
            ry: 2,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 18,
            cy: 16,
            r: 2,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75a.75.75 0 0 1-1.5 0A9.25 9.25 0 0 0 12 2.75a.75.75 0 0 1-.75-.75ZM2 11.25a.75.75 0 0 1 .75.75A9.25 9.25 0 0 0 12 21.25a.75.75 0 0 1 0 1.5C6.063 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 18,
            cy: 20,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 3,
            ry: 2,
        })
    );
};
const ForwardRef$u = /*#__PURE__*/ React.forwardRef(SvgUserCommunity);

const SvgUserMinus = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 10,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 10,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.25 11a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$t = /*#__PURE__*/ React.forwardRef(SvgUserMinus);

const SvgUserPolygon = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-4.844 2.868a4.067 4.067 0 0 1-4.156 0L5.078 18.56C3.792 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.922 21.429a4.067 4.067 0 0 0 4.156 0l4.223-2.501c-1.258-2.23-3.609-3.73-6.301-3.73s-5.043 1.5-6.301 3.73l4.223 2.5Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 12 10)',
        })
    );
};
const ForwardRef$s = /*#__PURE__*/ React.forwardRef(SvgUserPolygon);

const SvgUserRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4.002 4.002 0 0 0 4 4h12a4.002 4.002 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            r: 3,
            fill: 'currentColor',
            transform: 'matrix(1 0 0 -1 12 10)',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 22h12c.345 0 .68-.044.999-.126a7 7 0 0 0-13.998 0c.32.082.654.126.999.126Z',
        })
    );
};
const ForwardRef$r = /*#__PURE__*/ React.forwardRef(SvgUserRectangle);

const SvgUserRemove = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 10,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 10,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.575 8.575a.719.719 0 0 1 1.016 0l1.41 1.408 1.408-1.408a.719.719 0 1 1 1.016 1.016l-1.408 1.41 1.408 1.408a.719.719 0 1 1-1.016 1.016L19 12.017l-1.409 1.408a.719.719 0 1 1-1.016-1.016L17.983 11l-1.408-1.409a.719.719 0 0 1 0-1.016Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$q = /*#__PURE__*/ React.forwardRef(SvgUserRemove);

const SvgUser = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 12,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        })
    );
};
const ForwardRef$p = /*#__PURE__*/ React.forwardRef(SvgUser);

const SvgUsersDouble = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 15,
            cy: 8,
            r: 3,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.115 18.948c.564-.576.885-1.24.885-1.948 0-1.701-1.859-3.155-4.479-3.733a11.262 11.262 0 0 1 2.48-.267c3.313 0 6 1.343 6 3 0 1.466-2.105 2.687-4.886 2.948Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 10,
            cy: 17,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 7,
            ry: 4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 10,
            cy: 7,
            r: 4,
            fill: 'currentColor',
        })
    );
};
const ForwardRef$o = /*#__PURE__*/ React.forwardRef(SvgUsersDouble);

const SvgUsersTriple = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 7.5,
            cy: 8.5,
            r: 2.5,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 16.5,
            cy: 8.5,
            r: 2.5,
            fill: 'currentColor',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('ellipse', {
            cx: 12,
            cy: 16,
            fill: 'currentColor',
            opacity: 0.4,
            rx: 6,
            ry: 3,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M16.495 17.987C17.43 17.458 18 16.762 18 16c0-1.187-1.379-2.213-3.38-2.7A9.176 9.176 0 0 1 17 13c2.761 0 5 1.12 5 2.5S19.76 18 17 18c-.17 0-.34-.004-.505-.013Zm-8.99 0A9.296 9.296 0 0 1 7 18c-2.761 0-5-1.12-5-2.5S4.239 13 7 13c.861 0 1.672.109 2.38.3C7.378 13.788 6 14.814 6 16c0 .762.569 1.458 1.505 1.987Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('circle', {
            cx: 12,
            cy: 8,
            r: 3,
            fill: 'currentColor',
        })
    );
};
const ForwardRef$n = /*#__PURE__*/ React.forwardRef(SvgUsersTriple);

const SvgVibrateMode = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M19 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm3-1a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm-17 6.5a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-.75.75Zm-3 1a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$m = /*#__PURE__*/ React.forwardRef(SvgVibrateMode);

const SvgVideoOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13 5H5.82l11.04 11.043c.027-.105.14-.39.14-1.043V9a4 4 0 0 0-4-4Zm4 4.334 1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667V9.334Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M1.22 1.47a.75.75 0 0 0 0 1.06l20 20a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 0Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$l = /*#__PURE__*/ React.forwardRef(SvgVideoOff);

const SvgVideo = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm17 9.334 1.54-1.644C19.782 6.367 22 7.245 22 9.058v5.885c0 1.813-2.219 2.69-3.46 1.368L17 14.667V9.334ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
        })
    );
};
const ForwardRef$k = /*#__PURE__*/ React.forwardRef(SvgVideo);

const SvgViewOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M21.13 14.147a3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5 8.184 5 4.825 7.795 2.87 9.853a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c3.816 0 7.174-2.795 9.13-4.853ZM12 15a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294c.83-.873 1.912-1.879 3.175-2.748L3.47 4.53a.75.75 0 1 1 1.06-1.06l16 16a.75.75 0 1 1-1.06 1.06l-2.827-2.827C15.233 18.471 13.66 19 12 19Zm0-4a3 3 0 0 1-2.585-4.524l4.109 4.109A2.986 2.986 0 0 1 12 15Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M9.879 9.879a3.001 3.001 0 0 1 4.242 4.242L12 12 9.879 9.879Z',
        })
    );
};
const ForwardRef$j = /*#__PURE__*/ React.forwardRef(SvgViewOff);

const SvgViewPrivacy = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21.13 8.853a3.085 3.085 0 0 1 0 4.294C19.174 15.205 15.816 18 12 18c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 6.795 8.184 4 12 4c3.816 0 7.174 2.795 9.13 4.853Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M18.5 13.75a.75.75 0 0 0-.75.75V16a.75.75 0 0 1-1.5 0v-1.5a2.25 2.25 0 0 1 4.5 0V16a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M20 15h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z',
        })
    );
};
const ForwardRef$i = /*#__PURE__*/ React.forwardRef(SvgViewPrivacy);

const SvgView = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21.13 9.853a3.085 3.085 0 0 1 0 4.294C19.174 16.205 15.816 19 12 19c-3.816 0-7.175-2.795-9.13-4.853a3.085 3.085 0 0 1 0-4.294C4.825 7.795 8.184 5 12 5c3.816 0 7.174 2.795 9.13 4.853Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        })
    );
};
const ForwardRef$h = /*#__PURE__*/ React.forwardRef(SvgView);

const SvgWhatsapp = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.511.335 2.945.936 4.229l-.713 4.396a1 1 0 0 0 1.151 1.146l4.356-.726A9.96 9.96 0 0 0 12 22Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M16 15.111v-.436c0-.542-.33-1.03-.833-1.23l-.466-.187a1.08 1.08 0 0 0-1.14.215c-.165.154-.38.273-.594.199a4.358 4.358 0 0 1-1.634-1.005 4.358 4.358 0 0 1-1.005-1.634c-.074-.213.045-.429.199-.593.28-.298.375-.74.215-1.14l-.187-.467A1.325 1.325 0 0 0 9.325 8H8.89a.889.889 0 0 0-.89.889A7.111 7.111 0 0 0 15.111 16a.889.889 0 0 0 .889-.889Z',
        })
    );
};
const ForwardRef$g = /*#__PURE__*/ React.forwardRef(SvgWhatsapp);

const SvgWheelChairHuman = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M15 15h-3V8a7 7 0 1 0 5.362 11.5l.142-.208L15 15Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 6.25a.75.75 0 0 1 .75.75v7.25H15a.75.75 0 0 1 .648.372l3.283 5.628H20a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.648-.372L14.57 15.75H12a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
        })
    );
};
const ForwardRef$f = /*#__PURE__*/ React.forwardRef(SvgWheelChairHuman);

const SvgWheelChair = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18.5 16H7V6h10a2 2 0 0 1 2 2v8.063a2.005 2.005 0 0 0-.5-.063Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v10.25H18.5A2.75 2.75 0 0 1 21.25 18a.75.75 0 0 1-1.5 0 1.25 1.25 0 0 0-1.25-1.25H7a.75.75 0 0 1-.75-.75V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm10.492 3.008a1.992 1.992 0 1 1-3.984 0 1.992 1.992 0 0 1 3.985 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$e = /*#__PURE__*/ React.forwardRef(SvgWheelChair);

const SvgWidgets = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4ZM2 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm12 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.1 8.071a2 2 0 0 1 0-2.828l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828L18.757 10.9a2 2 0 0 1-2.828 0L13.1 8.07Z',
        })
    );
};
const ForwardRef$d = /*#__PURE__*/ React.forwardRef(SvgWidgets);

const SvgWifiSignalBad = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56L14.222 18l-.615.83a2 2 0 0 1-3.214 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.47 13.47a.75.75 0 0 1 1.06 0l1.591 1.59 1.591-1.59a.75.75 0 0 1 1.061 1.06l-1.591 1.591 1.591 1.591a.75.75 0 0 1-1.06 1.061l-1.592-1.591-1.59 1.591a.75.75 0 0 1-1.061-1.06l1.59-1.592-1.59-1.59a.75.75 0 0 1 0-1.061Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$c = /*#__PURE__*/ React.forwardRef(SvgWifiSignalBad);

const SvgWifiSignalNoInternet = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56L14.222 18l-.615.83a2 2 0 0 1-3.214 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M17 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm0 7a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$b = /*#__PURE__*/ React.forwardRef(SvgWifiSignalNoInternet);

const SvgWifiSignalOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10.393 20.83-7.357-9.932c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10.393 20.83-7.357-9.932c-.594-.801-.513-1.93.26-2.56C4.513 7.342 5.783 6.57 7.082 6.02l10.05 10.05-3.525 4.76a2 2 0 0 1-3.214 0Z',
        })
    );
};
const ForwardRef$a = /*#__PURE__*/ React.forwardRef(SvgWifiSignalOff);

const SvgWifiSignal = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.393 18.83 3.036 8.898c-.594-.801-.513-1.93.26-2.56 5.448-4.45 11.96-4.45 17.408 0 .773.63.854 1.759.26 2.56l-7.357 9.932a2 2 0 0 1-3.214 0Z',
            opacity: 0.4,
        })
    );
};
const ForwardRef$9 = /*#__PURE__*/ React.forwardRef(SvgWifiSignal);

const SvgWifiOff = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.5 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12.5 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12.5 4.75Zm0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12.5 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12.5 9.75Zm0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12.5 14.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M3.561 8.22A.75.75 0 1 1 2.55 7.111a14.782 14.782 0 0 1 3.329-2.295L7.002 5.94a13.268 13.268 0 0 0-3.44 2.278Zm3.22 3.834a.75.75 0 0 1-1.04-1.081 9.743 9.743 0 0 1 3.974-2.32l1.24 1.241a8.225 8.225 0 0 0-4.174 2.16ZM12.5 14.75a3.24 3.24 0 0 0-2.454 1.119.75.75 0 0 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25c.941 0 1.82.274 2.557.747l1.188 1.187a.75.75 0 0 1-1.291.685A3.24 3.24 0 0 0 12.5 14.75Z',
        })
    );
};
const ForwardRef$8 = /*#__PURE__*/ React.forwardRef(SvgWifiOff);

const SvgWifi = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12 4.75Zm0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12 9.75Zm0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12 14.75Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$7 = /*#__PURE__*/ React.forwardRef(SvgWifi);

const SvgWirelessCharging = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13.45 7.4a.75.75 0 0 1 .15 1.05l-2.1 2.8H14a.75.75 0 0 1 .6 1.2l-3 4a.75.75 0 0 1-1.2-.9l2.1-2.8H10a.75.75 0 0 1-.6-1.2l3-4a.75.75 0 0 1 1.05-.15Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M8.288 7.227a.75.75 0 0 1 0 1.06A5.231 5.231 0 0 0 6.75 12a5.23 5.23 0 0 0 1.538 3.712.75.75 0 1 1-1.061 1.06A6.731 6.731 0 0 1 5.25 12a6.73 6.73 0 0 1 1.977-4.773.75.75 0 0 1 1.06 0Zm7.424 0a.75.75 0 0 1 1.061 0A6.731 6.731 0 0 1 18.75 12a6.731 6.731 0 0 1-1.977 4.773.75.75 0 0 1-1.06-1.06A5.231 5.231 0 0 0 17.25 12a5.23 5.23 0 0 0-1.538-3.712.75.75 0 0 1 0-1.061Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.46 4.398a.75.75 0 0 1 0 1.061 9.219 9.219 0 0 0-2.71 6.54 9.219 9.219 0 0 0 2.71 6.542.75.75 0 0 1-1.061 1.06A10.719 10.719 0 0 1 1.25 12c0-2.969 1.204-5.657 3.149-7.602a.75.75 0 0 1 1.06 0Zm13.08 0a.75.75 0 0 1 1.061 0A10.719 10.719 0 0 1 22.75 12c0 2.968-1.204 5.657-3.149 7.601a.75.75 0 0 1-1.06-1.06A9.218 9.218 0 0 0 21.25 12a9.219 9.219 0 0 0-2.71-6.541.75.75 0 0 1 0-1.06Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$6 = /*#__PURE__*/ React.forwardRef(SvgWirelessCharging);

const SvgYoutube = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'm10.447 8.724 4.764 2.381a1 1 0 0 1 0 1.79l-4.764 2.381A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z',
        })
    );
};
const ForwardRef$5 = /*#__PURE__*/ React.forwardRef(SvgYoutube);

const SvgZoomInRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M12.25 7a.75.75 0 0 1 1.5 0v2.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-2.72 2.72H17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V7ZM7 13.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-2.19l-2.72 2.72a.75.75 0 0 1-1.06-1.06l2.72-2.72H7Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$4 = /*#__PURE__*/ React.forwardRef(SvgZoomInRectangle);

const SvgZoomIn = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M5.25 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-3.19l-5.72 5.72a.75.75 0 0 1-1.06-1.06l5.72-5.72H6a.75.75 0 0 1-.75-.75Z',
            clipRule: 'evenodd',
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M20.53 3.47a.75.75 0 0 1 0 1.06l-5.72 5.72H18a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v3.19l5.72-5.72a.75.75 0 0 1 1.06 0Z',
            clipRule: 'evenodd',
            opacity: 0.4,
        })
    );
};
const ForwardRef$3 = /*#__PURE__*/ React.forwardRef(SvgZoomIn);

const SvgZoomOutCircle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13 8.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9.81l-5.44 5.44H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l5.44-5.44H13Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$2 = /*#__PURE__*/ React.forwardRef(SvgZoomOutCircle);

const SvgZoomOutRectangle = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d: 'M13 8.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V9.81l-5.44 5.44H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l5.44-5.44H13Z',
            clipRule: 'evenodd',
        })
    );
};
const ForwardRef$1 = /*#__PURE__*/ React.forwardRef(SvgZoomOutRectangle);

const SvgZoomOut = (_ref, ref) => {
    let { title, titleId, ...props } = _ref;
    return /*#__PURE__*/ React__namespace.createElement(
        'svg',
        _extends(
            {
                fill: 'none',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                width: props.size || '1rem',
                height: props.size || '1rem',
                ref: ref,
                'aria-labelledby': titleId,
            },
            props
        ),
        title
            ? /*#__PURE__*/ React__namespace.createElement(
                  'title',
                  {
                      id: titleId,
                  },
                  title
              )
            : null,
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M13.5 6.75a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V7.81l-4.72 4.72-1.06-1.06 4.72-4.72H13.5Z',
            opacity: 0.4,
        }),
        /*#__PURE__*/ React__namespace.createElement('path', {
            fill: 'currentColor',
            d: 'M10.627 17.123a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 1 1 1.5 0v2.689l4.72-4.72 1.06 1.06-4.719 4.72h2.69Z',
        })
    );
};
const ForwardRef = /*#__PURE__*/ React.forwardRef(SvgZoomOut);

exports.AboutPhone = ForwardRef$4J;
exports.Accessibility = ForwardRef$4I;
exports.Activity = ForwardRef$4H;
exports.AirplaneMode = ForwardRef$4F;
exports.AirplaneModeOff = ForwardRef$4G;
exports.Ambulance = ForwardRef$4E;
exports.AppsCircle = ForwardRef$4D;
exports.AppsDoubleCircle = ForwardRef$4C;
exports.AppsRectangle = ForwardRef$4B;
exports.AppsTripleRectangle = ForwardRef$4A;
exports.ArrowBack = ForwardRef$4x;
exports.ArrowBackCircle = ForwardRef$4z;
exports.ArrowBackRectangle = ForwardRef$4y;
exports.ArrowDown = ForwardRef$4u;
exports.ArrowDownCircle = ForwardRef$4w;
exports.ArrowDownRectangle = ForwardRef$4v;
exports.ArrowDropDown = ForwardRef$4t;
exports.ArrowDropLeft = ForwardRef$4s;
exports.ArrowDropRight = ForwardRef$4r;
exports.ArrowDropUp = ForwardRef$4q;
exports.ArrowLeft = ForwardRef$4n;
exports.ArrowLeftCircle = ForwardRef$4p;
exports.ArrowLeftRectangle = ForwardRef$4o;
exports.ArrowMove = ForwardRef$4k;
exports.ArrowMoveCircle = ForwardRef$4m;
exports.ArrowMoveRectangle = ForwardRef$4l;
exports.ArrowReturn = ForwardRef$4h;
exports.ArrowReturnCircle = ForwardRef$4j;
exports.ArrowReturnRectangle = ForwardRef$4i;
exports.ArrowRight = ForwardRef$4e;
exports.ArrowRightCircle = ForwardRef$4g;
exports.ArrowRightRectangle = ForwardRef$4f;
exports.ArrowSort = ForwardRef$4a;
exports.ArrowSortCircle = ForwardRef$4d;
exports.ArrowSortRectangle = ForwardRef$4b;
exports.ArrowSortRectangleHalf = ForwardRef$4c;
exports.ArrowThickDown = ForwardRef$49;
exports.ArrowThickLeft = ForwardRef$48;
exports.ArrowThickRight = ForwardRef$47;
exports.ArrowThickUp = ForwardRef$46;
exports.ArrowTransfer = ForwardRef$42;
exports.ArrowTransferCircle = ForwardRef$45;
exports.ArrowTransferRectangle = ForwardRef$43;
exports.ArrowTransferRectangleHalf = ForwardRef$44;
exports.ArrowUp = ForwardRef$3$;
exports.ArrowUpCircle = ForwardRef$41;
exports.ArrowUpRectangle = ForwardRef$40;
exports.Auto = ForwardRef$3Z;
exports.AutoRotation = ForwardRef$3_;
exports.Battery = ForwardRef$3O;
exports.BatteryAlert = ForwardRef$3Y;
exports.BatteryCharging = ForwardRef$3W;
exports.BatteryChargingFull = ForwardRef$3X;
exports.BatteryHorizontal = ForwardRef$3R;
exports.BatteryHorizontalCharging = ForwardRef$3V;
exports.BatteryHorizontalFull = ForwardRef$3U;
exports.BatteryHorizontalLowbet = ForwardRef$3T;
exports.BatteryHorizontalSavingMode = ForwardRef$3S;
exports.BatteryLowbet = ForwardRef$3Q;
exports.BatterySavingMode = ForwardRef$3P;
exports.Blood = ForwardRef$3M;
exports.BloodPlus = ForwardRef$3N;
exports.Bluetooth = ForwardRef$3J;
exports.BluetoothConnected = ForwardRef$3L;
exports.BluetoothOff = ForwardRef$3K;
exports.CallHospital = ForwardRef$3I;
exports.Camera = ForwardRef$3F;
exports.CameraOff = ForwardRef$3H;
exports.CameraSwitch = ForwardRef$3G;
exports.Capsule = ForwardRef$3D;
exports.CapsuleOpen = ForwardRef$3E;
exports.Cardiogram = ForwardRef$3C;
exports.Cast = ForwardRef$3B;
exports.Clipboard = ForwardRef$3q;
exports.ClipboardActivity = ForwardRef$3A;
exports.ClipboardAdd = ForwardRef$3z;
exports.ClipboardCheck = ForwardRef$3y;
exports.ClipboardDelete = ForwardRef$3x;
exports.ClipboardDownload = ForwardRef$3w;
exports.ClipboardFavourite = ForwardRef$3v;
exports.ClipboardList = ForwardRef$3u;
exports.ClipboardMinus = ForwardRef$3t;
exports.ClipboardSearch = ForwardRef$3s;
exports.ClipboardUpload = ForwardRef$3r;
exports.ColorInversion = ForwardRef$3p;
exports.Computer = ForwardRef$3o;
exports.DarkMode = ForwardRef$3n;
exports.Devices = ForwardRef$3m;
exports.DigitalHealth = ForwardRef$3l;
exports.DirectionDown = ForwardRef$3h;
exports.DirectionDownDouble = ForwardRef$3i;
exports.DirectionDownDoubleCircle = ForwardRef$3k;
exports.DirectionDownDoubleRectangle = ForwardRef$3j;
exports.DirectionLeft = ForwardRef$3d;
exports.DirectionLeftDouble = ForwardRef$3e;
exports.DirectionLeftDoubleCircle = ForwardRef$3g;
exports.DirectionLeftDoubleRectangle = ForwardRef$3f;
exports.DirectionRight = ForwardRef$39;
exports.DirectionRightDouble = ForwardRef$3a;
exports.DirectionRightDoubleCircle = ForwardRef$3c;
exports.DirectionRightDoubleRectangle = ForwardRef$3b;
exports.DirectionUp = ForwardRef$35;
exports.DirectionUpDouble = ForwardRef$36;
exports.DirectionUpDoubleCircle = ForwardRef$38;
exports.DirectionUpDoubleRectangle = ForwardRef$37;
exports.Dna = ForwardRef$34;
exports.DoNotDisturb = ForwardRef$33;
exports.DownloadCircle = ForwardRef$32;
exports.DownloadRectangle = ForwardRef$31;
exports.Dribbble = ForwardRef$30;
exports.Drive = ForwardRef$2$;
exports.Exchange = ForwardRef$2Z;
exports.ExchangeRectangle = ForwardRef$2_;
exports.Eye = ForwardRef$2X;
exports.EyeDropper = ForwardRef$2Y;
exports.Facebook = ForwardRef$2V;
exports.FacebookSquare = ForwardRef$2W;
exports.Figma = ForwardRef$2U;
exports.FilterBigCircle = ForwardRef$2T;
exports.FilterSmallCircle = ForwardRef$2S;
exports.FingerPrint = ForwardRef$2R;
exports.Fiverr = ForwardRef$2Q;
exports.Flash = ForwardRef$2M;
exports.FlashAuto = ForwardRef$2P;
exports.FlashLight = ForwardRef$2O;
exports.FlashOff = ForwardRef$2N;
exports.GiveBlood = ForwardRef$2L;
exports.GivePill = ForwardRef$2K;
exports.Gmail = ForwardRef$2J;
exports.Google = ForwardRef$2H;
exports.GooglePlus = ForwardRef$2I;
exports.Gps = ForwardRef$2F;
exports.GpsOff = ForwardRef$2G;
exports.GraphicEq = ForwardRef$2E;
exports.Hangout = ForwardRef$2D;
exports.HealthCare = ForwardRef$2C;
exports.Heart = ForwardRef$2B;
exports.Honey = ForwardRef$2A;
exports.Hospital = ForwardRef$2x;
exports.HospitalBed = ForwardRef$2z;
exports.HospitalPanel = ForwardRef$2y;
exports.Hotspot = ForwardRef$2v;
exports.HotspotOff = ForwardRef$2w;
exports.InCircle = ForwardRef$2u;
exports.InRectangle = ForwardRef$2t;
exports.Injection = ForwardRef$2s;
exports.Instagram = ForwardRef$2r;
exports.Laptop = ForwardRef$2q;
exports.LightMode = ForwardRef$2p;
exports.Linkedln = ForwardRef$2o;
exports.Location = ForwardRef$2m;
exports.LocationHospital = ForwardRef$2n;
exports.Lock = ForwardRef$2l;
exports.Mask = ForwardRef$2k;
exports.MaximizeCircle = ForwardRef$2j;
exports.MaximizeRectangle = ForwardRef$2h;
exports.MaximizeRectangleDoted = ForwardRef$2i;
exports.MedicalBook = ForwardRef$2g;
exports.MedicalInformation = ForwardRef$2f;
exports.MedicalService = ForwardRef$2e;
exports.MenuCircleHorizontal = ForwardRef$2d;
exports.MenuCircleVertical = ForwardRef$2c;
exports.MenuHome = ForwardRef$2b;
exports.MenuLineHorizontal = ForwardRef$29;
exports.MenuLineHorizontalHalf = ForwardRef$2a;
exports.MenuLineVertical = ForwardRef$27;
exports.MenuLineVerticalHalf = ForwardRef$28;
exports.MenuUser = ForwardRef$26;
exports.Messenger = ForwardRef$25;
exports.MinimizeCircle = ForwardRef$24;
exports.MinimizeRectangle = ForwardRef$22;
exports.MinimizeRectangleDoted = ForwardRef$23;
exports.Mobile = ForwardRef$1$;
exports.MobileData = ForwardRef$20;
exports.MobileDataOff = ForwardRef$21;
exports.Music = ForwardRef$1Z;
exports.MusicOff = ForwardRef$1_;
exports.Netflix = ForwardRef$1Y;
exports.NextArrow = ForwardRef$1X;
exports.NightMode = ForwardRef$1W;
exports.Notification = ForwardRef$1T;
exports.NotificationOff = ForwardRef$1V;
exports.NotificationWithCircle = ForwardRef$1U;
exports.OutCircle = ForwardRef$1S;
exports.OutRectangle = ForwardRef$1R;
exports.Payoneer = ForwardRef$1Q;
exports.Paypal = ForwardRef$1P;
exports.PhoneLock = ForwardRef$1O;
exports.PillTablet = ForwardRef$1N;
exports.Pills = ForwardRef$1L;
exports.PillsCapsule = ForwardRef$1M;
exports.Pinterest = ForwardRef$1J;
exports.PinterestCircle = ForwardRef$1K;
exports.Plaster = ForwardRef$1I;
exports.PreviousArrow = ForwardRef$1H;
exports.QrScan = ForwardRef$1G;
exports.Redo = ForwardRef$1C;
exports.RedoCircle = ForwardRef$1F;
exports.RedoRectangleLeft = ForwardRef$1E;
exports.RedoRectangleRight = ForwardRef$1D;
exports.Reload = ForwardRef$1z;
exports.ReloadCircle = ForwardRef$1B;
exports.ReloadRectangle = ForwardRef$1A;
exports.Restart = ForwardRef$1y;
exports.RotateLock = ForwardRef$1x;
exports.ScreenRotate = ForwardRef$1w;
exports.Screenshot = ForwardRef$1v;
exports.SdStorage = ForwardRef$1u;
exports.Security = ForwardRef$1t;
exports.Setting = ForwardRef$1s;
exports.ShutDown = ForwardRef$1r;
exports.SignalCelluler = ForwardRef$1l;
exports.SignalCellulerBad = ForwardRef$1q;
exports.SignalCellulerLine = ForwardRef$1p;
exports.SignalCellulerNoInternet = ForwardRef$1n;
exports.SignalCellulerNoInternetDashed = ForwardRef$1o;
exports.SignalCellulerOff = ForwardRef$1m;
exports.SimCard = ForwardRef$1k;
exports.Skype = ForwardRef$1j;
exports.Slack = ForwardRef$1i;
exports.Snapchat = ForwardRef$1h;
exports.Spotify = ForwardRef$1g;
exports.SpringNotes = ForwardRef$Y;
exports.SpringNotesAdd = ForwardRef$1f;
exports.SpringNotesCheck = ForwardRef$1e;
exports.SpringNotesDelete = ForwardRef$1d;
exports.SpringNotesDownload = ForwardRef$1c;
exports.SpringNotesEdit = ForwardRef$13;
exports.SpringNotesEditAdd = ForwardRef$1b;
exports.SpringNotesEditCheck = ForwardRef$1a;
exports.SpringNotesEditDelete = ForwardRef$19;
exports.SpringNotesEditDownload = ForwardRef$18;
exports.SpringNotesEditFavourite = ForwardRef$17;
exports.SpringNotesEditMinus = ForwardRef$16;
exports.SpringNotesEditSearch = ForwardRef$15;
exports.SpringNotesEditUpload = ForwardRef$14;
exports.SpringNotesFavourite = ForwardRef$12;
exports.SpringNotesList = ForwardRef$11;
exports.SpringNotesRemove = ForwardRef$10;
exports.SpringNotesSearch = ForwardRef$$;
exports.SpringNotesUpload = ForwardRef$_;
exports.SpringNotesWriteEdit = ForwardRef$Z;
exports.StandbyMode = ForwardRef$X;
exports.Stethoscope = ForwardRef$W;
exports.Storage = ForwardRef$V;
exports.Switch = ForwardRef$U;
exports.Syrup = ForwardRef$T;
exports.Tablet = ForwardRef$S;
exports.TaskCheck = ForwardRef$R;
exports.Telegram = ForwardRef$Q;
exports.TestTube = ForwardRef$P;
exports.Thermometer = ForwardRef$O;
exports.Tiktok = ForwardRef$N;
exports.Tooth = ForwardRef$M;
exports.Transfusion = ForwardRef$L;
exports.Twitter = ForwardRef$I;
exports.TwitterPlus = ForwardRef$K;
exports.TwitterSparrow = ForwardRef$J;
exports.Undo = ForwardRef$G;
exports.UndoCircle = ForwardRef$H;
exports.Unlock = ForwardRef$F;
exports.UploadCircle = ForwardRef$E;
exports.UploadRectangle = ForwardRef$D;
exports.Usb = ForwardRef$C;
exports.User = ForwardRef$p;
exports.UserAdd = ForwardRef$B;
exports.UserBlock = ForwardRef$A;
exports.UserCircle = ForwardRef$v;
exports.UserCircleAdd = ForwardRef$z;
exports.UserCircleBlock = ForwardRef$y;
exports.UserCircleMinus = ForwardRef$x;
exports.UserCircleRemove = ForwardRef$w;
exports.UserCommunity = ForwardRef$u;
exports.UserMinus = ForwardRef$t;
exports.UserPolygon = ForwardRef$s;
exports.UserRectangle = ForwardRef$r;
exports.UserRemove = ForwardRef$q;
exports.UsersDouble = ForwardRef$o;
exports.UsersTriple = ForwardRef$n;
exports.VibrateMode = ForwardRef$m;
exports.Video = ForwardRef$k;
exports.VideoOff = ForwardRef$l;
exports.View = ForwardRef$h;
exports.ViewOff = ForwardRef$j;
exports.ViewPrivacy = ForwardRef$i;
exports.Whatsapp = ForwardRef$g;
exports.WheelChair = ForwardRef$e;
exports.WheelChairHuman = ForwardRef$f;
exports.Widgets = ForwardRef$d;
exports.Wifi = ForwardRef$7;
exports.WifiOff = ForwardRef$8;
exports.WifiSignal = ForwardRef$9;
exports.WifiSignalBad = ForwardRef$c;
exports.WifiSignalNoInternet = ForwardRef$b;
exports.WifiSignalOff = ForwardRef$a;
exports.WirelessCharging = ForwardRef$6;
exports.Youtube = ForwardRef$5;
exports.ZoomIn = ForwardRef$3;
exports.ZoomInRectangle = ForwardRef$4;
exports.ZoomOut = ForwardRef;
exports.ZoomOutCircle = ForwardRef$2;
exports.ZoomOutRectangle = ForwardRef$1;