/**
 * Cal.com Embed Integration
 * Handles Cal.com booking system integration with proper namespacing
 */

import type {
  CalConfig,
  CalEmbedManagerInterface,
  CalUIConfig,
} from '@/types/cal';

class CalEmbedManager implements CalEmbedManagerInterface {
  private initialized = false;
  private initializedNamespaces = new Set<string>();

  /**
   * Initialize Cal.com embed system
   */
  public initialize(): void {
    if (this.initialized) return;

    // Official Cal.com embed loader
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    this.initialized = true;
    console.log('Cal.com embed system initialized');
  }

  /**
   * Initialize a specific namespace for a cal link
   */
  public initializeNamespace(calLink: string): string | null {
    if (!this.initialized) {
      this.initialize();
    }

    // Extract namespace from cal link (e.g., "paddlesports/event-name" -> "event-name")
    const namespace = calLink.split('/').pop();

    if (!namespace) {
      console.error('Could not extract namespace from cal link:', calLink);
      return null;
    }

    if (!this.initializedNamespaces.has(namespace)) {
      console.log(`Initializing Cal.com namespace: ${namespace}`);

      // Initialize the namespace
      const config: CalConfig = {
        origin: 'https://cal.com',
      };
      window.Cal('init', namespace, config);

      // Configure UI for this namespace
      const uiConfig: CalUIConfig = {
        hideEventTypeDetails: false,
        layout: 'column_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#6ec1e4' },
          dark: { 'cal-brand': '#6ec1e4' },
        },
      };
      window.Cal.ns[namespace]('ui', uiConfig);

      this.initializedNamespaces.add(namespace);
      console.log(`Cal.com namespace "${namespace}" initialized`);
    }

    return namespace;
  }

  /**
   * Setup booking button for Cal.com native handling
   */
  public setupBookingButton(button: HTMLElement): boolean {
    const calLink = button.getAttribute('data-cal-link');

    if (!calLink) {
      console.warn('No cal-link found on button');
      return false;
    }

    try {
      // Initialize the namespace
      const namespace = this.initializeNamespace(calLink);

      if (!namespace) {
        throw new Error('Failed to initialize namespace');
      }

      // Set the required data attributes for Cal.com's native handling
      button.setAttribute('data-cal-link', calLink);
      button.setAttribute('data-cal-namespace', namespace);
      button.setAttribute(
        'data-cal-config',
        '{"layout":"column_view","theme":"auto"}',
      );

      console.log(
        `Booking button setup complete for: ${calLink} (namespace: ${namespace})`,
      );
      return true;
    } catch (error) {
      console.warn('Failed to setup Cal.com button, adding fallback:', error);

      // Add fallback click handler
      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(`https://cal.com/${calLink}`, '_blank');
      });

      return false;
    }
  }

  /**
   * Preload namespaces for multiple cal links
   */
  public preloadNamespaces(calLinks: string[]): void {
    calLinks.forEach((calLink) => {
      if (calLink) {
        this.initializeNamespace(calLink);
      }
    });
  }

  /**
   * Check if Cal.com is ready
   */
  public isReady(): boolean {
    return this.initialized && typeof window.Cal !== 'undefined';
  }
}

// Export singleton instance
export const calEmbedManager = new CalEmbedManager();
