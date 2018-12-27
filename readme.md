# Vue-typist


![preview](preview.gif "Preview")


A component for Vue.js that simulates a real person typing and deleting their text.  
Please ignore the slow framerate in the gif preview, the actual package runs at 60fps. Give it a go and see for yourself.

### Installing

Install the package

```
yarn add vue-typist
# or
npm install --save vue-typist
```


## Usage

Import the component either locally..

```js
import Typist from "@milkcartongirl/vue-typist";

export default {
    components: {
        Typist
    }
}
```

.. or globally

``` js
import Typist from "@milkcartongirl/vue-typist";
Vue.use(Typist);
```

You can now use the ```<typist />``` component. See the documentation for the supported options.

## Documentation
Option| Type| Default| Explanation
--- | --- | ---|  ---
words **(required)** | Array[String]| - | An array of words you want to be typed out.
type-interval | Number| 50 | The delay between each keystroke. In milliseconds.
pause-interval | Number| 2000 | The pause after a word has been typed and after it has been erased. In milliseconds.
human | Boolean | false| A changing delay between keystrokes which makes the typing feel more "human".

## License

This project is licensed under the MIT License - see the [license.md](license.md) file for details.

