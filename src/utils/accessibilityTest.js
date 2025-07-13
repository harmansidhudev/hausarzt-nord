// Simple accessibility testing utility
export const runAccessibilityTests = () => {
  const issues = [];
  
  // Check for missing alt attributes on images
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push({
        type: 'error',
        element: 'img',
        index,
        message: 'Image missing alt attribute or aria-label',
        recommendation: 'Add descriptive alt text or aria-label'
      });
    }
  });

  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 0;
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1));
    if (level > previousLevel + 1) {
      issues.push({
        type: 'warning',
        element: heading.tagName,
        index,
        message: `Heading hierarchy skipped from h${previousLevel} to h${level}`,
        recommendation: 'Maintain proper heading hierarchy (h1 -> h2 -> h3, etc.)'
      });
    }
    previousLevel = level;
  });

  // Check for form labels
  const formInputs = document.querySelectorAll('input, textarea, select');
  formInputs.forEach((input, index) => {
    const id = input.id;
    const label = document.querySelector(`label[for="${id}"]`);
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push({
        type: 'error',
        element: input.tagName,
        index,
        message: 'Form input missing label',
        recommendation: 'Add label, aria-label, or aria-labelledby'
      });
    }
  });

  // Check for sufficient color contrast (basic check)
  const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  textElements.forEach((element, index) => {
    const style = window.getComputedStyle(element);
    const color = style.color;
    const backgroundColor = style.backgroundColor;
    
    // Basic check for light text on light background
    if (color.includes('rgb(255, 255, 255)') || color.includes('white')) {
      if (backgroundColor.includes('rgb(255, 255, 255)') || backgroundColor.includes('white')) {
        issues.push({
          type: 'warning',
          element: element.tagName,
          index,
          message: 'Potential contrast issue: white text on white background',
          recommendation: 'Check color contrast ratio'
        });
      }
    }
  });

  // Check for proper button and link text
  const buttons = document.querySelectorAll('button, a[role="button"]');
  buttons.forEach((button, index) => {
    const text = button.textContent.trim();
    if (text.length < 3 && !button.getAttribute('aria-label')) {
      issues.push({
        type: 'warning',
        element: button.tagName,
        index,
        message: 'Button has very short or no text',
        recommendation: 'Add descriptive text or aria-label'
      });
    }
  });

  // Check for skip links
  const skipLinks = document.querySelectorAll('a[href^="#"], .skip-link');
  if (skipLinks.length === 0) {
    issues.push({
      type: 'info',
      element: 'document',
      message: 'No skip links found',
      recommendation: 'Consider adding skip links for keyboard navigation'
    });
  }

  return issues;
};

export const logAccessibilityIssues = (issues) => {
  console.group('🔍 Accessibility Test Results');
  
  if (issues.length === 0) {
    console.log('✅ No accessibility issues found!');
  } else {
    console.log(`Found ${issues.length} potential accessibility issues:`);
    
    const errors = issues.filter(issue => issue.type === 'error');
    const warnings = issues.filter(issue => issue.type === 'warning');
    const info = issues.filter(issue => issue.type === 'info');
    
    if (errors.length > 0) {
      console.group('❌ Errors:');
      errors.forEach(issue => {
        console.log(`- ${issue.message} (${issue.element})`);
        console.log(`  Recommendation: ${issue.recommendation}`);
      });
      console.groupEnd();
    }
    
    if (warnings.length > 0) {
      console.group('⚠️ Warnings:');
      warnings.forEach(issue => {
        console.log(`- ${issue.message} (${issue.element})`);
        console.log(`  Recommendation: ${issue.recommendation}`);
      });
      console.groupEnd();
    }
    
    if (info.length > 0) {
      console.group('ℹ️ Info:');
      info.forEach(issue => {
        console.log(`- ${issue.message}`);
        console.log(`  Recommendation: ${issue.recommendation}`);
      });
      console.groupEnd();
    }
  }
  
  console.groupEnd();
}; 