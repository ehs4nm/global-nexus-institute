# PROJECT STRUCTURE

> Pseudocode representation of project architecture and data flow

## 📁 File Structure

```
src/
├── components/
│   ├── admin/
│   │   ├── editors/
│   │   │   ├── AboutUsEditor.js
│   │   │   ├── GalleryEditor.js
│   │   │   ├── HeroEditor.js
│   │   │   ├── InitiativesEditor.js
│   │   │   ├── LeadershipEditor.js
│   │   │   ├── MenuEditor.js
│   │   │   ├── MetadataEditor.js
│   │   │   ├── MissionEditor.js
│   │   │   ├── NewsTickerEditor.js
│   │   │   └── ScrollEditor.js
│   │   ├── ui/
│   │   │   ├── FormInput.js
│   │   │   └── FormTextarea.js
│   │   ├── AdminHeader.js
│   │   ├── AdminSidebar.js
│   │   └── NewsTickerAdmin.js
│   ├── menus/
│   │   └── MegaMenu.js
│   ├── sections/
│   │   ├── AboutUsSectionWithContext.js
│   │   ├── ContactSection.js
│   │   ├── GallerySection.js
│   │   ├── HeroSection.js
│   │   ├── InitiativesSection.js
│   │   ├── LeadershipSection.js
│   │   ├── MissionSection.js
│   │   ├── ModelSection.js
│   │   ├── NewsTickerSection.js
│   │   ├── RefinedMissionSection.js
│   │   └── SloganSection.js
│   ├── CacheRefresh.js
│   ├── Footer.js
│   ├── FullscreenMenu.js
│   ├── FullscreenScroll.js
│   ├── Header.js
│   ├── Layout.js
│   ├── NewsletterForm.js
│   ├── NewsletterModal.js
│   ├── PersonDrawer.js
│   ├── Seo.jsx
│   └── TopBar.js
├── contexts/
│   └── ContentContext.js
├── hooks/
│   ├── useContent.js
│   ├── useDesignTheme.js
│   ├── useMenu.js
│   ├── useNewsletter.js
│   ├── useScrollMode.js
│   └── useTheme.js
├── pages/
│   ├── admin/
│   │   └── index.js
│   ├── 404.js
│   └── index.js
├── templates/
│   └── gallery-item.js
└── utils/
    └── admin/
        └── helpers.js
```

## 🔷 Components

### templates/gallery-item.js
Type: Component
Exports: DefaultExport, Head

Component GalleryItemTemplate:
  INPUT: destructured_object
  CALLS: object.map
  OUTPUT: JSXElement

Component Head:
  INPUT: destructured_object


### pages/index.js
Type: Component
Exports: DefaultExport, Head

Component LoadingScreen:
  INPUT: destructured_object
  CALLS: useEffect, setTimeout, clearTimeout
  OUTPUT: JSXElement

Component IndexPage:
  CALLS: useState, useEffect, console.log, setHasWindowLoaded, window.addEventListener, setTimeout, window.removeEventListener, clearTimeout, setIsLogoDone, setIsAppReady, setIsLoaderFinished
  LOGIC: CONDITIONAL×3
  OUTPUT: JSXFragment

function onLoad:
  CALLS: console.log, setHasWindowLoaded

function handleLoadingComplete:
  CALLS: console.log, setIsLogoDone

Component Head:


### pages/404.js
Type: Component
Exports: DefaultExport

Component NotFoundPage:
  OUTPUT: JSXElement


### hooks/useScrollMode.js
Type: Component
Exports: ScrollModeProvider, useScrollMode

Component ScrollModeProvider:
  INPUT: destructured_object
  CALLS: useState, useEffect, localStorage.getItem, setIsFullscreenMode, JSON.parse, setCurrentSection, localStorage.setItem, JSON.stringify
  LOGIC: CONDITIONAL×3
  OUTPUT: JSXElement

function toggleFullscreenMode:
  INPUT: param_enabled
  CALLS: setIsFullscreenMode, setCurrentSection, localStorage.setItem, JSON.stringify
  LOGIC: CONDITIONAL

Hook useScrollMode:
  CALLS: useContext
  LOGIC: CONDITIONAL
  OUTPUT: context


### hooks/useNewsletter.js
Type: Component
Exports: NewsletterProvider, useNewsletter

Component NewsletterProvider:
  INPUT: destructured_object
  CALLS: useState, useCallback, setIsOpen
  OUTPUT: JSXElement

Hook useNewsletter:
  CALLS: useContext


### hooks/useMenu.js
Type: Component
Exports: MenuProvider, useMenu

Component MenuProvider:
  INPUT: destructured_object
  CALLS: useState, useEffect, object.toggle, setMenuOpen, setDrawerOpen, window.addEventListener, window.removeEventListener, setPerson, setIsLoading, setError, object.getTime, fetch, response.json, Array.isArray, setMenuItems, localStorage.setItem, JSON.stringify, localStorage.getItem, JSON.parse, console.warn, console.error, fetchMenuItems
  LOGIC: CONDITIONAL×13
  OUTPUT: JSXElement

function onKey:
  INPUT: param_e
  CALLS: setMenuOpen, setDrawerOpen
  LOGIC: CONDITIONAL

function openPerson:
  INPUT: param_data
  CALLS: setPerson, setDrawerOpen

function fetchMenuItems:
  CALLS: setIsLoading, setError, object.getTime, fetch, response.json, Array.isArray, setMenuItems, localStorage.setItem, JSON.stringify, localStorage.getItem, JSON.parse, console.warn, console.error
  LOGIC: CONDITIONAL×10

Hook useMenu:
  CALLS: useContext
  LOGIC: CONDITIONAL
  OUTPUT: ctx


### contexts/ContentContext.js
Type: Component
Exports: useContent, ContentProvider, withContent

Hook useContent:
  CALLS: useContext
  LOGIC: CONDITIONAL
  OUTPUT: context

Component ContentProvider:
  INPUT: destructured_object
  CALLS: useState, setIsLoading, setError, object.getTime, fetch, response.json, setAboutUsContent, setNewsTickerContent, localStorage.getItem, JSON.parse, console.warn, console.error, useEffect, fetchContentFromBackend, localStorage.setItem, JSON.stringify, object.toISOString, updateAboutUsContent, updateNewsTickerContent
  LOGIC: CONDITIONAL×15
  OUTPUT: JSXElement

function fetchContentFromBackend:
  CALLS: setIsLoading, setError, object.getTime, fetch, response.json, setAboutUsContent, setNewsTickerContent, localStorage.getItem, JSON.parse, console.warn, console.error
  LOGIC: CONDITIONAL×9

function updateAboutUsContent:
  INPUT: param_newContent
  CALLS: setIsLoading, setError, setAboutUsContent, console.error
  LOGIC: CONDITIONAL
  OUTPUT: Object

function resetAboutUsContent:
  CALLS: setAboutUsContent
  OUTPUT: Object

function updateNewsTickerContent:
  INPUT: param_newContent
  CALLS: setIsLoading, setError, object.toISOString, setNewsTickerContent, console.error
  LOGIC: CONDITIONAL
  OUTPUT: Object

function resetNewsTickerContent:
  CALLS: setNewsTickerContent
  OUTPUT: Object

function updateContent:
  INPUT: param_section, param_content
  CALLS: updateAboutUsContent, updateNewsTickerContent
  OUTPUT: Object

function refreshContent:
  CALLS: fetchContentFromBackend

function exportContent:
  CALLS: object.toISOString, JSON.stringify
  OUTPUT: Call

function importContent:
  INPUT: param_contentString
  CALLS: setIsLoading, setError, JSON.parse, updateAboutUsContent, updateNewsTickerContent, console.error
  LOGIC: CONDITIONAL×2
  OUTPUT: Object

function withContent:
  INPUT: param_Component
  OUTPUT: JSXElement


### components/TopBar.js
Type: Component
Exports: TopBar

Component SocialIcon:
  INPUT: destructured_object

Component TopBar:
  CALLS: useNewsletter
  OUTPUT: JSXElement


### components/Seo.jsx
Type: Component
Exports: SEO

Component SEO:
  INPUT: destructured_object
  CALLS: useStaticQuery
  OUTPUT: JSXElement


### components/PersonDrawer.js
Type: Component
Exports: PersonDrawer

Component PersonDrawer:
  CALLS: useMenu, setDrawerOpen
  OUTPUT: JSXElement


### components/NewsletterModal.js
Type: Component
Exports: NewsletterModal

Component NewsletterModal:
  CALLS: useNewsletter, e.preventDefault, close
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement

function onSubmit:
  INPUT: param_e
  CALLS: e.preventDefault, close


### components/NewsletterForm.js
Type: Component
Exports: NewsletterForm

Component NewsletterForm:
  INPUT: destructured_object
  OUTPUT: JSXElement


### components/Layout.js
Type: Component
Exports: Layout

Component LayoutContent:
  INPUT: destructured_object
  CALLS: useScrollMode, object.toArray, sections.map
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement

Component Layout:
  INPUT: destructured_object
  OUTPUT: JSXElement


### components/Header.js
Type: Component
Exports: Header

Component Header:
  CALLS: useTheme, useDesignTheme, useMenu, useState, useMemo, object.map, object.filter, object.test, setActiveMega, setMenuOpen
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/FullscreenScroll.js
Type: Component
Exports: DefaultExport

Component FullscreenScroll:
  INPUT: destructured_object
  CALLS: useScrollMode, useRef, useState, object.toArray, useCallback, setCurrentSection, setIsScrolling, clearTimeout, setTimeout, useEffect, e.preventDefault, navigateToSection, container.addEventListener, container.removeEventListener, window.addEventListener, window.removeEventListener, setTouchEnd, setTouchStart, sections.map
  LOGIC: CONDITIONAL×21
  OUTPUT: JSXElement

function handleWheel:
  INPUT: param_e
  CALLS: e.preventDefault, navigateToSection
  LOGIC: CONDITIONAL×4

function handleKeyDown:
  INPUT: param_e
  CALLS: e.preventDefault, navigateToSection
  LOGIC: CONDITIONAL×6

function handleTouchStart:
  INPUT: param_e
  CALLS: setTouchEnd, setTouchStart
  LOGIC: CONDITIONAL

function handleTouchMove:
  INPUT: param_e
  CALLS: setTouchEnd
  LOGIC: CONDITIONAL

function handleTouchEnd:
  CALLS: navigateToSection
  LOGIC: CONDITIONAL×4


### components/FullscreenMenu.js
Type: Component
Exports: FullscreenMenu

Component FullscreenMenu:
  CALLS: useMenu, setMenuOpen, object.map, setMenuBg, object.padStart, String, object.test
  LOGIC: CONDITIONAL×2
  OUTPUT: JSXElement


### components/Footer.js
Type: Component
Exports: Footer

Component Footer:
  CALLS: object.getFullYear, object.map
  OUTPUT: JSXElement


### components/CacheRefresh.js
Type: Component
Exports: DefaultExport

Component CacheRefresh:
  CALLS: useContent, useState, setIsRefreshing, refreshContent, console.log, console.error, localStorage.removeItem, handleRefresh
  OUTPUT: JSXElement

function handleRefresh:
  CALLS: setIsRefreshing, refreshContent, console.log, console.error

function handleClearCache:
  CALLS: localStorage.removeItem, handleRefresh


### pages/admin/index.js
Type: Component
Exports: DefaultExport, Head

Component AdminPage:
  CALLS: useState, useEffect, setIsDev, localStorage.getItem, safeJsonParse, setContent, localStorage.setItem, JSON.stringify, setIsSaved, setTimeout, URL.createObjectURL, document.createElement, link.click, URL.revokeObjectURL, window.confirm, localStorage.removeItem, updateNestedState
  LOGIC: CONDITIONAL×4
  OUTPUT: JSXElement

function handleSave:
  CALLS: localStorage.setItem, JSON.stringify, setIsSaved, setTimeout

function handleExport:
  CALLS: JSON.stringify, URL.createObjectURL, document.createElement, link.click, URL.revokeObjectURL

function handleReset:
  CALLS: window.confirm, setContent, localStorage.removeItem
  LOGIC: CONDITIONAL

function updateContent:
  INPUT: param_path, param_value
  CALLS: updateNestedState, setContent

Component Head:


### components/sections/SloganSection.js
Type: Component
Exports: SloganSection

Component SloganSection:
  OUTPUT: JSXElement


### components/sections/RefinedMissionSection.js
Type: Component
Exports: MissionSection

Component MissionSection:
  CALLS: useContent, object.map
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/sections/NewsTickerSection.js
Type: Component
Exports: NewsTickerSection

Component NewsTickerSection:
  CALLS: useContent, useRef, useCallback, cancelAnimationFrame, requestAnimationFrame, useEffect, startAnimation
  LOGIC: CONDITIONAL×7
  OUTPUT: JSXElement

function animate:
  CALLS: requestAnimationFrame
  LOGIC: CONDITIONAL


### components/sections/ModelSection.js
Type: Component
Exports: ModelSection

Component ModelSection:
  CALLS: object.map
  OUTPUT: JSXElement


### components/sections/MissionSection.js
Type: Component
Exports: MissionSection

Component MissionSection:
  CALLS: useContent, object.map
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/sections/LeadershipSection.js
Type: Component
Exports: LeadershipSection

Component LeadershipSection:
  CALLS: useMenu, useContent, Array.isArray, console.warn, leadershipData.map, openPerson, object.padStart, String
  LOGIC: CONDITIONAL×2
  OUTPUT: JSXElement


### components/sections/InitiativesSection.js
Type: Component
Exports: InitiativesSection

Component InitiativesSection:
  CALLS: useContent, object.map, object.padStart, String
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/sections/HeroSection.js
Type: Component
Exports: HeroSection

Component HeroSection:
  CALLS: useRef, useContent, useEffect, object.querySelectorAll, gsap.set, gsap.to, object.map, object.split
  LOGIC: CONDITIONAL×2
  OUTPUT: JSXElement


### components/sections/GallerySection.js
Type: Component
Exports: GallerySection

Component GallerySection:
  CALLS: useContent, useState, object.map, object.padStart, String, setHoveredId
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/sections/ContactSection.js
Type: Component
Exports: ContactSection

Component ContactSection:
  CALLS: e.preventDefault
  OUTPUT: JSXElement


### components/sections/AboutUsSectionWithContext.js
Type: Component
Exports: AboutUsSectionWithContext

Component AboutUsSectionWithContext:
  CALLS: useContent, Array.isArray, object.map
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement


### components/menus/MegaMenu.js
Type: Component
Exports: MegaMenu

Component MegaMenu:
  INPUT: destructured_object
  CALLS: useState, useRef, useMemo, object.toLowerCase, label.replace, useCallback, onOpen, setUncontrolledOpen, onClose, closeMenu, e.preventDefault, openMenu, object.contains, Array.from, object.querySelectorAll, menuItems.indexOf, object.focus, label.toLowerCase, items.map
  LOGIC: CONDITIONAL×9
  OUTPUT: JSXElement

function onButtonKeyDown:
  INPUT: param_e
  CALLS: closeMenu, e.preventDefault, openMenu
  LOGIC: CONDITIONAL×3

function onRootBlurCapture:
  INPUT: param_e
  CALLS: object.contains, closeMenu
  LOGIC: CONDITIONAL


### components/admin/NewsTickerAdmin.js
Type: Component
Exports: NewsTickerAdmin

Component NewsTickerAdmin:
  CALLS: useContent, useState, useEffect, setFormData, e.preventDefault, object.trim, setMessage, setMessageType, updateNewsTickerContent, setTimeout, window.confirm, resetNewsTickerContent, object.filter, object.split, setPreviewMode, Math.max, getCharacterCount, getWordCount, object.toLocaleString
  LOGIC: CONDITIONAL×3
  OUTPUT: JSXElement

function handleInputChange:
  INPUT: param_e
  CALLS: setFormData

function handleSubmit:
  INPUT: param_e
  CALLS: e.preventDefault, object.trim, setMessage, setMessageType, updateNewsTickerContent, setTimeout
  LOGIC: CONDITIONAL×2

function handleReset:
  CALLS: window.confirm, resetNewsTickerContent, setMessage, setMessageType, setTimeout
  LOGIC: CONDITIONAL

function getCharacterCount:

function getWordCount:
  CALLS: object.filter, object.split, object.trim


### components/admin/AdminSidebar.js
Type: Component
Exports: DefaultExport

Component AdminSidebar:
  INPUT: destructured_object
  CALLS: TABS.map, onTabChange
  OUTPUT: JSXElement


### components/admin/AdminHeader.js
Type: Component
Exports: DefaultExport

Component AdminHeader:
  INPUT: destructured_object
  OUTPUT: JSXElement


### components/admin/ui/FormTextarea.js
Type: Component
Exports: DefaultExport

Component FormTextarea:
  INPUT: destructured_object
  CALLS: onChange
  OUTPUT: JSXElement


### components/admin/ui/FormInput.js
Type: Component
Exports: DefaultExport

Component FormInput:
  INPUT: destructured_object
  CALLS: onChange
  OUTPUT: JSXElement


### components/admin/editors/ScrollEditor.js
Type: Component
Exports: DefaultExport

Component ScrollEditor:
  CALLS: useScrollMode, setIsFullscreenMode
  OUTPUT: JSXElement


### components/admin/editors/NewsTickerEditor.js
Type: Component
Exports: DefaultExport

Component NewsTickerEditor:
  OUTPUT: JSXElement


### components/admin/editors/MissionEditor.js
Type: Component
Exports: DefaultExport

Component MissionEditor:
  INPUT: destructured_object
  CALLS: deepClone, updateContent, updateParagraph, object.map, updateCard
  OUTPUT: JSXElement

function updateParagraph:
  INPUT: param_index, param_value
  CALLS: deepClone, updateContent

function updateCard:
  INPUT: param_index, param_field, param_value
  CALLS: deepClone, updateContent


### components/admin/editors/MetadataEditor.js
Type: Component
Exports: DefaultExport

Component MetadataEditor:
  INPUT: destructured_object
  CALLS: updateContent


### components/admin/editors/MenuEditor.js
Type: Component
Exports: DefaultExport

Component MenuEditor:
  CALLS: useMenu, useState, object.trim, alert, object.toString, Date.now, setMenuItems, localStorage.setItem, JSON.stringify, setNewItem, window.confirm, menuItems.filter, setEditingItem, menuItems.map, LINK_TYPES.map, LINK_TYPES.find, handleReorderItem, handleEditItem, handleDeleteItem, object.map
  LOGIC: CONDITIONAL×4
  OUTPUT: JSXElement

function handleAddItem:
  CALLS: object.trim, alert, object.toString, Date.now, setMenuItems, localStorage.setItem, JSON.stringify, setNewItem
  LOGIC: CONDITIONAL

function handleDeleteItem:
  INPUT: param_id
  CALLS: window.confirm, menuItems.filter, setMenuItems, localStorage.setItem, JSON.stringify, setEditingItem
  LOGIC: CONDITIONAL

function handleEditItem:
  INPUT: param_item
  CALLS: setEditingItem

function handleUpdateItem:
  CALLS: object.trim, alert, menuItems.map, setMenuItems, localStorage.setItem, JSON.stringify, setEditingItem
  LOGIC: CONDITIONAL

function handleReorderItem:
  INPUT: param_index, param_direction
  CALLS: setMenuItems, localStorage.setItem, JSON.stringify
  LOGIC: CONDITIONAL


### components/admin/editors/LeadershipEditor.js
Type: Component
Exports: DefaultExport

Component LeadershipEditor:
  INPUT: destructured_object
  CALLS: updateContent, window.confirm, content.filter, deepClone, content.map, removeLeader, updateLeader
  LOGIC: CONDITIONAL
  OUTPUT: JSXElement

function addLeader:
  CALLS: updateContent

function removeLeader:
  INPUT: param_index
  CALLS: window.confirm, content.filter, updateContent
  LOGIC: CONDITIONAL

function updateLeader:
  INPUT: param_index, param_field, param_value
  CALLS: deepClone, updateContent


### components/admin/editors/InitiativesEditor.js
Type: Component
Exports: DefaultExport

Component InitiativesEditor:
  INPUT: destructured_object
  CALLS: deepClone, updateContent, object.map, updateProject
  OUTPUT: JSXElement

function updateProject:
  INPUT: param_index, param_field, param_value
  CALLS: deepClone, updateContent


### components/admin/editors/HeroEditor.js
Type: Component
Exports: DefaultExport

Component HeroEditor:
  INPUT: destructured_object
  CALLS: updateContent


### components/admin/editors/GalleryEditor.js
Type: Component
Exports: DefaultExport

Component GalleryEditor:
  INPUT: destructured_object
  CALLS: generateUniqueId, updateContent, window.confirm, object.filter, deepClone, field.split, object.push, updateGalleryHeader, object.map, removeGalleryItem, updateGalleryItem, addSection, removeSection, updateSection
  LOGIC: CONDITIONAL×2, LOOP
  OUTPUT: JSXElement

function addGalleryItem:
  CALLS: generateUniqueId, updateContent

function removeGalleryItem:
  INPUT: param_index
  CALLS: window.confirm, object.filter, updateContent
  LOGIC: CONDITIONAL

function updateGalleryItem:
  INPUT: param_index, param_field, param_value
  CALLS: deepClone, field.split, updateContent
  LOGIC: CONDITIONAL, LOOP

function addSection:
  INPUT: param_itemIndex
  CALLS: deepClone, object.push, updateContent

function removeSection:
  INPUT: param_itemIndex, param_sectionIndex
  CALLS: deepClone, object.filter, updateContent

function updateSection:
  INPUT: param_itemIndex, param_sectionIndex, param_field, param_value
  CALLS: deepClone, updateContent

function updateGalleryHeader:
  INPUT: param_field, param_value
  CALLS: updateContent


### components/admin/editors/AboutUsEditor.js
Type: Component
Exports: DefaultExport

Component AboutUsEditor:
  INPUT: destructured_object
  CALLS: updateContent, Math.max, currentPrinciples.map, object.padStart, String, currentPrinciples.filter, updateField, object.map, removePrinciple, updatePrinciple
  OUTPUT: JSXElement

function updateField:
  INPUT: param_field, param_value
  CALLS: updateContent

function updatePrinciple:
  INPUT: param_index, param_field, param_value
  CALLS: updateContent

function updatePrinciplesTitle:
  INPUT: param_value
  CALLS: updateContent

function addPrinciple:
  CALLS: Math.max, currentPrinciples.map, object.padStart, String, updateContent

function removePrinciple:
  INPUT: param_index
  CALLS: currentPrinciples.filter, updateContent

function initializePrinciples:
  CALLS: updateContent


## 🔷 Hooks

### hooks/useTheme.js
Type: Hook
Exports: useTheme

Hook useTheme:
  CALLS: useState, useEffect, localStorage.getItem, object.toggle, setIsDark, localStorage.setItem
  LOGIC: CONDITIONAL×2
  OUTPUT: Object

function toggleTheme:
  CALLS: setIsDark, object.toggle, localStorage.setItem
  LOGIC: CONDITIONAL


### hooks/useDesignTheme.js
Type: Hook
Exports: useDesignTheme

Hook useDesignTheme:
  CALLS: useState, useEffect, localStorage.getItem, setIsRefined, object.add, localStorage.setItem, object.remove
  LOGIC: CONDITIONAL×6
  OUTPUT: Object

function toggleDesignTheme:
  CALLS: setIsRefined, localStorage.setItem, object.add, object.remove
  LOGIC: CONDITIONAL×2
  OUTPUT: newValue

function setDesignTheme:
  INPUT: param_theme
  CALLS: setIsRefined, localStorage.setItem, object.add, object.remove
  LOGIC: CONDITIONAL×2


### hooks/useContent.js
Type: Hook
Exports: useContent

Hook useContent:
  CALLS: useState, useEffect, setContent, localStorage.getItem, JSON.parse, console.error, setIsLoading, loadContent
  LOGIC: CONDITIONAL×2
  OUTPUT: Object

function loadContent:
  CALLS: setContent, localStorage.getItem, JSON.parse, console.error, setIsLoading
  LOGIC: CONDITIONAL×2


## 🔷 Modules

### utils/admin/helpers.js
Type: Module
Exports: deepClone, generateUniqueId, updateNestedState, safeJsonParse

function deepClone:
  INPUT: param_obj
  CALLS: JSON.parse, JSON.stringify
  OUTPUT: Call

function generateUniqueId:
  CALLS: Date.now, object.substr, object.toString, Math.random
  OUTPUT: TemplateLiteral

function updateNestedState:
  INPUT: param_state, param_path, param_value
  CALLS: deepClone, path.split
  LOGIC: LOOP, CONDITIONAL
  OUTPUT: clonedState

function safeJsonParse:
  INPUT: param_jsonString, param
  CALLS: JSON.parse, console.error
  OUTPUT: fallback


## 🔄 Data Flow Summary

### Most Called Functions

- **updateContent** (called 49 times)
- **useState** (called 39 times)
- **localStorage.setItem** (called 28 times)
- **setIsLoading** (called 28 times)
- **JSON.stringify** (called 25 times)
- **setError** (called 21 times)
- **useEffect** (called 20 times)
- **e.preventDefault** (called 20 times)
- **object.trim** (called 20 times)
- **JSON.parse** (called 19 times)
