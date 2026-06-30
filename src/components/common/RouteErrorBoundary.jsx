import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function RouteErrorBoundary() {
  const error = useRouteError();
  const statusCode = isRouteErrorResponse(error) ? error.status : 500;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : 'The application could not render this route.';

  return (
    <main
      id="main-content"
      className="min-h-screen bg-background px-container-sm py-section-sm text-text-primary md:px-container-md lg:px-container-lg"
      role="alert"
      tabIndex={-1}
    >
      <p className="font-body text-label text-error">
        Error {statusCode}
      </p>
      <h1 className="mt-space-12 max-w-prose font-heading text-heading-l">{message}</h1>
    </main>
  );
}
