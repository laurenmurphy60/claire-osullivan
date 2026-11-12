import { BaseballMark, Button } from "@/design-system";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-header">
      <BaseballMark className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 text-blue-500/10" />
      <div className="container-page relative">
        <p className="type-script">Swing and a miss.</p>
        <h1 className="type-display mt-4 text-h1 text-white">
          Page <span className="text-ice-300">not found</span>
        </h1>
        <div className="mt-10">
          <Button href="/" arrow>
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
