export const unit = (props, propName, componentName) => {
    if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
              ' `' + componentName + '`. Validation needs to be a size unit like pt, px, em, rem, vw, %'
        );
    }
};

