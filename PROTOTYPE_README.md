# Digital Protocol Solution - Prototype

A high-fidelity, clickable prototype for a Digital Protocol Solution with Sponsor and Site views.

## Files Included

- `sponsor.html` - Sponsor view (Clinical Operations Lead)
- `site.html` - Site detail view (Clinical Research Coordinators)
- `protocol-detail.html` - Protocol detail/analytics view
- `network.html` - Site network overview
- `data.js` - Shared mock data and logic
- `styles.css` - Shared custom styles

## How to Run

### Option 1: Direct File Opening (Simplest)
1. Simply open `sponsor.html` or `network.html` in a modern web browser
2. All files must be in the same directory
3. Works in Chrome, Firefox, Safari, Edge

### Option 2: Local HTTP Server (Recommended)
To avoid CORS issues and ensure best compatibility:

**Using Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open: `http://localhost:8000/sponsor.html`

## Navigation Flow

1. **Sponsor View** (`sponsor.html`)
   - View protocols, upload new versions
   - Click a protocol card to see details

2. **Protocol Detail** (`protocol-detail.html`)
   - Overview, Potential Sites, Version History tabs
   - Upload new version button

3. **Network View** (`network.html`)
   - Browse all sites in the network
   - Click a site to see details

4. **Site View** (`site.html`)
   - Available Protocols and Site Profile tabs
   - Apply to protocols

## Features

- **No build step required** - Pure HTML/CSS/JavaScript
- **No backend required** - All data is client-side
- **Fully interactive** - Clickable prototype with mock interactions
- **Design system compliant** - Follows Verily design patterns

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## Notes

- All data is mock data stored in `data.js`
- Changes made in the UI (like "Applied" status) are stored in browser localStorage
- No data persists between browser sessions (except localStorage)
- All interactions are simulated (no actual API calls)

