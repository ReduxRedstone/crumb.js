# crumb.js
A simple toast notification script written in JavaScript

Call the toast with
```javascript
popToast(PARAMS)
```
## Parameters
```javascript
{
  'text':'Toast',
  'timeOut':5000,
  'clickRemove':true,
  'front':'Front'
}
```

1. 'text' => Main content
2. 'timeOut' => Time in milliseconds before toast is removed (defaults to 2000, or 2 seconds)
3. 'clickRemove' => Can the toast be removed by clicking?
4. 'front' => Content shown before the main text
