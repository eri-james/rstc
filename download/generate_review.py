#!/usr/bin/env python3
"""Generate Website Content & Code Review PDF for Royal Sabah Turf Club"""

import sys, os

PDF_SKILL_DIR = "/home/z/my-project/skills/pdf"
_scripts = os.path.join(PDF_SKILL_DIR, "scripts")
if _scripts not in sys.path:
    sys.path.insert(0, _scripts)

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, mm
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, Image, KeepTogether, CondPageBreak
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ━━ Font Registration ━━
pdfmetrics.registerFont(TTFont('LiberationSerif', '/usr/share/fonts/truetype/chinese/LiberationSerif-Regular.ttf'))
pdfmetrics.registerFont(TTFont('LiberationSerif-Bold', '/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Carlito', '/usr/share/fonts/truetype/english/Carlito-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Carlito-Bold', '/usr/share/fonts/truetype/english/Carlito-Bold.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'))
registerFontFamily('LiberationSerif', normal='LiberationSerif', bold='LiberationSerif-Bold')
registerFontFamily('Carlito', normal='Carlito', bold='Carlito-Bold')
registerFontFamily('DejaVuSans', normal='DejaVuSans', bold='DejaVuSans')

# ━━ Color Palette ━━
ACCENT       = colors.HexColor('#2092b8')
TEXT_PRIMARY  = colors.HexColor('#1e2021')
TEXT_MUTED    = colors.HexColor('#70777c')
BG_SURFACE   = colors.HexColor('#e0e5e9')
BG_PAGE      = colors.HexColor('#eef0f1')

TABLE_HEADER_COLOR = ACCENT
TABLE_HEADER_TEXT  = colors.white
TABLE_ROW_EVEN     = colors.white
TABLE_ROW_ODD      = BG_SURFACE

# ━━ Page Setup ━━
PAGE_W, PAGE_H = A4
LEFT_MARGIN = 1.0 * inch
RIGHT_MARGIN = 1.0 * inch
TOP_MARGIN = 0.8 * inch
BOTTOM_MARGIN = 0.8 * inch
AVAILABLE_W = PAGE_W - LEFT_MARGIN - RIGHT_MARGIN

OUTPUT_PATH = "/home/z/my-project/download/RSTC_Website_Review.pdf"

# ━━ Styles ━━
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    name='ReportTitle', fontName='LiberationSerif', fontSize=22,
    leading=28, alignment=TA_LEFT, textColor=ACCENT,
    spaceBefore=6, spaceAfter=6
)
h1_style = ParagraphStyle(
    name='H1', fontName='LiberationSerif', fontSize=18,
    leading=24, alignment=TA_LEFT, textColor=ACCENT,
    spaceBefore=18, spaceAfter=10
)
h2_style = ParagraphStyle(
    name='H2', fontName='LiberationSerif', fontSize=14,
    leading=20, alignment=TA_LEFT, textColor=TEXT_PRIMARY,
    spaceBefore=14, spaceAfter=8
)
h3_style = ParagraphStyle(
    name='H3', fontName='LiberationSerif', fontSize=12,
    leading=17, alignment=TA_LEFT, textColor=TEXT_PRIMARY,
    spaceBefore=10, spaceAfter=6
)
body_style = ParagraphStyle(
    name='Body', fontName='LiberationSerif', fontSize=10.5,
    leading=17, alignment=TA_JUSTIFY, textColor=TEXT_PRIMARY,
    spaceBefore=0, spaceAfter=6
)
body_left = ParagraphStyle(
    name='BodyLeft', fontName='LiberationSerif', fontSize=10.5,
    leading=17, alignment=TA_LEFT, textColor=TEXT_PRIMARY,
    spaceBefore=0, spaceAfter=4
)
bullet_style = ParagraphStyle(
    name='Bullet', fontName='LiberationSerif', fontSize=10.5,
    leading=17, alignment=TA_LEFT, textColor=TEXT_PRIMARY,
    leftIndent=20, bulletIndent=8, spaceBefore=2, spaceAfter=2
)
caption_style = ParagraphStyle(
    name='Caption', fontName='LiberationSerif', fontSize=9,
    leading=13, alignment=TA_CENTER, textColor=TEXT_MUTED,
    spaceBefore=3, spaceAfter=6
)
callout_style = ParagraphStyle(
    name='Callout', fontName='LiberationSerif', fontSize=10.5,
    leading=17, alignment=TA_LEFT, textColor=ACCENT,
    leftIndent=16, borderColor=ACCENT, borderWidth=0,
    borderPadding=6, spaceBefore=6, spaceAfter=6
)
header_cell_style = ParagraphStyle(
    name='HeaderCell', fontName='Carlito', fontSize=10,
    leading=14, alignment=TA_CENTER, textColor=TABLE_HEADER_TEXT
)
cell_style = ParagraphStyle(
    name='Cell', fontName='Carlito', fontSize=9.5,
    leading=14, alignment=TA_LEFT, textColor=TEXT_PRIMARY
)
cell_center = ParagraphStyle(
    name='CellCenter', fontName='Carlito', fontSize=9.5,
    leading=14, alignment=TA_CENTER, textColor=TEXT_PRIMARY
)
severity_high = ParagraphStyle(
    name='SevHigh', fontName='Carlito', fontSize=9.5,
    leading=14, alignment=TA_CENTER, textColor=colors.HexColor('#c0392b')
)
severity_med = ParagraphStyle(
    name='SevMed', fontName='Carlito', fontSize=9.5,
    leading=14, alignment=TA_CENTER, textColor=colors.HexColor('#e67e22')
)
severity_low = ParagraphStyle(
    name='SevLow', fontName='Carlito', fontSize=9.5,
    leading=14, alignment=TA_CENTER, textColor=colors.HexColor('#27ae60')
)

# ━━ Helper Functions ━━
def make_table(data, col_widths, h_align='CENTER'):
    t = Table(data, colWidths=col_widths, hAlign=h_align)
    style_cmds = [
        ('BACKGROUND', (0, 0), (-1, 0), TABLE_HEADER_COLOR),
        ('TEXTCOLOR', (0, 0), (-1, 0), TABLE_HEADER_TEXT),
        ('GRID', (0, 0), (-1, -1), 0.5, TEXT_MUTED),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ]
    for i in range(1, len(data)):
        bg = TABLE_ROW_ODD if i % 2 == 0 else TABLE_ROW_EVEN
        style_cmds.append(('BACKGROUND', (0, i), (-1, i), bg))
    t.setStyle(TableStyle(style_cmds))
    return t

def hr():
    """Horizontal rule"""
    t = Table([['']], colWidths=[AVAILABLE_W], rowHeights=[1])
    t.setStyle(TableStyle([
        ('LINEABOVE', (0, 0), (-1, 0), 0.5, ACCENT),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    return t

def bullet(text):
    return Paragraph('<bullet>&bull;</bullet> ' + text, bullet_style)

# ━━ Build Document ━━
doc = SimpleDocTemplate(
    OUTPUT_PATH, pagesize=A4,
    leftMargin=LEFT_MARGIN, rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN, bottomMargin=BOTTOM_MARGIN
)

story = []

# ════════════════════════════════════════════════════════════════
# SECTION 1: Executive Summary
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>Executive Summary</b>', title_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'This report presents a comprehensive content, code, and user experience review of the '
    'Royal Sabah Turf Club (RSTC) website located at '
    '<b>www.royalsabahturfclub.com.my</b>. The review was conducted on 7 June 2026 and '
    'evaluates the site across three critical dimensions: visual aesthetics and UI/UX design, '
    'front-end code quality and technical architecture, and content strategy and search engine '
    'optimisation. The site was analysed using automated browser tooling, performance profiling, '
    'source-code inspection, and visual screenshot comparison at both desktop and mobile viewports.',
    body_style
))
story.append(Spacer(1, 4))

story.append(Paragraph(
    'The RSTC website suffers from significant issues across all evaluated dimensions. The site '
    'appears to be built from a legacy Dreamweaver template circa 2015-2018 and has received only '
    'incremental updates since. The page load time measured at <b>4,193 ms</b> is well above the '
    'recommended 3-second threshold, the HTML contains <b>35 inline style attributes</b>, '
    '<b>13 of 21 images lack alt text</b>, and the page has <b>no meta description</b> for search '
    'engines. The mobile strategy relies on a JavaScript redirect to a separate mobile page, which '
    'is an outdated and error-prone approach. These findings indicate that a substantial modernisation '
    'effort is required to bring the website up to contemporary professional standards expected of a '
    'royal institution.',
    body_style
))

story.append(Spacer(1, 12))

# Key metrics callout table
metrics_data = [
    [Paragraph('<b>Key Metric</b>', header_cell_style),
     Paragraph('<b>Current Value</b>', header_cell_style),
     Paragraph('<b>Target Value</b>', header_cell_style),
     Paragraph('<b>Severity</b>', header_cell_style)],
    [Paragraph('Page Load Time', cell_style),
     Paragraph('4,193 ms', cell_center),
     Paragraph('< 3,000 ms', cell_center),
     Paragraph('High', severity_high)],
    [Paragraph('Meta Description', cell_style),
     Paragraph('Missing', cell_center),
     Paragraph('Present (150-160 chars)', cell_center),
     Paragraph('High', severity_high)],
    [Paragraph('Images Without Alt Text', cell_style),
     Paragraph('13 of 21 (62%)', cell_center),
     Paragraph('0 (100% coverage)', cell_center),
     Paragraph('High', severity_high)],
    [Paragraph('Inline Style Attributes', cell_style),
     Paragraph('35 instances', cell_center),
     Paragraph('< 5 instances', cell_center),
     Paragraph('Medium', severity_med)],
    [Paragraph('Mobile Responsiveness', cell_style),
     Paragraph('Separate mobile page (redirect)', cell_center),
     Paragraph('Single responsive codebase', cell_center),
     Paragraph('High', severity_high)],
    [Paragraph('Total HTTP Resources', cell_style),
     Paragraph('51 requests', cell_center),
     Paragraph('< 30 requests', cell_center),
     Paragraph('Medium', severity_med)],
    [Paragraph('Google AdSense on Official Site', cell_style),
     Paragraph('Present', cell_center),
     Paragraph('Remove', cell_center),
     Paragraph('Medium', severity_med)],
]
story.append(Spacer(1, 6))
story.append(make_table(metrics_data, [AVAILABLE_W*0.30, AVAILABLE_W*0.25, AVAILABLE_W*0.28, AVAILABLE_W*0.17]))
story.append(Paragraph('<b>Table 1.</b> Key Performance and Quality Metrics Summary', caption_style))

story.append(Spacer(1, 18))

# ════════════════════════════════════════════════════════════════
# SECTION 2: Content Review
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>1. Content Review</b>', h1_style))
story.append(hr())
story.append(Spacer(1, 8))

# 1.1 Homepage Content
story.append(Paragraph('<b>1.1 Homepage Content Analysis</b>', h2_style))

story.append(Paragraph(
    'The homepage content is remarkably sparse for an organisation of this stature. The entire '
    'body text consists of just two sentences: "On this beautiful Land Below the Wind sits the '
    'Tambalang Racecourse at Tuaran" and "Watched over by Mount Kinabalu, the Sport of Kings '
    'continues to thrive well for over a century since 1908." While these sentences are evocative '
    'and culturally resonant, they provide virtually no informational value to a visitor seeking '
    'practical details about race schedules, betting procedures, membership, or venue facilities. '
    'A homepage for a turf club should serve as the primary gateway to all essential services and '
    'information, not merely a poetic tagline.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The welcome section heading reads "WELCOME TO RSTC" which is generic and lacks differentiation. '
    'There is no introductory paragraph explaining what RSTC is, no highlight of upcoming race meetings, '
    'no call-to-action directing visitors to key services, and no indication of the club\'s prestige '
    'as a royal institution. The absence of a compelling value proposition above the fold means that '
    'first-time visitors have little reason to explore further. This represents a missed opportunity '
    'to establish authority, trust, and engagement from the moment a user lands on the page.',
    body_style
))

# 1.2 Navigation & Information Architecture
story.append(Spacer(1, 10))
story.append(Paragraph('<b>1.2 Navigation and Information Architecture</b>', h2_style))

story.append(Paragraph(
    'The navigation bar contains 10 top-level items: Home, Visit Us, Racing, Race Analysis, Results, '
    'Breeding, Apprentice Program, About Us, Photo Gallery, and Commingling. While the categories are '
    'generally logical for a turf club website, several issues undermine the navigation\'s effectiveness. '
    'First, the "Commingling" label is a technical betting industry term that most casual visitors will '
    'not understand; a label like "International Betting" or "Pari-Mutuel Pooling" would be more '
    'accessible. Second, "Apprentice Program" occupies a top-level slot despite having only a single '
    'sub-item, inflating the navigation bar unnecessarily. This item would be better placed under '
    '"About Us" or "Racing" as a sub-item, freeing horizontal space and reducing cognitive load.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'Third, the dropdown menus use paragraph tags (&lt;p&gt;) wrapped around anchor tags, which is '
    'semantically incorrect and creates accessibility problems for screen readers. Dropdown content '
    'should use proper list structures (&lt;ul&gt;/&lt;li&gt;) for correct semantic markup. Fourth, several '
    'navigation links point to PDF files directly (e.g., Race Analysis links to SLTC.pdf and PRTC.pdf, '
    'Commingling links to three separate PDFs). Opening PDFs without warning disorients users and '
    'breaks the browsing flow. These should be converted to proper HTML pages with embedded PDF '
    'viewers or clearly marked as downloadable documents with file size indicators.',
    body_style
))

# 1.3 SEO
story.append(Spacer(1, 10))
story.append(Paragraph('<b>1.3 Search Engine Optimisation (SEO)</b>', h2_style))

story.append(Paragraph(
    'The SEO profile of the RSTC website is critically deficient. The most glaring omission is the '
    'complete absence of a meta description tag, which means search engines will auto-generate '
    'snippets from page content, typically resulting in unflattering or irrelevant text in search '
    'results. There are no Open Graph tags (og:title, og:description, og:image) for social media '
    'sharing, meaning any link shared on Facebook, WhatsApp, or Twitter will display without a '
    'proper preview card. The page title is simply "Royal Sabah Turf Club" without any descriptive '
    'qualifier; a title like "Royal Sabah Turf Club | Horse Racing in Sabah, Malaysia" would be '
    'far more effective for both SEO and user recognition.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'Additionally, 62% of images on the page (13 out of 21) lack alt text attributes, which hurts '
    'both accessibility and image search rankings. The heading structure uses only H2 tags for section '
    'titles, with no H1 tag on the page, violating the best practice of having a single descriptive '
    'H1 heading per page. The URL structure uses flat file names (index.html, rules.html, etc.) rather '
    'than descriptive slugs (e.g., /racing/rules, /visit/tambalang-racecourse), which reduces '
    'keyword relevance in search results. Finally, there is no structured data (JSON-LD schema) for '
    'the organisation, which would enable rich snippets in Google search results showing the club\'s '
    'address, phone number, and event schedules directly in the search listing.',
    body_style
))

story.append(Spacer(1, 18))

# ════════════════════════════════════════════════════════════════
# SECTION 3: Code Quality Review
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>2. Code Quality Review</b>', h1_style))
story.append(hr())
story.append(Spacer(1, 8))

# 2.1 HTML Structure
story.append(Paragraph('<b>2.1 HTML Structure and Semantics</b>', h2_style))

story.append(Paragraph(
    'The HTML source code reveals a website built using Adobe Dreamweaver\'s single-page template, '
    'as evidenced by the Adobe Edge Web Fonts script and the template CSS file name '
    '"singlePageTemplate.css." This heritage is visible throughout the codebase in the form of '
    'excessive inline styles, deprecated HTML practices, and a general lack of semantic markup. '
    'The page contains 35 inline style attributes, mixing presentation with content in a way that '
    'makes maintenance difficult and violates the separation of concerns principle. Elements like '
    '&lt;br&gt; tags are used extensively for spacing instead of CSS margins, and the align="center" '
    'attribute appears multiple times despite being deprecated in HTML5.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The HTML structure itself is poorly organised. The navigation dropdown menus wrap links in '
    '<p> tags inside &lt;div class="dropdown-content"&gt;, when they should use &lt;ul&gt;/&lt;li&gt; for semantic '
    'correctness. The slideshow section contains a mix of relative and absolute image paths (e.g., '
    '"images/gif/uma.jpeg" vs. "/images/gif/2.png?v=2"), and some slides use fully qualified URLs '
    'while others use relative paths, indicating inconsistent development practices. The slideshow '
    'counter shows "1 / 6" but there are actually 8 slides, revealing a copy-paste error that was '
    'never corrected. Multiple sections of code are commented out rather than removed, leaving '
    ' vestigial markup that adds page weight and confusion.',
    body_style
))

# 2.2 CSS
story.append(Spacer(1, 10))
story.append(Paragraph('<b>2.2 CSS and Styling Approach</b>', h2_style))

story.append(Paragraph(
    'The website uses a single CSS file (singlePageTemplate.css) supplemented by extensive inline '
    'styles throughout the HTML. This approach is characteristic of Dreamweaver-generated websites '
    'from the mid-2010s and presents several significant problems. The reliance on inline styles '
    'means that any visual change requires editing the HTML itself rather than updating a central '
    'stylesheet, dramatically increasing maintenance effort and the risk of inconsistency. The CSS '
    'file loads a font from the deprecated Adobe Edge Web Fonts service (use.edgefonts.net), which '
    'has been superseded by Adobe Fonts and may face deprecation, creating a future compatibility risk.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The absence of a CSS preprocessor (Sass, Less) or utility framework (Tailwind CSS) means that '
    'the stylesheet likely contains significant redundancy and lacks modern features like CSS custom '
    'properties, flexbox, and grid layouts. The overlay effect used on the Racing, Apprentice, and '
    'Breeding buttons suggests some CSS3 knowledge, but the overall approach is dated. There is no '
    'evidence of CSS minification, bundling, or cache-busting beyond the "?v=2" query strings '
    'manually appended to some image URLs. A modern CSS architecture would separate layout, '
    'components, and utilities into distinct modules and leverage CSS custom properties for theming.',
    body_style
))

# 2.3 JavaScript
story.append(Spacer(1, 10))
story.append(Paragraph('<b>2.3 JavaScript and Interactivity</b>', h2_style))

story.append(Paragraph(
    'The JavaScript on the page is minimal and predominantly inline. The carousel/slideshow is '
    'implemented with a hand-written script using inline onclick handlers (plusSlides, currentSlide), '
    'which is an outdated pattern that mixes behaviour with markup. Modern best practice uses '
    'addEventListener for separation of concerns and allows for easier debugging and testing. The '
    'carousel has no auto-advance functionality, no touch/swipe support for mobile devices, no '
    'keyboard accessibility (arrow key navigation), and no CSS transition animations between slides. '
    'Each slide simply toggles between display:none and display:block, resulting in an abrupt, '
    'jarring transition that feels unpolished.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The mobile detection script at the top of the page uses window.innerWidth <= 700 to redirect '
    'to a separate mobile page (index-m.html), which is a fundamentally flawed approach. This method '
    'fails when users resize their desktop browser, when devices have high-DPI screens that report '
    'logical widths differently, and when JavaScript is disabled. The redirect also uses an HTTP URL '
    'even when the original page is served over HTTPS, creating a mixed content security issue and '
    'potential redirect loop. A modern responsive design eliminates the need for separate mobile pages '
    'entirely by using CSS media queries and a single codebase that adapts to any viewport size.',
    body_style
))

# 2.4 Performance
story.append(Spacer(1, 10))
story.append(Paragraph('<b>2.4 Performance and Loading</b>', h2_style))

story.append(Paragraph(
    'The measured page load time of 4,193 ms exceeds the recommended maximum of 3 seconds, with '
    '51 total HTTP resource requests. The page loads multiple third-party scripts that add latency: '
    'Google Tag Manager, Google Analytics, Google AdSense (two scripts including the managed ad '
    'implementation), Cloudflare Web Analytics, and the Adobe Edge Fonts loader. Each of these '
    'represents a network request to an external domain, and the cumulative effect is significant. '
    'The inclusion of Google AdSense on an official institutional website is particularly questionable; '
    'it introduces privacy concerns, visual clutter, and performance overhead for negligible revenue '
    'relative to the club\'s operating budget.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The aggressive cache-busting meta tags (&lt;meta http-equiv="Cache-Control" content="no-cache, '
    'no-store, must-revalidate">) force the browser to re-download all assets on every visit, '
    'preventing any benefit from browser caching. This is likely a development-era workaround that '
    'was never removed before production deployment. Additionally, the HTML5 shim and Respond.js '
    'polyfill for Internet Explorer 8 support are still loaded, despite IE8 having negligible market '
    'share since 2016. These scripts add unnecessary weight and should be removed. The favicon uses '
    'the full logo image rather than an optimised 16x16 or 32x32 ICO/PNG file, which wastes '
    'bandwidth on every page load for an icon displayed at a tiny size.',
    body_style
))

# Code Issues Table
story.append(Spacer(1, 12))
code_issues = [
    [Paragraph('<b>Issue</b>', header_cell_style),
     Paragraph('<b>Location</b>', header_cell_style),
     Paragraph('<b>Impact</b>', header_cell_style),
     Paragraph('<b>Severity</b>', header_cell_style)],
    [Paragraph('Inline onclick handlers', cell_style),
     Paragraph('Carousel navigation', cell_style),
     Paragraph('Accessibility, maintainability', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('No meta description', cell_style),
     Paragraph('Head section', cell_style),
     Paragraph('SEO, search result quality', cell_style),
     Paragraph('High', severity_high)],
    [Paragraph('HTTP redirect in mobile detection', cell_style),
     Paragraph('Inline script in head', cell_style),
     Paragraph('Security (mixed content)', cell_style),
     Paragraph('High', severity_high)],
    [Paragraph('35 inline style attributes', cell_style),
     Paragraph('Throughout HTML body', cell_style),
     Paragraph('Maintainability, consistency', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('No-cache meta tags in production', cell_style),
     Paragraph('Head section', cell_style),
     Paragraph('Performance (repeat visits)', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('IE8 polyfills still loaded', cell_style),
     Paragraph('Head conditional comments', cell_style),
     Paragraph('Unnecessary page weight', cell_style),
     Paragraph('Low', severity_low)],
    [Paragraph('Slideshow counter mismatch (1/6 vs 8 slides)', cell_style),
     Paragraph('Carousel section', cell_style),
     Paragraph('User confusion, unprofessional', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('Deprecated Adobe Edge Web Fonts', cell_style),
     Paragraph('Head script tag', cell_style),
     Paragraph('Future compatibility risk', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('Google AdSense on institutional site', cell_style),
     Paragraph('Head + injected ad elements', cell_style),
     Paragraph('Privacy, performance, credibility', cell_style),
     Paragraph('Medium', severity_med)],
    [Paragraph('Full-size logo as favicon', cell_style),
     Paragraph('Favicon link tag', cell_style),
     Paragraph('Performance, visual quality', cell_style),
     Paragraph('Low', severity_low)],
    [Paragraph('Mixed relative/absolute image paths', cell_style),
     Paragraph('Carousel slides', cell_style),
     Paragraph('Maintainability, potential 404s', cell_style),
     Paragraph('Medium', severity_med)],
]
story.append(make_table(code_issues, [AVAILABLE_W*0.30, AVAILABLE_W*0.23, AVAILABLE_W*0.28, AVAILABLE_W*0.19]))
story.append(Paragraph('<b>Table 2.</b> Code Quality Issues Inventory', caption_style))

story.append(Spacer(1, 18))

# ════════════════════════════════════════════════════════════════
# SECTION 4: UI/UX Review
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>3. UI/UX Design Review</b>', h1_style))
story.append(hr())
story.append(Spacer(1, 8))

# 3.1 Visual Design
story.append(Paragraph('<b>3.1 Visual Design and Aesthetics</b>', h2_style))

story.append(Paragraph(
    'The visual design of the RSTC website reflects its Dreamweaver template origins and has not '
    'been updated to align with contemporary web design standards. The page lacks a cohesive design '
    'system with consistent spacing, typography scale, and colour palette. The carousel images are '
    'full-width with no overlay text or calls-to-action, making them large but functionally inert. '
    'The transition between slides is an abrupt display toggle with no animation, creating a jarring '
    'user experience. The carousel navigation dots are small and lack hover states, reducing '
    'discoverability and clickability.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The RaceCard section uses full-width banner images for each card link (RSTC, HKJC, Selangor, '
    'Australia/Perth), stacked vertically with &lt;br&gt; tags for spacing. This creates a visually '
    'monotonous and mobile-unfriendly layout that requires excessive vertical scrolling. On mobile '
    'devices, these banners would each occupy the full viewport width, forcing users to scroll past '
    'four large images just to reach the content below. A grid-based card layout would be more '
    'space-efficient and visually appealing. The three interactive overlay buttons (Racing, Apprentice, '
    'Breeding) are a good concept but are executed with dated hover effects and lack visual polish. '
    'The social media icons in the footer use image files rather than a modern icon font or SVG '
    'sprite, resulting in additional HTTP requests and blurry rendering on high-DPI displays.',
    body_style
))

# 3.2 Mobile
story.append(Spacer(1, 10))
story.append(Paragraph('<b>3.2 Mobile Experience</b>', h2_style))

story.append(Paragraph(
    'The mobile experience is fundamentally compromised by the decision to maintain a separate mobile '
    'site (index-m.html) rather than implementing a responsive design. This approach was common in '
    'the early 2010s but has been superseded by responsive web design for several compelling reasons. '
    'First, maintaining two separate codebases doubles the development and maintenance effort while '
    'introducing inconsistencies between desktop and mobile content. Second, the JavaScript-based '
    'redirect is unreliable; it fails when JavaScript is disabled, when the page is loaded in a '
    'non-browser context (e.g., social media crawler), and when users resize their browser window. '
    'Third, the redirect sends users to an HTTP URL, creating a security vulnerability and potential '
    'SEO issues with duplicate content across different URLs.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'Even if the separate mobile site were well-implemented, the 700px breakpoint threshold is '
    'arbitrary and does not align with modern device categories. Tablets in portrait mode (768px wide) '
    'would receive the desktop site, which is likely too wide for comfortable viewing, while small '
    'desktop windows would be incorrectly redirected to the mobile version. A responsive design using '
    'CSS media queries with appropriate breakpoints (e.g., 480px for phones, 768px for tablets, '
    '1024px for desktops) would provide a far superior and more reliable experience across all devices '
    'with a single codebase.',
    body_style
))

# 3.3 Accessibility
story.append(Spacer(1, 10))
story.append(Paragraph('<b>3.3 Accessibility</b>', h2_style))

story.append(Paragraph(
    'The website has significant accessibility deficiencies that would likely fail WCAG 2.1 Level AA '
    'compliance. The most critical issue is the 62% of images lacking alt text, which makes the site '
    'largely unusable for screen reader users. The carousel has no ARIA labels, no keyboard navigation '
    'support, and no pause/play controls, which violates WCAG 2.1 Success Criterion 2.2.2 (Pause, '
    'Stop, Hide). The dropdown navigation menus rely on hover states without keyboard-accessible '
    'alternatives, making them inaccessible to users who navigate with keyboards or assistive technology. '
    'The social media icon links have empty alt attributes (alt=""), which hides the link purpose from '
    'screen readers, and there are no aria-label attributes to compensate.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The colour contrast of text against backgrounds has not been verified against WCAG AA requirements '
    '(minimum 4.5:1 ratio for normal text). The overlay text on the interactive buttons (Racing, '
    'Apprentice, Breeding) appears as white text on semi-transparent dark backgrounds, which may not '
    'meet contrast requirements depending on the background image beneath. The page uses &lt;br&gt; tags for '
    'layout spacing rather than semantic markup, which can confuse screen readers that interpret line '
    'breaks as content boundaries. Finally, the focus indicators for keyboard navigation appear to use '
    'browser defaults rather than custom, high-visibility focus styles, making it difficult for keyboard '
    'users to track their position on the page.',
    body_style
))

story.append(Spacer(1, 18))

# ════════════════════════════════════════════════════════════════
# SECTION 5: Recommendations
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>4. Recommendations for Improvement</b>', h1_style))
story.append(hr())
story.append(Spacer(1, 8))

# 4.1 Aesthetics
story.append(Paragraph('<b>4.1 Aesthetics and Visual Design</b>', h2_style))

story.append(Paragraph(
    'A comprehensive visual redesign should establish a professional design system that reflects the '
    'prestige of a royal institution. The colour palette should be rooted in deep greens and golds '
    'that evoke the racing tradition and the club\'s royal patronage, with neutral tones for text '
    'and backgrounds. Typography should use a maximum of two typeface families: a serif font for '
    'headings (e.g., Playfair Display or Cormorant Garamond) to convey tradition and authority, and '
    'a clean sans-serif for body text (e.g., Inter or DM Sans) for readability. All text should use '
    'a consistent modular scale (e.g., 1.25 ratio) for font sizes to create visual harmony.',
    body_style
))
story.append(Spacer(1, 4))

story.append(Paragraph(
    'The carousel should be replaced with a modern hero section featuring a high-quality background '
    'image or video with overlaid text and a prominent call-to-action button. If a carousel is '
    'retained, it should include CSS transition animations (fade or slide), auto-advance with a '
    'pause button, touch/swipe support for mobile, keyboard navigation with arrow keys, and ARIA '
    'labels for accessibility. The RaceCard links should be redesigned as a responsive card grid '
    '(2x2 on desktop, stacked on mobile) with consistent card styling, hover effects, and clear '
    'visual hierarchy. The footer should include the club\'s contact information, physical address, '
    'operating hours, and a structured sitemap, not just social media links.',
    body_style
))

# 4.2 UI/UX
story.append(Spacer(1, 10))
story.append(Paragraph('<b>4.2 UI/UX Improvements</b>', h2_style))

story.append(Paragraph(
    'The navigation should be restructured to reduce top-level items to 6-7 maximum, consolidating '
    '"Apprentice Program" under "About Us" and renaming "Commingling" to a user-friendly label. A '
    'hamburger menu should replace the full navigation bar on mobile devices, with smooth slide-in '
    'animation and touch-friendly dropdown targets of at least 44x44 pixels. Breadcrumb navigation '
    'should be added to interior pages to provide context and improve wayfinding. A persistent "Next '
    'Race Day" callout or countdown timer should appear prominently on the homepage, providing '
    'immediate value to returning visitors and creating urgency for new visitors.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The separate mobile site should be deprecated in favour of a single responsive codebase using '
    'CSS media queries with breakpoints at 480px, 768px, and 1024px. All interactive elements should '
    'meet the 44x44 pixel minimum touch target size recommended by Apple and WCAG. Page transitions '
    'and loading states should use skeleton screens or progressive loading to reduce perceived latency. '
    'A "dark mode" option could enhance the premium feel of the site while improving readability in '
    'low-light environments, which is particularly relevant for users checking race results in the '
    'evening. Search functionality should be added to help visitors find specific race results, '
    'horses, or rules without navigating through multiple menu levels.',
    body_style
))

# 4.3 Technical
story.append(Spacer(1, 10))
story.append(Paragraph('<b>4.3 Technical and Efficiency Improvements</b>', h2_style))

story.append(Paragraph(
    'The website should be rebuilt on a modern technology stack. The recommended approach is a '
    'static site generator (such as Next.js, Astro, or Hugo) that provides server-side rendering '
    'for SEO, automatic image optimisation, and built-in performance features. All images should be '
    'converted to WebP format with AVIF fallbacks, and responsive image sets should be generated '
    'using the srcset attribute to serve appropriately sized images for each viewport. The CSS should '
    'be refactored into a utility-first framework (Tailwind CSS) or a well-organised component-based '
    'system using CSS custom properties for theming. All inline styles should be eliminated and '
    'replaced with proper class-based styling.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The Google AdSense scripts should be removed from this institutional website, as they create '
    'privacy concerns, visual clutter, and performance overhead that is inappropriate for a royal '
    'club\'s official web presence. The no-cache meta tags should be replaced with proper cache '
    'control headers set at the server level, with versioned or hashed filenames for cache-busting. '
    'The IE8 polyfills should be removed immediately. The favicon should be replaced with a properly '
    'sized ICO file (16x16 and 32x32). A Content Security Policy header should be added to prevent '
    'cross-site scripting attacks, and all resources should be loaded over HTTPS. Finally, critical '
    'CSS should be inlined in the &lt;head&gt; and non-critical stylesheets should be loaded asynchronously '
    'to eliminate render-blocking resources.',
    body_style
))

# Priority roadmap table
story.append(Spacer(1, 12))
roadmap = [
    [Paragraph('<b>Phase</b>', header_cell_style),
     Paragraph('<b>Timeline</b>', header_cell_style),
     Paragraph('<b>Key Actions</b>', header_cell_style),
     Paragraph('<b>Impact</b>', header_cell_style)],
    [Paragraph('<b>1. Quick Wins</b>', cell_style),
     Paragraph('1-2 weeks', cell_center),
     Paragraph('Remove AdSense, add meta description, fix alt text, remove IE8 polyfills, '
                'fix carousel counter, remove no-cache tags, optimise favicon', cell_style),
     Paragraph('Immediate SEO and performance gains', cell_style)],
    [Paragraph('<b>2. Responsive Overhaul</b>', cell_style),
     Paragraph('4-8 weeks', cell_center),
     Paragraph('Implement responsive CSS, deprecate mobile redirect, add hamburger nav, '
                'redesign card layout, add touch/swipe carousel, keyboard navigation', cell_style),
     Paragraph('Mobile usability transformation', cell_style)],
    [Paragraph('<b>3. Visual Redesign</b>', cell_style),
     Paragraph('6-10 weeks', cell_center),
     Paragraph('New design system, professional typography, hero section, card grid, '
                'consistent colour palette, modern carousel, footer enrichment', cell_style),
     Paragraph('Professional brand elevation', cell_style)],
    [Paragraph('<b>4. Platform Migration</b>', cell_style),
     Paragraph('8-16 weeks', cell_center),
     Paragraph('Migrate to Next.js/Astro, implement SSR, image optimisation pipeline, '
                'structured data (JSON-LD), Open Graph tags, CSP headers, analytics cleanup', cell_style),
     Paragraph('Long-term maintainability and performance', cell_style)],
]
story.append(make_table(roadmap, [AVAILABLE_W*0.15, AVAILABLE_W*0.12, AVAILABLE_W*0.45, AVAILABLE_W*0.28]))
story.append(Paragraph('<b>Table 3.</b> Recommended Implementation Roadmap', caption_style))

story.append(Spacer(1, 18))

# ════════════════════════════════════════════════════════════════
# SECTION 6: Conclusion
# ════════════════════════════════════════════════════════════════
story.append(Paragraph('<b>5. Conclusion</b>', h1_style))
story.append(hr())
story.append(Spacer(1, 8))

story.append(Paragraph(
    'The Royal Sabah Turf Club website requires substantial modernisation to meet the professional '
    'standards expected of a royal institution in 2026. The current site suffers from three '
    'intertwined problems: a dated visual design rooted in a Dreamweaver template, a technical '
    'architecture that relies on outdated practices (separate mobile site, inline styles, IE8 '
    'polyfills, no-cache meta tags), and a content strategy that provides minimal informational '
    'value to visitors. The combined effect is a website that fails to reflect the prestige and '
    'heritage of an organisation that has been operating since 1908.',
    body_style
))
story.append(Spacer(1, 4))
story.append(Paragraph(
    'The good news is that the core content structure and navigation categories are fundamentally '
    'sound; the issues lie in execution rather than strategy. A phased approach, starting with the '
    'quick wins outlined in Phase 1 (which can be completed in 1-2 weeks with minimal effort), will '
    'deliver immediate improvements in SEO and performance while laying the groundwork for the more '
    'substantial responsive overhaul and visual redesign in subsequent phases. The ultimate goal '
    'should be a modern, responsive, accessible website that honours the club\'s 118-year heritage '
    'while providing the digital experience that visitors, members, and stakeholders expect in the '
    'modern era. With a disciplined implementation of the four-phase roadmap, the RSTC website can '
    'be transformed from its current state into a professional digital asset worthy of its royal '
    'title.',
    body_style
))

# ━━ Build ━━
doc.build(story)
print(f"PDF generated: {OUTPUT_PATH}")
