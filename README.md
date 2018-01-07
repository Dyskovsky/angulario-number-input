# angulario-number-input

[![Greenkeeper badge](https://badges.greenkeeper.io/Dyskovsky/angulario-number-input.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Dyskovsky/angulario-number-input.svg?branch=master)](https://travis-ci.org/Dyskovsky/angulario-number-input)
[![dependencies Status](https://david-dm.org/dyskovsky/angulario-number-input/status.svg)](https://david-dm.org/dyskovsky/angulario-number-input)
[![devDependencies Status](https://david-dm.org/dyskovsky/angulario-number-input/dev-status.svg)](https://david-dm.org/dyskovsky/angulario-number-input?type=dev)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/dyskovsky/angulario-number-input)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/dyskovsky/angulario-number-input)


> Material styled number input for Angular

<img src="demo.png" align="center" />

Online example https://dyskovsky.github.io/angulario-number-input

## Install

``npm install angulario-number-input --save``


## Usage
```javascript
import { DksNumberInputModule } from 'angulario-number-input';

@NgModule({
  imports: [ DksNumberInputModule ],
  ...
})
```

```html
<dks-number-input>
  <input type="number"/>    
</dks-number-input>
```

## Custom theming example
```css
.dks-arrow {
  color: red;
  border-width: 4px;
  margin-right: 10px;
}

.dks-arrow:hover {
  color: blue;
}

.dks-arrow.disabled {
  color: gray;
}
```