# angulario-number-input

<img src="demo.png" align="center" />

## Run demo

Download source and run `ng serve`, then navigate to `http://localhost:4200/`. 

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