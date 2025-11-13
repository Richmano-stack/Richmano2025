declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    [key: string]: any;
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
