# GideonX - Interactive Gaming Website

![GideonX Logo](/img/logo.png)

## Overview

GideonX is a responsive, interactive web application reimagining the Valorant gaming experience with a fresh, modern approach. This project is a creative reinterpretation of the existing Valorant website, enhanced with advanced front-end technologies and personal design touches. Built with React and leveraging modern animation libraries like GSAP, this project features a visually stunning user interface with dynamic content sections, interactive elements, and immersive visual effects.
The project showcases how established gaming websites can be reimagined with cutting-edge web technologies, creating a more engaging and interactive user experience while maintaining the core brand identity of the original tactical shooter game.

## Project ScreenShots 



## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Component Breakdown](#component-breakdown)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Credits](#credits)

## Features

### Dynamic Navigation Bar
- Auto-hiding navbar that appears/disappears based on scroll direction
- Floating animation effect when scrolling
- Audio toggle with visual indicator
- Responsive navigation links that adapt to screen size

### Immersive Hero Section
- Video backdrop with interactive mini-player
- Loading animation with three-body effect
- Clip-path animations for visually interesting transitions
- Call-to-action buttons with hover effects
- Custom typography with special styling for impactful branding

### Interactive About Section
- Animated title with custom styling for highlighted characters
- Mask clip-path animation that expands on scroll
- Pinned scrolling effect for immersive viewing experience
- Responsive layout that adapts to different screen sizes

### Bento Grid Features Section
- Tilt effect on cards that responds to mouse movement
- Video backgrounds in each card for visual engagement
- Radial gradient hover effect that follows cursor position
- Asymmetric grid layout with responsive adjustments
- "Coming Soon" indicators with interactive animations

### 3D Interactive Story Section
- Floating image with perspective effect that follows mouse movement
- Custom filter effects for image styling
- Blend modes for text overlay effects
- Responsive layout adjustments for different devices
- Animated title with highlighted characters

### Stylized Contact Section
- Complex clip-path effects for image components
- Layered images with depth perception
- Call-to-action button with hover effects
- Custom responsive typography
- Strategic positioning that adjusts across breakpoints

### Branded Footer
- Social media links with hover effects
- Copyright information
- Privacy policy link
- Custom color scheme matching brand identity

## Technologies Used

- **React**: Frontend library for building the user interface
- **GSAP (GreenSock Animation Platform)**: Advanced animation library for smooth transitions and effects
- **React Icons**: Icon library for UI elements
- **Tailwind CSS**: Utility-first CSS framework for styling
- **react-use**: Hooks library for window scroll tracking
- **Custom CSS**: For specialized animations and effects

## Project Structure

```
├── src/
│   ├── App.jsx                 # Main application component
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── Hero.jsx            # Hero section with video content
│   │   ├── About.jsx           # About section with animations
│   │   ├── Features.jsx        # Features section with bento grid
│   │   ├── Story.jsx           # Story section with 3D effects
│   │   ├── Contact.jsx         # Contact section with clip paths
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Button.jsx          # Reusable button component
│   │   └── AnimatedTitle.jsx   # Component for animated text
│   └── ...
├── public/
│   ├── img/                    # Image assets
│   ├── videos/                 # Video assets for various sections
│   └── audio/                  # Audio files for background music
└── ...
```

## Component Breakdown

### App.jsx
The main application component that assembles all sections in order, including:
- Navbar
- Hero
- About
- Features
- Story
- Contact
- Footer

### Navbar.jsx
Interactive navigation component with:
- Scroll-reactive behavior (appears/disappears based on scroll direction)
- Audio toggle button with visual indicator
- Responsive design with mobile adaptations
- GSAP animations for smooth transitions

### Hero.jsx
Immersive landing section featuring:
- Loading screen with custom animation
- Video background with clip-path effects
- Interactive mini video player with click events
- GSAP animations synchronized with ScrollTrigger
- Responsive typography and button placement

### About.jsx
Section explaining the game concept with:
- Animated title component with custom styling
- GSAP timeline animation with ScrollTrigger
- Pin-based scrolling effect
- Expanding mask clip-path animation
- Responsive layout adaptations

### Features.jsx
Interactive grid showcasing game features:
- Custom BentoTilt component for mouse-reactive tilt effects
- BentoCard component for consistent card styling
- Interactive cursor-following highlight effects
- Asymmetric grid layout with responsive adjustments
- Video backgrounds in each card

### Story.jsx
3D-effect section sharing the game's narrative:
- Mouse-reactive 3D perspective effect on images
- Custom filter effects with SVG definitions
- Mix-blend-mode text effects
- Responsive positioning and sizing
- Strategic content arrangement

### Contact.jsx
Visually striking call-to-action section with:
- Complex clip-path effects for visual interest
- Strategic image layering and positioning
- Responsive layout that reconfigures on different screen sizes
- Animated title with custom styling
- Action button with hover effects

### Footer.jsx
Brand-consistent page footer with:
- Social media links with icons
- Copyright information
- Privacy policy link
- Responsive layout with flex adjustments

## Getting Started

1. **Clone the repository**
   ```
   git clone https://your-repository-url/gideonx.git
   cd gideonx
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Run the development server**
   ```
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port specified by your Vite/React setup)

## Customization

### Changing Content
- Update text content in respective component files
- Replace video and image assets in public folders
- Modify animation parameters in GSAP configurations

### Styling
- The project uses a combination of Tailwind CSS classes and custom CSS
- Update theme colors in your Tailwind configuration
- Special fonts can be adjusted in global CSS files

### Adding New Sections
1. Create a new component in the components folder
2. Import and add the component to App.jsx
3. Link any new navigation items in Navbar.jsx

## Credits

- Created by Vishal Singh
- Inspired by Riot Games' Valorant
- Icons provided by React Icons
- Animations powered by GSAP
- Special fonts used: Robert Regular, Circular Web, Zentry


