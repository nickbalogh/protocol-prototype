# Digital Protocol Solution - Prototype

A high-fidelity, clickable prototype for a Digital Protocol Solution with Sponsor, Site Network, and Site views.

## Files Included

- `index.html` - Landing page with role selection
- `sponsor.html` - Sponsor view (Clinical Operations Lead)
- `network.html` - Site Network view (Clinical Research Network)
- `site.html` - Site detail view (Clinical Research Coordinators)
- `protocol-detail.html` - Protocol detail/analytics view (context-aware for sponsor vs network)
- `data.js` - Shared mock data and logic
- `styles.css` - Shared custom styles

## How to Run

### Option 1: Direct File Opening (Simplest)
1. Open `index.html` in a modern web browser to start from the landing page
2. Or directly open `sponsor.html`, `network.html`, or `site.html` to jump to specific views
3. All files must be in the same directory
4. Works in Chrome, Firefox, Safari, Edge

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

Then open: `http://localhost:8000/index.html` (or any specific view)

## Navigation Flow

### Starting Point
- **Landing Page** (`index.html`) - Select role (Sponsor or Site Network) to begin

### Sponsor View (`sponsor.html`)
- View all protocols owned by the sponsor
- Upload new protocol versions
- Click a protocol card to see detailed analytics
- **Protocol Detail View** (from sponsor):
  - **Overview Tab**: Complexity Index, Patient Burden Score, Amendment Risk, Recommended Actions
  - **Potential Sites Tab**: See matching sites with match scores, click to view site profile modal
  - **Version History Tab**: View all protocol versions
  - Upload, Export, and Send to EDC functionality available

### Site Network View (`network.html`)
- **Sites Tab**: Browse all sites in the network with filtering by specialty and capability
- **Available Protocols Tab**: View published protocols available to the network
  - Shows protocol requirements (truncated if many)
  - Displays number of high match sites (match score ≥ 70%)
  - Click protocol to view details
- **Protocol Detail View** (from network - read-only):
  - **Overview Tab**: Complexity Index and Patient Burden Score only (no Amendment Risk or Recommended Actions)
  - **Potential Sites Tab**: See matching sites in the network
    - Shows protocol requirements at the top
    - Click site cards to view site profile modal with match explanation
  - No upload, export, or EDC functionality
- Click Verily logo to return to landing page

### Site View (`site.html`)
- **Available Protocols Tab**: Browse published protocols in the marketplace
  - View protocol details in modal
  - See match scores and matching capabilities
- **Site Profile Tab**: View and edit site information
  - Performance metrics (Enrollment Rate, Retention Rate, Compliance, Time to First Patient)
  - Site name, location, specialties, and capabilities
- Click Verily logo to return to landing page

## Key Features

### Sponsor View Features
- **Protocol Management**: Upload, view, and manage protocol versions
- **Protocol Analytics**: Complexity Index, Patient Burden Score, Amendment Risk analysis
- **Site Matching**: View potential sites with match scores and detailed matching information
- **Site Profile Modal**: Click any potential site to view detailed site profile with performance metrics
- **Export Functionality**: Export protocols in USDM and ODM formats
- **EDC Integration**: Send protocols directly to EDC systems

### Site Network View Features
- **Site Management**: Browse and filter sites by specialty and capabilities
- **Protocol Discovery**: View available published protocols with requirements and match counts
- **Read-Only Protocol Details**: View protocol analytics without editing capabilities
- **Site Matching**: See which sites in the network match each protocol
- **Unified Site Modal**: View detailed site profiles with match explanations when viewing from protocol context

### Site View Features
- **Protocol Marketplace**: Browse available protocols with match scoring
- **Protocol Details**: View full protocol information including requirements and matching capabilities
- **Site Profile Management**: View and edit site information and capabilities
- **Performance Tracking**: View historical performance metrics

### Technical Features
- **No build step required** - Pure HTML/CSS/JavaScript
- **No backend required** - All data is client-side mock data
- **Fully interactive** - Clickable prototype with mock interactions
- **Design system compliant** - Follows Verily design patterns
- **Context-aware views** - Protocol detail page adapts based on user role
- **Responsive design** - Works on desktop and mobile browsers
- **Unified modals** - Consistent site profile modal across all views

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## Data Model

### Protocols
- 10 mock protocols with various phases and therapeutic areas
- Each protocol has requirements, status (Draft/Published), and public visibility
- Protocol analytics include complexity scores, patient burden, and amendment risk
- Version history tracks protocol iterations

### Sites
- 10 mock sites with different specialties and capabilities
- Each site has performance metrics (enrollment rate, retention rate, compliance, time to first patient)
- Sites are matched to protocols based on capability requirements

### Matching Logic
- Sites are matched to protocols based on capability overlap
- Match score calculated from: (matching capabilities / total requirements) + performance bonus
- High match threshold: ≥70% match score
- Matching capabilities are highlighted in green, missing capabilities in red

## User Roles & Permissions

### Sponsor (Clinical Operations Lead)
- Full access to protocol management
- Can upload, edit, and publish protocols
- Can view detailed site profiles
- Can export protocols and send to EDC
- View all protocol analytics including amendment risk

### Site Network (Clinical Research Network)
- Read-only access to published protocols
- Can view protocol analytics (Complexity Index, Patient Burden Score only)
- Can view site matching information
- Cannot upload, export, or modify protocols
- Can view detailed site profiles with match explanations

### Site (Clinical Research Coordinator)
- Can browse available published protocols
- Can view site profile and edit site information
- Can view protocol details and match information
- Cannot express interest or apply to protocols (workflow removed)

## Notes

- All data is mock data stored in `data.js`
- No data persists between browser sessions (localStorage was used for "applied" tracking but has been removed)
- All interactions are simulated (no actual API calls)
- Protocol detail view detects context via URL parameter (`?view=network`) to show appropriate content
- Site profile modal automatically includes match explanation when viewed from a protocol context
- Verily logo on all pages links back to the landing page (`index.html`)

## UI Patterns & Interactions

### Modal Popups
- **Site Profile Modal**: Consistent modal used across sponsor and network views
  - Shows performance metrics in a grid layout
  - Displays site information (name, location, specialties, capabilities)
  - When viewed from a protocol context, includes match explanation section
  - Capabilities are color-coded: green for matching, red for non-matching/missing

### Card Layouts
- **Protocol Cards**: Square grid layout with protocol title, phase, therapeutic area, requirements, and metrics
- **Site Cards**: Square grid layout with site name, location, specialties, and performance metrics
- **Match Cards**: Square grid layout in protocol detail view showing site match information

### Tabs
- **Network View**: Toggle between Sites and Available Protocols tabs
- **Protocol Detail**: Tabs vary by context (Overview, Potential Sites, Version History for sponsor; Overview and Potential Sites for network)
- **Site View**: Toggle between Available Protocols and Site Profile tabs

### Filtering & Search
- Sites can be filtered by specialty and capability
- Protocols can be filtered by phase and therapeutic area
- Search functionality available in most list views

## Key Interactions

1. **Click Verily Logo**: Returns to landing page from any view
2. **Click Protocol Card**: Opens protocol detail view (context-aware)
3. **Click Site Card**: 
   - In sponsor view: Opens site profile modal
   - In network view: Opens site profile modal with match explanation
4. **Click Potential Site Card**: Opens site profile modal with match details
5. **Tab Navigation**: Switch between different views within a page

