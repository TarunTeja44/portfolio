# Semantic HTML & SEO Quality Audit Guide

This guide ensures code structure complies with HTML5 semantic standards, SEO best practices, and layout stability rules.

---

## 1. HTML5 Landmark Structure

Ensure the page layout adheres to standard semantic nesting:

```html
<body>
  <!-- Global site header -->
  <header>
    <nav aria-label="Main Navigation">
      <!-- Links -->
    </nav>
  </header>

  <!-- Main unique page content -->
  <main id="main-content">
    <h1>Dashboard Overview</h1>
    
    <section aria-labelledby="section-stats">
      <h2 id="section-stats">Live Traffic Statistics</h2>
      <!-- Content -->
    </section>

    <aside aria-label="Incident Alerts">
      <h2>Recent Incident Feed</h2>
      <!-- Content -->
    </aside>
  </main>

  <!-- Global footer -->
  <footer>
    <!-- Footer links -->
  </footer>
</body>
```

---

## 2. SEO & Head Meta Integrity

- Include meaningful `<title>` tag with page title and application brand.
- Add `<meta name="description" content="..." />` describing page contents succinctly.
- Include OpenGraph metadata (`og:title`, `og:description`, `og:image`).
- Verify proper canonical URL links.
- Avoid Cumulative Layout Shift (CLS) by explicitly specifying dimensions (`width`, `height`, or `aspect-ratio`) for images and map canvases.
