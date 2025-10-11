# Fullscreen Scroll Mode

This feature adds a page-by-page fullscreen scrolling experience to the website, where each section takes up the full viewport and users navigate between sections with smooth transitions.

## Features

- **Page-by-page scrolling**: Each section fills the entire viewport
- **Scrollable sections**: Sections taller than the viewport can be scrolled within
- **Smart navigation**: Automatically detects when you're at section boundaries
- **Multiple navigation methods**:
  - Mouse wheel or trackpad scrolling (within sections + between sections)
  - Arrow keys (↑/↓, Page Up/Down) - navigates between sections when at boundaries
  - Home/End keys for first/last section
  - Touch/swipe gestures on mobile (with boundary detection)
  - Navigation dots on the right side
- **Visual indicators**:
  - Dot navigation with current section highlighting
  - Section counter (e.g., "3/9" including footer)
  - Scroll hint on the first section
- **Smooth transitions**: 700ms easing animations between sections
- **Mobile optimized**: Responsive design with touch-friendly controls
- **Footer included**: Footer appears as the final section in fullscreen mode

## Admin Controls

### Accessing Scroll Settings

1. Go to `/admin` (development mode only)
2. Click on "Scroll Settings" in the sidebar (📜 icon)
3. Toggle the "Fullscreen Scroll Mode" switch

### Configuration Options

- **On/Off Toggle**: Enable or disable fullscreen scroll mode
- **Persistent Setting**: The setting is saved to browser localStorage and persists across sessions

## Technical Implementation

### Components

- **`useScrollMode`** hook: Manages scroll mode state globally
- **`ScrollModeProvider`**: Context provider for scroll mode state
- **`FullscreenScroll`**: Main fullscreen scrolling component
- **`ScrollEditor`**: Admin interface for scroll settings

### Layout Integration

The `Layout` component automatically detects the scroll mode and:
- **Normal mode**: Renders standard continuous scrolling layout with header, footer, and main content
- **Fullscreen mode**: Renders each section as a full-screen page with navigation controls
  - Each section is individually scrollable if content exceeds viewport height
  - Footer is included as the final section
  - Header remains fixed across all sections

### Navigation Controls

- **Wheel/Trackpad**: 
  - Scrolls within current section if content is taller than viewport
  - Navigates to next/previous section when at top/bottom boundaries
- **Keyboard**:
  - `↑` / `↓` arrows: Navigate between sections when at section boundaries
  - `Page Up` / `Page Down`: Navigate between sections when at section boundaries  
  - `Space`: Navigate to next section when at bottom of current section
  - `Home`: Always go to first section
  - `End`: Always go to last section
- **Touch**: 
  - Natural scrolling within sections
  - Swipe up/down (50px threshold) to navigate between sections when at boundaries
- **Dots**: Click any dot to jump directly to that section

### Performance Features

- **Scroll debouncing**: Prevents rapid section changes during scrolling
- **CSS transforms**: Uses `translateY` for smooth hardware-accelerated animations
- **Touch optimization**: Proper touch target sizes and gestures

## Browser Compatibility

- Modern browsers with CSS transforms support
- Touch events for mobile devices
- Keyboard navigation support
- Accessibility features (ARIA labels, screen reader friendly)

## Development Notes

- The feature is only available in development mode through the admin panel
- Settings are stored in browser localStorage as `gni_scroll_mode`
- The scroll mode state resets to the first section when toggling modes
- Footer is hidden in fullscreen mode to prevent layout conflicts

## Usage Examples

### Enable Fullscreen Mode
1. Visit `/admin`
2. Click "Scroll Settings"
3. Toggle the switch to enable fullscreen scroll mode
4. Navigate back to the main site to experience the new scrolling behavior

### Navigate Through Sections
- Use mouse wheel to scroll between sections
- Press arrow keys to navigate
- Click the dots on the right to jump to specific sections
- On mobile, swipe up/down to navigate

The implementation provides a smooth, intuitive page-by-page browsing experience while maintaining all the original content and functionality.