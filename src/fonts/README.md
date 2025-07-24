# Custom Fonts Setup

## Hurme Geometric Sans

To use the Hurme Geometric Sans font:

1. Purchase a web font license from [Hurme Design](https://hurmedesign.com/product-category/typefaces/hurme-geometric-sans-no-1-2/)
2. Download the font files (usually .woff, .woff2, .ttf formats)
3. Place the font files in this `src/fonts/` directory
4. Update the CSS font-face declarations in `src/index.css`

### Example font-face declaration:
```css
@font-face {
  font-family: 'Hurme Geometric Sans';
  src: url('./fonts/HurmeGeometricSans-Regular.woff2') format('woff2'),
       url('./fonts/HurmeGeometricSans-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Hurme Geometric Sans';
  src: url('./fonts/HurmeGeometricSans-Bold.woff2') format('woff2'),
       url('./fonts/HurmeGeometricSans-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Sofia Pro

Sofia Sans (from Google Fonts) is already configured as a close alternative to Sofia Pro. If you have Sofia Pro files, follow the same process as above.