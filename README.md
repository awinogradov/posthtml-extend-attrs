# posthtml-extend-attrs

PostHTMLExtendAttrs is plugin for [PostHTML](https://github.com/posthtml/posthtml). It extend HTML attrs with new attrs and data.

## Usage

``` javascript
var posthtml = require('posthtml');
    
var html = '<div class="wow">OMG</div>';    

posthtml([ require('posthtml-extend-attrs')({
	attrs: { id: 'wow_id' }
})])
    .process(html)
    .then(function(result) {
        console.log(result);
    });
    
// <div class="wow" id="wow_id">OMG</div>
```
