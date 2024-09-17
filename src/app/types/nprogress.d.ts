declare module "nprogress" {
  interface NProgressOptions {
    minimum?: number;
    easing?: string;
    speed?: number;
    trickle?: boolean;
    trickleSpeed?: number;
    showSpinner?: boolean;
    parent?: string;
    template?: string;
  }

  interface NProgress {
    start: () => NProgress;
    done: (force?: boolean) => NProgress;
    inc: (amount?: number) => NProgress;
    configure: (options: NProgressOptions) => NProgress;
    set: (n: number) => NProgress;
    status: null | number;
  }

  const nprogress: NProgress;
  export default nprogress;
}
