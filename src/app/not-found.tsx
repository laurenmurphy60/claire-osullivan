import { Button } from "@/design-system";

export default function NotFound() {
  return (
    <section className="tone-dark tone-deep relative flex min-h-[80svh] items-center overflow-hidden pt-header">
      <div className="container-page relative">
        <p className="type-script text-muted">Swing and a miss.</p>
        <h1 className="type-display mt-4 text-h1 text-strong">
          Page <span className="text-accent">not found</span>
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
