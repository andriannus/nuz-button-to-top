# Nuz Button To Top

Web Component for button back to the top of the page

## Install

Using npm:

```bash
npm i -S nuz-button-to-top
```

Using yarn:

```bash
yarn add nuz-button-to-top
```

## Example

```html
<nuz-button-to-top theme="success"></nuz-button-to-top>
```

## Available Attributes

### Distance

Make the button visible at a specified distance.
| Name | Type | Default |
| ---------- | ------ | ------- |
| `distance` | Number | `300` |

### Flat

Remove border-radiius from button.
| Name | Type | Default |
| ------ | ------- | ------- |
| `flat` | Boolean | `false` |

### Icon Code

Applies the icon variant using UTF-8 Decimal to the button.
You can find list of the icon on the [w3schools page](https://www.w3schools.com/charsets/ref_utf_arrows.asp).
| Name | Type | Default |
| ----------- | ------ | ------- |
| `icon-code` | String | `8593` |

### Rounded

Make the button a circle shape.
| Name | Type | Default |
| --------- | ------- | ------- |
| `rounded` | Boolean | `false` |

### Theme

Applies the theme variant to the button.
| Name | Type | Default | Available Values |
| ------- | ------ | --------- | ------------------------------------------------------------------ |
| `theme` | String | `primary` | `primary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |

## License

[MIT](http://opensource.org/licenses/MIT)
