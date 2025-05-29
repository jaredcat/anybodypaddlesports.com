/**
 * Cal.com TypeScript Declarations
 */

export interface CalConfig {
  layout?: 'month_view' | 'week_view' | 'column_view';
  hideEventTypeDetails?: boolean;
  origin?: string;
}

export interface CalUIConfig {
  hideEventTypeDetails?: boolean;
  layout?: string;
  theme?: 'light' | 'dark' | 'auto';
  cssVarsPerTheme?: {
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
}

export interface CalNamespace {
  (instruction: string, config?: any): void;
}

export interface CalInstance {
  (instruction: string, ...args: any[]): void;
  ns: Record<string, CalNamespace>;
  loaded?: boolean;
  q?: any[];
}

declare global {
  interface Window {
    Cal: CalInstance;
  }
}

export interface CalEmbedManagerInterface {
  initialize(): void;
  initializeNamespace(calLink: string): string | null;
  setupBookingButton(button: HTMLElement): boolean;
  preloadNamespaces(calLinks: string[]): void;
  isReady(): boolean;
}
