import { Link } from "react-router";
import { Button } from "@/components/Button";

export const NotFoundPage = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
    <div className="max-w-xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold">This page does not exist.</h1>
      <p className="mt-4 text-muted-foreground">
        The project may still be in development, or the address may be incorrect.
      </p>
      <Button as={Link} to="/" className="mt-8">
        Return to portfolio
      </Button>
    </div>
  </main>
);
